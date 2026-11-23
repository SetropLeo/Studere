---
title: Binary Heap and Priority Queue
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Sedgewick Wayne - Trees and Priority Queues (algs4 2.4, 3.2, 3.3)]]", "[[Open Data Structures - Chapter intros (arrays, sorting)]]"]
tags: [finding, heap, priority-queue, heapsort]
---

# Binary Heap and Priority Queue

> **Summary:** A priority queue supports insert and remove-the-maximum; a binary heap implements both in logarithmic compares and also gives heapsort.

## What it is

> **Priority queue**: a collection with operations insert and remove-the-maximum. Elementary array or list implementations make one of the operations linear in the worst case.

> **Heap-ordered tree**: "the key in each node is larger than (or equal to) the keys in that nodes two children." ([[Sedgewick Wayne - Trees and Priority Queues (algs4 2.4, 3.2, 3.3)]])

The parent-child ordering is a [[Partial Order]] on nodes along tree paths (own remark).

## How it works

- Array layout from index 1: parent of k at k/2; children at 2k and 2k+1.
- **Swim** and **sink** restore heap order after a change.
- Insert uses no more than 1 + lg n compares; remove-max no more than 2 lg n compares (upper bounds, algs4 2.4); heap construction with sinks is linear.
- Heapsort uses fewer than 2 n lg n compares. Open Data Structures lists heap sort among the O(n log n) comparison sorts (see [[Sorting Algorithms]]).
- Used by Prim's and Dijkstra's algorithms with E log V costs ([[Shortest Paths and Minimum Spanning Trees]]).

## Key terms

> **Swim / sink**: moving a key up (or down) the heap by exchanging with its parent (or larger child) until order is restored (standard meaning; the source names the operations).

## Example

Python's `heapq` is not covered by any source read; leave to stage 4/gap.

## Contradictions and uncertainties

- Bounds are from a single textbook source (Level A); ODS corroborates only that heap sort is O(n log n). `debated`.
- Gap: Python `heapq`, d-ary heaps, and min-heap convention are not in the sources.

## Related

- [[Sorting Algorithms]]
- [[Shortest Paths and Minimum Spanning Trees]]
- [[Binary Search Tree]]
- [[Partial Order]]
- [[Stack and Queue]]

## Sources

- [[Sedgewick Wayne - Trees and Priority Queues (algs4 2.4, 3.2, 3.3)]] — heap definition, layout, costs.
- [[Open Data Structures - Chapter intros (arrays, sorting)]] — heap sort in the O(n log n) group.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass NOT passed, left draft: insert/remove-max bounds are "no more than 1 + lg n" / "no more than 2 lg n" in algs4 2.4, not "about"; fix wording.
- 2026-11-23: fixed wording to "no more than" upper bounds; left draft for re-verification.
- 2026-11-23: light pass, single-source accepted per user decision (verified).
