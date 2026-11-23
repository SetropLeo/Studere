---
title: Fenwick Tree and Segment Tree
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[cp-algorithms - DP Fenwick Segment Tree DSU Suffix Array]]"]
tags: [finding, fenwick-tree, segment-tree, range-query]
---

# Fenwick Tree and Segment Tree

> **Summary:** Both structures answer range queries and apply point updates in O(log n); the Fenwick tree is smaller, the segment tree more general.

## What it is

> **Fenwick tree (Binary Indexed Tree)**: range query and point update in O(log N), O(N) memory, linear-time build possible.

> **Segment tree**: "A Segment Tree is a data structure that stores information about array intervals as a tree." Range query and point update O(log n), build O(n), memory linear (up to 4n slots in the standard layout).

([[cp-algorithms - DP Fenwick Segment Tree DSU Suffix Array]]; "more general" is own inference, not stated.)

## How it works

Mechanisms (bit tricks, node merging) were not extracted into the source note; only complexities. Practice left to stage 4.

## Key terms

> **Point update / range query**: change one element / ask an aggregate (such as a sum) over an interval (standard meaning).

## Example

Not given.

## Contradictions and uncertainties

- Single Level B source (community site, C++ code); no Level A source. **Gap:** second source needed. `debated`.

## Related

- [[Binary Search Tree]]
- [[Union-Find]]
- [[Dynamic Array and Linked List]] (array-based; own link)

## Sources

- [[cp-algorithms - DP Fenwick Segment Tree DSU Suffix Array]] — definitions, complexities.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified).
