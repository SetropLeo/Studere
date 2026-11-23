---
title: RFC 2104 - HMAC Keyed-Hashing for Message Authentication
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: standard
author: H. Krawczyk, M. Bellare, R. Canetti
published: 1997-02
url: https://www.rfc-editor.org/rfc/rfc2104.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, crypto, mac]
---

# RFC 2104 - HMAC

## Why it is reliable (or not)

IETF Informational RFC by the scheme's designers. Old (1997); its concrete hash examples (MD5, SHA-1) are outdated but the construction is current.

## Extracted points

- HMAC is a MAC built from an iterative hash H and a secret key K.
- Construction: H(K xor opad, H(K xor ipad, text)); ipad = 0x36 repeated, opad = 0x5C repeated; key padded to block size, longer keys hashed first.
- Strength depends on the underlying hash; hash-agnostic design.
- Output truncation allowed (at least half the hash length, at least 80 bits).

## Relevant excerpts

> "The cryptographic strength of HMAC depends on the properties of the underlying hash function." (as returned by page fetch)

## Used in

- [[Cryptographic Hash Functions and HMAC]]

## History

- 2026-11-23: registered and read.
