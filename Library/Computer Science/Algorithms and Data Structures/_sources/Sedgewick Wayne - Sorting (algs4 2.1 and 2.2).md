---
title: Sedgewick Wayne - Sorting (algs4 2.1 and 2.2)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Robert Sedgewick, Kevin Wayne
published: Algorithms, 4th edition (booksite pages undated)
url: https://algs4.cs.princeton.edu/22mergesort/
accessed: 2026-11-23
url-verified: true
tags: [source, sorting, mergesort, lower-bound]
---

# Sedgewick Wayne - Sorting (algs4 2.1 and 2.2)

Pages read: https://algs4.cs.princeton.edu/20sorting/ (index), https://algs4.cs.princeton.edu/21elementary/ , https://algs4.cs.princeton.edu/22mergesort/

## Why it is reliable (or not)

Official booksite of a standard Princeton textbook. Level A. The lower-bound statement is given as a proposition without a decision-tree derivation on the page. Quicksort page (2.3) was not read; the index only lists it.

## Extracted points

- Selection sort uses ~n^2/2 compares and n exchanges.
- Insertion sort: ~N^2/4 compares and exchanges on average (random distinct keys); worst case ~N^2/2; best case N-1 compares, 0 exchanges on sorted input; exchanges equal the number of inversions.
- Top-down mergesort uses between 1/2 N lg N and N lg N compares; mergesort is a divide-and-conquer example; exercise recurrence T(N) = 2T(N/2) + 1, T(1)=0 for sorted input.
- Lower bound: no compare-based sort can guarantee fewer than lg(N!) ~ N lg N compares.

## Relevant excerpts

> "No compare-based sorting algorithm can guarantee to sort N items with fewer than lg(N!) ~ N lg N compares." (2.2)

> "Top-down mergesort uses between 1/2 N lg N and N lg N compares" (2.2)

## Supports subtopics

5 (quadratic and n log n sorting, lower bound); 2 and 7 (mergesort as divide and conquer).

## Used in

- [[Sorting Algorithms]]
- [[Divide and Conquer and the Master Theorem]]
- [[Algorithm Analysis]]

## History

- 2026-11-23: registered and read.
