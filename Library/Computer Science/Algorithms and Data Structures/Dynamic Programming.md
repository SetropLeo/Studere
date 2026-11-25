---
title: Dynamic Programming
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Indiana C343 - Algorithmic Paradigms]]", "[[cp-algorithms - DP Fenwick Segment Tree DSU Suffix Array]]"]
tags: [finding, dynamic-programming, memoization]
---

# Dynamic Programming

> **Summary:** Dynamic programming solves problems with overlapping subproblems by solving each subproblem once, top-down with memoization or bottom-up with a table.

## What it is

> **Dynamic programming (DP)**: overlapping subproblems; "build up solutions to larger and larger subproblems" ([[Indiana C343 - Algorithmic Paradigms]]). Examples named: Fibonacci, 0-1 knapsack, edit distance.

"The essence of dynamic programming is to avoid repeated calculation." ([[cp-algorithms - DP Fenwick Segment Tree DSU Suffix Array]])

> **Memoization**: caching results of subproblems in a top-down recursive solution. **Bottom-up (tabulation)**: filling a table from small subproblems to large.

## How it works

- Two styles: top-down memoization versus bottom-up table (cp-algorithms).
- Fibonacci has only O(n) distinct subproblems, so storing them avoids the repeated work (cp-algorithms).
- Related to recurrence relations: [[Linear Recurrence Relations]] and [[Induction and Recursion]] (own link; Fibonacci is a recurrence).
- Contrast: [[Divide and Conquer and the Master Theorem]] has non-overlapping subproblems; [[Greedy Algorithms]] commits to a local choice.

## Key terms

> **Overlapping subproblems**: the same subproblem appears many times in a naive recursion.

## Example

```python
# Memoized Fibonacci (illustrates the cp-algorithms idea; snippet is own, not from the source)
from functools import lru_cache
@lru_cache(maxsize=None)
def fib(n): return n if n < 2 else fib(n-1) + fib(n-2)
```

`lru_cache` is not covered by any source read; the idea (O(n) distinct subproblems) is.

## Contradictions and uncertainties

- Two Level B sources, but they support different parts; there is no second source for optimal substructure, state design or complexity of tables. `debated`.
- Gap: knapsack and edit-distance solutions are only named.

## Related

- [[Divide and Conquer and the Master Theorem]]
- [[Greedy Algorithms]]
- [[Linear Recurrence Relations]]
- [[Induction and Recursion]]
- [[Function]]

## Sources

- [[Indiana C343 - Algorithmic Paradigms]] — definition, examples.
- [[cp-algorithms - DP Fenwick Segment Tree DSU Suffix Array]] — essence, memoization vs bottom-up, Fibonacci.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified).
