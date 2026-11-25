---
title: Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: Barton P. Miller (University of Wisconsin-Madison), CS 537 lecture notes
published: undated (course notes site)
url: https://pages.cs.wisc.edu/~bart/537/lecturenotes/s3.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry

Covers three opened pages of the same series: s3.html (Dispatching and Creating Processes), https://pages.cs.wisc.edu/~bart/537/lecturenotes/processes-threads.html (Processes and Threads), https://pages.cs.wisc.edu/~bart/537/lecturenotes/enterexit.html (Entering and Exiting the Kernel). Index: https://pages.cs.wisc.edu/~bart/537/lecturenotes/titlepage.html

## Why it is reliable (or not)

University course notes, coherent series by a recognized systems professor. Undated and somewhat old; refers readers to OSTEP. Does not give a formal process state diagram, and does not explain exec in detail (gap).

## Extracted points

- Dispatcher keeps runnable processes; PCB stores PC, PSW, registers (and possibly memory) of a non-running process.
- Scheduler = policy; dispatcher = mechanism (context switch). OS regains control via traps (internal) or interrupts (external).
- fork copies code, data, stack and PCB of an existing process.
- Process: separate address space enforced by OS. Threads: share code/data, own stack/registers. User-level threads are invisible to the kernel (a blocking call can stall the whole process).
- The only way into the kernel is a processor interrupt; hardware vectors to a handler and saves PC/status on a kernel stack; trap instructions implement system calls; library wrapper sets errno and returns -1 on failure.

## Relevant excerpts

> "The only way to enter the operating kernel is to generate a processor interrupt." (enterexit)

> "Trap instructions are most often used to implement system calls." (enterexit)

> "The operating system is unaware that there are threads running in the process." (processes-threads; user-level threads)

## Used in

- Subtopic 1, Subtopic 2, Subtopic 7 (interrupts)

## Used in findings

- [[Kernel and User Mode]], [[System Calls]], [[Process and Process Control Block]], [[Process Creation - fork]], [[Threads]], [[Context Switch and Dispatching]], [[Interrupts, DMA and Device IO]]

## History

- 2026-11-23: registered and read.
