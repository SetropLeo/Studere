# Stages and gates

Work in Studere goes through 5 stages. Each stage has an **input** (what must exist), an **output** (definition of done), an **owner** and a **gate**: without meeting the output, the next stage does not start.

| # | Stage | Layer | Template | Owner | Possible statuses |
|---|-------|-------|----------|-------|-------------------|
| 0 | Request | — | `0-Request/request.md` | you + Claude | `pending` → `scoped` |
| 1 | Sources | `source` | `1-Source/source.md` | agent `researcher` | `registered` → `read` → `validated` |
| 2 | Findings | `finding` | `2-Finding/finding.md` | agent `archivist` | `draft` → `verified` → `published` |
| 3 | Synthesis | `synthesis` | `3-Synthesis/moc.md` | agent `archivist` | `draft` → `reviewed` |
| 4 | Course | `course` | `4-Course/*.md` | agents `course-author` + `illustrator` | `planned` → `written` → `reviewed` → `published` |

## General rules

1. **No skipping stages.** Stage N only starts if the output of stage N-1 is met.
2. **Going back is allowed and expected.** A gap discovered in one stage goes back to the appropriate earlier stage (e.g. the course finds a concept without a note → back to stage 1). Record it in `## History`.
3. **Whoever writes does not approve.** The move to `verified` (finding) and `reviewed` (course) is made by the `verifier` agent, never by the author.
4. **Status only advances with evidence.** Changing the `status` field requires the stage criteria to be met.
5. **Every change goes into the note's history**, with a date.
6. **The library is single.** Before creating any note, search for an existing one and extend it (see `CLAUDE.md`).

## Stage 0 — Request

- **Input:** user request (topic + context).
- **Output:** `request.md` in `00-Inbox/` with topic, context, goal, current level, type of expected outcome (library only, or library + course).
- **Gate:** clear goal. If ambiguous, one short question to the user; otherwise assume the default and record the assumption.
- Then: decide the **path** in the library (`Library/Domain/Area/Subarea`), reusing existing folders, and the list of **subtopics** with the guiding question for each.

## Stage 1 — Sources

- **Input:** scoped request, subtopics defined.
- **Output:**
  - ≥ 3 sources per subtopic, with ≥ 2 independent level A or B sources for any foundational concept.
  - Each source recorded in `_sources/` with URL, access date and level (A/B/C).
  - URLs opened and checked (never cite what was not read).
- **Gate:** no level C source supports a claim. A C source only serves as a lead to be confirmed in A/B.

## Stage 2 — Findings

- **Input:** sources `read` or `validated`.
- **Output:**
  - Atomic notes (1 concept per note) with `confidence`, `sources`, `review-by` when applicable.
  - Every relevant claim has a source. Contradictions recorded.
  - Adversarial verification done by the `verifier` (tries to refute, looks for independent evidence). Only then `status: verified`.
- **Gate:** no `draft` note enters the synthesis.

## Stage 3 — Synthesis

- **Input:** `verified` findings.
- **Output:** `_MOC <Topic>.md` with synthesis, Mermaid map, linked index, main sources, **gaps** and next steps; cross-links to other areas of the library.
- **Gate:** every link resolves; every note of the topic appears in the MOC; critical gaps were either researched (back to stage 1) or are declared.

## Stage 4 — Course (on request only)

- **Input:** MOC `reviewed` and no critical gaps.
- **Output:**
  - `00-Overview.md` + 1 file per module.
  - Each module: Objectives → **Theory** (complete, technical terms glossed) → Visuals → **Practice** (guided example, basic/intermediate/advanced exercises, mini-project, answer key, check).
  - **No new facts**: everything the course states is in the library and linked via `base-notes`. If something is missing, go back to stage 1.
  - Exercises checked (executable ones run; written ones have a coherent answer key).
- **Gate:** the `verifier` reviews theory vs library and practice vs theory before `reviewed`.

## Who does what

| Agent | Stages | Writes | Does not do |
|-------|--------|--------|-------------|
| `researcher` | 1 | source notes | findings, synthesis |
| `archivist` | 2, 3 | findings, MOC, links, history | search the web, approve |
| `verifier` | 2, 4 | verdict only (and `status`) | write content |
| `course-author` | 4 | modules, overview | research new facts |
| `illustrator` | 3, 4 | Mermaid/SVG in `Assets/` | content text |

## Automation

Request routing lives in `CLAUDE.md`. Summary:

- Study a topic → skill `study-interview` → workflow `research-topic` (stages 0–3) → workflow `generate-course` (stage 4).
- Query the base → skill `query-library`.
- Check whether the library still holds → workflow `revalidate-topic`.
- Library health → skill `audit-library`.
