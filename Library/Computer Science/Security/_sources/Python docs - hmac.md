---
title: Python docs - hmac (keyed-hash message authentication)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: undated
url: https://docs.python.org/3/library/hmac.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, crypto, python, mac]
review-by: 2027-05-23
---

# Python docs - hmac

## Why it is reliable (or not)

Official language documentation.

## Extracted points

- `hmac.new(key, msg=None, digestmod)`: `digestmod` is required since 3.8.
- `hmac.digest(key, msg, digest)` one-shot (3.7+), faster.
- `hmac.compare_digest(a, b)` resists timing attacks; use instead of `==` to verify a MAC. Both arguments must be the same type.

## Relevant excerpts

> "Despite its argument position, it is required." (about digestmod)

## Used in

- [[Cryptographic Hash Functions and HMAC]]

## History

- 2026-11-23: registered and read.
