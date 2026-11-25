---
title: Deadlock
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Wisc CS 537 Notes - Deadlock]]"]
tags: [finding, operating-systems]
---

# Deadlock

> **Summary:** A deadlock is a state in which every process waits for something only another waiting process could provide; four conditions characterize it and several strategies address it.

## What it is

Wisc CS 537: since all are waiting, none can provide any of the things being waited for (page text; paraphrased here).

## How it works

Four conditions (Wisc): no sharing (mutual exclusion), no preemption, multiple independent requests (Wisc's wording; "hold and wait" is the usual textbook label, added here as a gloss, not Wisc's term), circular wait.

Strategies (Wisc):
- **Detection**, then terminating processes; the Wisc page calls detection "usually impractical".
- **Prevention**: negate one condition: request all at once, hierarchical ordering, or preemption.
- **Banker's algorithm** (Dijkstra): processes declare maximum needs; avoidance-style.

Practical stance (Wisc): strong theory, but largely ignored in practice.

## Contradictions and uncertainties

- UNRESOLVED: search snippets (unopened) suggest some course notes call the four conditions "necessary and sufficient" and NYU notes say "necessary but not sufficient". The Wisc extract does not state which. Not settled; a second source is needed (gap).
- Single source for all details.

## Related

- [[Critical Sections and Semaphores]], [[Monitors and Python Synchronization Primitives]]
- Own inference: a circular wait is a cycle in a graph; see [[Relation]] (not stated by the source).

## Sources

- [[Wisc CS 537 Notes - Deadlock]]

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification ("hold and wait" marked as gloss; detection "usually impractical" added).
