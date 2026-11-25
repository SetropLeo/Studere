# Studere

Study workspace and Obsidian vault (open this folder as a vault). It gathers researched facts into a single, living, interlinked library, and condenses the library into practical courses.

Language: Brazilian Portuguese for talking to the user and for everything written in `Courses/` (courses are in Portuguese). The library notes in `Library/` are in English and stay in English. In courses, technical terms keep the English name in parentheses on first use, always with a gloss in Portuguese. Quote the original when a source is in another language.

**The user does not call commands.** They talk; you identify the intent, use the routing below, and execute. Agents, skills and workflows in this project are pre-authorized: run them without asking for confirmation.

## Working rules

- **Subagents run one at a time**, never in parallel batches.
- **Keep it light (token economy).** The default is the smallest process that answers the request:
  - The main conversation does the interview, the course writing, the library queries and the reports. Reading a few notes here is cheaper than starting an agent.
  - Delegate only the heavy, isolated work: reading sources (`researcher`), writing findings and the MOC (`archivist`), and one verification pass per batch (`verifier`).
  - Hand off **file paths**, never note contents or JSON dumps between agents. Each agent reads what it needs from disk.
  - Budget per research request: at most 3 subtopics, 2 sources per subtopic in `light` mode (3 in `strict`), one archivist pass, one verifier pass, one MOC. No re-verification loops.
  - Large outputs (courses, long notes) go to files, not into the conversation.
- **Routine decisions are made, not asked.** Name the choice in the final message ("notas de entrega"). Ask only about scope or direction, or when the task depends on something only the user has.
- **Commits:** only when the user asks. If the current branch is the default one, create a branch first. Add the co-author line `Co-Authored-By: Claude Haiku 5.5 <noreply@anthropic.com>`. Do not push unless asked.
- **Obsidian state is not content:** `.obsidian/workspace.json` is never committed.
- **File names have no colon** (Windows). Titles may have colons inside the H1, not in the file name. Wikilinks must match the file name.

---

# ROUTER

Identify the intent of the request and follow the route. When torn between two, ask in one line.

## Route A — Study / learn / create a course (new topic, or go deeper on an existing one)

Triggers: "I want to study/learn/understand X", "teach me X", "I want a course on X", "I want to go deeper on X", "I need to know X for Y".

1. **Interview:** load the `study-interview` skill. Check the library, ask the missing questions (level, broad vs specific, goal/practice, outcome, verification mode) in **one** round.
2. **Research (library):** run the `research-topic` workflow (stages 0–3). It runs one agent at a time, with the budget in "Working rules". Pass `verification` (`strict` by default; `light` only when the user chose it; see "Truthfulness rules").
   `Workflow({ name: "research-topic", args: { topic, context, goal, level, depth, focus, verification, maxSubtopics, maxSources, today } })`
3. **Course** (skip only if the user asked for research alone): build the course directly in the conversation, following the section "Courses". There is no course-generation workflow.
4. **Gaps:** if a concept central to a module is missing from the library, stop before writing that module, tell the user what is missing, and offer to research it (back to step 2 with `focus` = the gap). Gaps that are secondary are left out of the module and named in the delivery notes.
5. **Report** in a few lines: what went into the library (path, verified vs pending, gaps), the course (folder, modules, index `00 - Comece aqui`), and the delivery notes.

If the topic already exists in the library and the user only wants the course, skip step 2 (confirm that the MOC is `reviewed`; otherwise research first). If they want to go deeper, run step 2 with `depth: specific` and `focus`.

## Route B — Query the knowledge base ("search our base", "what do we have on X", "what do we know about X")

Load the `query-library` skill. It answers **from the library only, with no internet**, with links, confidence, validity and gaps. If there is nothing, offer Route A. If the material is expired or in draft, offer Route C.

## Route C — Revalidate ("does it still hold?", "is it up to date?", "check it against the internet")

1. Locate the topic in the library (Grep/Glob) and identify the folder (`path`).
2. Run `Workflow({ name: "revalidate-topic", args: { topic, path, apply: false, today } })`.
3. Present the report: per note, `current` / `partial` / `outdated` / `contradicted` / `inconclusive`, what changed (with source and level) and new developments the library does not cover. Highlight courses that depend on affected notes (Grep for `[[Note]]`).
4. If there are changes, ask **once** whether to update the library. If yes, run again with `apply: true` (old knowledge is preserved in the history, and the `verifier` re-verifies what was rewritten).

## Route D — Library health ("any broken links?", "organize/clean the base", "what is expired?")

Load the `audit-library` skill. It produces a report; fix only what the user approves.

## Route E — Targeted edit (fix a note, move/rename, adjust a module)

Do it directly, respecting the library rules below. If the edit changes facts in the library, pass it through the `verifier` before marking `verified`. Editing a course module does not need the verifier; it needs the module checks in "Courses".

## Route F — Outside Studere's scope

Answer normally.

---

# Who does what

Golden rule: **agent** = isolated, heavy work with its own tools; **skill** = protocol that runs in the main conversation (needs the user or the final presentation); **workflow** = deterministic orchestration of several agents. Do not duplicate roles.

| Type | Name | Role |
|------|------|------|
| Agent | `researcher` | reads and records sources, one subtopic per call (stage 1) |
| Agent | `archivist` | writes findings, the MOC and its Mermaid map; links and history (stages 0, 2, 3) |
| Agent | `verifier` | one verification pass per batch of notes; currency checks. The only one that approves library notes |
| Agent | `archivist` | also draws the MOC Mermaid map (the illustrator agent was removed) |
| Skill | `study-interview` | interview the user (main conversation) |
| Skill | `query-library` | read the library and answer (main conversation) |
| Skill | `audit-library` | integrity check and report (main conversation) |
| Workflow | `research-topic` | stages 0 to 3, sequential, budgeted |
| Workflow | `revalidate-topic` | compares up to 8 notes with current sources, one batch |

Research and writing of library content are delegated to the agents above. The main conversation interviews, routes, queries, writes courses and reports.

---

# Stages (details and gates in `_rules/stages.md`)

| # | Stage | Layer | Template | Owner |
|---|-------|-------|----------|-------|
| 0 | Request | — | `_templates/0-Request/` | archivist |
| 1 | Sources | `source` | `_templates/1-Source/` | `researcher` |
| 2 | Findings | `finding` | `_templates/2-Finding/` | `archivist` + `verifier` (one batch pass) |
| 3 | Synthesis | `synthesis` | `_templates/3-Synthesis/` | `archivist` (MOC with Mermaid map) |
| 4 | Course | `course` | format in "Courses" (no status field) | main conversation |

Always hold: **no skipping stages**; **whoever writes does not approve**; status only advances with evidence; a gap goes back to the previous stage; every change goes into `## History`.

---

# Living library rules

- **Two axes:** thematic = tree `Library/<Domain>/<Area>/<Subarea>/` (grows with requests; no empty categories; pick the most specific place; reuse folders). Maturity = `layer` + `status` in the frontmatter.
- **Search before creating.** If the concept exists, extend and update it; create a new note only if it does not exist.
- **Atomic note:** one concept per note; name = the concept, in English, no date prefix.
- **Links:** `[[wikilinks]]` between notes, including across different areas. Every cited concept that has a note is linked.
- **MOC per topic:** `_MOC <Topic>.md` (synthesis, index, gaps, next steps), updated on every addition. The MOC states the verification mode used and lists the notes that rest on a single source.
- **Raw sources:** `_sources/` in the subarea, one note per source.
- **History:** `## History` at the end of every note, `- YYYY-MM-DD: what changed`; update `updated`.
- **Never delete knowledge without recording** the reason in the history.

# Truthfulness rules

- **Sources (accepted, in order of weight):**
  - Level A: official documentation and specifications, scientific papers (peer-reviewed, systematic reviews, surveys), textbooks, standards, official bodies.
  - Level B: reference technical blogs (companies, researchers, recognized engineers), university course material, expert talks, preprints from recognized groups (marked as preprint).
  - Level C: forums, generic Medium, videos, social media. Only as a lead; never the basis of a claim.
- Every relevant claim has a source and an access date. Open and read the URL before citing.
- `confidence`: `established` | `debated` | `uncertain`. Contradictions between sources are recorded.
- Fast-changing topics (software, AI, regulation) get `review-by` (a review date).
- No source, no entry. Mark `unverified` instead of making things up. Never fabricate quotes, URLs or numbers.

**Verification modes.** Each research request declares `verification` in its request note:

- **`strict` (default):** a foundational concept needs 2 or more independent level A/B sources, and the verifiers must confirm it.
- **`light`:** one good level A or B source is enough for a concept. The note records the single source, and its `confidence` is `debated` or `uncertain`. The MOC lists these notes. Used by user decision for the Computer Science library (2026-11-23). Never chosen on Claude's own initiative.

In both modes the rules above still hold: no source, no entry; nothing is invented; levels C are never the basis of a claim.

---

# Courses

Courses live in `Courses/Curso - <Nome em português>/`. They **do not copy** the library: they link to it and write only what is specific. **No fact outside the library.**

## Files

- `00 - Comece aqui.md`: index. Presentation, how to study, module map with links grouped by block, and the first module to open.
- `NN - Título.md`: one file per module, two-digit number, title in Portuguese, no colon.
- Frontmatter of each module: `título`, `módulo`, `tempo`, `notas-base` (wikilinks). No `status`, `confidence` or `History` fields. Courses have no status; the library's MOC status is the gate.

## Module structure (in this order)

0. **Header:** title, time (about 30 min), "Ao final você vai conseguir" with 3 objectives that start with action verbs, "Antes de começar" with a short reminder and links to earlier modules.
1. **Para começar:** a real problem or question, at most ~120 words, and why it matters.
2. **Mapa do módulo:** one Mermaid diagram with a caption in italics and a "Como ler" line.
3. **Mini-aulas (2 to 4).** Each one, in order:
   - `> [!tip] Ideia`: one sentence.
   - Intuition or analogy, when there is one. Say that it is an analogy.
   - `> [!info] Definição`: precise and short. Technical terms in English in parentheses on first use.
   - Example, with code and real output when it fits.
   - `> [!warning] Armadilha comum`.
   - `> [!question]- Checkpoint`: one or two questions, with the answer in a nested `> [!success]-`.
4. **Exercícios (7):** 3 of warm-up, 3 of practice, 1 challenge. Each one has:
   - the statement, in Portuguese, naming the function to complete;
   - starter code: the function body replaced by `...`, followed by `assert` lines with clear messages and `print("Passou!")`;
   - two hints in `> [!hint]-`;
   - the solution in `> [!example]-`, showing only the target function, followed by the **erro comum**.
5. **Mini-projeto (opcional):** objective in one sentence, starter with tests, hints, common mistake and solution. Uses earlier functions.
6. **Fechando:** summary (5 to 8 points), quick glossary, 3 review questions, "E agora?" with the next module and why.
7. **Para ir mais fundo:** only wikilinks to base notes. No confidence warnings.

## Writing rules

- One idea at a time. No term before it is explained. Paragraphs of at most 4 lines. A block over ~250 words needs an example, a figure or a question.
- Analogies are labelled as analogies. Analogies do not state new facts about the area.
- Show before asking: a worked example before the exercises.
- Code: standard library only, short, comments in Portuguese. Every code block is run and the output shown is the real output.
- A central concept missing from the library: stop and warn the user before writing that module. A secondary one: leave it out, and name it in the delivery notes.
- Mermaid labels with parentheses, slashes or symbols go in quotes. Every figure has a caption and a "Como ler" line.

## Verifying a module before delivery

- Every exercise runs twice: with the starter, the asserts must fail with `AssertionError`; with the solution, the program must print `Passou!`.
- If the starter returns `None`, any test that uses the result must first check `assert f(...) is not None`. Otherwise the failure is a `TypeError`.
- Lists are tested empty. The target function's body has no blank lines.
- Every `[[link]]` resolves; no `{{...}}` placeholder remains; the index lists the module.
- The module reads in about 30 minutes and works without other modules.

## Delivery notes (in the chat message, never inside the module)

- Sources and confidence of the notes used (`established`, `debated`, `uncertain`).
- Concepts the library does not cover, per area, and the decision taken (left out, or warned about).
- Design decisions: modules omitted, optional mini-projects omitted, didactic models used.
- What was not verified: for example, diagrams not rendered in Obsidian.

# Visual resources

- **In courses:** Mermaid inside the module, with a caption and "Como ler". No SVG unless Mermaid cannot show the mechanism.
- **In the library:** Mermaid in the MOC and in notes; SVG in `Assets/<topic>/` with `![[file.svg]]` when Mermaid cannot do it. Every diagram shows the real mechanism, with an italic caption.

# Structure

```
00-Inbox/         requests (stage 0)
Library/          thematic tree (the single living library)
Courses/          courses, one folder per course: "Curso - <Nome>/"
Assets/           SVG and images
_templates/       0-Request, 1-Source, 2-Finding, 3-Synthesis; 4-Course (course module and index models)
_rules/           stages.md (library stages and gates)
.claude/          agents/, skills/, workflows/ (the illustrator and course-author agents and the generate-course workflow were removed)
```
