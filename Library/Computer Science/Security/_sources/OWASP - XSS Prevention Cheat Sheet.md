---
title: OWASP - Cross Site Scripting Prevention Cheat Sheet
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: blog
author: OWASP Cheat Sheets Series Team
published: undated
url: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, appsec, xss]
---

# OWASP - Cross Site Scripting Prevention Cheat Sheet

## Why it is reliable (or not)

OWASP community guidance (level B), undated. The page does not itself taxonomize reflected/stored/DOM XSS; get that taxonomy from another source if needed (gap).

## Extracted points

- XSS: untrusted data reaches the page so the browser treats it as code.
- Use framework auto-escaping first; beware escape hatches (e.g. dangerouslySetInnerHTML).
- Context-aware output encoding (HTML body, attribute, JavaScript, CSS, URL).
- Prefer safe sinks (textContent over innerHTML); sanitize user HTML with a maintained library (DOMPurify).
- CSP is defense in depth, not a primary defense.

## Relevant excerpts

> "Use a CSP as an additional layer of defense" (reconfirmed 2026-11-23)

## Used in

- [[Cross-Site Scripting]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: wording fix after light verification: key quote reconfirmed against the page; "as returned by page fetch" flag dropped.
