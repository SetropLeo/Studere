---
title: Loop Invariant and Algorithm Correctness
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Cornell CS2112 - Loop Invariants]]"]
tags: [finding, correctness, loop-invariants]
---

# Loop Invariant and Algorithm Correctness

> **Summary:** A loop invariant is a property that holds at the start and end of every iteration; with a termination argument it proves that a loop is correct.

## What it is

> **Loop invariant**: a property that holds at the start and end of every iteration of a loop ([[Cornell CS2112 - Loop Invariants]]).

> **Loop variant**: a quantity that strictly decreases and is bounded below; it proves that the loop terminates.

> **Partial correctness**: if the loop terminates, the result is right. **Total correctness**: partial correctness plus termination.

## How it works

Proof steps in the source:
1. Establishment: the invariant is true just after initialization. The source says: "Show that the loop invariant is true just after loop initialization."
2. Preservation: if the invariant and the guard hold before the body, the invariant holds after it.
3. Postcondition: the invariant plus a false guard imply the intended result.

These three steps give partial correctness; adding termination via a loop variant gives total correctness.

The structure is an induction over iterations (own inference; the source does not say so): establishment is the base case, preservation is the inductive step. See [[Mathematical Induction]] and [[Induction and Recursion]].

## Key terms

> **Guard**: the loop condition that decides whether the body runs again.

## Example

Binary search invariant (source): three clauses: the array is sorted, 0 <= l <= r <= a.length-1, and the key k is in a[l..r]. Binary search as a search topic has no dedicated source in the library (gap).

## Contradictions and uncertainties

- Single source (Level B, no named author, 2019 course page). The source note says other courses (UAlberta, Wellesley, York) show the same three-part structure, but they were not opened. Hence `debated`.
- Correctness of recursive algorithms is not covered by a read source (own note: it would use induction, [[Induction and Recursion]]; unverified).

## Related

- [[Mathematical Induction]]
- [[Induction and Recursion]]
- [[Algorithm Analysis]]

## Sources

- [[Cornell CS2112 - Loop Invariants]] — definitions, proof steps, partial vs total correctness, binary search example.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified).
