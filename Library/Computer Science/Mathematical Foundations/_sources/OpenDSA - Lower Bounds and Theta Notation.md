---
title: OpenDSA - Lower Bounds and Theta Notation
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: book
author: OpenDSA Project Contributors (Virginia Tech CS3 Data Structures and Algorithms open textbook)
published: undated
url: https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/AnalLower.html
accessed: 2026-11-23
url-verified: true
tags: [source, growth-of-functions, big-omega, big-theta]
---

# OpenDSA - Lower Bounds and Theta Notation

## Why it is reliable (or not)

Open interactive textbook from an academic project (MIT license, Virginia Tech course). Level B (university course material; individual authors not named on the page, undated). Good for beginners. Only this section was read; the companion upper-bound page (AlgAnal.html) returned 404 and was not used.

## Extracted points

- Big-Oh = upper bound, Omega = lower bound, Theta = both match within constant factors.
- Omega: constants c and n0 with T(n) >= c g(n) for all n > n0.
- Theta: algorithm is Theta(h(n)) if both O(h(n)) and Omega(h(n)); OpenDSA prefers Theta when analysis supports it.
- Some problems have no known Theta (NP-complete problems have only O and Omega analyses; Collatz fragment unknown).
- Bounds (upper/lower) and cases (worst/average/best) are separate choices: a bound applies to a specified input class.
- Divergence noted inside the source: an alternate Omega definition ("for an infinite number of values of n") that is not symmetric with Big-Oh and handles e.g. an algorithm quadratic only on even n.
- Asymptotic notation described as "a powerful modeling tool" (the "not absolute truth" reading is a gloss, not the page's wording).
- Theta is given only as "both O and Omega" (no two-constant c1, c2 form).

## Relevant excerpts

> "T(n) is in set Ω(g(n)) if there exist two positive constants c and n₀ such that T(n) ≥ c g(n) for all n > n₀." (Lower Bounds and Theta Notation; as returned by the fetch tool, rendering of symbols may differ from the page)

## Used in

- [[Asymptotic Notation and Growth of Functions]]
- [[_MOC Mathematical Foundations]] (pending)

## History

- 2026-11-23: registered and read.
- 2026-11-23: stage 2 fixes: "not absolute truth" unquoted; Theta form clarified.
