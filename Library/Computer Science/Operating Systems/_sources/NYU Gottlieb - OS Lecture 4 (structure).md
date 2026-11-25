---
title: NYU Gottlieb - OS Lecture 4 (structure)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: Allan Gottlieb (NYU), course notes
published: 2009 (Spring 2008-09 course path; page itself undated)
url: https://cs.nyu.edu/~gottlieb/courses/2000s/2008-09-spring/os202/lectures/lecture-04.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# NYU Gottlieb - OS Lecture 4 (structure)

## Why it is reliable (or not)

University lecture notes by a long-time OS instructor (author attribution from the known course site, not stated on the page itself). Older (2008-09): examples (e.g. microkernel popularity) are dated. The Edinburgh/Princeton/Rutgers slides found in search are PDFs and were not read.

## Extracted points

- System call = TRAP instruction to a kernel location by trap number; kernel treats arguments as hostile; RTI returns to user mode.
- Kernel has its own stack; privileged instructions only in kernel mode.
- Structures: monolithic (one large program), layered (THE by convention; Multics hardware-enforced), microkernel (minimal supervisor-mode kernel, services as processes; fault isolation; cost = extra process switches; policy to user mode, mechanism in kernel).

## Relevant excerpts

> "The trap instruction, like a procedure call, is a synchronous transfer of control" (Addendum 1.6A.3)

> "The idea is to have the kernel, i.e. the portion running in supervisor mode, as small as possible" (1.7.3 Microkernels)

## Used in

- Subtopic 1 (OS structure)

## Used in findings

- [[Kernel and User Mode]], [[System Calls]], [[OS Kernel Architectures]]

## History

- 2026-11-23: registered and read.
