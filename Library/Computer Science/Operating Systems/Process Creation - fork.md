---
title: Process Creation - fork
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by: 2027-06-01
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[man7 - fork(2)]]", "[[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]]", "[[Python docs - multiprocessing]]", "[[man7 - credentials(7)]]"]
tags: [finding, operating-systems]
---

# Process Creation - fork

> **Summary:** `fork` creates a new process by duplicating the caller; Linux implements it with copy-on-write so only page tables and a task structure are copied up front.

## What it is

- man7 fork(2): the child gets its own PID and one thread (the caller's), and copies of the open file descriptors (sharing offsets and flags). Parent and child run in separate memory spaces (verbatim line recorded in the source note).
- Not inherited: memory locks, pending signals, timers, record locks (man7).
- Wisc CS 537: fork copies code, data, stack and PCB of an existing process (see [[Process and Process Control Block]]). Two sources agree on duplication; the man7 page adds the Linux detail.

## How it works

- Linux uses copy-on-write pages; the main cost is copying page tables and creating a task structure (man7, NOTES).

> **Copy-on-write**: parent and child initially share pages; a page is copied when one writes to it (gloss, unsourced; man7 says only that fork is implemented using copy-on-write pages).

- Credentials: fork copies user/group IDs to the child (man7 credentials(7)); see [[Access Control and Privilege]].
- Python `multiprocessing` start methods: spawn (fresh interpreter; default on Windows and macOS), fork (uses `os.fork`, POSIX only), forkserver (default on POSIX since 3.14, per the recorded note). The docs warn that safely forking a multithreaded process is problematic. See [[Threads]].
- Further changes seen by the verifier in the multiprocessing docs: from Python 3.15.1, spawn becomes the default when there is no writable temp directory; a `DeprecationWarning` (since 3.12) is issued when forking a multithreaded process. The multiprocessing page was read to about 100k of 162k characters.

## Example

Own illustration (API name not recorded in the sources): choosing a start method in Python.

```python
import multiprocessing as mp
if __name__ == "__main__":
    ctx = mp.get_context("spawn")   # or "fork" / "forkserver"
```

## Contradictions and uncertainties

- GAP: `exec`/`execve` is not covered by any read source and is not described here (credentials(7) says only that execve keeps real IDs and may change effective/saved IDs).
- Default start method changed in 3.14 (version-sensitive); review-by 2027-06-01. Multiprocessing source read only partially (~100k of ~162k characters).

## Related

- [[Threads]], [[System Calls]], [[Paging and Virtual Memory]] (own inference: page tables and copy-on-write relate to virtual memory), [[Process and Process Control Block]]

## Sources

- [[man7 - fork(2)]] - semantics, copy-on-write
- [[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]] - what is copied
- [[Python docs - multiprocessing]] - start methods
- [[man7 - credentials(7)]] - ID inheritance

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification (added 3.15.1 spawn-default and 3.12 DeprecationWarning notes; review-by kept 2027-06-01).
