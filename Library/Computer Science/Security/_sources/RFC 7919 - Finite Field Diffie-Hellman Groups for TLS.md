---
title: RFC 7919 - Negotiated Finite Field Diffie-Hellman Ephemeral Parameters for TLS
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: standard
author: D. Gillmor
published: 2016-08
url: https://www.rfc-editor.org/rfc/rfc7919.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, crypto, key-exchange]
---

# RFC 7919 - Finite Field DH groups for TLS

## Why it is reliable (or not)

IETF Standards Track RFC. Protocol-specific rather than a tutorial on Diffie-Hellman; the fetch tool returned a summary, so DH mechanics (g^a mod p) are not verified from this page. A textbook or the RFC 8446 note (TLS 1.3, already in Computer Networks) should be paired for the concept. Modular exponentiation background is in the Modular Arithmetic note.

## Extracted points

- FFDH: two parties agree on a shared secret by modular exponentiation over a prime modulus and a generator.
- Ephemeral DH (DHE) uses fresh keys per session, giving forward secrecy.
- Defines five named groups, ffdhe2048 to ffdhe8192, and negotiation for TLS 1.0-1.2, because arbitrary server-chosen groups were hard for clients to verify.

## Relevant excerpts

> "Traditional finite-field-based Diffie-Hellman (DH) key exchange" (abstract, as returned by fetch)

## Used in

- [[Diffie-Hellman Key Exchange]]

## History

- 2026-11-23: registered and read.
