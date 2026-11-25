---
title: Permutations and Combinations
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Levin - Discrete Mathematics An Open Introduction]]", "[[Guichard - Combinatorics and Graph Theory]]", "[[MIT OCW 6.042J Mathematics for Computer Science]]"]
tags: [finding, combinatorics]
---

# Permutations and Combinations

> **Summary:** A permutation counts arrangements (order matters); a combination counts selections (order ignored). Two independent level A textbooks give the same formulas.

## What it is

> **Permutation**: "a (possible) rearrangement of objects" ([[Levin - Discrete Mathematics An Open Introduction]], 1.3); "a particular linear ordering of the objects" ([[Guichard - Combinatorics and Graph Theory]], 1.2).
> **Combination** (binomial coefficient): choosing k of n objects, "not arranging them" (Levin).

## How it works

- P(n,k) = n!/(n-k)! (both sources). 0! = 1 (Guichard).
- C(n,k) = n!/((n-k)! k!) (Levin) = P(n,k)/k!, because each k-subset is counted k! times in P(n,k) (Guichard).
- Equivalently P(n,k) = C(n,k) * k! (Levin).
- Levin's counting chapter also lists additive and multiplicative principles, combinatorial proofs, stars and bars and inclusion-exclusion (PIE); only named, not read in detail.
- Counting is a standard part of a CS maths course ([[MIT OCW 6.042J Mathematics for Computer Science]], course description only).

## Key terms

> **Factorial (n!)**: the product 1*2*...*n, with 0! = 1.
> **Binomial coefficient C(n,k)**: number of k-element subsets of an n-element [[Set]].

## Example

Python's standard library has counting helpers, but the sources do not mention them; leave for stage 4.

## Contradictions and uncertainties

- No divergence. Formulas and 0! = 1 verified against Levin and Guichard. Full text of the MIT counting chapters was not read (PDF too large); MIT OCW is scope only.
- Optional candidate independent confirmation (to be read in stage 1): MIT 6.042J Fall 2005 ln10; MCS counting chapter.
- The "Example" section is intentionally empty of sourced content: recorded gap.
- Used with [[Pigeonhole Principle]] and [[Linear Recurrence Relations]] as the combinatorics topic; stars and bars and PIE detail is a gap.

## Related

- [[Pigeonhole Principle]], [[Linear Recurrence Relations]], [[Set]]

## Sources

- [[Levin - Discrete Mathematics An Open Introduction]] — definitions and formulas.
- [[Guichard - Combinatorics and Graph Theory]] — independent confirmation, subset-counting argument.
- [[MIT OCW 6.042J Mathematics for Computer Science]] — curriculum scope only.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 check after verification: formulas confirmed OK against Levin and Guichard; recorded optional candidate confirmations; MIT OCW stated as scope only; no change of confidence.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
