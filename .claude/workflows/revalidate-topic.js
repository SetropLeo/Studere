export const meta = {
  name: 'revalidate-topic',
  description: 'Studere: compares the notes of a library topic with current information on the internet and reports what remains valid, changed or became outdated',
  whenToUse: 'When the user asks whether what we have on a topic still makes sense, is current, or asks to check the library against the internet',
  phases: [
    { title: 'Inventory', detail: 'list the topic notes and their key claims' },
    { title: 'Check', detail: 'per note: check against current sources and record new sources' },
    { title: 'Report', detail: 'consolidate; update the library only if apply = true' },
  ],
}

// args: { topic, path, apply, today }
// path = topic folder in the library (or a list of folders separated by ;). apply = false by default (report only).
const { topic, path = '', apply = false, today } = args || {}
if (!topic || !today) throw new Error('args needs { topic, today }')

const INV = {
  type: 'object',
  properties: {
    path: { type: 'string' },
    notes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string' },
          title: { type: 'string' },
          reviewBy: { type: 'string' },
          updated: { type: 'string' },
          claims: { type: 'array', items: { type: 'string' }, description: 'verifiable key claims' },
        },
        required: ['file', 'title', 'claims'],
      },
    },
  },
  required: ['notes'],
}

const CONF = {
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
          status: { type: 'string', enum: ['confirmed', 'changed', 'refuted', 'unverifiable'] },
          what_changed: { type: 'string' },
          evidence_url: { type: 'string' },
          source_level: { type: 'string' },
        },
        required: ['claim', 'status'],
      },
    },
    developments: { type: 'array', items: { type: 'string' }, description: 'relevant recent developments the note does not cover' },
  },
  required: ['file', 'state'],
}

const REG = {
  type: 'object',
  properties: {
    sources: { type: 'array', items: { type: 'string' }, description: 'source files created/updated' },
  },
  required: ['sources'],
}

phase('Inventory')
const inv = await agent(
  'REVALIDATION (Studere) — inventory, read-only.\n' +
  'Topic: ' + topic + '\nFolder(s): ' + (path || '(find in Library/ via Grep/Glob)') + "\nToday's date: " + today + '\n\n' +
  'List the finding notes and the MOC of the topic (ignore _sources/). For each note: file, title, review-by, updated and the 3 to 8 verifiable key claims ' +
  '(facts, numbers, versions, behaviors, recommendations). If there are no notes, return an empty list. Do NOT edit anything.',
  { agentType: 'archivist', schema: INV, label: 'inventory', phase: 'Inventory' }
)
if (!inv || !inv.notes || !inv.notes.length) {
  return { empty: true, reason: 'No notes found for the topic in the library.', topic }
}
log(inv.notes.length + ' notes to check')

phase('Check')
const results = await pipeline(
  inv.notes,
  // 1. check against the web
  (_p, n) => agent(
    'REVALIDATION — CURRENCY lens. Note: ' + n.file + ' (review-by: ' + (n.reviewBy || 'not set') + ', updated on ' + (n.updated || '?') + ').\n' +
    'Today is ' + today + '. Key claims:\n' + JSON.stringify(n.claims) + '\n\n' +
    'For each claim, look for the most current material in serious sources: official documentation (current version), scientific papers (incl. reviews and recognized preprints), standards, reference technical blogs. ' +
    'Say whether it is still confirmed, changed, refuted or cannot be verified, with the URL and level (A/B) of the evidence you READ. ' +
    'Also record relevant developments the note does not cover. Overall state: current / partial / outdated / contradicted / inconclusive. ' +
    'Do NOT edit files in this step. Never invent a URL or date.',
    { agentType: 'verifier', schema: CONF, phase: 'Check', label: 'check: ' + n.title }
  ),
  // 2. record new sources (only if there was a change or development with evidence)
  async (c, n) => {
    if (!c) return null
    const urls = (c.changes || []).filter(m => m.evidence_url && m.status !== 'confirmed').map(m => m.evidence_url)
    if (!urls.length || !apply) return { n, c, sources: [] }
    const r = await agent(
      'Record as source notes (_templates/1-Source/source.md, the topic\'s _sources/ folder, status read, accessed ' + today + ') these URLs that support changes to note ' + n.file + '. ' +
      'Open and read each one; discard those that do not open. Reuse existing source notes with the same URL.\n' + JSON.stringify(urls),
      { agentType: 'researcher', schema: REG, phase: 'Check', label: 'new sources: ' + n.title }
    )
    return { n, c, sources: r ? r.sources : [] }
  }
)

const checked = results.filter(Boolean)
const failures = inv.notes.filter((_n, i) => !results[i])
if (failures.length) log('Check failed for: ' + failures.map(n => n.title).join('; '))

phase('Report')
const needUpdate = checked.filter(r => r.c.state !== 'current' && r.c.state !== 'inconclusive')
let update = null
if (apply && needUpdate.length) {
  update = await agent(
    'REVALIDATION — apply updates to the library (Studere). For each note below: fix what changed, keeping the relevant old text in "Contradictions and uncertainties" or in the History with a date (' + today + ') ' +
    'so no knowledge is lost; link the new sources; update `review-by` and `updated`; status goes back to draft. Update the MOC (gaps and notes); course notes that depend on them must only be LISTED in the return, not edited.\n' +
    JSON.stringify(needUpdate.map(r => ({ file: r.n.file, state: r.c.state, changes: r.c.changes, developments: r.c.developments, sources: r.sources }))),
    { agentType: 'archivist', phase: 'Report', label: 'apply updates' }
  )
  // whoever writes does not approve: re-verify what was rewritten
  await parallel(needUpdate.map(r => () => agent(
    'Re-verification after update. Note: ' + r.n.file + '. Check that the new text matches the new sources and that nothing was deleted without a record. ' +
    'If ok, status: verified, verified-on ' + today + '. If not, keep draft and list the problem. Change only frontmatter/History.',
    { agentType: 'verifier', phase: 'Report', label: 're-verify: ' + r.n.title }
  )))
}

return {
  topic,
  applied: !!apply,
  summary: {
    current: checked.filter(r => r.c.state === 'current').map(r => r.n.file),
    partial: checked.filter(r => r.c.state === 'partial').map(r => r.n.file),
    outdated: checked.filter(r => r.c.state === 'outdated').map(r => r.n.file),
    contradicted: checked.filter(r => r.c.state === 'contradicted').map(r => r.n.file),
    inconclusive: checked.filter(r => r.c.state === 'inconclusive').map(r => r.n.file),
    failed: failures.map(n => n.file),
  },
  details: checked.map(r => ({
    file: r.n.file,
    state: r.c.state,
    changes: (r.c.changes || []).filter(m => m.status !== 'confirmed'),
    developments: r.c.developments || [],
  })),
  update,
}
