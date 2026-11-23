---
title: Page Replacement and Thrashing
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Cornell CS 4410 - Page Replacement and Thrashing]]", "[[Linux kernel docs - Concepts overview (memory management)]]"]
tags: [finding, operating-systems]
---

# Page Replacement and Thrashing

> **Summary:** When memory is full, a replacement policy picks a victim page; if processes need more memory than exists, the system thrashes. Single main source (Cornell 2017).

## What it is and how it works

Cornell lists: random; FIFO (circular buffer); OPT/Belady's (optimal, needs the future); LRU, MRU, LFU; second chance/clock (use bit).

- **Belady's anomaly**: with FIFO, adding frames can increase faults (Cornell: "it is possible that adding more frames can actually make performance worse!").
- **Thrashing**: processes actively using more memory than is physically present (Cornell). **Working set**: pages accessed in the past n time units.
- Linux (kernel docs) describes reclaim by kswapd and direct reclaim, but does not name these textbook policies in the recorded extract.

## Example

GAP: no LRU worked example in the sources. Own illustration would be needed (not written).

## Contradictions and uncertainties

- Single source; page replacement details beyond list are not recorded. Wisc s19-s21 were not opened.

## Related

- [[Paging and Virtual Memory]], [[Memory Hierarchy and Caches]] (own inference: replacement parallels cache replacement), [[Dynamic Array and Linked List]] (own inference: FIFO circular buffer)

## Sources

- [[Cornell CS 4410 - Page Replacement and Thrashing]]
- [[Linux kernel docs - Concepts overview (memory management)]] - reclaim

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
