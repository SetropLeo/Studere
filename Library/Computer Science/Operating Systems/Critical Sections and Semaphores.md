---
title: Critical Sections and Semaphores
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Wisc CS 537 Notes - Synchronization and Monitors]]", "[[Python docs - threading]]"]
tags: [finding, operating-systems]
---

# Critical Sections and Semaphores

> **Summary:** Synchronization makes cooperating processes correct by using atomic operations; a critical section is code that only one process may execute at a time, and semaphores are a general tool for exclusion and scheduling.

## What it is

- Wisc CS 537 (s5): synchronization = atomic operations ensuring correct cooperation. Critical section (verbatim): "A section of code, or collection of operations, in which only one process may be executing at a given time." Locks make others wait.
- Semaphores: Python's `threading.Semaphore`/`BoundedSemaphore` are counter-based (Python docs). Own inference: this matches the textbook counting semaphore; the Wisc notes read here are summarized only through the readers/writers use.

## How it works

Readers/writers with semaphores (Wisc s7): a Lock for shared state plus OKToRead and OKToWrite; many readers may read at once, but each writer needs exclusive access. Rule of thumb from the notes: one semaphore per constraint. Wisc s8: semaphores use a single structure for both exclusion and scheduling (monitors separate them; see [[Monitors and Python Synchronization Primitives]]).

## Contradictions and uncertainties

- GAPS: a definition of race condition is not given by the sources (s7 does not define it); producer-consumer (s6 unopened) and dining philosophers are not covered; semaphore operation definitions (P/V, wait/signal) are not recorded in the extracts.
- Single main source, hence `debated`.

## Related

- [[Monitors and Python Synchronization Primitives]], [[Deadlock]], [[Threads]]

## Sources

- [[Wisc CS 537 Notes - Synchronization and Monitors]] - critical section, readers/writers
- [[Python docs - threading]] - Semaphore counter

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
