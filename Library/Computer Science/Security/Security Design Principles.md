---
title: Security Design Principles
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[OWASP - Secure Product Design Cheat Sheet]]"]
tags: [finding, security, principles]
---

# Security Design Principles

> **Summary:** OWASP's Secure Product Design cheat sheet lists design principles: least privilege, defense in depth, fail securely, secure defaults, zero trust and security in the open. Single source, community guidance (level B).

## What it is

> **Least privilege**: users get only the minimum access necessary to do their job; the source pairs it with separation of duties. Verbatim from the source: "users should only be given the minimum amount of access necessary to perform their job."

> **Defense in depth**: layered controls, so if one fails, others still protect the asset (paraphrase).

> **Fail securely**: design systems to fail in a secure state when they malfunction. Verbatim: "Design systems to fail in a secure state, rather than exposing vulnerabilities when they malfunction."

> **Secure defaults**: configure systems and software to be secure by default, with minimal manual setup or configuration required (close to the page wording).

> **Zero trust**: treat all users, devices and networks as untrusted and verify every request (paraphrase).

> **Security in the open**: the page says "Security-in-the-Open is a concept that emphasizes the importance of security in open source software development"; the emphasis is on developer awareness, secure coding and testing. The word "obscurity" does not appear on the page; reading it as "no security through obscurity" is an unsourced gloss (a common textbook idea, not an OWASP claim here).

## How it works

The principles are design-time rules that reduce the damage of any single mistake. They recur in other notes: least-privilege database accounts and layered controls appear in [[SQL Injection and Parameterized Queries]]; CSP as an extra layer in [[Cross-Site Scripting]]; root-user avoidance in [[Cloud Shared Responsibility and IAM]].

What this note ADDS to [[Access Control and Privilege]]: that note covers OS mechanisms (ACLs, capabilities, process IDs); here the principle is stated at design level. The link to OS-level enforcement is an own inference, not a claim of the OWASP source.

## Key terms

See the glosses above.

## Example

Own illustration: an application's database user limited to the tables it needs (least privilege) while the app also validates input (defense in depth).

## Contradictions and uncertainties

- The source note flags that this is a common textbook list and that foundational wording should be confirmed against a second source (Saltzer and Schroeder were not read). Hence `debated`.
- Page undated.

## Related

- [[Access Control and Privilege]], [[Threat Modeling and Risk]], [[Security Properties - Confidentiality, Integrity, Availability]]
- [[Kernel and User Mode]] (own inference: privilege separation between modes is an instance of least privilege; not sourced)

## Sources

- [[OWASP - Secure Product Design Cheat Sheet]] - all principles.

## History

- 2026-11-23: created (draft).
- 2026-11-23: wording fix after light verification: "security in the open" rewritten per the page (no "obscurity" on it); secure defaults now "minimal manual setup".
- 2026-11-23: light pass, single-source accepted per user decision (verifier; re-read OWASP page).
