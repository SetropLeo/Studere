---
title: UTSA CS3343 Analysis of Algorithms Lecture 3 - Asymptotic Notation
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: not named on page (course hosted under D. Jimenez, UTSA CS3343)
published: undated
url: https://www.cs.utexas.edu/~djimenez/utsa/cs3343/lecture3.html
accessed: 2026-11-23
url-verified: true
tags: [source, growth-of-functions, big-o]
---

# UTSA CS3343 Analysis of Algorithms Lecture 3 - Asymptotic Notation

## Why it is reliable (or not)

University lecture notes, level B. Author and date are not stated on the page (attribution to D. Jimenez is inferred from the URL path only). Content matches CLRS-style definitions and agrees with the other sources. Use alongside A-level sources.

## Extracted points

- O(g): exist positive c, n0 with 0 <= f(n) <= c g(n) for all n >= n0 (upper bound).
- Omega(g): "0 <= cg(n) < f(n)" for all n >= n0 (lower bound; the strict inequality is literally on the page, a non-standard source quirk, not a fetch artifact).
- Theta(g): both O and Omega; equivalently c1 g(n) <= f(n) <= c2 g(n) for n >= n0.
- Worked: 3n^2 + 4n - 2 = O(n^2) with c = 6, n0 = 1. n^3 is not O(n^2) (would need n <= c for all large n).
- Selection sort: n^2 + 3n - 4 array accesses (the Theta(n^2) conclusion is the archivist's inference, not on the page).
- Drop lower-order terms and constants; 100n^2 < n^3 iff n > 100 (constants matter at small n).
- Use Theta whenever possible; a polynomial is bounded by an exponential (base c > 1).

## Relevant excerpts

> "0 <= f(n) <= cg(n) for all n >= n₀" (Big-Oh definition, as returned by fetch tool)

## Used in

- [[Asymptotic Notation and Growth of Functions]]
- [[_MOC Mathematical Foundations]] (pending)

## History

- 2026-11-23: registered and read.
- 2026-11-23: stage 2 fixes: strict inequality reworded as a source quirk; selection sort Theta marked inference; 100n^2 and polynomial/exponential statements qualified.
