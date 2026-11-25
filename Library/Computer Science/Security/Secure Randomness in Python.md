---
title: Secure Randomness in Python
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-05-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Python docs - secrets]]", "[[Python docs - hashlib]]", "[[OWASP - Session Management Cheat Sheet]]"]
tags: [finding, security, python, randomness]
---

# Secure Randomness in Python

> **Summary:** For passwords, authentication and tokens, Python's `secrets` module is preferred over `random`, which is for modelling and simulation.

## What it is

The module docs say it should be used in preference to the default generator in `random`, "which is designed for modelling and simulation, not security or cryptography." (verbatim in the source note, module intro).

## How it works

Functions: `SystemRandom`, `choice`, `randbelow`, `randbits`, `token_bytes`, `token_hex`, `token_urlsafe`, and `compare_digest` (constant-time comparison; the docs cross-reference `hmac.compare_digest` with "See hmac.compare_digest() for additional details", which is not a statement that they are identical). Passwords must not be stored recoverably: salt and hash them with a strong one-way function. The hashlib docs advise salts of about 16+ bytes from `os.urandom()`. The docs' "32 bytes is sufficient" figure is time-dated (2015) in the docs and is therefore not restated as current. OWASP asks session IDs to have at least 64 bits of entropy from a CSPRNG.

> **CSPRNG**: cryptographically secure pseudo-random number generator (gloss, unsourced; term used by OWASP).

## Key terms

See above.

## Example

Own illustration using documented functions:

```python
import secrets
token = secrets.token_urlsafe(32)
```

## Contradictions and uncertainties

- Single official source per claim; version-dependent. Token-length guidance is dated; review-by 2027-05-23.

## Related

- [[Password Storage]], [[Session Management]], [[Cryptographic Hash Functions and HMAC]]

## Sources

- [[Python docs - secrets]] - functions, preference over random.
- [[Python docs - hashlib]] - salt size.
- [[OWASP - Session Management Cheat Sheet]] - session ID entropy.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification: compare_digest is a docs cross-reference, not an identity statement.
