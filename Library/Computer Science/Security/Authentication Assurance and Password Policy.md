---
title: Authentication Assurance and Password Policy
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[NIST SP 800-63B-4 - Authentication and Authenticator Management]]", "[[CISA - Avoiding Social Engineering and Phishing Attacks]]"]
tags: [finding, security, authentication, mfa]
---

# Authentication Assurance and Password Policy

> **Summary:** NIST SP 800-63B-4 defines three Authentication Assurance Levels and sets password rules: length over composition, a blocklist, no forced periodic changes. Only 100,000 of 289,336 characters were read.

## What it is

> **AAL (Authentication Assurance Level)**: NIST's grading of authentication strength.
- AAL1: single or multi-factor.
- AAL2: two distinct factors; a phishing-resistant option must be offered.
- AAL3: two distinct factors, one of which is the phishing-resistant cryptographic authenticator (non-exportable key).

## How it works

Password rules (Rev. 4): at least 15 characters if the password is the only factor, at least 8 if used only inside multi-factor; the 15- and 8-character minimums are SHALL requirements; "Verifiers and CSPs SHOULD permit a maximum password length of at least 64 characters" (SHOULD, not SHALL); no composition rules; check against a blocklist; no periodic forced changes; password managers must be allowed. Verbatim: "Verifiers and CSPs SHALL NOT require subscribers to change passwords periodically." and "Verifiers and CSPs SHALL NOT impose other composition rules" (passwords). Biometrics only with a physical authenticator.

Reauthentication limits (mixed strength): AAL1 30 days; AAL2 24 h overall and 1 h inactivity; AAL3 12 h and 15 min. The AAL3 12 h limit is a SHALL; the other limits are SHOULD, including the AAL3 15 min inactivity timeout ("The inactivity timeout SHOULD be no more than 15 minutes"; NIST sets no separate factor requirement for it, and says AAL3 reauthentication requirements are the same as initial authentication at AAL3).

> **CSP**: credential service provider (gloss, unsourced).

## Key terms

See above.

## Contradictions and uncertainties

- UNRESOLVED: the source note records that Rev. 3 (older NIST 800-63B) used an 8-character minimum while Rev. 4 sets 15 for single-factor. The Rev. 3 text itself was not read; the divergence is recorded, not reconciled. Numbers are fast-changing: review-by 2027-11-23.
- The session-management section (Section 5) was not read; see [[Session Management]] (OWASP).
- Partial read of one standard; hence `debated`.

## Related

- [[Password Storage]], [[Session Management]], [[Social Engineering, Phishing and Malware]] (CISA also recommends multifactor authentication), [[Access Control and Privilege]] (authentication vs authorization), [[Cloud Shared Responsibility and IAM]]

## Sources

- [[NIST SP 800-63B-4 - Authentication and Authenticator Management]] - AALs, password rules.
- [[CISA - Avoiding Social Engineering and Phishing Attacks]] - MFA advice.

## History

- 2026-11-23: created (draft).
- 2026-11-23: wording fix after light verification: 64-character length is SHOULD (15/8 minimums SHALL); AAL3 two distinct factors made precise; reauthentication limits SHOULD/SHALL stated.
- 2026-11-23: light pass, single-source accepted per user decision (verifier; re-read live NIST page: 15/8 SHALL, 64 SHOULD, AAL3 12 h SHALL, AAL3 15 min inactivity SHOULD recorded).
