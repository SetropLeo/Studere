---
title: Greedy Algorithms
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Indiana C343 - Algorithmic Paradigms]]", "[[Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)]]"]
tags: [finding, greedy]
---

# Greedy Algorithms

> **Summary:** A greedy algorithm builds a solution step by step by optimizing a local criterion; it is not always optimal, but is for problems such as MST, activity selection and fractional knapsack.

## What it is

> **Greedy**: "build up a solution incrementally, myopically optimize some local criteria" ([[Indiana C343 - Algorithmic Paradigms]]).

## How it works

- Not always optimal; optimal for activity selection and fractional knapsack (Indiana C343).
- MST: the cut property gives a greedy algorithm; Prim and Kruskal are instances ([[Shortest Paths and Minimum Spanning Trees]], source [[Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)]]).
- Contrast with [[Divide and Conquer and the Master Theorem]] (non-overlapping subproblems) and [[Dynamic Programming]] (overlapping subproblems).

## Key terms

> **Local criterion**: the rule used at each step to pick the best-looking option.

## Example

Activity selection and fractional knapsack are only named by the source, with no worked solution.

## Contradictions and uncertainties

- Short Level B course page without named author; proofs of greedy-choice or optimal substructure are not covered (the USC and TAMU PDFs were not opened). `debated`.
- Gap: brute force and backtracking are not described by any source.

## Related

- [[Shortest Paths and Minimum Spanning Trees]]
- [[Dynamic Programming]]
- [[Divide and Conquer and the Master Theorem]]

## Sources

- [[Indiana C343 - Algorithmic Paradigms]] — definition, optimal cases.
- [[Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)]] — MST as greedy.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified).
