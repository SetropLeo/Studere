---
title: Diffie-Hellman Key Exchange
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: uncertain
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[RFC 7919 - Finite Field Diffie-Hellman Groups for TLS]]"]
tags: [finding, security, crypto, key-exchange]
---

# Diffie-Hellman Key Exchange

> **Summary:** In finite-field Diffie-Hellman two parties agree on a shared secret by modular exponentiation over a prime modulus and a generator. RFC 7919 defines named groups for TLS.

## What it is

Per the source note: FFDH (finite-field DH) derives a shared secret through modular exponentiation over a prime modulus and a generator. The fetch returned a summary, so the exact formula (g^a mod p) was NOT verified from the page and is not stated here as sourced. Abstract fragment as returned by fetch: "Traditional finite-field-based Diffie-Hellman (DH) key exchange".

## How it works

- Ephemeral DH (DHE) uses fresh keys per session, giving forward secrecy.
- RFC 7919 defines five named groups, ffdhe2048 to ffdhe8192, and a negotiation mechanism for TLS 1.0-1.2, because arbitrary server-chosen groups were hard for clients to verify.

> **Forward secrecy**: compromise of long-term keys does not expose past session keys (gloss, unsourced; the source ties it to ephemeral keys).

## Key terms

> **ffdhe group**: a named, predefined finite-field group (prime and generator) for DH.

## Example

None sourced. Modular exponentiation is available in Python as three-argument `pow`, per [[Modular Arithmetic]]; a toy illustration would be own illustration only.

## Contradictions and uncertainties

- `uncertain`: single source, fetched as a summary; no tutorial on DH mechanics and no discussion of man-in-the-middle needing authentication (gap; the TLS note's RFC 8446 content may help).
- Elliptic-curve DH not covered.

## Related

- [[Modular Arithmetic]], [[TLS]], [[RSA]], [[IPsec and VPN Concepts]], [[Public Key Infrastructure and X.509 Certificates]], [[Symmetric Encryption and AES]]

## Sources

- [[RFC 7919 - Finite Field Diffie-Hellman Groups for TLS]] - FFDH, DHE, ffdhe groups.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
