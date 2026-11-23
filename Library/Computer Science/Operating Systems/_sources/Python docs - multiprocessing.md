---
title: Python docs - multiprocessing
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: living page (Python 3 docs)
url: https://docs.python.org/3/library/multiprocessing.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems, python]
---

# Python docs - multiprocessing

## Why it is reliable (or not)

Official Python documentation. Only first ~100k of ~162k characters read. Defaults changed across versions (3.14 note), so version-sensitive: review-by 2027-06.

## Extracted points

- Start methods: spawn (fresh interpreter; default on Windows/macOS), fork (os.fork, POSIX only), forkserver (default on POSIX since 3.14).
- Processes sidestep the GIL; Queue and Pipe (pickling), Value/Array shared memory, Manager server process.

## Relevant excerpts

> "Note that safely forking a multithreaded process is problematic." (Contexts and start methods)

> "effectively side-stepping the Global Interpreter Lock by using subprocesses instead of threads" (Introduction)

## Used in

- Subtopic 2 (processes in Python, IPC); Subtopic 4

## Used in findings

- [[Process Creation - fork]], [[Threads]]

## History

- 2026-11-23: registered and read (partially).
