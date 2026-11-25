---
title: Mathematical Induction
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Davies - A Cool Brisk Walk - Proof]]", "[[Critchlow and Eck - Foundations of Computation - Recursion and Induction]]"]
tags: [finding, proofs, induction]
---

# Mathematical Induction

> **Summary:** Induction proves a claim P(n) for all natural numbers: verify a base case, then show P(k) implies P(k+1). Strong induction assumes all smaller cases.

## What it is

> **Mathematical induction**: for a claim P(n) over natural numbers, (1) verify the base case, (2) show that P(k) implies P(k+1); in the step, P(k) is assumed, not proven ([[Davies - A Cool Brisk Walk - Proof]], 9.3).
> **Strong induction** (second form): assume P holds for all smaller cases; useful when a problem splits into smaller parts that are not exactly "one less" ([[Davies - A Cool Brisk Walk - Proof]], 9.3).

## How it works

- Simple induction: [[Critchlow and Eck - Foundations of Computation - Recursion and Induction]] proves "factorial(n) correctly computes n!" with base n = 0 and a step from k to k+1 (Theorem 1.14); Towers of Hanoi by induction on number of disks (Theorem 1.15). These claims were re-verified against the live page.
- Strong induction: the same source proves a tree-sum program correct by strong induction on the number of nodes, since subtrees can have any smaller size (Theorem 1.16).
- Number of base cases (archivist note, not from a read source): it must match how far back the step looks; if the step uses P(k-1) and P(k-2), two base cases are needed. Candidate source (to be read in stage 1): UW CSE 311 lecture17.
- The link with recursive programs is developed in [[Induction and Recursion]].
- Pointer only, not a citation: [[Hammack - Book of Proof]] Ch. 10 (table of contents: 10.1 Proof by Induction p.182, 10.2 Strong Induction p.187, 10.3 Smallest Counterexample p.191); chapter text not read.

## Key terms

> **Base case**: the simplest instance, verified directly.
> **Inductive step**: the proof that the claim for k gives the claim for k+1.
> **Inductive hypothesis**: the assumption P(k) used in the step.

## Example

Factorial correctness (above). A Python check of a formula for several n would only test, not prove; stage 4 can contrast the two.

## Contradictions and uncertainties

- Both read sources agree. Confidence `debated` until Hammack Ch. 10 is read or another read source is added.
- Structural induction, well-ordering and the smallest-counterexample method: not read (gap). MIT 6.1200J lecture: not readable.

## Related

- [[Induction and Recursion]], [[Direct Proof]], [[Proof by Contradiction]], [[Linear Recurrence Relations]]
- Cross-area (no note yet): recursion and recurrences in Algorithms and Data Structures.

## Sources

- [[Davies - A Cool Brisk Walk - Proof]] — base case, step, strong induction.
- [[Critchlow and Eck - Foundations of Computation - Recursion and Induction]] — worked program proofs.
- [[Hammack - Book of Proof]] — pointer only (not in frontmatter `sources`).

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: Critchlow and Eck factorial/Hanoi/TreeSum claims re-verified against the live page (Theorems 1.14-1.16), "recheck literal quotes" caveat removed; Hammack moved out of frontmatter sources (pointer, TOC confirms 10.1-10.3); added base-case-count note (own inference, candidate UW CSE 311 lecture17); strong induction wording "all smaller cases"; confidence established -> debated.
- 2026-11-23: verified (light pass, single-source accepted per user decision); Theorems 1.14-1.16 confirmed in _sources; base-case-count note remains labelled own inference.
