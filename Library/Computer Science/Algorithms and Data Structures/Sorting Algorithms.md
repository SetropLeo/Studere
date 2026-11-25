---
title: Sorting Algorithms
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Sedgewick Wayne - Sorting (algs4 2.1 and 2.2)]]", "[[Open Data Structures - Chapter intros (arrays, sorting)]]", "[[Python Docs - Time Complexity of Built-in Types]]", "[[Sedgewick Wayne - Trees and Priority Queues (algs4 2.4, 3.2, 3.3)]]"]
tags: [finding, sorting, lower-bound]
---

# Sorting Algorithms

> **Summary:** Elementary sorts cost quadratic compares; mergesort and heapsort are O(n log n), and no compare-based sort can beat about N lg N in the worst case.

## What it is

> **Compare-based sort**: a sorting algorithm that learns about the order of keys only through comparisons.

## How it works

Claim-level confidence is given in brackets.
- Selection sort: ~n^2/2 compares and n exchanges (single source: algs4).
- Insertion sort: ~N^2/4 compares and exchanges on average (random distinct keys); worst case ~N^2/2; best case N-1 compares and 0 exchanges on sorted input; exchanges equal the number of inversions (single source: algs4). Best case on sorted input corresponds, in Python, to the adaptive behavior of `sort`: already sorted or reverse-sorted input takes only O(n) comparisons (Python docs; own link, the Python docs do not say it is insertion sort).
- Top-down mergesort: between 1/2 N lg N and N lg N compares; a divide-and-conquer example ([[Divide and Conquer and the Master Theorem]]).
- Heapsort: fewer than 2 n lg n compares ([[Binary Heap and Priority Queue]]).
- Lower bound [two sources agree]: "No compare-based sorting algorithm can guarantee to sort N items with fewer than lg(N!) ~ N lg N compares." (algs4 2.2, proposition without derivation on the page). ODS: comparison-based algorithms (merge sort, quicksort, heap sort) run in O(n log n) and are asymptotically optimal; no comparison-only algorithm can avoid roughly n log n comparisons in worst and average case.
- Beyond comparisons: array indexing allows sorting n integers in {0..n^c - 1} in O(cn) time (ODS; single source).
- Python `list.sort` is O(n log n) (Python docs).

```python
xs = [3, 1, 2]
xs.sort()   # O(n log n); O(n) comparisons if already sorted or reversed (Python docs)
```

## Key terms

> **Inversion**: a pair of keys that are out of order (standard meaning; the source states exchanges equal the number of inversions).

> **lg**: base-2 logarithm.

## Example

Insertion sort on sorted input: N-1 compares, 0 exchanges.

## Contradictions and uncertainties

- The lower bound is stated without derivation in both sources (decision-tree argument is not on the pages). Own pointer only: it relates to [[Function]]-growth of lg(N!) in [[Asymptotic Notation and Growth of Functions]]; not derived.
- **Gap: quicksort** (algs4 2.3 not read; ODS only names it), binary search as a searching topic, stability, and radix/counting sort details.
- Algs4 uses ~ counts; ODS and Python use Big-O: notation divergence recorded in [[Algorithm Analysis]].

## Related

- [[Algorithm Analysis]]
- [[Divide and Conquer and the Master Theorem]]
- [[Binary Heap and Priority Queue]]
- [[Loop Invariant and Algorithm Correctness]]
- [[Partial Order]] (sorting produces a total order; own remark)

## Sources

- [[Sedgewick Wayne - Sorting (algs4 2.1 and 2.2)]] — counts, lower bound.
- [[Open Data Structures - Chapter intros (arrays, sorting)]] — optimality, integer sorting.
- [[Python Docs - Time Complexity of Built-in Types]] — list.sort.
- [[Sedgewick Wayne - Trees and Priority Queues (algs4 2.4, 3.2, 3.3)]] — heapsort bound.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified).
