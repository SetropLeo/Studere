---
title: Paging and Virtual Memory
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Wisc CS 537 Notes - Memory Management and Virtual Memory]]", "[[Linux kernel docs - Concepts overview (memory management)]]"]
tags: [finding, operating-systems]
---

# Paging and Virtual Memory

> **Summary:** Virtual memory gives each program its own address space; paging maps fixed-size pages to physical frames through page tables cached by the TLB, and demand paging loads pages only when needed.

## What it is

- Linux docs: virtual memory abstracts the details of physical memory from applications; programs use virtual addresses translated by the CPU, which enables demand paging and controlled sharing.
- Wisc: virtual memory gives the illusion of a memory with the size of the disk and the speed of main memory (fetch-tool wording; paraphrased).

## How it works

- **Base and bounds** (Wisc s15): two registers, check then add; one contiguous segment per process.
- **Segmentation**: several base/bounds pairs, separate protection bits; external fragmentation and compaction.
- **Paging** (Wisc s16): fixed-size pages; per-process page table with permission and existence bits; multi-level tables; address = page number + offset; costs are internal fragmentation and extra memory references. Linux docs agree on multi-level tables, indexed by successive chunks of the virtual address from a root register, and on physical memory divided into page frames.
- **TLB**: small fast cache of translations, flushed on context switch, with hit rates often above 95% (Wisc s17); Linux docs say the TLB caches recent translations and huge pages reduce TLB pressure. **Inverted page tables**: one entry per physical frame (Wisc).
- **Demand paging** (Wisc s18): present bit, page-fault trap, load from backing store, restart (requires hardware support).
- **Effective access time**: EAT = h * t_mem + (1 - h) * t_disk (Wisc form; h is the hit fraction for page presence).
- **Linux**: page cache keeps file data in RAM and dirty pages are written back before reuse; reclaim by kswapd in the background and direct reclaim when memory is low; dirty anonymous pages go to swap (Linux docs).

> **Page fault**: trap raised when a referenced page is not present (Wisc).

## Contradictions and uncertainties

- Wisc has some historic hardware examples (Z8000, IBM 370). Linux swap coverage is brief. Two sources agree on paging, tables and TLB (hence `established` for those); demand-paging formula is Wisc only.
- Related architecture: [[Memory Hierarchy and Caches]]. Own inference: the TLB is a cache in that sense; the OS sources do not make the link.

## Related

- [[Page Replacement and Thrashing]], [[Process Creation - fork]], [[Context Switch and Dispatching]], [[Hash Table]] (own inference: page tables resemble a lookup structure; not sourced), [[Exceptions and Interrupts]]

## Sources

- [[Wisc CS 537 Notes - Memory Management and Virtual Memory]]
- [[Linux kernel docs - Concepts overview (memory management)]]

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
