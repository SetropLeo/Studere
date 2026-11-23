---
title: Threads
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by: 2027-06-01
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[man7 - pthreads(7)]]", "[[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]]", "[[Python docs - threading]]", "[[Python docs - multiprocessing]]"]
tags: [finding, operating-systems, python]
---

# Threads

> **Summary:** Threads in one process share memory but have separate stacks and registers; the Python GIL is a CPython-specific limit on top of this.

## What it is

- man7 pthreads(7): threads of a process share global memory (data and heap), each has its own stack (confirmed verbatim: "share the same global memory (data and heap segments), but each thread has its own stack"). Process-wide: PID, open file descriptors, signal dispositions, cwd/root, resource limits. Per-thread: thread ID, signal mask, `errno`, alternate signal stack, real-time scheduling policy/priority, capabilities, CPU affinity.
- Wisc CS 537: threads share code/data and own their stack and registers; a process has a separate address space. Two sources agree.
- User-level threads are invisible to the kernel, so a blocking call can stall the whole process (Wisc; single source).

## How it works

NPTL (Linux threading implementation) implements mutexes and joining with the `futex` system call (pthreads(7)). See [[Monitors and Python Synchronization Primitives]].

## Python-specific (GIL)

> **GIL (Global Interpreter Lock)**: in CPython only one thread executes Python bytecode at a time (Python docs, threading).

The docs recommend threads for I/O-bound work and `multiprocessing` for CPU-bound work; free-threaded builds (3.13+) are optional. `multiprocessing` side-steps the GIL by using subprocesses (Python docs). This is Python-specific, not an OS property. Review-by 2027-06-01 (fast-changing).

## Contradictions and uncertainties

- Futex semantics not explained in the source. Any "as reported by fetch tool" excerpts should be rechecked before quoting.

## Related

- [[Process and Process Control Block]], [[Process Creation - fork]], [[Context Switch and Dispatching]], [[Critical Sections and Semaphores]]

## Sources

- [[man7 - pthreads(7)]] - shared vs per-thread attributes, futex
- [[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]] - threads vs processes, user-level threads
- [[Python docs - threading]] - GIL
- [[Python docs - multiprocessing]] - sidestepping the GIL

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification (shared-memory sentence confirmed verbatim; paraphrase caveat dropped).
