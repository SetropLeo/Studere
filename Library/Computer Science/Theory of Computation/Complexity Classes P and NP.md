---
title: Complexity Classes P and NP
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[SEP - Computational Complexity Theory]]"]
tags: [finding, theory-of-computation, complexity]
---

# Complexity Classes P and NP

> **Summary:** P holds decision problems solvable in polynomial time by a deterministic Turing machine; NP holds those solvable in polynomial time by a nondeterministic one, equivalently those with polynomial-size verifiable certificates.

## What it is

Per SEP (Computational Complexity Theory; only the first ~100k of ~227k characters read): P = decidable by a deterministic TM in polynomial time, taken as the formal standard of feasibility. NP = decidable by a nondeterministic TM in polynomial time, equivalently verifiable with a polynomial-size certificate. A polynomial-time many-one reduction X <=_P Y uses a polynomial-time computable f with x in X iff f(x) in Y; it is transitive.

## How it works

Own inference: "polynomial" is measured with the growth classes in [[Asymptotic Notation and Growth of Functions]]; and [[Algorithm Analysis]] supplies the running-time counting. SEP read portion does not link to these notes.

## Key terms

> **Certificate**: a polynomial-size witness that lets a deterministic machine check a yes-instance in polynomial time (SEP).

> **Many-one reduction**: see above.

## Example

PRIMES, SAT, TSP are SEP's examples of decision problems ([[Alphabets, Strings and Languages]]).

## Contradictions and uncertainties

- Single source; no other read source. `debated`.
- Own inference: [[Dynamic Programming]] yields polynomial algorithms for some problems; not discussed by SEP in the portion read.

## Related

- [[NP-Completeness and Cook-Levin]], [[Space Complexity and Complexity Hierarchy]], [[Turing Machines]]

## Sources

- [[SEP - Computational Complexity Theory]] — definitions of P, NP, reductions.

## History

- 2026-11-23: created.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
