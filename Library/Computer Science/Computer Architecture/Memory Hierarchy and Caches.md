---
title: Memory Hierarchy and Caches
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[NYU Gottlieb - Computer Architecture Lecture 23 (Caches and Virtual Memory)]]", "[[nand2tetris - Projects 1 to 5 (Nisan and Schocken)]]"]
tags: [finding, computer-architecture, memory-hierarchy, caches, virtual-memory, tlb]
---

# Memory Hierarchy and Caches

> **Summary:** Caches involve block placement, lookup, replacement and write policies. Virtual memory uses main memory as a cache for disk, and the TLB caches page table entries. The source is a 2007 lecture, so examples are dated.

## What it is

> **Cache**: small fast memory holding copies of data from a larger slower one.

> **TLB**: a small fast cache of page table entries; the lecture says "A TLB is a cache of the page table".

## How it works

- Cache topics: block placement, lookup, replacement, write policies (write-through vs write-back).
- Associativity: direct-mapped, n-way set-associative, fully associative. Paging uses full associativity.
- Virtual memory: in demand paging, memory serves as a cache for the disk; the page table plays the role of tags.
- The lecture discusses the interplay of TLB, page table and cache hits and misses.
- nand2tetris Project 3 builds RAM as an addressable sequence of registers (the base level of the hierarchy, not a cache).

## Key terms

> **Demand paging**: loading pages from disk into memory when needed.

> **Write-through / write-back**: write policies; the lecture names them, the definitions here are not detailed in the source note.

## Example

The lecture's example machine is the DECstation 3100 (dated); details not captured.

## Contradictions and uncertainties

- Single source, level B, dated 2007 (author and date inferred from URL). Stable concepts but `confidence: debated`.
- Gaps: cache coherence, modern cache and VM designs, replacement policy details.
- Planned areas (plain text): Operating Systems (paging, page replacement), Security (side channels). No source read.
- Own inference, not from sources: caching resembles the lookup and locality concerns of [[Hash Table]] and the contiguous-array layout of [[Dynamic Array and Linked List]].

## Related

- [[Sequential Circuits and Finite State Machines]]
- [[Pipelining and Hazards]]
- [[Hash Table]] (own inference)
- [[Dynamic Array and Linked List]] (own inference)

## Sources

- [[NYU Gottlieb - Computer Architecture Lecture 23 (Caches and Virtual Memory)]] — caches, associativity, virtual memory, TLB.
- [[nand2tetris - Projects 1 to 5 (Nisan and Schocken)]] — RAM construction.

## History

- 2026-11-23: created.
- 2026-11-23: light pass, single-source accepted per user decision (verifier; verbatim quote 'A TLB is a cache of the page table' confirmed on the NYU page).
