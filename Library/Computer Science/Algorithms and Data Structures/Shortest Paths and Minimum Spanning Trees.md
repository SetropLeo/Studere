---
title: Shortest Paths and Minimum Spanning Trees
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)]]"]
tags: [finding, dijkstra, bellman-ford, prim, kruskal, mst]
---

# Shortest Paths and Minimum Spanning Trees

> **Summary:** Prim and Kruskal build minimum spanning trees using the cut property; Dijkstra and Bellman-Ford compute shortest paths in weighted graphs, with different weight restrictions.

## What it is

> **Minimum spanning tree (MST)**: a spanning tree of an edge-weighted graph with minimum total weight (standard meaning).

> **Cut property**: with distinct weights, the minimum-weight edge crossing a cut is in the MST ([[Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)]]).

## How it works

Minimum spanning trees (algs4 4.3):
- The cut property yields a greedy algorithm ([[Greedy Algorithms]]).
- Prim: lazy version E log E; eager version E log V.
- Kruskal: E log E, using [[Union-Find]].
- Both rely on priority-queue or sorting costs ([[Binary Heap and Priority Queue]], [[Sorting Algorithms]]; own link).

Shortest paths (algs4 4.4):
- Dijkstra requires nonnegative weights; E log V with a priority queue.
- Bellman-Ford handles negative weights without negative cycles; time proportional to EV.
- DAGs: linear, via topological order ([[Topological Sort and DAGs]]).
- Unweighted shortest paths (fewest edges) are BFS: [[Graph Representations and Traversal]].

## Key terms

> **Negative cycle**: a cycle whose total weight is negative; shortest paths are undefined if one is reachable.

## Example

Not provided beyond the bounds; pseudo-code is left to stage 4.

## Contradictions and uncertainties

- Intro level only; single source. `debated`. Correctness proofs, edge cases and proofs of the stated costs are not recorded. No source read for all-pairs shortest paths or A*.

## Related

- [[Graph Representations and Traversal]]
- [[Greedy Algorithms]]
- [[Union-Find]]
- [[Binary Heap and Priority Queue]]
- [[Topological Sort and DAGs]]

## Sources

- [[Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)]] — cut property, Prim, Kruskal, Dijkstra, Bellman-Ford costs.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified). Bounds re-checked against algs4 4.3/4.4.
