---
title: OWASP - Secure Product Design Cheat Sheet
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: blog
author: OWASP Cheat Sheets Series Team
published: undated
url: https://cheatsheetseries.owasp.org/cheatsheets/Secure_Product_Design_Cheat_Sheet.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, principles]
---

# OWASP - Secure Product Design Cheat Sheet

## Why it is reliable (or not)

OWASP community guidance (level B); undated page. The principles are a common textbook list, so confirm foundational wording against a second source (Saltzer and Schroeder, or the Wisc CS 537 Protection notes already in the library under Operating Systems).

## Extracted points

- Least privilege (with separation of duties): minimum access needed for the job.
- Defense in depth: layered controls so that if one fails, others still protect the asset.
- Fail securely: default to a safe state on malfunction.
- Secure defaults: secure by default, with minimal manual setup or configuration required.
- Zero trust: treat all users, devices and networks as untrusted; verify every request.
- Security in the open: "Security-in-the-Open is a concept that emphasizes the importance of security in open source software development" (developer awareness, secure coding, testing). The page never uses the word "obscurity"; the earlier "no security through obscurity" reading was an unsourced gloss.

## Relevant excerpts

> "users should only be given the minimum amount of access necessary to perform their job." (Least Privilege)

> "Design systems to fail in a secure state, rather than exposing vulnerabilities when they malfunction." (Fail Securely)

## Used in

- [[Security Design Principles]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: wording fix after light verification: security in the open and secure defaults aligned with the page text.
