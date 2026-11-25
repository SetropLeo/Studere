---
title: OWASP - Password Storage Cheat Sheet
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: blog
author: OWASP Cheat Sheets Series Team
published: undated
url: https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, authentication, hashing]
review-by: 2027-05-23
---

# OWASP - Password Storage Cheat Sheet

## Why it is reliable (or not)

OWASP community guidance, industry standard reference. Parameter recommendations change over time: check the live page.

## Extracted points

- Hash passwords (one-way), do not encrypt them.
- Salt: unique random value per password; defeats rainbow tables, identical passwords give different hashes.
- Pepper: secret kept outside the database (vault/HSM).
- Algorithms: Argon2id preferred (min 19 MiB, t=2, p=1); scrypt N=2^17,r=8,p=1; bcrypt legacy (work factor at least 10, 72-byte limit); PBKDF2-HMAC-SHA-256 with 600,000+ iterations for FIPS.
- Work factor tuning (about under 1 s per hash); rehash on login to upgrade.

## Relevant excerpts

> "hashing is a one-way function" (reconfirmed 2026-11-23)

## Used in

- [[Password Storage]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: wording fix after light verification: key quote reconfirmed against the page; "as returned by page fetch" flag dropped.
