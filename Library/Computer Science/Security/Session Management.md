---
title: Session Management
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[OWASP - Session Management Cheat Sheet]]"]
tags: [finding, security, authentication, sessions]
---

# Session Management

> **Summary:** OWASP guidance: unpredictable session IDs, protective cookie attributes, server-enforced timeouts, and a fresh ID after login. The page was summarized by the fetch tool; no verbatim quote exists, so everything here is paraphrase and should be rechecked.

## What it is

> **Session**: state kept across requests after authentication (gloss, unsourced).

## How it works

- Session IDs: at least 64 bits of entropy from a CSPRNG, data held server-side; OWASP says the ID should avoid being accepted via URL (not "never"). "Generic name" and "meaningless content" were not confirmed on the live page: unverified.
- Cookie attributes: Secure; HttpOnly (limits theft through XSS); SameSite: Strict (preferred) or Lax. "Supplements CSRF tokens" was not confirmed: unverified.
- Idle and absolute timeouts enforced server-side; invalidate server-side on logout.
- Regenerate the session ID after login or a privilege change, which prevents session fixation.

> **Session fixation**: an attacker-chosen session ID persisting across login (gloss, unsourced; concept level).

## Key terms

See above.

## Contradictions and uncertainties

- Single level-B source, fetched as summary. Tokens such as JWT (RFC 7519) and OAuth are a gap. NIST's session section was not read.

## Related

- [[Cross-Site Scripting]], [[Secure Randomness in Python]], [[Authentication Assurance and Password Policy]] (reauthentication limits), [[Password Storage]], [[TLS]] (own inference: the Secure attribute concerns transport over TLS)

## Sources

- [[OWASP - Session Management Cheat Sheet]] - all claims.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification: URL rule softened to "should avoid accepting"; SameSite "Strict (preferred) or Lax"; three unconfirmed claims marked unverified.
