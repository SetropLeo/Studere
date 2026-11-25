---
title: man7 - syscalls(2)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux man-pages project (Michael Kerrisk, maintainer)
published: living page (no date)
url: https://man7.org/linux/man-pages/man2/syscalls.2.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# man7 - syscalls(2)

## Why it is reliable (or not)

Official Linux man-pages project, the reference for the Linux user-space/kernel interface. Does not cover kernel/user mode itself.

## Extracted points

- A system call is the interface between application and kernel.
- Applications normally reach system calls via libc wrapper functions (glibc), which set up arguments, invoke the call and set `errno` on failure.
- Some calls are multiplexed (e.g. `socketcall(2)`, `ipc(2)`).

## Relevant excerpts

> "The system call is the fundamental interface between an application and the Linux kernel." (DESCRIPTION)

> "System calls are generally not invoked directly, but rather via wrapper functions in glibc" (DESCRIPTION)

## Used in

- Subtopic 1 (OS structure and kernel interface)

## Used in findings

- [[System Calls]]

## History

- 2026-11-23: registered and read.
