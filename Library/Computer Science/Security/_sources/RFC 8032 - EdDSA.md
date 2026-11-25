---
title: RFC 8032 - Edwards-Curve Digital Signature Algorithm (EdDSA)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: standard
author: S. Josefsson, I. Liusvaara
published: 2017-01
url: https://www.rfc-editor.org/rfc/rfc8032.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, crypto, signatures]
---

# RFC 8032 - EdDSA

## Why it is reliable (or not)

RFC from the IRTF (Informational, not Standards Track). Describes a specific scheme; a conceptual introduction to digital signatures (sign/verify, non-repudiation) is not covered in depth; RSA signatures are in the existing RSA note.

## Extracted points

- EdDSA: Schnorr-based signatures on Edwards curves; instantiated as Ed25519 (about 128-bit security) and Ed448 (about 224-bit).
- Deterministic signing (no per-signature random number), small keys and signatures, side-channel resistance goals.
- Includes Python reference implementation and test vectors.

## Relevant excerpts

> "This document describes elliptic curve signature scheme Edwards-curve Digital Signature Algorithm (EdDSA)." (abstract)

## Used in

- [[Digital Signatures and EdDSA]]

## History

- 2026-11-23: registered and read (first 100000 characters of 110390).
