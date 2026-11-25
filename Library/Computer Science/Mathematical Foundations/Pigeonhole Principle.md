---
title: Pigeonhole Principle
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: uncertain
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Guichard - Combinatorics and Graph Theory]]"]
tags: [finding, combinatorics]
---

# Pigeonhole Principle

> **Summary:** If n+1 or more objects are put into n boxes, some box holds at least two. Only one level A source was read, so confidence is `uncertain` (a foundational concept needs two).

## What it is

> **Pigeonhole principle** (Thm 1.6.1): "Suppose that n+1 (or more) objects are put into n boxes. Then some box contains at least two objects." ([[Guichard - Combinatorics and Graph Theory]])

## How it works

- Generalized form: n(r-1)+1 objects in n boxes give a box with at least r objects (Cor 1.6.7). Thm 1.6.6 is the per-box weighted generalization, with a separate threshold for each box ([[Guichard - Combinatorics and Graph Theory]]).
- Example 1.6.2: among any 13 people, at least two share a birth month.

## Key terms

> **Box / pigeonhole**: a category into which objects are sorted.

## Example

The 13-people example above (12 months, so 13 people force a repeat). Hash-collision links are plausible but not sourced here (gap, `unverified`).

## Contradictions and uncertainties

- Single source. [[Levin - Discrete Mathematics An Open Introduction]] pages read do not cover it; [[MIT OCW 6.042J Mathematics for Computer Science]] readings do not mention it. A second source is needed; confidence stays `uncertain`. Candidate independent sources (to be read in stage 1): UC Davis maths enrichment pigeonhole PDF; URI CSC447 lecture notes ln015a; UCSB MAT116 sheet.

## Related

- [[Permutations and Combinations]], [[Linear Recurrence Relations]], [[Function]]

## Sources

- [[Guichard - Combinatorics and Graph Theory]] — statement, generalization, example.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: n(r-1)+1 attributed to Cor 1.6.7, Thm 1.6.6 described as the per-box weighted generalization (wording of 1.6.6 not re-read; marked as described by verifier guidance); candidate sources recorded; confidence stays uncertain; hash-collision link stays unverified.
- 2026-11-23: verified (light pass, single-source accepted per user decision); Thm 1.6.1 quote and Cor 1.6.7 attribution match _sources; Thm 1.6.6 wording not re-read, described only generically.
