---
title: The Halting Problem
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Critchlow and Eck - Foundations of Computation - Ch5 Turing Machines and Computability]]"]
tags: [finding, theory-of-computation]
---

# The Halting Problem

> **Summary:** No Turing machine decides whether a given Turing machine halts on a given input; the book proves this by contradiction.

## What it is

The book (5.3) phrases it as: given a Turing machine T_n, decide whether T_n halts when run with input a^n. It is proved unsolvable by a diagonal-style argument: from a hypothetical decider H one builds a machine M that loops when H says it halts. The set K is r.e. (shown using a generator G and a universal machine U).

Other undecidable problems are listed without proof: whether a program halts on all inputs, halts on a given input, whether two programs are equivalent, halts on a blank tape.

## How it works

Details of the construction of M beyond the above are not recorded in the source note.

## Key terms

> **Undecidable problem**: no algorithm (Turing machine) decides it always correctly (gloss, unsourced).

## Example

See above; own illustration omitted.

## Contradictions and uncertainties

- Gap: reductions (the page does not use the word) and Rice's theorem are not covered, so the other undecidability claims have no proof here.
- Single source, `debated`.

## Related

- [[Decidability and Recursively Enumerable Languages]], [[Turing Machines]], [[Church-Turing Thesis]], [[Complexity Classes P and NP]] (reductions appear there only as polynomial-time many-one reductions; own link, different notion)

## Sources

- [[Critchlow and Eck - Foundations of Computation - Ch5 Turing Machines and Computability]] — section 5.3.

## History

- 2026-11-23: created.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
