---
title: Turing Machines
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Critchlow and Eck - Foundations of Computation - Ch5 Turing Machines and Computability]]", "[[SEP - The Church-Turing Thesis]]"]
tags: [finding, theory-of-computation]
---

# Turing Machines

> **Summary:** A Turing machine is a finite-state controller with an unbounded tape; it can compute functions, decide languages or merely accept them.

## What it is

Definition 5.1 (Critchlow and Eck): a Turing machine is (Q, Lambda, q0, delta), with a tape infinite in both directions, blank symbol #, and a halt state h. Each step reads a cell, writes, moves left or right, and changes state. A computation may never halt.
- Def 5.2: computes a function.
- Def 5.3: decides a language (halts with 1 or 0).
- Def 5.4: accepts a language (halts iff w is in L).
Every decidable language is acceptable. The page (5.2) says only that a one-tape machine can simulate a two-tape machine.

SEP (Church-Turing): the machine has a scanner on a one-dimensional tape of squares, a finite symbol set and finitely many internal states. Turing's universal machine can imitate any single-purpose Turing machine; the description is stored on the tape as a finite list of instructions.

## How it works

See [[Decidability and Recursively Enumerable Languages]] for deciding vs accepting, and [[The Halting Problem]] for the limit of what machines can do.

## Key terms

> **Universal Turing machine**: machine that runs the machine described on its tape (SEP).

## Example

Not worked in the sources read; own illustration omitted.

## Contradictions and uncertainties

- Two sources agree on the machine's shape; formal 4-tuple only from one. `debated`. Cross-source terminology differs (Turing's "m-configurations" vs states).

## Related

- [[Church-Turing Thesis]], [[Chomsky Hierarchy]], [[Pushdown Automata]]

## Sources

- [[Critchlow and Eck - Foundations of Computation - Ch5 Turing Machines and Computability]] — definitions 5.1 to 5.4.
- [[SEP - The Church-Turing Thesis]] — tape/scanner description, universal machine.

## History

- 2026-11-23: created.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: dropped "multi-tape" and "marker symbols" (page 5.2 only confirms one-tape simulating two-tape).
