---
title: OWASP - Session Management Cheat Sheet
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: blog
author: OWASP Cheat Sheets Series Team
published: undated
url: https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, authentication, sessions]
---

# OWASP - Session Management Cheat Sheet

## Why it is reliable (or not)

OWASP community guidance (level B). Token formats such as JWT (RFC 7519) are not covered; gap.

## Extracted points

- Session IDs: at least 64 bits of entropy from a CSPRNG, server-side data; OWASP says the ID should avoid being accepted via URL (not "never"). "Generic name" and "meaningless content": not confirmed, unverified.
- Cookie attributes: Secure, HttpOnly (limits XSS theft), SameSite: Strict (preferred) or Lax. "Supplements CSRF tokens": not confirmed, unverified.
- Idle and absolute timeouts enforced server-side; invalidate server-side on logout.
- Regenerate session ID after login or privilege change (prevents session fixation).

## Relevant excerpts

> (no literal quote recorded; the page was summarized by the fetch tool)

## Used in

- [[Session Management]], [[Secure Randomness in Python]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: wording fix after light verification: URL rule, SameSite Strict or Lax, unconfirmed claims marked unverified.
