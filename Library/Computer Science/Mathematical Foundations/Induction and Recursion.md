---
title: Induction and Recursion
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Critchlow and Eck - Foundations of Computation - Recursion and Induction]]", "[[Davies - A Cool Brisk Walk - Proof]]"]
tags: [finding, proofs, recursion]
---

# Induction and Recursion

> **Summary:** A recursive function and an inductive proof have the same shape: a base case and a step that reduces to smaller cases. [[Critchlow and Eck - Foundations of Computation - Recursion and Induction]] uses induction to prove recursive programs correct.

## What it is

> **Recursion**: defining or computing something in terms of smaller instances of itself.

[[Critchlow and Eck - Foundations of Computation - Recursion and Induction]] (page read; Theorems 1.14, 1.15, 1.16) presents recursion as closely related to induction (a paraphrase, not a literal quote): the inductive case corresponds to the recursive call, and the base case prevents an infinite chain of calls.

[[Davies - A Cool Brisk Walk - Proof]] (9.3) calls induction "proof by recursion" and draws a tree-traversal analogy: the work is deferred to smaller cases, with the base case handling the simplest instance. (The comparison "like a recursive function" is not in Davies and was dropped.)

## How it works

Prove P(n) = "the function is correct on input n":

- base case = the non-recursive branch;
- inductive step = assume the recursive call is correct (hypothesis), show the whole call is correct.

Caveat (archivist addition, own inference, not in the sources read): induction as above proves partial correctness (if the call returns, the result is right); termination (well-foundedness of the recursion) is argued separately.

Worked in the source: factorial (simple induction), Towers of Hanoi (induction on disks), TreeSum (strong induction on node count). Exercises mentioned: recursive power function, leaf counting in binary trees, sorted printing of binary sort trees. See [[Mathematical Induction]].

## Key terms

> **Base case**: the branch that does not recurse.
> **Recursive call / inductive step**: the use of the same claim on a smaller instance.

## Example

A Python `def fact(n): return 1 if n == 0 else n * fact(n-1)` mirrors the factorial proof in the source (the source's code is not reproduced; this is an illustration idea for stage 4).

## Contradictions and uncertainties

- Structural induction is not covered (gap). Confidence `debated`: it is acceptable as `established` only for what the two read sources say; the termination caveat and the framing are not sourced. Candidate second sources (to be read in stage 1): Toronto CSC236 l7-b; UW CSE 311 16-induction.pdf; Cornell CS2110 L20.

## Related

- [[Mathematical Induction]], [[Linear Recurrence Relations]]
- Cross-area (no note yet): recursion and recurrences in Algorithms and Data Structures.

## Sources

- [[Critchlow and Eck - Foundations of Computation - Recursion and Induction]] — recursion-induction correspondence, program proofs.
- [[Davies - A Cool Brisk Walk - Proof]] — "proof by recursion" view.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: removed "paraphrased by fetch tool" caveat (page now read); "closely related to induction" unquoted; dropped "like a recursive function" (not in Davies), kept tree-traversal analogy; "natural tool" framing attributed to Critchlow and Eck; added termination/partial-correctness caveat (own inference); candidate second sources recorded; confidence established -> debated.
- 2026-11-23: verified (light pass, single-source accepted per user decision); "recursive function" attribution to Davies confirmed removed; termination caveat remains labelled own inference.
