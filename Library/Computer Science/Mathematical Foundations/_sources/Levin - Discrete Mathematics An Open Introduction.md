---
title: Levin - Discrete Mathematics An Open Introduction (3rd ed.)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Oscar Levin
published: 3rd edition (year not stated on pages read)
url: https://discrete.openmathbooks.org/dmoi3/ch_counting.html
accessed: 2026-11-23
url-verified: true
tags: [source, combinatorics, recurrence]
---

# Levin - Discrete Mathematics: An Open Introduction (3rd ed.)

## Why it is reliable (or not)

Open university textbook by a mathematics professor, written for an introductory discrete math course (beginner friendly). Textbook = level A. Publication year not shown on the pages read. Pages read: ch_counting, sec_counting-binom, sec_counting-combperm, sec_recurrence. Pigeonhole is not covered in the pages read (use Guichard).

## Extracted points

- Chapter 1 Counting: additive/multiplicative principles, binomial coefficients, combinations and permutations, combinatorial proofs, stars and bars, PIE.
- Permutation = rearrangement; P(n,k) = n!/(n-k)!, order matters.
- Combination (binomial coefficient) = choose k of n, order ignored; C(n,k) = n!/((n-k)! k!); P(n,k) = C(n,k)*k!.
- A recurrence relation is a recursive definition without the initial conditions. Linear homogeneous recurrence with constant coefficients: each term a linear combination of "some number of previous terms" ("fixed" was not Levin's word). Levin switches sign conventions between boxes. Example a_n = 2a_{n-1} + 1 is not homogeneous.
- Characteristic root technique: for a_n + alpha a_{n-1} + beta a_{n-2} = 0, solve x^2 + alpha x + beta = 0. Distinct roots r1, r2: a_n = a r1^n + b r2^n; repeated root r: a_n = a r^n + b n r^n; constants from initial conditions.
- Fibonacci F_n = F_{n-1} + F_{n-2}, F_0=0, F_1=1, solved by characteristic roots (golden ratio); the closed form is not written out.

## Relevant excerpts

> "A permutation is a (possible) rearrangement of objects." (1.3)

> "We are just selecting (or choosing) the k objects, not arranging them." (1.3)

> "a recursive definition without the initial conditions" (2.4, definition of recurrence relation)

## Used in

- [[Permutations and Combinations]], [[Linear Recurrence Relations]]

## History

- 2026-11-23: registered and read (researcher).
- 2026-11-23: stage 2 fixes: "fixed number" wording corrected; sign-convention caution and Fibonacci closed-form remark added.
