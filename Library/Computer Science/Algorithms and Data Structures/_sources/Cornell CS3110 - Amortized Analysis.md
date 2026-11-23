---
title: Cornell CS3110 - Amortized Analysis
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: not named on page (Cornell CS 3110 course staff; page mentions "4820")
published: 2014 (Fall 2014 course page; no date on the page itself)
url: https://www.cs.cornell.edu/courses/cs3110/2014fa/lectures/25/lec25.html
accessed: 2026-11-23
url-verified: true
tags: [source, amortized-analysis, dynamic-array]
---

# Cornell CS3110 - Amortized Analysis

## Why it is reliable (or not)

University lecture notes, Level B. No named author or date on the page (year from URL). Standard content that matches CLRS-style treatments. Python docs and Open Data Structures corroborate the dynamic array result (see other source notes).

## Extracted points

- Amortized analysis is a worst-case analysis of a sequence of operations; it can give a tighter per-operation bound than analyzing each operation alone.
- Three methods: aggregate (bound total cost), accounting/banker's (charge a fixed amount; surplus pays later; balance never negative), potential/physicist's (potential function, zero initially, never negative; amortized cost = actual cost + change in potential).
- Dynamic array doubling: copies happen at exponentially spaced points; total over n insertions is O(n); charging 3 per insertion covers it; potential Phi = 2n - m gives ~3 per insertion, so O(1) amortized.
- Growth must be geometric: fixed-increment growth leads to linear amortized cost.

## Supports subtopics

2 (amortized analysis); 3 (resizing arrays).

## Used in

- [[Amortized Analysis]]
- [[Dynamic Array and Linked List]]

## History

- 2026-11-23: registered and read.
