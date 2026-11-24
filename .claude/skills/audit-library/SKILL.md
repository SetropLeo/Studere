---
name: audit-library
description: Integrity check of the Studere library: broken links, orphan notes, incomplete frontmatter, inconsistent status, expired validity, duplicates, outdated MOCs. Use periodically or when the user asks for a cleanup/health check of the library.
---

# Audit the library

Routed from requests like "how healthy is the library", "any broken links?", "clean up/organize the base". By default audits all of `Library/` and `Courses/`; if the user named a topic or folder, only that.

## Checks

1. **Broken links:** every `[[link]]` resolves to an existing note, in `Library/`, `Courses/` and `_rules/`.
2. **Orphans:** notes that no MOC lists and nothing links to.
3. **Frontmatter:** required template fields (`layer`, `status`, `created`, `updated`, `confidence` on findings; `level`, `url`, `accessed` on sources). Course modules have `título`, `módulo`, `tempo`, `notas-base` and no `status`.
4. **Inconsistent status:** finding `published`/`verified` without `verified-on`; MOC `reviewed` listing a `draft` note; finding `verified` with a single source and `confidence: established` (allowed only in `light` mode, and then it must say so in the MOC).

4b. **Courses:**
   - index `00 - Comece aqui.md` exists and lists every `NN - Título.md` of the folder;
   - module file names are `NN - Título.md`, with two-digit numbers and no colon;
   - every module has the sections of `CLAUDE.md` (section Courses), in order;
   - no `{{...}}` placeholder left; no confidence or "lacuna" text inside a module;
   - a module refers only to notes that exist in `Library/` (`notas-base`).
5. **Expired validity:** `review-by` earlier than today's date. List for re-verification.
6. **Duplicates:** very similar titles or concepts (merge candidates).
7. **Sources:** note without a source; level-C-only source supporting a claim; `url-verified: false`.
8. **Outdated MOC:** topic note missing from the MOC; resolved gaps still listed.
9. **Folders:** empty categories; notes outside the most specific place.

## Execution

Use Glob/Grep in this conversation. Most checks are a Grep over the frontmatter and the links, so they are cheap. Do not launch agents for the audit; if a check needs reading many notes, do it one subarea at a time.

## Output

Short report grouped by problem type, with `path:line` and the suggested fix. **Do not fix automatically**: propose, and apply only what the user approves (via `archivist`). Suggest running verification on notes with expired validity.
