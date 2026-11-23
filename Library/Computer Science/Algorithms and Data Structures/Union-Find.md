---
title: Union-Find
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Sedgewick Wayne - Union-Find and Tries (algs4 1.5 and 5.2)]]", "[[cp-algorithms - DP Fenwick Segment Tree DSU Suffix Array]]"]
tags: [finding, union-find, dsu]
---

# Union-Find

> **Summary:** Union-find (disjoint set union, DSU) maintains a partition of elements; weighted quick-union plus path compression gives nearly constant amortized cost, bounded by the inverse Ackermann function.

## What it is

> **Union-find / DSU**: a structure with operations find (which set contains x) and union (merge two sets). It maintains an [[Equivalence Relation]] (connectivity; own remark).

## How it works

algs4 1.5:
- Quick-find: find is one array access; union costs between n+3 and 2n+1.
- Quick-union: find costs 1 plus twice the node depth.
- Weighted quick-union: "The depth of any node in a forest built by weighted quick-union for n sites is at most lg n." So all operations are logarithmic.
- The inverse-Ackermann bound is stated by algs4 for weighted quick-union with path compression (Creative Problem 4); plain quick-union with path compression is described there as logarithmic, not inverse-Ackermann.

cp-algorithms: with path compression and union by size/rank, amortized O(alpha(n)), alpha the inverse Ackermann function. Two sources agree on this final bound (the only claim here with 2 sources).

Used by Kruskal's algorithm ([[Shortest Paths and Minimum Spanning Trees]]) and connectivity ([[Graph Representations and Traversal]]). Amortized: [[Amortized Analysis]].

## Key terms

> **Inverse Ackermann function (alpha)**: an extremely slowly growing function; the source states only that it bounds the amortized cost (its definition is not in the sources read).

> **Path compression**: flattening the tree during find (standard meaning; named in both sources).

## Example

Not worked in the sources.

## Contradictions and uncertainties

- The inverse-Ackermann claim has two sources; the quick-find/quick-union/weighted costs only one; hence note-level `debated`.
- Proofs of the bounds are not recorded.

## Related

- [[Shortest Paths and Minimum Spanning Trees]]
- [[Graph Representations and Traversal]]
- [[Equivalence Relation]]
- [[Amortized Analysis]]

## Sources

- [[Sedgewick Wayne - Union-Find and Tries (algs4 1.5 and 5.2)]] — variants and costs.
- [[cp-algorithms - DP Fenwick Segment Tree DSU Suffix Array]] — amortized O(alpha(n)).

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified). Note: in algs4 the inverse-Ackermann bound is stated for weighted quick-union plus path compression (Creative Problem 4); plain quick-union with path compression is stated as logarithmic.
- 2026-11-23: body clarified: inverse-Ackermann bound applies to weighted quick-union with path compression (algs4), plain quick-union with path compression is logarithmic.
