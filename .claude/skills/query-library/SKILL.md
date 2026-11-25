---
name: query-library
description: Protocol for answering questions using only what already exists in the Studere library ("search our base", "what do we have on", "what do we know about"). Searches, reads and presents with links, status, confidence, validity and gaps, without going to the internet. Use when the user wants to query what has already been researched.
---

# Query the library

Runs in the main conversation. **Does not use the web**: answers only with what is in the vault. (Comparing with the internet is a different flow: revalidation.)

## Steps

1. **Search:** Grep/Glob in `Library/` and `Courses/` for the term and synonyms (any language) in titles, tags and body. Start with the `_MOC *.md` files: they index the topic.
2. **Read** the relevant notes in this conversation: the MOC first, then the atomic ones that answer the question. Read at most about 5 atomic notes in full; for the rest, read only the headline and the summary line. Do not delegate the reading to agents: reading a few notes is cheaper than starting an agent.
3. **Answer** the user's question with the library's content, synthesized, and right below:
   - **Notes used:** list of `[[wikilinks]]`.
   - **Confidence and validity:** `confidence`, `status` and whether `review-by` has passed.
   - **Main sources** (level A/B) behind the answer.
   - **Gaps:** what the question asks for and the library does not cover.
   - **Related courses**, if any.
4. **If there is nothing (or little):** say so clearly and offer to study the topic (study flow in `CLAUDE.md`).
5. **If the library has the information but `review-by` has passed or `status: draft`:** warn and offer to revalidate against the internet.

## Rules

- Never fill gaps with your own knowledge without marking it. If you add something that is not in the library, say explicitly "this is not in the base".
- Don't edit the library while querying. If you find an error or duplicate note, suggest it at the end.
- If the question crosses areas, follow the links between notes and show the connections.
