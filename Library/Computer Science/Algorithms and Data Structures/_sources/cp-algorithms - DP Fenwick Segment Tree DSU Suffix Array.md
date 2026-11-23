---
title: cp-algorithms - Intro to DP, Fenwick Tree, Segment Tree, DSU, Suffix Array
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: blog
author: cp-algorithms community (translation of e-maxx.ru; Fenwick page lists contributors jakobkogler, madhur4127, ngthanhtrung23)
published: pages last updated 2026 (DP 2026-07-04; Fenwick 2026-11-11; DSU 2026-09-19); Fenwick created 2014-12-20
url: https://cp-algorithms.com/data_structures/fenwick.html
accessed: 2026-11-23
url-verified: true
tags: [source, fenwick-tree, segment-tree, suffix-array, dsu, dynamic-programming]
---

# cp-algorithms - Intro to DP, Fenwick Tree, Segment Tree, DSU, Suffix Array

Pages read (all on https://cp-algorithms.com): /data_structures/fenwick.html , /data_structures/segment_tree.html , /string/suffix-array.html , /data_structures/disjoint_set_union.html (only date and complexity line read), /dynamic_programming/intro-to-dp.html

## Why it is reliable (or not)

Widely used, open-source (CC BY-SA 4.0) competitive-programming reference maintained by many contributors. Level B: practical and correct in general but not peer-reviewed; code is C++. Use for definitions and complexity; pair with a Level A source (algs4 union-find for DSU).

## Extracted points

- Fenwick tree (Binary Indexed Tree): range query and point update O(log N), O(N) memory, linear-time build possible.
- Segment tree: "stores information about array intervals as a tree"; range query and point update O(log n), build O(n), memory linear (up to 4n slots in the standard layout).
- Suffix array: sorted starting indices of all suffixes; naive O(n^2 log n); doubling approach O(n log n) time, O(n) memory.
- DSU with path compression and union by size/rank: amortized O(alpha(n)), alpha the inverse Ackermann function.
- DP: "The essence of dynamic programming is to avoid repeated calculation"; top-down memoization vs bottom-up table; Fibonacci has only O(n) distinct subproblems.

## Relevant excerpts

> "The essence of dynamic programming is to avoid repeated calculation." (intro-to-dp)

> "A Segment Tree is a data structure that stores information about array intervals as a tree." (segment tree)

## Supports subtopics

8 (Fenwick, segment tree, suffix array, DSU); 7 (dynamic programming, memoization vs bottom-up).

## Used in

- [[Dynamic Programming]]
- [[Fenwick Tree and Segment Tree]]
- [[Suffix Array]]
- [[Union-Find]]

## History

- 2026-11-23: registered and read.
