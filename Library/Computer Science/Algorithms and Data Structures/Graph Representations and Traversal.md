---
title: Graph Representations and Traversal
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
tags: [finding, graph, bfs, dfs, connected-components]
---

# Graph Representations and Traversal

> **Summary:** Graphs are stored as adjacency lists; DFS and BFS traverse them in time proportional to V + E, and connected components follow from DFS.

## What it is

> **Adjacency list**: a vertex-indexed array of lists, each holding the neighbors of a vertex. Memory: 56 + 40V + 128E bytes under the book's (Java) cost model ([[Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)]]).

> **BFS (breadth-first search)**: explores vertices in order of distance from the source; **DFS (depth-first search)**: explores as deep as possible before backtracking (standard meanings; the source states their costs).

A graph is a [[Relation]] on vertices (own remark).

## How it works

- DFS marks all vertices connected to the source in time proportional to the sum of their degrees.
- "BFS takes time proportional to V + E in the worst case." BFS computes shortest paths (fewest edges).
- Connected components: connectivity is an equivalence relation ([[Equivalence Relation]]); the CC algorithm uses DFS with V + E preprocessing and constant-time connectivity queries. [[Union-Find]] is the alternative for dynamic connectivity (own link).
- Digraphs and ordering: see [[Topological Sort and DAGs]]. Weighted graphs: [[Shortest Paths and Minimum Spanning Trees]].
- BFS and DFS use a queue and a stack/recursion respectively (own link to [[Stack and Queue]]; not stated in the source note).

## Key terms

> **V, E**: number of vertices and edges.

## Example

Cost of BFS on a graph with V = 1000 and E = 5000 is proportional to 6000 steps (own arithmetic from V + E).

## Contradictions and uncertainties

- Single source. `debated`.
- **Gap:** adjacency matrix is only named (AdjMatrixGraph) and not analyzed; no source for trade-offs between matrix and list.
- Memory figures are Java cost-model values and differ from the Big-O view (see [[Algorithm Analysis]]).

## Related

- [[Topological Sort and DAGs]]
- [[Shortest Paths and Minimum Spanning Trees]]
- [[Union-Find]]
- [[Stack and Queue]]
- [[Equivalence Relation]]
- [[Relation]]

## Sources

- [[Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)]] — representation, BFS/DFS costs, components.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified).
