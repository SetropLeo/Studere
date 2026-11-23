---
title: Wisc CS 537 Notes - Synchronization and Monitors
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: Barton P. Miller (University of Wisconsin-Madison), CS 537 lecture notes
published: undated (course notes site)
url: https://pages.cs.wisc.edu/~bart/537/lecturenotes/s5.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Wisc CS 537 Notes - Synchronization and Monitors

Pages opened: s5.html (Too Much Milk), https://pages.cs.wisc.edu/~bart/537/lecturenotes/s7.html (Readers and Writers with semaphores), https://pages.cs.wisc.edu/~bart/537/lecturenotes/s8.html (Monitors). s6 (producer/consumer) not opened.

## Why it is reliable (or not)

University course notes by a recognized professor; undated. Race condition is not explicitly defined on s7; critical-section term is defined on s5.

## Extracted points

- Synchronization = atomic operations ensuring correct cooperation; critical section = code only one process may execute at a time; locks make others wait.
- Readers/writers via semaphores (Lock for state, OKToRead, OKToWrite): many readers or one exclusive writer; rule: one semaphore per constraint.
- Monitors bundle data, operations and synchronization; lock on entry/exit; condition variables (wait/notify/broadcast; Java: wait/notify/notifyAll). Semaphores combine exclusion and scheduling; monitors separate them.

## Relevant excerpts

> "A section of code, or collection of operations, in which only one process may be executing at a given time." (s5)

> "It is safe for any number of readers to access the database simultaneously, but each writer must have exclusive access." (s7)

> "Semaphores use a single structure for both exclusion and scheduling, monitors use different structures for each." (s8)

## Used in

- Subtopic 4

## Used in findings

- [[Critical Sections and Semaphores]], [[Monitors and Python Synchronization Primitives]]

## History

- 2026-11-23: registered and read.
