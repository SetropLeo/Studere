---
title: Digital Signatures and EdDSA
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[RFC 8032 - EdDSA]]", "[[RFC 5280 - X.509 PKI Certificate and CRL Profile]]"]
tags: [finding, security, crypto, signatures]
---

# Digital Signatures and EdDSA

> **Summary:** RFC 8032 specifies EdDSA, a Schnorr-based signature scheme on Edwards curves, instantiated as Ed25519 and Ed448, with deterministic signing. A conceptual introduction to digital signatures is not in the sources (gap).

## What it is

RFC 8032 abstract (verbatim): "This document describes elliptic curve signature scheme Edwards-curve Digital Signature Algorithm (EdDSA)." Ed25519 offers about 128-bit security and Ed448 about 224-bit. Signing is deterministic (no per-signature random number); the design aims at small keys and signatures and at side-channel resistance. The RFC (IRTF, Informational) includes a Python reference implementation and test vectors. Only the first 100,000 of 110,390 characters were read.

> **Digital signature**: a value computed with a private key that anyone can check with the matching public key (gloss, unsourced; not defined in the read text).

## How it works

Mechanics of the curve arithmetic were not recorded. Signature use in certificates: an X.509 certificate carries a signature algorithm and signature over its to-be-signed part (RFC 5280, see [[Public Key Infrastructure and X.509 Certificates]]).

## Key terms

> **Deterministic signing**: the same key and message always give the same signature, since no fresh random value is drawn (follows from the source's "no per-signature random number").

## Example

None (no sourced example). Own inference: RSA, covered in [[RSA]] as a number-theory application, can also be used for signatures; this note's sources do not say so.

## Contradictions and uncertainties

- GAP: conceptual source for signatures (sign/verify, non-repudiation).
- Single RFC for the scheme; informational status.

## Related

- [[RSA]], [[Modular Arithmetic]] (own inference: EdDSA uses different, curve-based math), [[Public Key Infrastructure and X.509 Certificates]], [[Cryptographic Hash Functions and HMAC]], [[TLS]]

## Sources

- [[RFC 8032 - EdDSA]] - scheme, parameters, deterministic signing.
- [[RFC 5280 - X.509 PKI Certificate and CRL Profile]] - signature in certificates.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
