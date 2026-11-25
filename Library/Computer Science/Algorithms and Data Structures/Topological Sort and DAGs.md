---
title: Topological Sort and DAGs
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
tags: [finding, topological-sort, dag]
---

# Topological Sort and DAGs

> **Summary:** A directed graph has a topological order if and only if it is acyclic; reverse DFS postorder produces one in V + E time.

## What it is

> **DAG (directed acyclic graph)**: a directed graph with no directed cycle.

> **Topological order**: an ordering of vertices in which every edge points from an earlier vertex to a later one (standard meaning).

"A digraph has a topological order if and only if it is a DAG." ([[Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)]], 4.2)

## How it works

- Reverse DFS postorder in a DAG is a topological sort; cost proportional to V + E.
- Strong components (Kosaraju-Sharir) take V + E.
- Shortest paths in DAGs are linear using topological order ([[Shortest Paths and Minimum Spanning Trees]]).
- A DAG's reachability is a [[Partial Order]] and a topological order is a linear extension of it (own remark; not in the source).

## Key terms

> **Postorder**: the order in which DFS finishes vertices.

## Example

Not provided beyond the bounds.

## Contradictions and uncertainties

- Single source. `debated`. Cycle detection and applications (scheduling) are not recorded.

## Related

- [[Graph Representations and Traversal]]
- [[Shortest Paths and Minimum Spanning Trees]]
- [[Partial Order]]
- [[Relation]]

## Sources

- [[Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)]] — iff statement, DFS postorder, costs.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified).
