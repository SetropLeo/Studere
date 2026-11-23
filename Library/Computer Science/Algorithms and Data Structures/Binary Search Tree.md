---
title: Binary Search Tree
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Sedgewick Wayne - Trees and Priority Queues (algs4 2.4, 3.2, 3.3)]]"]
tags: [finding, bst]
---

# Binary Search Tree

> **Summary:** A BST keeps keys ordered so that search follows one path; cost is proportional to the tree height, which depends on insertion order.

## What it is

> **Binary search tree (BST)**: a binary tree where the key in each node is larger than all keys in its left subtree and smaller than all keys in its right subtree ([[Sedgewick Wayne - Trees and Priority Queues (algs4 2.4, 3.2, 3.3)]]).

## How it works

- Worst-case operations are proportional to the height.
- Search hits in a BST built from N random keys take about 2 ln N (about 1.39 lg N) compares.
- Because cost is proportional to height, keeping the height small is what matters; balanced variants guarantee this: [[Balanced Search Trees]].
- Own inference (standard result, not stated by the cited page): sorted insertion order degenerates the tree toward a list, giving linear height. The page only gives random-key results.
- Contrast with a heap, which orders only parent to child: [[Binary Heap and Priority Queue]].

## Key terms

> **Height**: length of the longest path from the root to a leaf (standard meaning; the source uses height for the worst-case cost).

> **Skewed tree**: a tree degenerated toward a list (standard meaning; not defined on the cited page).

## Example

Inserting 1, 2, 3, ..., N in order gives a chain of height N (own inference, standard result; not stated by the cited page).

## Contradictions and uncertainties

- Single source. `debated`. Deletion, traversals, and ordered operations are not recorded (gaps).
- Gap: no source for sorted-insertion degeneration (algs4 32bst mentions skew only after repeated Hibbard deletions, and insertion-order results only for random keys).

## Related

- [[Balanced Search Trees]]
- [[Binary Heap and Priority Queue]]
- [[Trie]]
- [[Relation]] (ordering of keys; own remark)

## Sources

- [[Sedgewick Wayne - Trees and Priority Queues (algs4 2.4, 3.2, 3.3)]] — BST property, costs.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass NOT passed, left draft: "sorted insertion order produces a skewed tree" is not stated on algs4 32bst (re-read 2026-11-23); fix by removing/attributing as own inference.
- 2026-11-23: light pass, single-source accepted per user decision (verified).
