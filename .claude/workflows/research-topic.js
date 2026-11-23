export const meta = {
  name: 'research-topic',
  description: 'Studere stages 0-3: scopes the topic, collects sources, writes findings, verifies adversarially and builds the MOC',
  whenToUse: 'When the user asks to research/study a new topic or expand an existing topic in the library',
  phases: [
    { title: 'Scope', detail: 'request, library path and subtopics' },
    { title: 'Sources', detail: 'one researcher per subtopic, in parallel' },
    { title: 'Findings', detail: 'atomic notes without duplicating the library' },
    { title: 'Verification', detail: 'two independent verifiers per note, 1 round of fixes' },
    { title: 'Synthesis', detail: 'MOC, visuals and final audit' },
  ],
}

// args: { topic, context, goal, level, depth, focus, today }  (today = YYYY-MM-DD)
// depth: 'broad' (wide overview) | 'specific' (go deep on focus). focus: what to deepen / gaps to cover.
const { topic, context = '', goal = '', level = 'zero', depth = 'broad', focus = '', today } = args || {}
if (!topic || !today) throw new Error('args needs { topic, today } (today = YYYY-MM-DD)')

const CTX =
  'Topic: ' + topic + '\n' +
  'User context: ' + (context || '(not provided)') + '\n' +
  'Goal: ' + (goal || '(not provided)') + '\n' +
  'Current level: ' + level + '\n' +
  'Requested depth: ' + depth + '\n' +
  'Focus / gaps to cover: ' + (focus || '(none specific)') + '\n' +
  "Today's date: " + today

const SCOPE = {
  type: 'object',
  properties: {
    request: { type: 'string', description: 'path of the request created in 00-Inbox' },
    path: { type: 'string', description: 'folder in the library: Library/Domain/Area/Subarea' },
    existing: { type: 'array', items: { type: 'string' }, description: 'relevant notes that already exist' },
    assumptions: { type: 'array', items: { type: 'string' } },
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
    sources: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string' },
          level: { type: 'string' },
          url: { type: 'string' },
          supports: { type: 'array', items: { type: 'string' } },
        },
        required: ['file', 'level', 'url'],
      },
    },
    divergences: { type: 'array', items: { type: 'string' } },
    gaps: { type: 'array', items: { type: 'string' } },
  },
  required: ['subtopic', 'sources'],
}

const FIND = {
  type: 'object',
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string' },
          title: { type: 'string' },
          isNew: { type: 'boolean' },
          confidence: { type: 'string' },
        },
        required: ['file', 'title'],
      },
    },
    cross_links: { type: 'array', items: { type: 'string' } },
    gaps: { type: 'array', items: { type: 'string' } },
  },
  required: ['findings'],
}

const VERDICT = {
  type: 'object',
  properties: {
    file: { type: 'string' },
    verdict: { type: 'string', enum: ['ok', 'fix', 'rejected'] },
    problems: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          claim: { type: 'string' },
          verdict: { type: 'string', enum: ['confirmed', 'partial', 'refuted', 'unverifiable'] },
          evidence: { type: 'string' },
          fix: { type: 'string' },
        },
        required: ['claim', 'verdict'],
      },
    },
  },
  required: ['file', 'verdict'],
}

const STATUS = {
  type: 'object',
  properties: { updated: { type: 'array', items: { type: 'string' } } },
  required: ['updated'],
}

const AUDIT = {
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    problems: { type: 'array', items: { type: 'string' } },
  },
  required: ['ok'],
}

// ---------- Stage 0: scope ----------
phase('Scope')
const scope = await agent(
  'STAGE 0 (Studere). Scope the request.\n\n' + CTX + '\n\n' +
  '1. Search Library/ (Glob/Grep) for existing notes and MOCs on the topic and neighboring topics. Reuse existing folders.\n' +
  '2. Define the path in Library/Domain/Area/Subarea (as specific as makes sense; do not create empty categories).\n' +
  '3. Create the request in 00-Inbox/ using _templates/0-Request/request.md (status: scoped, path, recorded assumptions).\n' +
  '4. List 3 to 8 subtopics, each with a guiding question. If depth = broad: cover what it is, base concepts, how it works and practical applications, respecting the user\'s current level (starting from the fundamentals if zero). ' +
  'If depth = specific or there is a focus: concentrate the subtopics on the focus, including the prerequisites the library does not have yet. Do not repeat what the library already covers well; focus on gaps and extensions.\n' +
  'Return the structured data.',
  { agentType: 'archivist', schema: SCOPE, label: 'scope', phase: 'Scope' }
)
if (!scope || !scope.subtopics || !scope.subtopics.length) throw new Error('Scope failed: no subtopics')

let subtopics = scope.subtopics
if (subtopics.length > 8) {
  log('Subtopics limited to 8 (dropped ' + (subtopics.length - 8) + '): ' + subtopics.slice(8).map(s => s.name).join('; '))
  subtopics = subtopics.slice(0, 8)
}
log('Path: ' + scope.path + ' | subtopics: ' + subtopics.map(s => s.name).join(', '))

// ---------- Stage 1: sources ----------
phase('Sources')
const rawSources = await parallel(subtopics.map(s => () =>
  agent(
    'STAGE 1 (Studere). Collect sources on the subtopic "' + s.name + '".\n' +
    'Guiding question: ' + s.question + '\n\n' + CTX + '\n\n' +
    'Topic folder: ' + scope.path + ' (source notes in ' + scope.path + '/_sources/).\n' +
    'Existing notes that may already cover part of this: ' + JSON.stringify(scope.existing || []) + '\n' +
    'Follow your role rules: ≥3 sources, ≥2 independent level A/B, read each URL, nothing invented.',
    { agentType: 'researcher', schema: SRC, phase: 'Sources', label: 'sources: ' + s.name }
  )
))
const research = rawSources.filter(Boolean)
if (research.length < subtopics.length) {
  const ok = new Set(research.map(p => p.subtopic))
  log('Research failed for: ' + subtopics.filter(s => !ok.has(s.name)).map(s => s.name).join('; '))
}
if (!research.length) throw new Error('No subtopic was researched')

// ---------- Stage 2: findings (barrier: dedupe across subtopics) ----------
phase('Findings')
const found = await agent(
  'STAGE 2 (Studere). Write the findings for the topic.\n\n' + CTX + '\n\n' +
  'Topic folder: ' + scope.path + '\n' +
  'Source research result (JSON):\n' + JSON.stringify(research) + '\n\n' +
  'Create atomic notes (1 concept per note) with _templates/2-Finding/finding.md, status: draft. ' +
  'Search before creating: if the concept already exists in the library, extend the existing note. Link with [[links]], including to other areas. ' +
  'Every relevant claim links to a source note. Record divergences. Use the date ' + today + ' in created/updated/history.',
  { agentType: 'archivist', schema: FIND, phase: 'Findings', label: 'findings' }
)
if (!found || !found.findings || !found.findings.length) throw new Error('No findings produced')
log(found.findings.length + ' finding notes (' + found.findings.filter(a => a.isNew).length + ' new)')

// ---------- Stage 2b: adversarial verification ----------
phase('Verification')
const LENSES = [
  {
    k: 'original-source',
    p: 'ORIGINAL SOURCE lens: reopen each source cited in the note (WebFetch) and check that it really says what the note claims. Look for exaggeration, overgeneralization, out-of-context excerpts, outdated data.',
  },
  {
    k: 'independent-evidence',
    p: 'INDEPENDENT EVIDENCE lens: ignore the note\'s sources and look, on your own, for level A/B sources that confirm or contradict each key claim. A foundational concept with a single source does not pass.',
  },
]

async function verify(findings, round) {
  const tasks = findings.flatMap(a => LENSES.map(l => () =>
    agent(
      'STAGE 2 — adversarial verification (round ' + round + ').\n' +
      'Note: ' + a.file + '\n' + l.p + '\n' +
      'Try to REFUTE. When in doubt, fail it. Do NOT edit files in this round; just return the verdict: ' +
      'ok (nothing to fix), fix (some claims are partial or unverifiable), rejected (some claim is refuted).',
      { agentType: 'verifier', schema: VERDICT, phase: 'Verification', label: l.k + ': ' + a.title }
    )
  ))
  const res = await parallel(tasks)
  return findings.map((a, i) => {
    const vs = LENSES.map((_, j) => res[i * LENSES.length + j])
    const problems = vs.filter(Boolean).flatMap(v => (v.problems || []).filter(p => p.verdict !== 'confirmed'))
    let state = 'ok'
    if (vs.some(v => !v)) state = 'fix' // verifier failed: be conservative
    if (vs.some(v => v && v.verdict === 'fix')) state = 'fix'
    if (vs.some(v => v && v.verdict === 'rejected')) state = 'rejected'
    return { a, state, problems }
  })
}

let round1 = await verify(found.findings, 1)
const approved = round1.filter(r => r.state === 'ok').map(r => r.a)
const failures = round1.filter(r => r.state !== 'ok')
log('Round 1: ' + approved.length + ' ok, ' + failures.length + ' to fix')

if (failures.length) {
  await agent(
    'STAGE 2 — fixes (Studere). The verifiers pointed out problems. Fix each note: ' +
    'remove or rewrite refuted claims, qualify the partial ones, cite an independent source when the verifier brought one, ' +
    'or record "unverified" in Contradictions and uncertainties. Do not invent sources. Update History (' + today + ').\n\n' +
    JSON.stringify(failures.map(f => ({ file: f.a.file, problems: f.problems }))),
    { agentType: 'archivist', phase: 'Verification', label: 'fixes' }
  )
  const round2 = await verify(failures.map(f => f.a), 2)
  round2.filter(r => r.state === 'ok').forEach(r => approved.push(r.a))
  const stillFailing = round2.filter(r => r.state !== 'ok')
  if (stillFailing.length) {
    log('Remaining in draft: ' + stillFailing.map(r => r.a.title).join('; '))
  }
  var pending = stillFailing
} else {
  var pending = []
}

if (approved.length) {
  const st = await agent(
    'STAGE 2 — record approval. In the notes below, update ONLY the frontmatter and History: ' +
    'status: verified, verified-on: ' + today + ', verified-by: verifier. ' +
    'Adjust confidence (established/debated/uncertain) according to what you saw in the verifications.\n' +
    JSON.stringify(approved.map(a => a.file)),
    { agentType: 'verifier', schema: STATUS, phase: 'Verification', label: 'record status' }
  )
  log('Marked as verified: ' + (st ? st.updated.length : 0))
}
if (!approved.length) throw new Error('No finding passed verification; MOC will not be created. See notes in draft.')

// ---------- Stage 3: synthesis ----------
phase('Synthesis')
const gaps = []
  .concat(found.gaps || [])
  .concat(research.flatMap(p => p.gaps || []))
  .concat(pending.map(r => 'Note in draft (did not pass verification): ' + r.a.title))
const moc = await agent(
  'STAGE 3 (Studere). Create or update the topic MOC in ' + scope.path + ' using _templates/3-Synthesis/moc.md.\n' +
  'Use ONLY verified findings:\n' + JSON.stringify(approved.map(a => a.file)) + '\n' +
  'Known gaps (list them in the MOC): ' + JSON.stringify(gaps) + '\n' +
  'Fill in synthesis, Mermaid map, index by section, connections to other areas (cross-links: ' +
  JSON.stringify(found.cross_links || []) + '), main sources. If a parent MOC exists, add the link. Date ' + today + '. status: draft.',
  { agentType: 'archivist', phase: 'Synthesis', label: 'moc' }
)
await agent(
  'Visuals (Studere). Read the MOC in ' + scope.path + ' and the central notes of the topic. ' +
  'Improve the MOC\'s Mermaid map to reflect the real relations between concepts, and create 1 to 3 diagrams that explain the MECHANISM of the hardest concepts, inserting them in the corresponding notes with a caption. ' +
  'Topic notes: ' + JSON.stringify(approved.map(a => a.file)),
  { agentType: 'illustrator', phase: 'Synthesis', label: 'visuals' }
)
const audit = await agent(
  'STAGE 3 — final audit. Check in the topic at ' + scope.path + ':\n' +
  '- all [[links]] in the notes and the MOC resolve to existing files;\n' +
  '- every note of the topic appears in the MOC; frontmatter complete per the template;\n' +
  '- no "draft" note is cited as a base in the MOC;\n' +
  '- Mermaid diagrams have valid syntax and a caption.\n' +
  'If everything is ok: in the MOC, status: reviewed (update History, ' + today + '). If not: do not change the status and list problems. Do NOT rewrite content.',
  { agentType: 'verifier', schema: AUDIT, phase: 'Synthesis', label: 'audit' }
)

return {
  path: scope.path,
  request: scope.request,
  subtopics: subtopics.map(s => s.name),
  verified_findings: approved.map(a => a.file),
  pending_findings: pending.map(r => r.a.file),
  gaps,
  audit,
}
