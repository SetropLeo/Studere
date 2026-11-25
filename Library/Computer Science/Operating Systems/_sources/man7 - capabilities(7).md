---
title: man7 - capabilities(7)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux man-pages project
published: living page (no date)
url: https://man7.org/linux/man-pages/man7/capabilities.7.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# man7 - capabilities(7)

## Why it is reliable (or not)

Official Linux man-pages. Note: Linux "capabilities" are privilege units, distinct from the object-capability model in textbooks (see Wisc CS 537 protection note).

## Extracted points

- Traditionally UID 0 bypasses kernel permission checks; since Linux 2.2 root's power is split into independent per-thread capabilities.
- Capabilities can override DAC (e.g. CAP_DAC_OVERRIDE), allowing least privilege.

## Relevant excerpts

> "Privileged processes bypass all kernel permission checks." (DESCRIPTION)

> "Bypass file read, write, and execute permission checks." (CAP_DAC_OVERRIDE)

## Used in

- Subtopic 8 (Protection and security: privilege)

## Used in findings

- [[Access Control and Privilege]]

## History

- 2026-11-23: registered and read.
