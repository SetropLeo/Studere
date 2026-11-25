---
title: man7 - fork(2)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux man-pages project
published: living page (no date)
url: https://man7.org/linux/man-pages/man2/fork.2.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# man7 - fork(2)

## Why it is reliable (or not)

Official Linux man-pages. Linux-specific behaviour (copy-on-write); POSIX semantics generally match.

## Extracted points

- fork duplicates the calling process; child gets own PID, one thread, copies of open file descriptors (sharing offsets and flags).
- Memory is separate after fork; writes/mmap/munmap by one do not affect the other.
- Linux implements it with copy-on-write; the main cost is copying page tables and creating a task structure.
- Not inherited: memory locks, pending signals, timers, record locks.

## Relevant excerpts

> "The child process and the parent process run in separate memory spaces." (DESCRIPTION)

> "implemented using copy-on-write pages" (NOTES, Linux)

## Used in

- Subtopic 2 (Processes and threads)

## Used in findings

- [[Process Creation - fork]]

## History

- 2026-11-23: registered and read.
