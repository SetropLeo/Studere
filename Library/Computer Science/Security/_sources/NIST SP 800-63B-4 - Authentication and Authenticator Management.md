---
title: NIST SP 800-63B-4 - Digital Identity Guidelines, Authentication and Authenticator Management
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: standard
author: NIST
published: 2025 (page timestamp 2025-08-26; exact publication date not stated on the page)
url: https://pages.nist.gov/800-63-4/sp800-63b.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, authentication, mfa]
review-by: 2027-11-23
---

# NIST SP 800-63B-4

## Why it is reliable (or not)

Official US standard, the reference for authentication policy. Revision 4 supersedes 800-63B (Rev 3). Only the first 100,000 of 289,336 characters were read; the session-management section (Section 5) was not read, so session claims need the OWASP Session Management note. Rev 3 numbers (8 character minimum) differ from Rev 4 (15 for single-factor).

## Extracted points

- Authentication Assurance Levels: AAL1 (single or multi-factor), AAL2 (two distinct factors; phishing-resistant option must be offered), AAL3 (phishing-resistant cryptographic authenticator with non-exportable key plus second factor).
- Password rules: at least 15 characters if single factor, at least 8 if used only inside multi-factor; verifiers and CSPs SHOULD permit a maximum length of at least 64 characters (15 and 8 minimums are SHALL); no composition rules; blocklist check; no periodic forced changes; password managers must be allowed.
- Biometrics only with a physical authenticator.
- Reauthentication limits recommended: AAL1 30 days; AAL2 24 h overall and 1 h inactivity; AAL3 12 h and 15 min.

## Relevant excerpts

> "Verifiers and CSPs SHALL NOT require subscribers to change passwords periodically."

> "Verifiers and CSPs SHALL NOT impose other composition rules" (passwords)

## Used in

- [[Authentication Assurance and Password Policy]]

## History

- 2026-11-23: registered and read (partially).
- 2026-11-23: wording fix after light verification: 64-character maximum length is SHOULD.
