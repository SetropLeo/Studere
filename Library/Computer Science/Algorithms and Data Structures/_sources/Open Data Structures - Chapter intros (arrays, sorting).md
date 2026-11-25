---
title: Open Data Structures (Python edition) - chapter introductions (2 Array-Based Lists, 11 Sorting)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Pat Morin (author of Open Data Structures; author not shown in the fetched text, from general knowledge)
published: undated on fetched pages
url: https://opendatastructures.org/ods-python/2_Array_Based_Lists.html
accessed: 2026-11-23
url-verified: true
tags: [source, array-list, amortized, sorting, lower-bound]
---

# Open Data Structures (Python edition) - chapter introductions

Pages read: /ods-python/2_Array_Based_Lists.html and /ods-python/11_Sorting_Algorithms.html on opendatastructures.org (also opened: the index, 1_Introduction.html, 5_Hash_Tables.html, which only list sections).

## Why it is reliable (or not)

Open-access textbook. Level A, but only chapter-introduction pages were read; the detailed subsections (separate files, names not discovered; guessed URL 1_5 returned 404) were not. Use only as corroboration of the statements below. Author attribution is not on the fetched text.

## Extracted points

- Chapter 2: over any sequence of m add/remove operations from empty, total cost of growing/shrinking the backing array is O(m), so O(1) amortized per operation; ArrayStack get/set O(1), add/remove O(n - i).
- Chapter 11: comparison-based algorithms (merge sort, quicksort, heap sort) run in O(n log n) and are asymptotically optimal; no comparison-only algorithm can avoid roughly n log n comparisons in worst and average case; array indexing allows sorting n integers in {0..n^c - 1} in O(cn) time.

## Relevant excerpts

> "no algorithm that uses only comparisons can avoid doing roughly" n log n comparisons (ch. 11 intro; quoted as summarized by fetch, ellipsis in original sentence not recovered)

## Supports subtopics

2 and 3 (amortized array resizing, corroborates Cornell CS3110); 5 (lower bound, corroborates algs4 2.2).

## Used in

- [[Amortized Analysis]]
- [[Dynamic Array and Linked List]]
- [[Sorting Algorithms]]
- [[Binary Heap and Priority Queue]]

## History

- 2026-11-23: registered and read (chapter intros only).
