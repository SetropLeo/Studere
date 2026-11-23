---
title: Algorithm Analysis
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Sedgewick Wayne - Analysis of Algorithms]]", "[[Sedgewick Wayne - Sorting (algs4 2.1 and 2.2)]]", "[[Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)]]"]
tags: [finding, algorithm-analysis]
---

# Algorithm Analysis

> **Summary:** Algorithm analysis estimates how the cost of a program grows with the input size N, by simplifying the cost and keeping only the order of growth. The formal notation lives in [[Asymptotic Notation and Growth of Functions]]; this note covers the bridge to algorithms.

## What it is

Analyzing an algorithm means expressing its cost (for example array accesses or compares) as a function of the input size N. Sedgewick and Wayne simplify the cost by dropping low-order terms (tilde notation, ~ f(N)) and observe that the order of growth is "one of just a few functions of the problem size N" ([[Sedgewick Wayne - Analysis of Algorithms]]).

> **Order of growth**: the dominant function of N that describes how a program's cost scales (for example N, N log N, N^2).

> **Tilde notation**: ~ f(N) keeps the leading term of a cost and discards lower-order terms.

For formal definitions of Big-O, Omega and Theta, see [[Asymptotic Notation and Growth of Functions]] (not duplicated here).

## How it works

- Worked example in the source: ThreeSum is order N^3 (about N^3/2 array accesses by brute force); faster versions reach N^2 log N; a sorting-based 2-sum reaches N log N.
- The same booksite uses Big-Oh only informally, in exercises: "Designing a O(N^2) algorithms should not be too difficult, but getting it down to O(N log N) requires some cleverness."
- Costs of recursive algorithms are expressed as recurrences, see [[Divide and Conquer and the Master Theorem]] and [[Linear Recurrence Relations]].
- Cost can also be measured over a sequence of operations, see [[Amortized Analysis]].
- Cases: the sources report costs that differ by input. Insertion sort uses about N^2/4 compares on average (random distinct keys), about N^2/2 in the worst case, and N-1 compares in the best case (sorted input) ([[Sedgewick Wayne - Sorting (algs4 2.1 and 2.2)]], see [[Sorting Algorithms]]). Hash table operations are O(1) on average but O(n) in the worst case ([[Hash Table]]).

## Key terms

> **Cost model**: the rule that fixes which operations are counted. algs4 counts array accesses or compares for time and uses a byte model for memory (for example 56 + 40V + 128E bytes for an adjacency-list graph, see [[Graph Representations and Traversal]]).

> **Worst, average and best case**: cost on the most costly, a typical, and the cheapest input of a given size. Only used by example in the read sources; no source read defines them (gap).

## Example

Insertion sort: best N-1 compares, average ~N^2/4, worst ~N^2/2 ([[Sorting Algorithms]]).

## Contradictions and uncertainties

- **Recorded divergence (notation):** algs4 states costs with the tilde notation and a Java cost model (exact leading term, for example ~N^2/2 compares), while the formal approach in [[Asymptotic Notation and Growth of Functions]] and Python documentation uses Big-O, which drops constants. Neither is wrong; they answer different questions (exact leading constant vs growth class). Source: [[Sedgewick Wayne - Analysis of Algorithms]] (notes that it does not use formal Big-O/Omega/Theta).
- Java memory figures depend on the book's JVM cost model; they are not portable to Python (own inference).
- Gap: no source read defines worst, average and best case, or the RAM model, formally.
- The explicit list of orders (1, log N, N, N log N, N^2, N^3, 2^N) was in an image of the book and was not read as text; not asserted here.

## Related

- [[Asymptotic Notation and Growth of Functions]]
- [[Function]]
- [[Amortized Analysis]]
- [[Divide and Conquer and the Master Theorem]]
- [[Loop Invariant and Algorithm Correctness]]
- Planned area: Theory of Computation (computability and complexity classes).

## Sources

- [[Sedgewick Wayne - Analysis of Algorithms]] — tilde notation, order of growth, ThreeSum example, informal Big-Oh.
- [[Sedgewick Wayne - Sorting (algs4 2.1 and 2.2)]] — insertion sort best/average/worst counts.
- [[Sedgewick Wayne - Graphs (algs4 4.1 to 4.4)]] — memory cost model figure.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified).
