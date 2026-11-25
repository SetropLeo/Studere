---
title: System Calls
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[man7 - syscalls(2)]]", "[[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]]", "[[NYU Gottlieb - OS Lecture 4 (structure)]]"]
tags: [finding, operating-systems]
---

# System Calls

> **Summary:** A system call is the interface through which an application asks the kernel for a service; programs normally reach it through a C library wrapper that sets `errno` on failure.

## What it is

> **System call**: the fundamental interface between an application and the Linux kernel (man7 syscalls(2), DESCRIPTION; verbatim sentence recorded in the source note).

## How it works

- man7 syscalls(2): calls are generally not invoked directly but through wrapper functions in glibc, which set up arguments, invoke the call and set `errno` on failure. Some calls are multiplexed (for example `socketcall(2)`, `ipc(2)`).
- Wisc CS 537: a trap instruction implements the call; the library wrapper sets `errno` and returns -1 on failure.
- NYU Gottlieb: the call is a TRAP to a kernel location given by a trap number, and the kernel treats arguments as hostile. See [[Kernel and User Mode]].

Three sources agree on the wrapper/trap picture (two B-level and one A-level, the latter Linux-specific).

## Key terms

> **errno**: error-code variable set by the libc wrapper when a call fails (man7 syscalls(2)).
> **Wrapper function**: a library function that prepares arguments and performs the call (man7).

## Example

Own illustration (not from a source): `read(fd, buf, n)` in C is a glibc wrapper; on error it returns -1 and the reason is in `errno`.

## Contradictions and uncertainties

- The syscalls(2) page does not cover kernel/user mode itself. The full syscall list was not recorded here.
- Python `os` module wrappers: not read (gap).

## Related

- [[Kernel and User Mode]], [[Process Creation - fork]], [[Interrupts, DMA and Device IO]]
- [[Instruction Set Architecture]] (own inference: the trap instruction belongs to the ISA; not stated in the sources read)

## Sources

- [[man7 - syscalls(2)]] - definition, glibc wrappers, errno
- [[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]] - trap implements calls, errno/-1
- [[NYU Gottlieb - OS Lecture 4 (structure)]] - trap number, hostile arguments

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
