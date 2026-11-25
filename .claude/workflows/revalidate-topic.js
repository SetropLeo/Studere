export const meta = {
  name: 'revalidate-topic',
  description: 'Studere, lightweight: compares the notes of a library topic with current sources, one agent at a time, and reports what still holds',
  whenToUse: 'When the user asks whether what we have on a topic still makes sense, is current, or asks to check the library against the internet',
  phases: [
    { title: 'Inventory', detail: 'list the topic notes and their key claims (archivist, read-only)' },
    { title: 'Check', detail: 'one verifier pass for up to 8 notes, currency lens' },
    { title: 'Report', detail: 'apply updates only if apply = true (archivist), then one re-check' },
  ],
}

// args: { topic, path, apply, today }
// apply = false by default (report only). Up to 8 notes per run; the rest is listed for a later run.
const { topic, path = '', apply = false, today } = args || {}
if (!topic || !today) throw new Error('args needs { topic, today }')
const MAX_NOTES = 8

const INV = {
  type: 'object',
  properties: {
    notes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string', description: 'path of the note' },
          reviewBy: { type: 'string' },
          updated: { type: 'string' },
          claims: { type: 'array', items: { type: 'string' }, description: '3 to 6 verifiable key claims' },
        },
        required: ['file', 'claims'],
      },
    },
  },
  required: ['notes'],
}

const CHECK = {
  type: 'object',
  properties: {
    results: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string' },
          state: { type: 'string', enum: ['current', 'partial', 'outdated', 'contradicted', 'inconclusive'] },
          changes: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                claim: { type: 'string' },
                what_changed: { type: 'string' },
                evidence_url: { type: 'string' },
                source_level: { type: 'string' },
              },
              required: ['claim'],
            },
          },
          developments: { type: 'array', items: { type: 'string' } },
        },
        required: ['file', 'state'],
      },
    },
  },
  required: ['results'],
}

phase('Inventory')
const inv = await agent(
  'REVALIDATION (Studere) — inventory, read-only. Topic: ' + topic + '. Folder: ' + (path || '(find in Library/ with Grep/Glob)') + '. Today: ' + today + '.\n' +
  'List the finding notes and the MOC of the topic (ignore _sources/). Return at most ' + MAX_NOTES + ' notes, the most central first, with their paths, review-by, updated and 3 to 6 verifiable key claims. Do not edit anything.',
  { agentType: 'archivist', schema: INV, label: 'inventory', phase: 'Inventory' }
)
if (!inv || !inv.notes || !inv.notes.length) {
  return { empty: true, reason: 'No notes found for the topic in the library.', topic }
}
const notes = inv.notes.slice(0, MAX_NOTES)
log(notes.length + ' notes to check')

phase('Check')
const check = await agent(
  'REVALIDATION — CURRENCY lens, one batch. Today: ' + today + '.\n' +
  'Notes and their key claims (read the notes from disk):\n' + JSON.stringify(notes) + '\n\n' +
  'For each claim, look for the current material in serious sources (official documentation of the current version, recent reviews, standards, reference blogs). ' +
  'Say whether it is still confirmed, changed, refuted or unverifiable, with the URL and level of what you read. Record developments the note does not cover. ' +
  'Overall state per note: current / partial / outdated / contradicted / inconclusive. Do NOT edit files. Never invent a URL or date.',
  { agentType: 'verifier', schema: CHECK, phase: 'Check', label: 'currency check' }
)
const results = check ? check.results : []

phase('Report')
const needUpdate = results.filter(r => r.state !== 'current' && r.state !== 'inconclusive')
let update = null
if (apply && needUpdate.length) {
  update = await agent(
    'REVALIDATION — apply updates (Studere). For each note below: fix what changed; keep the old text that was relevant in "Contradictions and uncertainties" or in History with date ' + today + ' so no knowledge is lost; ' +
    'link the new sources; update review-by and updated; status goes back to draft. Update the MOC for gaps. Course notes that depend on them are only listed in the return, not edited.\n' +
    JSON.stringify(needUpdate),
    { agentType: 'archivist', label: 'apply updates', phase: 'Report' }
  )
  // one re-check for everything rewritten (whoever writes does not approve)
  await agent(
    'Re-check after update (one batch). Notes: ' + JSON.stringify(needUpdate.map(r => r.file)) + '. ' +
    'Check that the new text matches the new sources and that nothing was deleted without a record. If ok, status: verified, verified-on ' + today + '. Otherwise keep draft and list the problem. Change only control fields and History.',
    { agentType: 'verifier', label: 're-check', phase: 'Report' }
  )
}

const by = s => results.filter(r => r.state === s).map(r => r.file)
return {
  topic,
  applied: !!apply,
  checked: notes.length,
  notChecked: inv.notes.length > MAX_NOTES ? inv.notes.slice(MAX_NOTES).map(n => n.file) : [],
  summary: {
    current: by('current'),
    partial: by('partial'),
    outdated: by('outdated'),
    contradicted: by('contradicted'),
    inconclusive: by('inconclusive'),
  },
  details: results.filter(r => r.state !== 'current').map(r => ({ file: r.file, state: r.state, changes: r.changes || [], developments: r.developments || [] })),
  update,
}
