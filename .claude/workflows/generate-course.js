export const meta = {
  name: 'generate-course',
  description: 'Studere stage 4: turns a library topic into a practical course (theory then practice), with visuals and independent review',
  whenToUse: 'Only when the user asks for a course on a topic that already has a reviewed MOC in the library',
  phases: [
    { title: 'Plan', detail: 'module track and library gap check' },
    { title: 'Modules', detail: 'write, illustrate and review each module in a pipeline' },
    { title: 'Wrap-up', detail: 'overview and final review' },
  ],
}

// args: { topic, path, name, startLevel, targetLevel, focus, practicePreference, today }
// path = topic folder in the library (where the MOC is)
const { topic, path, name, startLevel = 'zero', targetLevel = 'basic to advanced', focus = '', practicePreference = '', today } = args || {}
if (!topic || !path || !today) throw new Error('args needs { topic, path, today }')
const NAME = name || topic
const FOLDER = 'Courses/Course - ' + NAME

const CTX =
  'Topic: ' + topic + '\n' +
  'Topic folder in the library: ' + path + '\n' +
  'Course: ' + NAME + ' (folder ' + FOLDER + ')\n' +
  'Learner starting point: ' + startLevel + ' (start the track there; do not repeat what they already master, but include the missing prerequisites)\n' +
  'Target level: ' + targetLevel + '\n' +
  'Learner focus: ' + (focus || '(overview of the topic)') + '\n' +
  'Practice preference: ' + (practicePreference || 'choose the format best suited to the topic') + '\n' +
  "Today's date: " + today

const PLAN = {
  type: 'object',
  properties: {
    moc_ok: { type: 'boolean', description: 'MOC exists and is reviewed' },
    modules: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          number: { type: 'number' },
          title: { type: 'string' },
          level: { type: 'string', enum: ['basic', 'intermediate', 'advanced'] },
          objectives: { type: 'array', items: { type: 'string' } },
          baseNotes: { type: 'array', items: { type: 'string' } },
          practice: { type: 'string', description: 'idea for the module practice' },
        },
        required: ['number', 'title', 'level', 'objectives', 'baseNotes'],
      },
    },
    gaps: {
      type: 'array',
      items: {
        type: 'object',
        properties: { concept: { type: 'string' }, critical: { type: 'boolean' } },
        required: ['concept', 'critical'],
      },
    },
  },
  required: ['moc_ok', 'modules'],
}

const MOD = {
  type: 'object',
  properties: {
    file: { type: 'string' },
    baseNotes: { type: 'array', items: { type: 'string' } },
    gaps: { type: 'array', items: { type: 'string' } },
  },
  required: ['file'],
}

const REV = {
  type: 'object',
  properties: {
    file: { type: 'string' },
    verdict: { type: 'string', enum: ['ok', 'fix', 'rejected'] },
    problems: { type: 'array', items: { type: 'string' } },
  },
  required: ['file', 'verdict'],
}

// ---------- Plan ----------
phase('Plan')
const plan = await agent(
  'STAGE 4 — plan the course (Studere).\n\n' + CTX + '\n\n' +
  'Read the MOC and every note of the topic in ' + path + ' (and related links in other areas). ' +
  'Required input: MOC with status reviewed. If it is not, return moc_ok: false.\n' +
  'Build the track from basic to advanced in modules (ideally 4 to 10), each with objectives, the library notes that support it (baseNotes, file paths) and the practice idea. ' +
  'Each module must be writable ONLY with what is in the library. List in gaps every important concept the library does not cover (critical: true if it blocks a central module).',
  { agentType: 'course-author', schema: PLAN, label: 'plan', phase: 'Plan' }
)
if (!plan) throw new Error('Plan failed')
if (!plan.moc_ok) {
  return { stopped: true, reason: "The topic's MOC is not reviewed. Run the research first.", path }
}
const critical = (plan.gaps || []).filter(g => g.critical)
if (critical.length) {
  log('Critical gaps in the library: ' + critical.map(g => g.concept).join('; '))
  return {
    stopped: true,
    reason: 'The library does not cover critical concepts. Research first (back to stage 1) and run again.',
    gaps: plan.gaps,
  }
}
log('Track: ' + plan.modules.map(m => m.number + '. ' + m.title).join(' | '))

// ---------- Modules (pipeline per module) ----------
phase('Modules')
const modules = plan.modules
const results = await pipeline(
  modules,
  // 1. write
  (_prev, m) => agent(
    'STAGE 4 — write module ' + m.number + ' "' + m.title + '" of the course.\n\n' + CTX + '\n\n' +
    'Plan for this module: ' + JSON.stringify(m) + '\n' +
    'Full track (to reference earlier/later modules): ' + JSON.stringify(modules.map(x => ({ number: x.number, title: x.title, level: x.level }))) + '\n\n' +
    'Create ' + FOLDER + '/' + String(m.number).padStart(2, '0') + ' - ' + m.title + '.md with _templates/4-Course/module.md. ' +
    'Complete theory first (technical terms glossed), practice after. No fact outside the library; list the notes used in base-notes. ' +
    'Concrete practice: guided example, exercises at the 3 levels, mini-project, answer key, check. status: written. Date ' + today + '.',
    { agentType: 'course-author', schema: MOD, phase: 'Modules', label: 'write ' + m.number + ': ' + m.title }
  ),
  // 2. visuals
  (r, m) => r && agent(
    'Visuals (Studere). Read module ' + r.file + ' and the base notes. Create 2 to 4 visuals that explain the mechanism of the central concepts of the theory (Mermaid or SVG in Assets/), ' +
    'insert them in the "Visuals" section with a caption. Do not add facts that are not in the theory/library.',
    { agentType: 'illustrator', phase: 'Modules', label: 'visuals ' + m.number }
  ).then(() => r),
  // 3. independent review (+ 1 round of fixes)
  async (r, m) => {
    if (!r) return null
    const review = (tag) => agent(
      'STAGE 4 — independent review of module ' + r.file + ' (' + tag + ').\n' +
      'Check: (a) every claim in the theory is in the library base notes (fact outside the library = rejected); ' +
      '(b) technical terms glossed on first occurrence; (c) theory before practice; ' +
      '(d) exercises solvable only with the theory of the modules up to this one, coherent answer key; executable code: check that it runs/is correct; ' +
      '(e) visuals correct and captioned.\n' +
      'If ok: status: reviewed, reviewed-by: verifier, update History (' + today + '). Otherwise: do NOT change status and list objective problems.',
      { agentType: 'verifier', schema: REV, phase: 'Modules', label: 'review ' + m.number + ' ' + tag }
    )
    let rev = await review('round 1')
    if (rev && rev.verdict !== 'ok') {
      await agent(
        'STAGE 4 — fix module ' + r.file + ' according to the review:\n' + JSON.stringify(rev.problems || []) +
        '\nFix without introducing facts outside the library. If a concept is missing from the library, record it in gaps instead of inventing. Update History (' + today + ').',
        { agentType: 'course-author', schema: MOD, phase: 'Modules', label: 'fix ' + m.number }
      )
      rev = await review('round 2')
    }
    return { module: m, file: r.file, gaps: r.gaps || [], review: rev }
  }
)

const done = results.filter(Boolean)
const failed = modules.filter((m, i) => !results[i])
if (failed.length) log('Modules that failed generation: ' + failed.map(m => m.title).join('; '))
const rejected = done.filter(p => !p.review || p.review.verdict !== 'ok')
if (rejected.length) log('Modules not approved in review: ' + rejected.map(p => p.module.title).join('; '))

// ---------- Wrap-up ----------
phase('Wrap-up')
if (!done.length) throw new Error('No module was generated')
const overview = await agent(
  'STAGE 4 — course overview (Studere).\n\n' + CTX + '\n\n' +
  'Create ' + FOLDER + '/00-Overview.md with _templates/4-Course/course-overview.md: who it is for, what they will be able to do, prerequisites, track (table and Mermaid diagram) linking each module, how to study, general glossary and library base. ' +
  'Existing modules: ' + JSON.stringify(done.map(p => ({ file: p.file, title: p.module.title, level: p.module.level, status: p.review ? p.review.verdict : 'no-review' }))) + '\n' +
  'status: written. Date ' + today + '.',
  { agentType: 'course-author', phase: 'Wrap-up', label: 'overview' }
)
const final = await agent(
  'STAGE 4 — final review of the course in ' + FOLDER + '. Check: links between modules and to the library resolve; the track in the overview matches the files; prerequisites and difficulty order are coherent; no module repeats another without purpose. ' +
  'If everything is ok AND all modules are reviewed, mark the overview as status: reviewed (History, ' + today + '). Do not rewrite content; list problems.',
  {
    agentType: 'verifier',
    schema: { type: 'object', properties: { ok: { type: 'boolean' }, problems: { type: 'array', items: { type: 'string' } } }, required: ['ok'] },
    phase: 'Wrap-up',
    label: 'final review',
  }
)

return {
  folder: FOLDER,
  modules: done.map(p => ({ file: p.file, verdict: p.review ? p.review.verdict : null, gaps: p.gaps })),
  rejected: rejected.map(p => p.file),
  failed: failed.map(m => m.title),
  final_review: final,
}
