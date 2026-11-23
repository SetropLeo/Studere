---
title: OWASP Community - Buffer Overflow
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: blog
author: OWASP community
published: undated
url: https://community.owasp.org/vulnerabilities/Buffer_Overflow
accessed: 2026-11-23
url-verified: true
tags: [source, security, appsec, memory-safety]
---

# OWASP Community - Buffer Overflow

## Why it is reliable (or not)

OWASP community wiki page (level B); concept-level, brief and somewhat dated in tone. Memory-safety is a thin area: a deeper source (OS/architecture course notes on stack layout, or CISA memory-safe-languages guidance) would be a useful second source.

## Extracted points

- Overflow: writing more data than a fixed-size buffer holds; spills into adjacent memory.
- Consequences: crashes/denial of service, corrupted data, code execution by overwriting control data.
- Languages like Java and Python described as "immune" by the page (the interpreter itself can still overflow).
- Mitigations: bounds-checked languages, safe-string libraries, compiler protections (stack canaries), OS protections, input size checks, patching. None is complete alone.

## Relevant excerpts

> "A buffer overflow condition exists when a program attempts to put more data in a buffer than it can hold."

## Used in

- [[Buffer Overflow and Memory Safety]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: wording fix after light verification: "described as immune" with interpreter caveat.
