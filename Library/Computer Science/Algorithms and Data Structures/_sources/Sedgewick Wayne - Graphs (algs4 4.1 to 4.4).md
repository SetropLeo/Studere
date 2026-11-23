---
title: Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Robert Sedgewick, Kevin Wayne
published: Algorithms, 4th edition (booksite pages undated)
url: https://algs4.cs.princeton.edu/41graph/
accessed: 2026-11-23
url-verified: true
tags: [source, graph, bfs, dfs, topological-sort, mst, shortest-paths]
---

# Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)

Pages read: https://algs4.cs.princeton.edu/40graphs/ (index), /41graph/ , /42digraph/ , /43mst/ , /44sp/ (all under https://algs4.cs.princeton.edu).

## Why it is reliable (or not)

Official booksite of a standard Princeton textbook. Level A. Java code; the matrix representation is only named (AdjMatrixGraph), not analyzed.

## Extracted points

- Representation: adjacency lists (vertex-indexed array of lists); memory 56 + 40V + 128E bytes under the book's cost model.
- DFS marks all vertices connected to the source in time proportional to the sum of their degrees; BFS computes shortest paths (fewest edges) and takes time proportional to V + E worst case.
- Connected components: connectivity is an equivalence relation; CC uses DFS with V + E preprocessing and constant-time queries.
- Digraph has a topological order iff it is a DAG; reverse DFS postorder in a DAG is a topological sort, cost proportional to V + E. Strong components via Kosaraju-Sharir in V + E.
- MST: cut property (minimum crossing edge is in the MST, distinct weights); greedy algorithm; Prim lazy E log E, eager E log V; Kruskal E log E using union-find.
- Shortest paths: Dijkstra requires nonnegative weights (E log V with a priority queue); Bellman-Ford handles negative weights without negative cycles, time proportional to EV; DAGs are linear via topological order.

## Relevant excerpts

> "BFS takes time proportional to V + E in the worst case." (4.1)

> "A digraph has a topological order if and only if it is a DAG." (4.2)

## Supports subtopics

6 (graphs, BFS, DFS, topological sort, components, MST, shortest paths); 7 (greedy: MST).

## Used in

- [[Graph Representations and Traversal]]
- [[Topological Sort and DAGs]]
- [[Shortest Paths and Minimum Spanning Trees]]
- [[Greedy Algorithms]]
- [[Algorithm Analysis]]

## History

- 2026-11-23: registered and read.
