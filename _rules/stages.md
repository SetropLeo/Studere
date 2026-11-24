# Stages and gates

Work in Studere goes through 5 stages. Each stage has an **input** (what must exist), an **output** (definition of done), an **owner** and a **gate**: without meeting the output, the next stage does not start.

| # | Stage | Layer | Template | Owner | Possible statuses |
|---|-------|-------|----------|-------|-------------------|
| 0 | Request | — | `0-Request/request.md` | archivist | `pending` → `scoped` |
| 1 | Sources | `source` | `1-Source/source.md` | agent `researcher` | `registered` → `read` → `validated` |
| 2 | Findings | `finding` | `2-Finding/finding.md` | agent `archivist`, approved by `verifier` | `draft` → `verified` → `published` |
| 3 | Synthesis | `synthesis` | `3-Synthesis/moc.md` | agent `archivist` | `draft` → `reviewed` |
| 4 | Course | — | format in `CLAUDE.md`, section "Courses" | main conversation | none (courses have no status) |

## General rules

1. **No skipping stages.** Stage N only starts if the output of stage N-1 is met.
2. **Going back is allowed and expected.** A gap discovered in one stage goes back to the appropriate earlier stage (e.g. a course module needs a concept with no note → back to stage 1). Record it in `## History`.
3. **Whoever writes does not approve.** The move to `verified` (finding) and `reviewed` (MOC) is made by the `verifier` agent, never by the author.
4. **Status only advances with evidence.** Changing the `status` field requires the stage criteria to be met.
5. **Every change goes into the note's history**, with a date.
6. **The library is single.** Before creating any note, search for an existing one and extend it (see `CLAUDE.md`).
7. **Verification mode is declared** in the request (`verification: strict | light`). Strict is the default. The gates below state both modes where they differ.

## Stage 0 — Request

- **Input:** user request (topic + context).
- **Output:** `request.md` in `00-Inbox/` with topic, context, goal, current level, expected outcome (library only, or library + course), and `verification` (`strict` or `light`).
- **Gate:** clear goal. If ambiguous, one short question to the user; otherwise assume the default and record the assumption.
- Then: decide the **path** in the library (`Library/Domain/Area/Subarea`), reusing existing folders, and the list of **subtopics** with the guiding question for each.

## Stage 1 — Sources

- **Input:** scoped request, subtopics defined.
- **Output:**
  - Sources per subtopic, with a foundational concept supported as the mode requires:
    - `strict`: ≥ 3 sources per subtopic, and ≥ 2 independent level A or B sources for any foundational concept.
    - `light`: ≥ 1 level A or B source per concept, and at least one per subtopic.
  - Each source recorded in `_sources/` with URL, access date and level (A/B/C).
  - URLs opened and checked (never cite what was not read).
- **Gate:** no level C source supports a claim. A C source only serves as a lead to be confirmed in A/B.

## Stage 2 — Findings

- **Input:** sources `read` or `validated`.
- **Output:**
  - Atomic notes (1 concept per note) with `confidence`, `sources`, `review-by` when applicable.
  - Every relevant claim has a source. Contradictions recorded.
  - Adversarial verification done by the `verifier`, in the mode of the request. Only then `status: verified`.
  - In `light` mode, a note that rests on a single source records it in its "Contradictions and uncertainties" section and has `confidence` `debated` or `uncertain`.
- **Gate:** no `draft` note enters the synthesis.

## Stage 3 — Synthesis

- **Input:** `verified` findings.
- **Output:** `_MOC <Topic>.md` with synthesis, Mermaid map, linked index, main sources, **gaps** and next steps; cross-links to other areas of the library. In `light` mode, the MOC states that the topic was verified in that mode and lists the single-source notes.
- **Gate:** every link resolves; every note of the topic appears in the MOC; critical gaps were either researched (back to stage 1) or are declared.

## Stage 4 — Course

- **Input:** MOC `reviewed` and no critical gaps (the MOC is the gate; courses have no status).
- **Output:** the course in `Courses/Curso - <Nome>/`, formatted as in `CLAUDE.md`, section "Courses": `00 - Comece aqui.md` and one `NN - Título.md` per module.
- **Gate:**
  - every concept stated in a module is in the library and linked through `notas-base`;
  - every exercise is run in both directions (starter fails with `AssertionError`, solution prints `Passou!`);
  - no confidence or gap text inside the course; those go to the delivery notes.

## Who does what

| Agent | Stages | Writes | Does not do |
|-------|--------|--------|-------------|
| `researcher` | 1 | source notes, one subtopic per call | findings, synthesis |
| `archivist` | 0, 2, 3 | request, findings, MOC with Mermaid map, links, history | search the web, approve |
| `verifier` | 2, 3 | one verdict per batch; control fields (`status`, `confidence`, `verified-by`, `reviewed-by`) | write content |

Hand-offs between agents are file paths. No agent receives another agent's note text in the prompt.

## Automation

Request routing lives in `CLAUDE.md`. Summary:

- Study a topic → skill `study-interview` → workflow `research-topic` (stages 0–3, with `verification`) → course written in the conversation (stage 4).
- Query the base → skill `query-library`.
- Check whether the library still holds → workflow `revalidate-topic`.
- Library and course health → skill `audit-library`.
