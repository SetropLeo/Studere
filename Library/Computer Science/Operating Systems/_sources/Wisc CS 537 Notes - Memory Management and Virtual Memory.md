---
title: Wisc CS 537 Notes - Memory Management and Virtual Memory
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: Barton P. Miller (University of Wisconsin-Madison), CS 537 lecture notes
published: undated (course notes site)
url: https://pages.cs.wisc.edu/~bart/537/lecturenotes/s16.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Wisc CS 537 Notes - Memory Management and Virtual Memory

Pages opened: s15 (Base and Bounds, Segmentation: https://pages.cs.wisc.edu/~bart/537/lecturenotes/s15.html), s16 (Paging), s17 (TLB and Inverted Page Tables: https://pages.cs.wisc.edu/~bart/537/lecturenotes/s17.html), s18 (Virtual Memory, Page Faults: https://pages.cs.wisc.edu/~bart/537/lecturenotes/s18.html). s19-s21 (replacement, working sets) not opened; use Cornell note.

## Why it is reliable (or not)

University course notes by a recognized professor; undated, some hardware examples historic (Z8000, IBM 370).

## Extracted points

- Base and bounds: two registers, check then add; one contiguous segment per process.
- Segmentation: several base/bounds pairs, separate protection bits; external fragmentation, compaction.
- Paging: fixed-size pages; per-process page table with permission and existence bits; multi-level tables; address = page number + offset; internal fragmentation and extra memory references are costs.
- TLB: small fast cache of translations; flushed on context switch; hit rates often above 95%. Inverted page tables: one entry per physical frame.
- Virtual memory/demand paging: present bit, page fault trap, load from backing store, restart (needs hardware support); effective access time EAT = h * t_mem + (1 - h) * t_disk.

## Relevant excerpts

> "Page number always comes directly from the address." (s16)

> "the illusion of a memory with the size of the disk and the speed of main memory" (s18; as reported by fetch tool)

## Used in

- Subtopic 5

## Used in findings

- [[Paging and Virtual Memory]], [[Context Switch and Dispatching]]

## History

- 2026-11-23: registered and read.
