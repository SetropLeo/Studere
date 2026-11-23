---
title: Cross-Site Scripting
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[OWASP - XSS Prevention Cheat Sheet]]"]
tags: [finding, security, appsec, xss]
---

# Cross-Site Scripting

> **Summary:** XSS occurs when untrusted data reaches a page so that the browser treats it as code. OWASP's prevention order: framework auto-escaping, context-aware output encoding, safe sinks, sanitization, and CSP only as an extra layer.

## What it is

> **XSS (cross-site scripting)**: untrusted data reaches the page in a way that the browser treats it as code (paraphrase of the source's extracted point).

## How it works

Defensive measures, per the OWASP cheat sheet:
1. Use framework auto-escaping first; beware escape hatches such as dangerouslySetInnerHTML.
2. Context-aware output encoding: HTML body, attribute, JavaScript, CSS and URL contexts each need their own encoding.
3. Prefer safe sinks (textContent rather than innerHTML); sanitize user-supplied HTML with a maintained library (DOMPurify).
4. CSP (Content Security Policy) is defense in depth, not a primary defense. Page text as returned by fetch: "Use a CSP as an additional layer of defense" (reconfirmed 2026-11-23).

> **Output encoding**: transforming data so it is inert in a given output context (gloss, unsourced).

## Key terms

> **Sink**: a place where data is written into the page. **CSP**: Content Security Policy. Both glosses unsourced.

## Example

Own illustration: setting `element.textContent = userText` keeps the text as text; `innerHTML` would parse it as markup.

## Contradictions and uncertainties

- GAP: the reflected / stored / DOM-based taxonomy is NOT sourced; the page did not provide it.
- CSRF is a different issue and is not covered.
- Single level-B source, undated.

## Related

- [[SQL Injection and Parameterized Queries]] (own inference: same family of "data interpreted as code" errors)
- [[Session Management]] (HttpOnly cookies limit XSS theft per OWASP session guidance)
- [[Security Design Principles]]

## Sources

- [[OWASP - XSS Prevention Cheat Sheet]] - all claims.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
