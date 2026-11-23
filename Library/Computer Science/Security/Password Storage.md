---
title: Password Storage
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-05-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[OWASP - Password Storage Cheat Sheet]]", "[[Python docs - hashlib]]", "[[Python docs - secrets]]"]
tags: [finding, security, authentication, hashing]
---

# Password Storage

> **Summary:** Passwords should be hashed with a slow, tunable, salted function, not encrypted. OWASP prefers Argon2id; Python's hashlib offers `pbkdf2_hmac` and `scrypt`. Numeric parameters are fast-changing and the two sources diverge in form.

## What it is

OWASP: hash passwords (one-way), do not encrypt them (page text as fetched: "hashing is a one-way function"). Python hashlib (verbatim): "A good password hashing function must be tunable, slow, and include a salt." The secrets docs also say passwords must not be stored recoverably.

> **Salt**: a unique random value per password, defeating rainbow tables and making identical passwords hash differently (OWASP).

> **Pepper**: a secret kept outside the database, for example in a vault or HSM (OWASP).

> **Work factor**: the tunable cost parameter of the hash (OWASP suggests tuning to roughly under one second per hash; rehash on login to upgrade).

## How it works

OWASP algorithm list: Argon2id preferred (minimum 19 MiB, t=2, p=1); scrypt N=2^17, r=8, p=1; bcrypt as legacy (work factor at least 10, 72-byte limit); PBKDF2-HMAC-SHA-256 with 600,000+ iterations where FIPS compliance is needed. hashlib provides `pbkdf2_hmac` and `scrypt` (RFC 7914) and suggests salts of about 16+ bytes from `os.urandom()`.

Own illustration using documented functions:

```python
import hashlib, os
salt = os.urandom(16)
dk = hashlib.pbkdf2_hmac("sha256", b"password", salt, 600_000)  # count per OWASP; recheck
```

## Key terms

See glosses above.

## Contradictions and uncertainties

- UNRESOLVED divergence on iterations: OWASP gives 600,000+ for PBKDF2-HMAC-SHA-256; hashlib says "hundreds of thousands" of SHA-256 iterations as of 2022. The two are not reconciled here (different dates, wording; not verified). Both fast-changing: check the live pages by 2027-05-23.
- OWASP is community guidance (level B), undated; the quote was reconfirmed on 2026-11-23 (the 600,000 count remains flagged in the example).
- Argon2 is not in hashlib per the read text (it names only pbkdf2_hmac and scrypt).

## Related

- [[Cryptographic Hash Functions and HMAC]], [[Secure Randomness in Python]], [[Authentication Assurance and Password Policy]], [[Session Management]]

## Sources

- [[OWASP - Password Storage Cheat Sheet]] - algorithms, salt, pepper, parameters.
- [[Python docs - hashlib]] - pbkdf2_hmac, scrypt, requirements, salt size.
- [[Python docs - secrets]] - passwords not stored recoverably.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
