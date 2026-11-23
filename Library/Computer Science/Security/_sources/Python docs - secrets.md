---
title: Python docs - secrets (cryptographically strong randomness)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: undated (module added in Python 3.6)
url: https://docs.python.org/3/library/secrets.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, crypto, python, randomness]
review-by: 2027-05-23
---

# Python docs - secrets

## Why it is reliable (or not)

Official language documentation. The "32 bytes is sufficient" figure is explicitly time-dated (2015) in the docs.

## Extracted points

- `secrets` for passwords, authentication, tokens; prefer over `random`, which is for modelling and simulation.
- Functions: `SystemRandom`, `choice`, `randbelow`, `randbits`, `token_bytes`, `token_hex`, `token_urlsafe`.
- `compare_digest` constant-time comparison; the docs add only "See hmac.compare_digest() for additional details" (a cross-reference; that it is the same function is an implementation inference, not a docs statement).
- Passwords must not be stored recoverably; salt and hash with a strong one-way function.

## Relevant excerpts

> "should be used in preference to the default pseudo-random number generator in the random module, which is designed for modelling and simulation, not security or cryptography." (module intro)

## Used in

- [[Secure Randomness in Python]], [[Password Storage]], [[Cryptographic Hash Functions and HMAC]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: wording fix after light verification: compare_digest is a cross-reference to hmac.compare_digest, not an identity statement.
