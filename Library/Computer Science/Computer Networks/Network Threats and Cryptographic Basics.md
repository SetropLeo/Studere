---
title: Network Threats and Cryptographic Basics
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Bonaventure - Computer Networking Principles Protocols and Practice]]", "[[Peterson and Davie - Computer Networks A Systems Approach]]", "[[RFC 8446 - TLS 1.3]]"]
tags: [finding, networking, security]
---

# Network Threats and Cryptographic Basics

> **Summary:** Bonaventure lists the threats (eavesdropping, MITM, DoS/DDoS, reflection/amplification, replay) and crypto primitives including authenticated Diffie-Hellman. Peterson and Davie frame security as trust and risk management.

## What it is

- Threats (Bonaventure security.html): eavesdropping, MITM (man in the middle), DoS and DDoS (denial of service, distributed), reflection and amplification, replay. Primitives and authenticated Diffie-Hellman are named; details not recorded. [[Bonaventure - Computer Networking Principles Protocols and Practice]]
- Peterson and Davie (8.1 only): threats versus trust, no perfect security, risk management. [[Peterson and Davie - Computer Networks A Systems Approach]]
- Goals of a secure channel (TLS): confidentiality, integrity (Sec. 1); the Abstract of RFC 8446 adds that TLS is designed to prevent eavesdropping, tampering and message forgery. [[RFC 8446 - TLS 1.3]]

## How it works

Own inference (not stated by the sources): public-key schemes build on number theory, see [[Modular Arithmetic]], [[RSA]] and [[Divisibility and GCD]]; hashing relates to [[Hash Table]] only by name (hash functions differ in purpose; analogy, weak).

## Key terms

> **Replay**: re-sending a captured valid message (gloss, unsourced).

## Example

None.

## Contradictions and uncertainties

- **Firewalls: no readable source** (NIST SP 800-41r1 is registered, PDF unread, so not used): gap. VPN: gap, see [[IPsec and VPN Concepts]]. A planned Security area is not in the library yet.

## Related

- [[TLS]], [[IPsec and VPN Concepts]], [[NAT]], [[Modular Arithmetic]], [[RSA]], [[Divisibility and GCD]]

## Sources

- [[Bonaventure - Computer Networking Principles Protocols and Practice]] - threat list
- [[Peterson and Davie - Computer Networks A Systems Approach]] - trust, risk
- [[RFC 8446 - TLS 1.3]] - channel goals

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification (eavesdropping/tampering/forgery wording located in the RFC 8446 Abstract, not Sec. 1).
