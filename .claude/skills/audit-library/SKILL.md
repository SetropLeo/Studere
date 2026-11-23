---
name: audit-library
description: Integrity check of the Studere library: broken links, orphan notes, incomplete frontmatter, inconsistent status, expired validity, duplicates, outdated MOCs. Use periodically or when the user asks for a cleanup/health check of the library.
---

# Audit the library

Routed from requests like "how healthy is the library", "any broken links?", "clean up/organize the base". By default audits all of `Library/` and `Courses/`; if the user named a topic or folder, only that.

## Checks

1. **Broken links:** every `[[link]]` resolves to an existing note.
2. **Orphans:** notes that no MOC lists and nothing links to.
3. **Frontmatter:** required template fields (`layer`, `status`, `created`, `updated`, `confidence` on findings; `level`, `url`, `accessed` on sources).
4. **Inconsistent status:** finding `published`/`verified` without `verified-on`; MOC `reviewed` listing a `draft` note; module `reviewed` without `reviewed-by`; course resting on an unverified note.
5. **Expired validity:** `review-by` earlier than today's date. List for re-verification.
6. **Duplicates:** very similar titles or concepts (merge candidates).
7. **Sources:** note without a source; level-C-only source supporting a claim; `url-verified: false`.
8. **Outdated MOC:** topic note missing from the MOC; resolved gaps still listed.
9. **Folders:** empty categories; notes outside the most specific place.

## Execution

Use Glob/Grep. For large libraries, split by subarea and fire `Explore`/`general-purpose` agents in parallel (read-only).

## Output

Short report grouped by problem type, with `path:line` and the suggested fix. **Do not fix automatically**: propose, and apply only what the user approves (via `archivist`). Suggest running verification on notes with expired validity.
