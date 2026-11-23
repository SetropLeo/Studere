---
title: CPU Scheduling Algorithms
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Aspnes Yale - Processor Scheduling]]", "[[CSUStan CS 3750 - CPU Scheduling Notes]]"]
tags: [finding, operating-systems]
---

# CPU Scheduling Algorithms

> **Summary:** Classic policies for choosing which runnable process gets the CPU: FCFS, round robin, shortest job first, priority, and multilevel queues.

## Confidence scope

`established` applies only to the algorithms listed by BOTH sources as covered: FCFS, SJF, RR, priority, MLFQ (the CSUStan source note lists exactly these plus multiprocessor and real-time scheduling). Details marked (Aspnes only) are single-source.

## What it is and how it works

- **FCFS** (first come, first served): no preemption; convoy effect (named explicitly by CSUStan; Aspnes describes the underlying problem of a long burst running first but does not use the word "convoy").
- **Round robin (RR)**: time slices; the quantum size is a tradeoff (Aspnes).
- **SJF** (shortest job first): the next CPU burst length is estimated by an exponential average (Aspnes).
- **Priority**: low-priority jobs may starve (Aspnes, verbatim "Low-priority jobs may starve"); aging fixes starvation (CSUStan names "Aging" explicitly; Aspnes states the fix as slowly increasing the priority of starving jobs), and priority inversion is fixed by boosting (Aspnes, as extracted in the source note; see Aspnes note).
- **Multilevel queue** and **multilevel feedback queue (MLFQ)**: processes move between queues by past behavior (Aspnes). MLFQ is also covered by CSUStan.
- **EDF** (earliest deadline first) for real-time (Aspnes only). Linux's SCHED_DEADLINE uses it; see [[Linux Scheduling Policies]].
- Multiprocessor: symmetric/asymmetric, work stealing, affinity vs load balance (Aspnes; depth is a gap).
- Aspnes states the goal of graceful degradation under load (verbatim: "The goal is to get graceful degradation in performance when the system is loaded.").

> **Convoy effect**, **aging**, **priority inversion**: "convoy effect" and "Aging" are named explicitly in CSUStan (the concepts also appear in Aspnes, without these words); not defined in the source notes (gloss, unsourced beyond the fixes above).

## Example

No worked numerical example in the sources (gap; own illustrations would be labelled).

## Contradictions and uncertainties

- The CSUStan page lacks a stated author; its author is unknown, but it confirms details (convoy effect, aging) in addition to topic coverage. Aspnes is an archived 2003-2012 copy.
- Own inference: priorities form an ordering; see [[Partial Order]] and [[Relation]] (not stated by the sources).
- Real-time and multiprocessor depth is a gap.

## Related

- [[Linux Scheduling Policies]], [[Context Switch and Dispatching]], [[Process and Process Control Block]], [[Critical Sections and Semaphores]]

## Sources

- [[Aspnes Yale - Processor Scheduling]] - algorithms and fixes
- [[CSUStan CS 3750 - CPU Scheduling Notes]] - FCFS, SJF, RR, priority, MLFQ coverage; names the convoy effect and aging explicitly

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification (convoy effect and aging re-attributed to CSUStan; Aspnes describes the concepts without those words).
