---
title: Python docs - threading
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: living page (Python 3 docs)
url: https://docs.python.org/3/library/threading.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems, python]
---

# Python docs - threading

## Why it is reliable (or not)

Official Python documentation; the practice vehicle (Python) for synchronization primitives.

## Extracted points

- GIL: in CPython only one thread executes Python bytecode at a time; use multiprocessing for CPU-bound work; threads fit I/O-bound work; free-threaded builds (3.13+) are optional.
- Lock, RLock (reentrant, owner + recursion level), Condition (wait releases the lock; use while loop or wait_for), Semaphore/BoundedSemaphore (counter), Event, Barrier.

## Relevant excerpts

> "Once a thread has acquired a lock, subsequent attempts to acquire it block, until it is released; any thread may release it." (Lock objects)

> "only one thread can execute Python code at once" (GIL note; as reported by fetch tool)

## Used in

- Subtopic 4 (mutex, semaphore, condition variable in Python); Subtopic 2 (threads)

## Used in findings

- [[Threads]], [[Monitors and Python Synchronization Primitives]], [[Critical Sections and Semaphores]]

## History

- 2026-11-23: registered and read.
