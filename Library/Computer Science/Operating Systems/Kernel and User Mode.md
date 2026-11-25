---
title: Kernel and User Mode
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[NYU Gottlieb - OS Lecture 4 (structure)]]", "[[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]]"]
tags: [finding, operating-systems]
---

# Kernel and User Mode

> **Summary:** The kernel runs in a privileged mode; ordinary programs run in user mode and can enter the kernel only through a controlled hardware mechanism (an interrupt or a trap instruction).

## What it is

> **Kernel**: the part of the operating system that runs in supervisor (privileged) mode (NYU Gottlieb, 1.7.3).
> **User mode**: the unprivileged mode in which application code runs (gloss, unsourced; contrasted with kernel mode in both sources).

Per NYU Gottlieb, privileged instructions can be executed only in kernel mode, and the kernel has its own stack (single source for these two points).

## How it works

- Per Wisc CS 537 (enterexit page), the only way to enter the kernel is to generate a processor interrupt; the hardware vectors to a handler and saves the program counter and status on a kernel stack. Trap instructions are most often used to implement [[System Calls]].
- Per NYU Gottlieb, a system call is a TRAP instruction to a kernel location chosen by a trap number; the notes describe a trap as a synchronous transfer of control like a procedure call. The kernel treats the arguments as hostile, and an RTI (return from interrupt) instruction goes back to user mode.
- The two sources agree on the entry mechanism (trap/interrupt, kernel stack). Wisc names interrupts (external) and traps (internal) as the two ways the OS regains control.

## Key terms

> **Trap**: a synchronous, program-caused transfer of control into the kernel (NYU Gottlieb; Wisc).
> **Interrupt**: an external event that also transfers control to a kernel handler (Wisc).

## Example

A program calls a library function such as `read`; the wrapper executes a trap, the CPU switches to kernel mode on the kernel stack, the kernel checks the arguments, does the work, and returns to user mode. (Composite of the two sources; see [[System Calls]].)

## Contradictions and uncertainties

- NYU notes are from 2008-09 and Wisc notes are undated; both are B-level course notes. No A-level textbook source was read (OSTEP is PDF-only).
- Hardware detail (mode bits, vectors) is covered by the architecture notes, not by these sources; see [[Exceptions and Interrupts]] and [[Instruction Set Architecture]] (own inference: the OS-level trap corresponds to the architecture-level exception; the sources read here do not state that link).

## Related

- [[System Calls]], [[OS Kernel Architectures]], [[Interrupts, DMA and Device IO]], [[Context Switch and Dispatching]]
- [[Exceptions and Interrupts]], [[Instruction Set Architecture]]
- Security (planned area; plain text)

## Sources

- [[NYU Gottlieb - OS Lecture 4 (structure)]] - trap, kernel stack, privileged instructions
- [[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]] - interrupt as the only entry

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
