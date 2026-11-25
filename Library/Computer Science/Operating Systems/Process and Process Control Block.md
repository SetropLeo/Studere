---
title: Process and Process Control Block
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]]", "[[man7 - credentials(7)]]"]
tags: [finding, operating-systems]
---

# Process and Process Control Block

> **Summary:** A process is a program in execution with its own OS-enforced address space; the kernel keeps a process control block (PCB) holding the state needed to resume it.

## What it is

- Wisc CS 537: a process has a separate address space enforced by the OS. The dispatcher takes the next process from a queue of runnable processes (Wisc, plans 1-2); the PCB stores the program counter (PC), processor status word (PSW) and registers (possibly memory information) of a process that is not running.
- man7 credentials(7) lists identity attributes a Linux process carries: PID, PPID, real/effective/saved set-user-ID and group-ID, filesystem IDs, supplementary groups. See [[Access Control and Privilege]].

> **PCB (process control block)**: per-process record of saved execution state (Wisc).

## How it works

A non-running process's state sits in its PCB; on a [[Context Switch and Dispatching]] the registers of the outgoing process are saved there and the incoming one's are restored (Wisc; restore step is own inference from the dispatcher description).

## Contradictions and uncertainties

- GAP: the source does not give a formal process state diagram (ready/running/blocked); not described here.
- Single main source; Linux's task structure is mentioned only in fork(2) ("creating a task structure"), see [[Process Creation - fork]].

## Related

- [[Threads]], [[Process Creation - fork]], [[CPU Scheduling Algorithms]]

## Sources

- [[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]] - address space, PCB contents
- [[man7 - credentials(7)]] - process identity attributes

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification (dispatcher wording softened).
