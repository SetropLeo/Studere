---
title: Buffer Overflow and Memory Safety
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[OWASP Community - Buffer Overflow]]"]
tags: [finding, security, memory-safety]
---

# Buffer Overflow and Memory Safety

> **Summary:** A buffer overflow is writing more data to a fixed-size buffer than it holds, spilling into adjacent memory. Concept level only.

## What it is

OWASP Community: "A buffer overflow condition exists when a program attempts to put more data in a buffer than it can hold."

## How it works

Recorded in the source note:
- Consequences: crashes or denial of service, corrupted data, and (by overwriting control data) code execution.
- Languages such as Java and Python are described as immune by the page; caveat: the interpreter itself (written in a language that can overflow) can have such flaws, so the immunity applies to the programs it runs, not to the interpreter.
- Mitigations: bounds-checked languages, safe-string libraries, compiler protections (stack canaries), OS protections, input size checks, patching. No single one is complete.

> **Stack canary**: a compiler-inserted guard value (gloss, unsourced; the source only names it).

## Key terms

> **Memory safety**: the property that a program cannot access memory outside what it legitimately owns (gloss, unsourced).

## Example

Own illustration: copying a 100-byte string into a 64-byte array without a length check.

## Contradictions and uncertainties

- Single level-B community page, brief. Depth on stack layout, memory-safe-language guidance (e.g., CISA) is a gap.
- Link to OS notes is an own inference, not sourced: [[Paging and Virtual Memory]] describes per-program address spaces (one OS-level protection layer), and [[Kernel and User Mode]] describes privilege separation that limits what a compromised user program can do. Neither note discusses overflows.

## Related

- [[Paging and Virtual Memory]], [[Kernel and User Mode]], [[Security Design Principles]], [[Security Properties - Confidentiality, Integrity, Availability]]

## Sources

- [[OWASP Community - Buffer Overflow]] - all claims.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification: "largely immune" -> "described as immune" plus interpreter caveat.
