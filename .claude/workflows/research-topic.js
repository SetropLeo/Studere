export const meta = {
  name: 'research-topic',
  description: 'Studere stages 0-3, lightweight: one agent at a time, handoffs by file path, one verification pass per batch',
  whenToUse: 'When the user asks to research/study a new topic or expand an existing topic in the library',
  phases: [
    { title: 'Scope', detail: 'request, library path and a few subtopics' },
    { title: 'Sources', detail: 'one researcher per subtopic, sequentially; source notes only' },
    { title: 'Findings', detail: 'one archivist pass, from the source notes' },
    { title: 'Verification', detail: 'one verifier pass for the whole batch' },
    { title: 'Synthesis', detail: 'MOC with Mermaid map, by the archivist' },
  ],
}

// args: { topic, context, goal, level, depth, focus, verification, maxSubtopics, maxSources, today }
// verification: 'strict' (default) | 'light' (user's choice; one good A/B source per concept)
// maxSubtopics: default 3. maxSources per subtopic: default 2 (light) or 3 (strict).
// Budget rule: keep the number of agent calls small. No parallel fan-out.
const {
  topic, context = '', goal = '', level = 'zero', depth = 'broad', focus = '',
  verification = 'strict', maxSubtopics = 3, maxSources, today,
} = args || {}
if (!topic || !today) throw new Error('args needs { topic, today } (today = YYYY-MM-DD)')
const SOURCES_PER = maxSources || (verification === 'light' ? 2 : 3)

const CTX =
  'Topic: ' + topic + '\n' +
  'User context: ' + (context || '(not provided)') + '\n' +
  'Goal: ' + (goal || '(not provided)') + '\n' +
  'Current level: ' + level + '\n' +
  'Depth: ' + depth + '\n' +
  'Focus / gaps to cover: ' + (focus || '(none specific)') + '\n' +
  'Verification mode: ' + verification + '\n' +
  "Today's date: " + today

const SCOPE = {
  type: 'object',
  properties: {
    request: { type: 'string', description: 'path of the request note in 00-Inbox' },
    path: { type: 'string', description: 'topic folder in the library: Library/Domain/Area/Subarea' },
    existing: { type: 'array', items: { type: 'string' }, description: 'paths of existing notes and MOCs on the topic' },
    subtopics: {
      type: 'array',
      items: {
        type: 'object',
        properties: { name: { type: 'string' }, question: { type: 'string' } },
        required: ['name', 'question'],
      },
    },
  },
  required: ['request', 'path', 'subtopics'],
}

const SRC = {
  type: 'object',
  properties: {
    subtopic: { type: 'string' },
    sourceFiles: { type: 'array', items: { type: 'string' }, description: 'paths of the source notes written' },
    gaps: { type: 'array', items: { type: 'string' } },
  },
  required: ['subtopic', 'sourceFiles'],
}

const FIND = {
  type: 'object',
  properties: {
    findingFiles: { type: 'array', items: { type: 'string' }, description: 'paths of the finding notes written or extended' },
    gaps: { type: 'array', items: { type: 'string' } },
  },
  required: ['findingFiles'],
}

const VERDICTS = {
  type: 'object',
  properties: {
    results: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string' },
          verdict: { type: 'string', enum: ['verified', 'fix', 'rejected'] },
          problems: { type: 'array', items: { type: 'string' } },
        },
        required: ['file', 'verdict'],
      },
    },
  },
  required: ['results'],
}

const DONE = {
  type: 'object',
  properties: { files: { type: 'array', items: { type: 'string' } } },
  required: ['files'],
}

// ---------- Stage 0: scope (one agent) ----------
phase('Scope')
const scope = await agent(
  'STAGE 0 (Studere). Scope the request. Keep it short: return paths, not contents.\n\n' + CTX + '\n\n' +
  '1. Search Library/ (Glob/Grep) for existing notes and MOCs on the topic. Reuse existing folders.\n' +
  '2. Define the path Library/Domain/Area/Subarea (as specific as makes sense; no empty categories).\n' +
  '3. Create the request note in 00-Inbox/ from _templates/0-Request/request.md (status: scoped, path, verification, recorded assumptions).\n' +
  '4. List at most ' + maxSubtopics + ' subtopics, each with one guiding question. Skip what the library already covers well; focus on the gap or the focus given.\n' +
  'Return the structured data only.',
  { agentType: 'archivist', schema: SCOPE, label: 'scope', phase: 'Scope' }
)
if (!scope || !scope.subtopics || !scope.subtopics.length) throw new Error('Scope failed: no subtopics')
const subtopics = scope.subtopics.slice(0, maxSubtopics)
log('Path: ' + scope.path + ' | subtopics: ' + subtopics.map(s => s.name).join(', '))

// ---------- Stage 1: sources (one researcher at a time) ----------
phase('Sources')
const sourceFiles = []
const sourceGaps = []
for (const s of subtopics) {
  const r = await agent(
    'STAGE 1 (Studere). Collect up to ' + SOURCES_PER + ' sources for the subtopic "' + s.name + '".\n' +
    'Guiding question: ' + s.question + '\n\n' + CTX + '\n\n' +
    'Write source notes in ' + scope.path + '/_sources/ (template _templates/1-Source/source.md). Read each URL before recording it. ' +
    'Prefer level A; level B only when A is not enough. Never invent author, date, URL or quote.\n' +
    'Return only the paths of the source notes and the gaps. Do not return the text of the notes.',
    { agentType: 'researcher', schema: SRC, phase: 'Sources', label: 'sources: ' + s.name }
  )
  if (r) { sourceFiles.push(...r.sourceFiles); sourceGaps.push(...(r.gaps || [])) }
  else log('Research failed for: ' + s.name)
}
if (!sourceFiles.length) throw new Error('No source was recorded')

// ---------- Stage 2: findings (one archivist pass, reads the source notes by path) ----------
phase('Findings')
const found = await agent(
  'STAGE 2 (Studere). Write the findings from these source notes. Read them from disk; do not expect their text here.\n' +
  'Source notes: ' + JSON.stringify(sourceFiles) + '\n' +
  'Topic folder: ' + scope.path + '\n' + CTX + '\n\n' +
  'Atomic notes (1 concept per note) from _templates/2-Finding/finding.md, status: draft. Search before creating: extend existing notes. ' +
  'Every relevant claim links to its source note. Record divergences. ' +
  (verification === 'light'
    ? 'Light mode: a concept with a single source is recorded as such in "Contradictions and uncertainties", with confidence debated or uncertain.'
    : 'Strict mode: a foundational concept needs two independent sources; if you have one, record it as uncertain.') +
  ' Date ' + today + ' in created, updated and History.\n' +
  'Return only the paths of the finding notes and the gaps.',
  { agentType: 'archivist', schema: FIND, phase: 'Findings', label: 'findings' }
)
if (!found || !found.findingFiles.length) throw new Error('No findings produced')
log(found.findingFiles.length + ' finding notes in draft')

// ---------- Stage 2b: one verification pass for the whole batch ----------
phase('Verification')
const lens = verification === 'light'
  ? 'Lens: ORIGINAL SOURCE. Open each cited source and check that it says what the note claims. Report only real problems.'
  : 'Lenses: ORIGINAL SOURCE (open each cited source and check the claim) and INDEPENDENT EVIDENCE (look for one level A/B source that confirms or refutes each key claim).'
const check = await agent(
  'STAGE 2 — verification of ONE batch (one call only; keep the effort proportional).\n' +
  'Notes: ' + JSON.stringify(found.findingFiles) + '\n' + lens + '\n' +
  'Verdict per note: verified (every key claim confirmed; set status: verified, verified-on ' + today + ', verified-by: verifier, and confidence as the evidence allows), ' +
  'fix (some claim is partial or unverifiable; list it), or rejected (a claim is refuted; list it). ' +
  'You may edit only control fields and History. Return the verdicts.',
  { agentType: 'verifier', schema: VERDICTS, phase: 'Verification', label: 'verify batch' }
)
const verdicts = check ? check.results : []
const approved = verdicts.filter(v => v.verdict === 'verified').map(v => v.file)
const toFix = verdicts.filter(v => v.verdict !== 'verified')
log('Verified: ' + approved.length + ' | to fix or rejected: ' + toFix.length)

if (toFix.length) {
  await agent(
    'STAGE 2 — fixes from the verifier (one pass). For each note: remove or rewrite refuted claims, qualify partial ones, ' +
    'or record "unverified" in Contradictions and uncertainties. Do not invent sources. Update History (' + today + '). ' +
    'Do not change status; the notes stay draft.\n' + JSON.stringify(toFix),
    { agentType: 'archivist', phase: 'Verification', label: 'fixes' }
  )
}
if (!approved.length) throw new Error('No finding was verified; the MOC is not built. See notes in draft.')

// ---------- Stage 3: MOC with Mermaid map (archivist; no separate illustrator) ----------
phase('Synthesis')
const gaps = [].concat(found.gaps || [], sourceGaps, toFix.map(v => 'Still draft: ' + v.file))
const moc = await agent(
  'STAGE 3 (Studere). Create or update the topic MOC in ' + scope.path + ' from _templates/3-Synthesis/moc.md.\n' +
  'Use ONLY these verified findings: ' + JSON.stringify(approved) + '\n' +
  'Known gaps, to list in the MOC: ' + JSON.stringify(gaps) + '\n' +
  'Write the synthesis, a Mermaid map of the real relations between the concepts (quote labels with parentheses), the index, connections to other areas, the main sources and the gaps. ' +
  'State the verification mode (' + verification + ') and list the notes that rest on a single source. ' +
  'Check that every link resolves. Status: draft. Date ' + today + '.\n' +
  'Return the MOC path and the list of links that did not resolve (empty if none).',
  { agentType: 'archivist', schema: DONE, phase: 'Synthesis', label: 'moc' }
)

return {
  path: scope.path,
  request: scope.request,
  verification,
  subtopics: subtopics.map(s => s.name),
  verified_findings: approved,
  draft_findings: toFix.map(v => v.file),
  gaps,
  moc: moc ? moc.files : [],
}
