---
title: Linux Scheduling Policies
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[man7 - sched(7)]]"]
tags: [finding, operating-systems]
---

# Linux Scheduling Policies

> **Summary:** Linux offers a default time-sharing policy plus real-time policies (FIFO, RR, DEADLINE); real-time threads always outrank normal ones. Single A-level source, hence `debated` under the project rule.

## What it is

From man7 sched(7):
- **SCHED_OTHER**: default time-sharing, static priority 0, dynamic priority from nice (-20..+19).
- **SCHED_FIFO**: real-time, priorities 1-99, no time slicing; runs until it blocks, is preempted by a higher priority, or yields. ("SCHED_FIFO is a simple scheduling algorithm without time slicing.")
- **SCHED_RR**: FIFO plus a maximum time quantum, after which the thread goes to the end of its priority list.
- **SCHED_DEADLINE**: sporadic real-time tasks; Global EDF with a Constant Bandwidth Server; parameters runtime <= deadline <= period; an admission test fails with EBUSY if infeasible.
- Scheduling is preemptive and real-time threads always outrank normal ones.

## How it works

Textbook counterparts: RR and EDF in [[CPU Scheduling Algorithms]] (own inference on the mapping; the Linux page itself does not describe the textbook algorithms). Per pthreads(7), the real-time policy and priority are per-thread attributes ([[Threads]]).

## Contradictions and uncertainties

- Linux only; it does not describe the default policy internals beyond nice values. Review-by 2027-11-23 as kernel behavior evolves.

## Related

- [[CPU Scheduling Algorithms]], [[Context Switch and Dispatching]], [[Containers - Namespaces and cgroups]] (cpu controller)

## Sources

- [[man7 - sched(7)]]

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
