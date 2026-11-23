---
title: Symmetric Encryption and AES
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[NIST FIPS 197 - AES]]"]
tags: [finding, security, crypto, aes]
---

# Symmetric Encryption and AES

> **Summary:** AES (FIPS 197) comes in AES-128, AES-192 and AES-256: it transforms data in blocks of 128 bits, and the suffix is the key length in bits. Only the standard's abstract page was read.

## What it is

> **Symmetric encryption**: encryption in which the same secret key is used to encrypt and decrypt (gloss, unsourced).

FIPS 197 abstract (verbatim): "Each of them transforms data in blocks of 128 bits, and the numerical suffix indicates the bit length of the associated cryptographic keys." The three variants belong to the Rijndael family and use key sizes 128, 192 and 256 bits. The 2023 update (original 2001-11-26) made editorial changes only, no technical change.

## How it works

Not covered: the round structure (full specification PDF unread). Modes of operation (ECB, CBC, CTR, GCM) are NOT sourced: gap; NIST SP 800-38 series is the candidate.

## Key terms

> **Block cipher**: a cipher that works on fixed-size blocks, here 128 bits (the block size is sourced; the term gloss is unsourced).

## Example

None sourced. Python has no standard-library AES; any code would rely on a third-party library that was not read.

## Contradictions and uncertainties

- Single source, abstract only. Key management, modes and authenticated encryption not covered.

## Related

- [[Security Properties - Confidentiality, Integrity, Availability]] (confidentiality), [[RSA]] (asymmetric counterpart, per that note), [[TLS]], [[IPsec and VPN Concepts]], [[Network Threats and Cryptographic Basics]]
- [[Diffie-Hellman Key Exchange]] (how two parties can agree on a shared secret key, per RFC 7919)

## Sources

- [[NIST FIPS 197 - AES]] - block and key sizes, 2023 update.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
