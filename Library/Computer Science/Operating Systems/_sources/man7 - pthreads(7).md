---
title: man7 - pthreads(7)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux man-pages project
published: living page (no date)
url: https://man7.org/linux/man-pages/man7/pthreads.7.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# man7 - pthreads(7)

## Why it is reliable (or not)

Official Linux man-pages. Does not explain mutex/condvar semantics (points to other pages).

## Extracted points

- Threads in a process share global memory (data, heap); each has its own stack.
- Process-wide: PID, open file descriptors, signal dispositions, cwd/root, resource limits.
- Per-thread: thread ID, signal mask, errno, alternate signal stack, RT scheduling policy/priority, capabilities, CPU affinity.
- NPTL implements mutexes/joining with the futex system call.

## Relevant excerpts

> "These threads share the same global memory (data and heap segments), but each thread has its own stack" (confirmed verbatim on the page)

## Used in

- Subtopic 2 (threads vs processes); Subtopic 4 (futex-based primitives)

## Used in findings

- [[Threads]], [[Monitors and Python Synchronization Primitives]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: wording fix after light verification (shared-memory sentence confirmed verbatim).
