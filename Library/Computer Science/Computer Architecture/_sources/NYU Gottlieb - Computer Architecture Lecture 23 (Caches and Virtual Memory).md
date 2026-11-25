---
title: NYU Gottlieb - Computer Architecture Lecture 23 (Caches and Virtual Memory)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: not named on the page (NYU course by Allan Gottlieb per URL path; Fall 2007-08)
published: 2007 (Fall; from URL path)
url: https://cs.nyu.edu/~gottlieb/courses/2000s/2007-08-fall/arch/lectures/lecture-23.html
accessed: 2026-11-23
url-verified: true
tags: [source, computer-architecture, memory-hierarchy, caches, virtual-memory, tlb]
---

# NYU Gottlieb - Computer Architecture Lecture 23

## Why it is reliable (or not)

University lecture notes (HTML), 2007: concepts (cache placement, associativity, paging, TLB) are stable fundamentals, but the example (DECstation 3100) is dated. Level B. Author and date inferred from URL. Cache coherence is not covered.

## Extracted points

- Caches: block placement, lookup, replacement, write policies (write-through vs write-back).
- Associativity: direct-mapped, n-way set-associative, fully associative; paging uses full associativity.
- Virtual memory as caching of disk by memory (demand paging), page table plays the role of tags.
- TLB is a small fast cache of page table entries; interplay of TLB, page table and cache hits/misses.

## Relevant excerpts

> "A TLB is a cache of the page table" (TLB section)

> "In demand paging the memory serves as a cache for the disk" (virtual memory section)

## Used in

- Subtopic 8.
- [[Memory Hierarchy and Caches]]

## History

- 2026-11-23: read and registered (researcher, stage 1).
