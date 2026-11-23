---
title: Context Switch and Dispatching
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]]", "[[CSUStan CS 3750 - CPU Scheduling Notes]]", "[[Wisc CS 537 Notes - Memory Management and Virtual Memory]]"]
tags: [finding, operating-systems]
---

# Context Switch and Dispatching

> **Summary:** The dispatcher performs the context switch (mechanism); the scheduler decides who runs next (policy).

## What it is

- Wisc CS 537: scheduler = policy; dispatcher = mechanism (context switch). The dispatcher takes the next process from a queue of runnable processes (Wisc, plans 1-2), and the PCB holds the saved PC, PSW and registers (see [[Process and Process Control Block]]). The OS regains control via traps or interrupts ([[Kernel and User Mode]]).
- CSUStan CS 3750: the dispatcher is a performance bottleneck on many systems (as reported by a fetch tool; recheck).

## How it works

- Wisc (s17, memory notes): says only "must be careful to flush TLB during each context swap"; the reason is left as an open question on the page. Own inference: this is a cost of switching address spaces. See [[Paging and Virtual Memory]].
- Own inference: because the TLB and caches hold per-process state, switches interact with [[Memory Hierarchy and Caches]]; the sources do not state the cache link.

## Contradictions and uncertainties

- No source gives step-by-step switch code or measured costs (gap).
- Dispatcher-bottleneck claim comes from an author-unstated source.

## Related

- [[CPU Scheduling Algorithms]], [[Linux Scheduling Policies]], [[Threads]], [[Exceptions and Interrupts]]

## Sources

- [[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]] - policy vs mechanism, PCB
- [[CSUStan CS 3750 - CPU Scheduling Notes]] - bottleneck remark
- [[Wisc CS 537 Notes - Memory Management and Virtual Memory]] - TLB flush

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification (TLB-flush reason marked as own inference; dispatcher wording softened).
