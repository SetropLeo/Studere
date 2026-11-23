---
title: OWASP - Threat Modeling Cheat Sheet
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: blog
author: OWASP Cheat Sheets Series Team
published: undated
url: https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, threat-model]
---

# OWASP - Threat Modeling Cheat Sheet

## Why it is reliable (or not)

OWASP is the reference community body for application security; the cheat sheets are peer-reviewed by volunteers, CC BY-SA 4.0. No publication or update date shown on the page. Community guidance, not a standard: level B.

## Extracted points

- Threat modeling is a structured, repeatable process: model the system, identify threats, decide the response; done early in design and kept current.
- Four key questions: what are we building, what can go wrong, what will we do about it, did we do a good job.
- STRIDE maps threats to violated properties: spoofing (authentication), tampering (integrity), repudiation (OWASP table: "Accounting"; "accountability" is an unsourced gloss), information disclosure (confidentiality), denial of service (availability), elevation of privilege (authorization).
- Also covers attack trees, misuse/abuse cases, LINDDUN (privacy).
- Risk: ranked by likelihood and impact (hard to compute); responses are mitigate, eliminate, transfer or accept; transferring does not reduce likelihood or consequence.

## Relevant excerpts

> "Threat modeling analyzes a system from an adversarial perspective" (introduction)

## Used in

- [[Threat Modeling and Risk]], [[Security Properties - Confidentiality, Integrity, Availability]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: wording fix after light verification: live table says only "Accounting"; "(accountability)" marked as unsourced gloss.
