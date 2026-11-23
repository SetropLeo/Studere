# Studere

Study workspace and Obsidian vault (open this folder as a vault). It gathers verified research into a single, living, interlinked library, and condenses the library into practical courses.

Language: English (quote the original when the source is in another language). Technical terms are kept, always with a gloss.

**The user does not call commands.** They talk; you identify the intent, use the routing below, and execute. Agents, skills and workflows in this project are pre-authorized: run them without asking for confirmation.

---

# ROUTER

Identify the intent of the request and follow the route. When torn between two, ask in one line.

## Route A — Study / learn / create a course (new topic, or go deeper on an existing one)

Triggers: "I want to study/learn/understand X", "teach me X", "I want a course on X", "I want to go deeper on X", "I need to know X for Y".

1. **Interview:** load the `study-interview` skill. Check the library, ask the missing questions (level, broad vs specific, goal/practice, outcome) in **one** round.
2. **Research:** run the `research-topic` workflow (stages 0–3).
   `Workflow({ name: "research-topic", args: { topic, context, goal, level, depth, focus, today } })`
3. **Course** (default; skip only if the user asked for research alone): run `generate-course` (stage 4).
   `Workflow({ name: "generate-course", args: { topic, path, name, startLevel, targetLevel, focus, practicePreference, today } })`
   `path` = the folder returned by `research-topic`.
4. **If `generate-course` returns `stopped: true`** because of gaps: run `research-topic` again with `focus` = the gaps, then `generate-course` once more. If it stops again, show the gaps to the user and say what is missing.
5. **Report** in a few lines: what went into the library (path, verified vs pending, gaps), the course (folder, modules, review) and how to open it (`00-Overview`).

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

Do it directly, respecting the library rules below. If the edit changes facts, editing is not enough: pass it through the `verifier` (agent) before marking `verified`.

## Route F — Outside Studere's scope

Answer normally.

---

# Who does what

Golden rule: **agent** = isolated, heavy work with its own tools; **skill** = protocol that runs in the main conversation (needs the user or the final presentation); **workflow** = deterministic orchestration of several agents. Do not duplicate roles.

| Type | Name | Role |
|------|------|------|
| Agent | `researcher` | searches the web (docs, scientific papers, books, technical blogs), reads and records sources (stage 1) |
| Agent | `archivist` | writes findings and MOCs, avoids duplicates, links areas (stages 2 and 3) |
| Agent | `verifier` | tries to refute; checks currency; reviews modules. The only one that approves |
| Agent | `course-author` | plans the track and writes modules from the library (stage 4) |
| Agent | `illustrator` | Mermaid/SVG diagrams that show the mechanism |
| Skill | `study-interview` | interview the user (needs them in the conversation) |
| Skill | `query-library` | read the library and present the answer |
| Skill | `audit-library` | integrity check and report |
| Workflow | `research-topic` | stages 0 to 3: scope → sources → findings → verification → synthesis |
| Workflow | `generate-course` | stage 4: plan → modules (write, illustrate, review) → overview |
| Workflow | `revalidate-topic` | compares notes against the current internet |

Do not research or write content into the library directly in the main conversation: delegate. The main conversation interviews, routes, queries and reports.

---

# Stages (details and gates in `_rules/stages.md`)

| # | Stage | Layer | Template | Owner |
|---|-------|-------|----------|-------|
| 0 | Request | — | `_templates/0-Request/` | archivist |
| 1 | Sources | `source` | `_templates/1-Source/` | `researcher` |
| 2 | Findings | `finding` | `_templates/2-Finding/` | `archivist` + `verifier` |
| 3 | Synthesis | `synthesis` | `_templates/3-Synthesis/` | `archivist` + `illustrator` |
| 4 | Course | `course` | `_templates/4-Course/` | `course-author` + `illustrator` + `verifier` |

Always hold: **no skipping stages**; **whoever writes does not approve**; status only advances with evidence; a gap goes back to the previous stage; every change goes into `## History`.

---

# Living library rules

- **Two axes:** thematic = tree `Library/<Domain>/<Area>/<Subarea>/` (grows with requests; no empty categories; pick the most specific place; reuse folders). Maturity = `layer` + `status` in the frontmatter.
- **Search before creating.** If the concept exists, extend and update it; create a new note only if it does not exist.
- **Atomic note:** one concept per note; name = the concept, in English, no date prefix.
- **Links:** `[[wikilinks]]` between notes, including across different areas. Every cited concept that has a note is linked.
- **MOC per topic:** `_MOC <Topic>.md` (synthesis, index, gaps, next steps), updated on every addition.
- **Raw sources:** `_sources/` in the subarea, one note per source.
- **History:** `## History` at the end of every note, `- YYYY-MM-DD: what changed`; update `updated`.
- **Never delete knowledge without recording** the reason in the history.

# Truthfulness rules

- **Sources (accepted, in order of weight):**
  - Level A: official documentation and specifications, scientific papers (peer-reviewed, systematic reviews, surveys), textbooks, standards, official bodies.
  - Level B: reference technical blogs (companies, researchers, recognized engineers), university course material, expert talks, preprints from recognized groups (marked as preprint).
  - Level C: forums, generic Medium, videos, social media. Only as a lead; never the basis of a claim.
- Every relevant claim has a source and an access date. A foundational concept requires 2 or more independent sources. Open and read the URL before citing.
- `confidence`: `established` | `debated` | `uncertain`. Contradictions between sources are recorded.
- Fast-changing topics (software, AI, regulation) get `review-by` (a review date).
- No source, no entry. Mark `unverified` instead of making things up. Never fabricate quotes, URLs or numbers.

# Courses

`Courses/Course - <Name>/`: `00-Overview.md` + one file per module. The course **does not copy** the library: it links (`base-notes`), reuses diagrams, and writes only what is specific. **No fact outside the library.**

**Each module: theory first, practice after.** Objectives → Complete theory (technical terms kept, gloss on first occurrence: `> **Term**: definition`) → Visuals → Practice (guided example, basic/intermediate/advanced exercises, mini-project, answer key, check). Track from basic to advanced; exercise format depends on the topic, no fixed pattern.

# Visual resources

Mermaid in code blocks (native in Obsidian); SVG in `Assets/<topic>/` with `![[file.svg]]`; Excalidraw if the plugin is present. Every diagram shows the real mechanism, with an italic caption.

# Structure

```
00-Inbox/         requests (stage 0)
Library/          thematic tree (the single living library)
Courses/          courses generated from the library
Assets/           images and diagrams
_templates/       0-Request, 1-Source, 2-Finding, 3-Synthesis, 4-Course
_rules/           stages.md
.claude/          agents/, skills/, workflows/
```
