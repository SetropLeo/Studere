---
title: Python docs - hashlib (secure hashes and key derivation)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: undated (current docs, mentions Python 3.15 deprecation)
url: https://docs.python.org/3/library/hashlib.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, crypto, python, hashing]
review-by: 2027-05-23
---

# Python docs - hashlib

## Why it is reliable (or not)

Official language documentation; version-dependent (fast-changing details such as recommended iteration counts).

## Extracted points

- Interface to SHA-2, SHA-3, SHAKE, BLAKE2, and legacy md5/sha1 (known collision weaknesses).
- `hashlib.new(name, data, usedforsecurity=True)`; `algorithms_guaranteed` vs `algorithms_available`.
- Password hashing: `pbkdf2_hmac` and `scrypt` (RFC 7914); docs suggest hundreds of thousands of SHA-256 iterations as of 2022.
- Good password hashing function must be tunable, slow, and salted; salts about 16+ bytes from `os.urandom()`.
- BLAKE2 supports keyed mode (MAC), salt, personalization.
- `hashlib.file_digest()` since 3.11.

## Relevant excerpts

> "A good password hashing function must be tunable, slow, and include a salt." (key derivation section)

## Used in

- [[Cryptographic Hash Functions and HMAC]], [[Password Storage]], [[Secure Randomness in Python]]

## History

- 2026-11-23: registered and read.
