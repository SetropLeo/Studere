---
title: NIST FIPS 197 - Advanced Encryption Standard (AES)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: standard
author: NIST
published: 2001-11-26 (updated 2023-05-09)
url: https://csrc.nist.gov/pubs/fips/197/final
accessed: 2026-11-23
url-verified: true
tags: [source, security, crypto, aes]
---

# NIST FIPS 197 - AES

## Why it is reliable (or not)

The official US standard. Only the publication landing page (abstract) was read, not the full specification (PDF). Good for facts: block and key sizes; not for the round structure.

## Extracted points

- AES-128, AES-192, AES-256: members of the Rijndael family; 128-bit blocks; key sizes 128/192/256.
- 2023 update: editorial changes only, no technical change.
- Block modes (ECB/CBC/CTR/GCM) are NOT covered here (gap; NIST SP 800-38 series is the standard).

## Relevant excerpts

> "Each of them transforms data in blocks of 128 bits, and the numerical suffix indicates the bit length of the associated cryptographic keys." (abstract)

## Used in

- [[Symmetric Encryption and AES]]

## History

- 2026-11-23: registered and read (abstract page).
