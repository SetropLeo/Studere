---
title: Sedgewick Wayne - Analysis of Algorithms (Algorithms 4th ed., section 1.4)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Robert Sedgewick, Kevin Wayne
published: 2011 (4th edition; booksite page undated)
url: https://algs4.cs.princeton.edu/14analysis/
accessed: 2026-11-23
url-verified: true
tags: [source, growth-of-functions, algorithm-analysis]
---

# Sedgewick Wayne - Analysis of Algorithms (Algorithms 4th ed., section 1.4)

## Why it is reliable (or not)

Official booksite of a widely used university textbook (Princeton). Level A. Caveat: it uses tilde notation and "order of growth" rather than formal Big-O/Omega/Theta, so it supports the bridge to algorithm analysis, not the formal definitions. Publication year of the edition is from general knowledge, not read on the page (unverified on the page).

## Extracted points

- Cost is simplified by dropping low-order terms (tilde notation, ~ f(N)).
- The order of growth of a program's cost is one of "just a few functions" of input size N (the explicit list 1, log N, N, N log N, N^2, N^3, 2^N is from the textbook's table, which is an image and was not read as text).
- Worked example: ThreeSum is order N^3 (~ N^3/2 array accesses brute force); faster versions reach N^2 log N; N log N for sorting-based 2-sum.
- Big-Oh appears only informally in exercises ("Give an O(log N) algorithm"); Omega and Theta do not appear on this page.

## Relevant excerpts

> "the order of growth of the cost is one of just a few functions of the problem size N" (section 1.4)

> "Designing a O(N^2) algorithms should not be too difficult, but getting it down to O(N log N) requires some cleverness." (section 1.4 exercises)

## Used in

- [[Asymptotic Notation and Growth of Functions]]
- [[_MOC Mathematical Foundations]] (pending)
- [[Algorithm Analysis]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: stage 2 fixes: explicit order-of-growth list marked as image-only.
