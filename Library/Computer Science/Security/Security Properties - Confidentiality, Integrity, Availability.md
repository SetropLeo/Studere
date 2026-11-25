---
title: Security Properties - Confidentiality, Integrity, Availability
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[NIST CSRC Glossary - Information Security and CIA]]", "[[OWASP - Threat Modeling Cheat Sheet]]"]
tags: [finding, security]
---

# Security Properties - Confidentiality, Integrity, Availability

> **Summary:** Information security is defined by NIST as protecting information and systems, and it is commonly broken into three properties: confidentiality, integrity and availability. Definitions below paraphrase the NIST glossary (which cites 44 U.S.C. 3542 via SP 800-66r2).

## What it is

> **Confidentiality**: preserving authorized restrictions on information access and disclosure (NIST glossary, paraphrased).

> **Integrity**: "guarding against improper information modification or destruction" (SP 800-66r2, citing 44 U.S.C. 3542; exact words of the source note).

> **Availability**: ensuring timely and reliable access to and use of information (same).

> **Information security**: protecting information and information systems from unauthorized access, use and disclosure; the glossary text continues beyond the page excerpt to disruption, modification and destruction.

The integrity and availability wording is recorded verbatim in the source note; the confidentiality wording is a paraphrase of the extracted point.

## How it works

The three properties are goals against which controls and threats are judged. The [[Threat Modeling and Risk]] note shows STRIDE pairing each threat category with the property it violates: tampering with integrity, information disclosure with confidentiality, denial of service with availability (the other three STRIDE letters map to authentication, accounting and authorization per OWASP's Threat Modeling table).

## Key terms

> **CIA triad**: the common name for the three properties. The name itself is gloss, unsourced; the NIST page defines the three terms.

## Example

Own illustration: a database backup readable by everyone breaks confidentiality; a row silently altered breaks integrity; a server taken offline breaks availability.

## Contradictions and uncertainties

- Only one source (NIST glossary, US-centric). Definitions are legal/US-standards wording; other frameworks were not read.
- The glossary page was read only up to the excerpt; the full continuation of "information security" was not captured.

## Related

- [[Threat Modeling and Risk]], [[Security Design Principles]]
- [[Access Control and Privilege]] (authorization as enforcement mechanism)
- [[Network Threats and Cryptographic Basics]]
- [[Cryptographic Hash Functions and HMAC]] (integrity tools), [[Symmetric Encryption and AES]] (confidentiality tool)

## Sources

- [[NIST CSRC Glossary - Information Security and CIA]] - the three definitions.
- [[OWASP - Threat Modeling Cheat Sheet]] - STRIDE-to-property mapping.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification: integrity definition quoted exactly; STRIDE R label "accounting (accountability)".
- 2026-11-23: verifier: live OWASP Threat Modeling page table says only "Accounting" (no parenthetical); prose line changed from "accountability" to "accounting".
