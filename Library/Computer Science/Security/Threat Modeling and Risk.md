---
title: Threat Modeling and Risk
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[OWASP - Threat Modeling Cheat Sheet]]"]
tags: [finding, security, threat-model]
---

# Threat Modeling and Risk

> **Summary:** Threat modeling is a structured, repeatable process: model the system, identify threats, decide the response. OWASP frames it with four questions, uses STRIDE to categorize threats, and ranks risk by likelihood and impact.

## What it is

Per OWASP, threat modeling analyzes a system from an adversarial perspective (verbatim from the introduction: "Threat modeling analyzes a system from an adversarial perspective"). It is done early in design and kept current.

## How it works

The four key questions: what are we building; what can go wrong; what will we do about it; did we do a good job.

> **STRIDE**: Spoofing (violates authentication), Tampering (integrity), Repudiation (OWASP's label: "Accounting"; the gloss "accountability" is unsourced), Information disclosure (confidentiality), Denial of service (availability), Elevation of privilege (authorization).

Risk is ranked by likelihood and impact (OWASP notes this is hard to compute). Responses: mitigate, eliminate, transfer or accept; transferring does not reduce likelihood or consequence.

Other techniques named on the page (attack trees, misuse/abuse cases, LINDDUN for privacy) were only listed in the source note, not detailed.

## Key terms

> **Attack tree**, **LINDDUN**: named by the source; definitions not recorded (gap).

## Example

Own illustration: for a login form, "what can go wrong" yields spoofing (stolen credentials) and denial of service (lockout abuse); the response may be mitigation by multifactor authentication (see [[Authentication Assurance and Password Policy]]).

## Contradictions and uncertainties

- Single level-B source, undated; no formal standard (e.g., NIST) read. Hence `debated`.
- Quantitative risk scoring methods not covered.

## Related

- [[Security Properties - Confidentiality, Integrity, Availability]], [[Security Design Principles]], [[Privacy Concepts]] (LINDDUN is privacy-oriented, per source)
- [[Network Threats and Cryptographic Basics]]

## Sources

- [[OWASP - Threat Modeling Cheat Sheet]] - all claims.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification: STRIDE "R" given as OWASP's label "accounting (accountability)".
- 2026-11-23: wording fix after light verification: live OWASP table says only "Accounting"; "(accountability)" marked as unsourced gloss.
