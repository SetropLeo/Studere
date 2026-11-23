---
title: Monitors and Python Synchronization Primitives
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-06-01
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Wisc CS 537 Notes - Synchronization and Monitors]]", "[[Python docs - threading]]", "[[man7 - pthreads(7)]]"]
tags: [finding, operating-systems, python]
---

# Monitors and Python Synchronization Primitives

> **Summary:** A monitor bundles data, operations and synchronization with a lock taken on entry/exit and condition variables; Python's `threading` module offers Lock, RLock, Condition, Semaphore, Event and Barrier.

## What it is

- Wisc s8: monitors bundle data, operations and synchronization; lock on entry/exit; condition variables with wait/notify/broadcast (Java: wait/notify/notifyAll). Semaphores combine exclusion and scheduling; monitors use separate structures for each.
- Python docs (threading):
  - **Lock**: once acquired, further acquires block until release; any thread may release it.
  - **RLock**: reentrant; tracks owner and recursion level.
  - **Condition**: `wait` releases the lock; use a while loop or `wait_for`.
  - **Semaphore/BoundedSemaphore**: counter. **Event**, **Barrier** also provided.
- pthreads(7): NPTL implements mutexes using the `futex` system call.

## Example

Own illustration (the exact API usage is not recorded in the source note):

```python
import threading
lock = threading.Lock()
counter = 0
def work():
    global counter
    for _ in range(1000):
        with lock:
            counter += 1
```

## Contradictions and uncertainties

- Wisc and Python agree that a condition wait is tied to a lock; Python is the only source for the while-loop guidance. Mesa vs Hoare semantics not covered (gap). Python threading read only through the summary notes; excerpts flagged "as reported by fetch tool" need recheck.

## Related

- [[Critical Sections and Semaphores]], [[Threads]], [[Deadlock]]

## Sources

- [[Wisc CS 537 Notes - Synchronization and Monitors]], [[Python docs - threading]], [[man7 - pthreads(7)]]

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
