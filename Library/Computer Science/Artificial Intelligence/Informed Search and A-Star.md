---
title: Informed Search and A-Star
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

# Informed Search and A-Star

> **Summary:** Informed search uses a heuristic h(n). Greedy search expands the lowest h and is neither complete nor optimal; A* orders by f(n) = g(n) + h(n) and, with an admissible heuristic, tree search is optimal (Berkeley CS188). Single source.

## What it is

> **Heuristic**: an estimate h(n) of the cost from node n to a goal (gloss, unsourced).

## How it works

- Greedy search: per Berkeley, it always selects the frontier node with the lowest heuristic value (recorded verbatim in the source note); it is not complete and not optimal.
- A*: f(n) = g(n) + h(n), with g(n) the cost so far (gloss on g, unsourced).
- Admissible heuristic (Berkeley): 0 <= h(n) <= h*(n), where h*(n) is the true cost to the goal. With an admissible heuristic, A* tree search is optimal.
- Berkeley states that A* is complete and optimal "given an appropriate heuristic", states the optimality theorem for tree search, and says graph search needs extra checks (a node must be re-visited when a cheaper path to it is found).

## Key terms

> **Admissible**: never overestimates the true remaining cost (restatement of the inequality above).

## Example

Own illustration: on a map, straight-line distance to the goal never exceeds the road distance, so it is an admissible heuristic (own inference, not in the source).

## Contradictions and uncertainties

- Gap: heuristic consistency is not covered; do not assume it. The graph-search optimality conditions beyond the re-visit check are not recorded.
- Own inference: A* with h = 0 is uniform-cost search ([[Uninformed Search]]); the source note does not state this.
- Own inference: relation to shortest-path algorithms in [[Shortest Paths and Minimum Spanning Trees]].

## Related

- [[Uninformed Search]]
- [[Adversarial Search - Minimax and Alpha-Beta]]
- [[Local Search and Metaheuristics]]
- [[Binary Heap and Priority Queue]] (own inference: frontier data structure)
- [[Shortest Paths and Minimum Spanning Trees]] (own inference)

## Sources

- [[Berkeley CS188 Textbook - Search and Games]] - greedy, A*, admissibility

## History

- 2026-11-23: created (draft).
- 2026-11-23: verified by verifier, light pass, single-source accepted per user decision.
- 2026-11-23: wording fix after light verification: added completeness/optimality "given an appropriate heuristic", tree-search optimality theorem and graph-search re-visit check; consistency remains a gap.
