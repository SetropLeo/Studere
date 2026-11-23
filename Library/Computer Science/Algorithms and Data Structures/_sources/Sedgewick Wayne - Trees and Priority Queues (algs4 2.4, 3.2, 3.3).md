---
title: Sedgewick Wayne - BSTs, Balanced Trees and Priority Queues (algs4 2.4, 3.2, 3.3)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Robert Sedgewick, Kevin Wayne
published: Algorithms, 4th edition (booksite pages undated)
url: https://algs4.cs.princeton.edu/33balanced/
accessed: 2026-11-23
url-verified: true
tags: [source, bst, red-black-tree, heap, priority-queue]
---

# Sedgewick Wayne - BSTs, Balanced Trees and Priority Queues (algs4 2.4, 3.2, 3.3)

Pages read: https://algs4.cs.princeton.edu/24pq/ , https://algs4.cs.princeton.edu/32bst/ , https://algs4.cs.princeton.edu/33balanced/

## Why it is reliable (or not)

Official booksite of a standard Princeton textbook. Level A. Covers left-leaning red-black BSTs (via 2-3 trees); AVL trees are NOT covered on these pages (gap: AVL needs another source).

## Extracted points

- Priority queue: insert and remove-the-maximum. Elementary array/list implementations make one of the operations linear in the worst case. Binary heap: heap-ordered tree (key at least as large as its two children), array layout from index 1 with parent k/2 and children 2k, 2k+1; swim and sink restore order; insert no more than 1 + lg n compares, remove-max no more than 2 lg n compares (upper bounds); heap construction with sinks is linear; heapsort uses fewer than 2 n lg n compares.
- BST: key larger than all keys in left subtree and smaller than all keys in right subtree; search hits in a BST of N random keys take ~ 2 ln N (about 1.39 lg N) compares; worst-case operations are proportional to height. (The page does NOT state that sorted insertion order produces a skewed tree; it mentions skew only after repeated Hibbard deletions, and insertion-order results cover random keys only.)
- 2-3 trees are perfectly balanced; search and insert visit at most lg N nodes. Red-black BSTs implement 2-3 trees with red links; height guarantee no more than 2 lg N.

## Relevant excerpts

> "the key in each node is larger than (or equal to) the keys in that nodes two children." (2.4, heap-ordered tree)

> "Search and insert operations in a 2-3 tree with N keys are guaranteed to visit at most lg N nodes." (3.3)

## Supports subtopics

4 (BSTs, red-black trees, heaps, priority queues); 5 (heapsort).

## Used in

- [[Binary Heap and Priority Queue]]
- [[Binary Search Tree]]
- [[Balanced Search Trees]]
- [[Sorting Algorithms]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: corrected extracted points: heap bounds are "no more than" (upper bounds, not "about"); removed unsupported "sorted insertion order produces a skewed tree".
