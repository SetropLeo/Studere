---
title: Trie
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: uncertain
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Sedgewick Wayne - Union-Find and Tries (algs4 1.5 and 5.2)]]"]
tags: [finding, trie, string]
---

# Trie

> **Summary:** Tries are string symbol tables (R-way and ternary search trie) supporting prefix and wildcard matching.

## What it is

> **Trie**: a search tree for strings in which keys are spelled out along paths (standard meaning).

> **R-way trie**: each node has R children (one per alphabet symbol). **TST (ternary search trie)**: a trie with three links per node.

([[Sedgewick Wayne - Union-Find and Tries (algs4 1.5 and 5.2)]])

## How it works

- Prefix and wildcard matching are supported.
- "the number of nodes in its TST is the same, regardless of the order in which the strings are inserted."
- The stated goal is to be as fast as hashing and more flexible than binary search trees ([[Hash Table]], [[Binary Search Tree]]).

## Key terms

> **Symbol table**: a key-value store.

## Example

Not given.

## Contradictions and uncertainties

- The page read gives no cost formulas; no complexity claims here. Single source; confidence `uncertain`. Second source needed.

## Related

- [[Hash Table]]
- [[Binary Search Tree]]
- Gap: suffix trees and automata have no source.
- [[Suffix Array]]

## Sources

- [[Sedgewick Wayne - Union-Find and Tries (algs4 1.5 and 5.2)]] — R-way trie, TST.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified).
