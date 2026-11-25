---
title: Balanced Search Trees
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
tags: [finding, 2-3-tree, red-black-tree]
---

# Balanced Search Trees

> **Summary:** 2-3 trees are perfectly balanced; red-black BSTs implement them with red links and guarantee a height of at most 2 lg N.

## What it is

> **2-3 tree**: a search tree with 2-nodes and 3-nodes that stays perfectly balanced.

> **Red-black BST**: a binary search tree that implements a 2-3 tree using red links (the algs4 version is left-leaning).

## How it works

- "Search and insert operations in a 2-3 tree with N keys are guaranteed to visit at most lg N nodes." ([[Sedgewick Wayne - Trees and Priority Queues (algs4 2.4, 3.2, 3.3)]], section 3.3)
- Red-black BSTs: height no more than 2 lg N.
- They address the skewed-tree problem of the plain [[Binary Search Tree]].

## Key terms

> **Red link**: a link that glues a 3-node's two keys inside a binary tree (standard meaning; the source describes red links as the encoding of 2-3 trees).

## Example

Not covered by a source beyond the bounds above.

## Contradictions and uncertainties

- **Gap: AVL trees are not covered** by any source read (the algs4 pages do not cover them); another source is needed.
- Single source. `debated`. Node splitting and rotations are not recorded.

## Related

- [[Binary Search Tree]]
- [[Binary Heap and Priority Queue]]
- Planned area: Databases (balanced trees as index structures; not sourced).

## Sources

- [[Sedgewick Wayne - Trees and Priority Queues (algs4 2.4, 3.2, 3.3)]] — 2-3 trees, red-black bounds.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified).
