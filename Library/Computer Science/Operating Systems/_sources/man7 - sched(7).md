---
title: man7 - sched(7)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux man-pages project
published: living page (no date)
url: https://man7.org/linux/man-pages/man7/sched.7.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# man7 - sched(7)

## Why it is reliable (or not)

Official Linux man-pages; describes the real Linux policies. Describes Linux only, not general textbook algorithms.

## Extracted points

- SCHED_OTHER: default time-sharing, static priority 0, dynamic priority from nice (-20..+19).
- SCHED_FIFO: real-time, priorities 1-99, no time slicing; runs until it blocks, is preempted by higher priority, or yields.
- SCHED_RR: FIFO plus a maximum time quantum, then moves to the end of its priority list.
- SCHED_DEADLINE: sporadic real-time tasks, Global EDF + Constant Bandwidth Server, params runtime <= deadline <= period, admission test (EBUSY if infeasible).
- Real-time threads always outrank normal ones; scheduling is preemptive.

## Relevant excerpts

> "SCHED_FIFO is a simple scheduling algorithm without time slicing." (Scheduling policies)

> "Each thread is allowed to run only for a maximum time quantum." (SCHED_RR)

## Used in

- Subtopic 3 (CPU scheduling: real-time, priority, round robin in practice)

## Used in findings

- [[Linux Scheduling Policies]]

## History

- 2026-11-23: registered and read.
