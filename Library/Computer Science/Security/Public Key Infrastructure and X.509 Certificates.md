---
title: Public Key Infrastructure and X.509 Certificates
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[RFC 5280 - X.509 PKI Certificate and CRL Profile]]"]
tags: [finding, security, pki, x509]
---

# Public Key Infrastructure and X.509 Certificates

> **Summary:** RFC 5280 profiles the X.509 v3 certificate and the v2 CRL for the Internet. Only the first 100,000 of 378,424 characters were read.

## What it is

RFC 5280 abstract (verbatim): "This memo profiles the X.509 v3 certificate and X.509 v2 certificate revocation list (CRL) for use in the Internet."

> **Certificate**: a signed statement binding a subject to a public key (gloss, unsourced beyond the field list below).

## How it works

- Structure: a signed to-be-signed part, a signature algorithm and a signature; fields include version, serial number, issuer, subject, validity, public key and extensions (with a critical flag).
- CA certificates (cross-certificates, self-issued, self-signed) are distinguished from end entity certificates.
- Path validation: build a chain from the end-entity certificate to a trust anchor, checking signatures, validity, name chaining and constraints.
- Revocation: signed CRLs list revoked serial numbers; latency depends on issue frequency. OCSP is mentioned as an online alternative but is defined in RFC 6960, not read.

> **CRL**: certificate revocation list.

## Key terms

> **Trust anchor**: the starting point of trust for path validation (term used by the RFC; gloss unsourced).

## Contradictions and uncertainties

- GAP: OCSP (RFC 6960), Certificate Transparency, later RFCs updating 5280.
- Partial read, single standard.

## Related

- [[TLS]] (what this adds: the certificate format; the TLS note's coverage of certificates was not checked), [[RSA]], [[Digital Signatures and EdDSA]], [[IPsec and VPN Concepts]]

## Sources

- [[RFC 5280 - X.509 PKI Certificate and CRL Profile]] - all claims.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
