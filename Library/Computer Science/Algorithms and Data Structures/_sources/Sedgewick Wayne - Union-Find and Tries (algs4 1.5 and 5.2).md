---
title: Sedgewick Wayne - Union-Find and Tries (algs4 1.5 and 5.2)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Robert Sedgewick, Kevin Wayne
published: Algorithms, 4th edition (booksite pages undated)
url: https://algs4.cs.princeton.edu/15uf/
accessed: 2026-11-23
url-verified: true
tags: [source, union-find, trie]
---

# Sedgewick Wayne - Union-Find and Tries (algs4 1.5 and 5.2)

Pages read: https://algs4.cs.princeton.edu/15uf/ and https://algs4.cs.princeton.edu/52trie/

## Why it is reliable (or not)

Official booksite of a standard Princeton textbook. Level A. The tries page gives no cost formulas in the text read (mostly code links), so tries need a second source for complexity.

## Extracted points

- Union-find: quick-find (find is one array access; union costs between n+3 and 2n+1); quick-union (find costs 1 plus twice the node depth); weighted quick-union (depth at most lg n, so all operations logarithmic); with path compression the amortized cost is bounded by the inverse Ackermann function.
- Tries: R-way trie and ternary search trie (TST) as string symbol tables with prefix and wildcard matching; TST node count is independent of insertion order; goal stated as "as fast as hashing, more flexible than binary search trees".

## Relevant excerpts

> "The depth of any node in a forest built by weighted quick-union for n sites is at most lg n." (1.5)

> "the number of nodes in its TST is the same, regardless of the order in which the strings are inserted." (5.2)

## Supports subtopics

8 (union-find, tries); 6 (Kruskal uses union-find).

## Used in

- [[Union-Find]]
- [[Trie]]

## History

- 2026-11-23: registered and read.
