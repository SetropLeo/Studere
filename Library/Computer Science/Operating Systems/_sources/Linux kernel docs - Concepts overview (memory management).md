---
title: Linux kernel docs - Concepts overview (memory management)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux kernel community (Documentation/admin-guide/mm)
published: living page (no date)
url: https://docs.kernel.org/admin-guide/mm/concepts.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Linux kernel docs - Concepts overview (memory management)

## Why it is reliable (or not)

Official kernel documentation. Linux-specific, practical; swap coverage is brief.

## Extracted points

- Virtual memory: programs use virtual addresses translated by CPU to physical; enables demand paging and controlled sharing.
- Physical memory divided into page frames; multi-level page tables, indexed by successive chunks of the virtual address from a root register.
- TLB caches recent translations; huge pages reduce TLB pressure.
- Page cache keeps file data in RAM; dirty pages written back before reuse.
- Reclaim: kswapd in background, direct reclaim when memory is low; dirty anonymous pages go to swap.

## Relevant excerpts

> "The virtual memory abstracts the details of physical memory from the application software." (Virtual Memory)

> "Whenever a file is read, the data is put into the page cache to avoid expensive disk access on the subsequent reads." (Page cache)

## Used in

- Subtopic 5 (Memory management)

## Used in findings

- [[Paging and Virtual Memory]], [[Page Replacement and Thrashing]]

## History

- 2026-11-23: registered and read.
