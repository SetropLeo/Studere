---
title: Uninformed Search
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Berkeley CS188 Textbook - Search and Games]]"]
tags: [finding, ai, search]
---

# Uninformed Search

> **Summary:** Breadth-first, depth-first and uniform-cost search explore a state space using no heuristic. Berkeley CS188 states their completeness, optimality and complexity. Single source (confidence `debated` means single-source here).

## What it is

> **Uninformed search**: search that uses only the problem definition, no estimate of distance to the goal (gloss, unsourced).

## How it works

Properties as stated by Berkeley CS188. Berkeley defines the symbols: b is the branching factor, s the depth of the shallowest solution, m the maximum depth, C* the optimal cost and epsilon the minimal edge cost.

| Algorithm | Frontier | Complete | Optimal | Time | Space |
|---|---|---|---|---|---|
| BFS | FIFO queue | yes | only if all step costs are equal | O(b^s) | O(b^s) |
| DFS | LIFO stack | no (cycles) | no | O(b^m) | O(bm) |
| UCS | priority queue ordered by path cost | yes | yes, if edge costs are nonnegative | O(b^(C*/epsilon)) | O(b^(C*/epsilon)) |

Verbatim as recorded: "Depth-first search is not complete." and "UCS is also optimal if we assume all edge costs are nonnegative." (both confirmed verbatim.)

## Key terms

> **Frontier**: the set of nodes generated but not yet expanded (gloss, unsourced).

## Example

Own illustration: on a graph where every edge costs 1, BFS returns a shortest path in edges; UCS reduces to the same behavior (own inference).

## Contradictions and uncertainties

- The completeness condition for UCS (positive costs) was not recorded.
- Own inference: BFS and DFS are graph traversals as in [[Graph Representations and Traversal]]; UCS resembles Dijkstra's algorithm in [[Shortest Paths and Minimum Spanning Trees]]; the UCS frontier is a priority queue, see [[Binary Heap and Priority Queue]]. None of these links is stated by the Berkeley source.

## Related

- [[Informed Search and A-Star]]
- [[Adversarial Search - Minimax and Alpha-Beta]]
- [[Local Search and Metaheuristics]]
- [[Graph Representations and Traversal]] (own inference)
- [[Shortest Paths and Minimum Spanning Trees]] (own inference)
- [[Binary Heap and Priority Queue]] (own inference)

## Sources

- [[Berkeley CS188 Textbook - Search and Games]] - algorithms and properties

## History

- 2026-11-23: created (draft).
- 2026-11-23: verified by verifier, light pass, single-source accepted per user decision.
- 2026-11-23: wording fix after light verification: UCS space O(b^(C*/epsilon)) filled in; symbol definitions now sourced to Berkeley; recheck dropped on the two verbatim quotes.
