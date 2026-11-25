---
title: Suffix Array
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[cp-algorithms - DP Fenwick Segment Tree DSU Suffix Array]]"]
tags: [finding, suffix-array, string]
---

# Suffix Array

> **Summary:** A suffix array lists the starting indices of all suffixes of a string in sorted order; it can be built in O(n log n) by the doubling approach.

## What it is

> **Suffix array**: the sorted starting indices of all suffixes of a string ([[cp-algorithms - DP Fenwick Segment Tree DSU Suffix Array]]).

## How it works

- Naive construction (sorting suffixes): O(n^2 log n).
- Doubling approach: O(n log n) time, O(n) memory.
- Construction relies on sorting ([[Sorting Algorithms]]); own link.

## Key terms

> **Suffix**: the substring from position i to the end.

## Example

Not worked in the note.

## Contradictions and uncertainties

- Single Level B source. `debated`. **Gap:** suffix trees and suffix automata have no source; no search application recorded.

## Related

- [[Trie]]
- [[Sorting Algorithms]]

## Sources

- [[cp-algorithms - DP Fenwick Segment Tree DSU Suffix Array]] — definition, complexities.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified).
