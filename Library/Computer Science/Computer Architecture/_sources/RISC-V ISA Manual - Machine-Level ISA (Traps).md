---
title: RISC-V ISA Manual - Machine-Level ISA (Traps)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: standard
author: RISC-V International (ISA manual contributors)
published: Machine-Level ISA Version 1.13 (manual snapshot 20260120 per redirect)
url: https://docs.riscv.org/reference/isa/v20260120/priv/machine.html
accessed: 2026-11-23
url-verified: true
tags: [source, computer-architecture, exceptions, interrupts, risc-v]
review-by: 2027-11-23
---

# RISC-V ISA Manual - Machine-Level ISA (Traps)

## Why it is reliable (or not)

Official specification. Only the first 100,000 of ~163,600 characters were read (trap CSRs in M-mode covered). Specialized (privileged) text; heavy for a beginner, use only as reference.

## Extracted points

- Both exceptions and interrupts trap into M-mode and are reported in `mcause`.
- Not confirmed on the page read: the definitions "exceptions are synchronous (tied to an instruction); interrupts are asynchronous (external to the instruction stream)". These are stated in the RISC-V Unprivileged spec introduction, not re-read here; unverified in this source.
- `mepc` = address of the interrupted/faulting instruction; `mcause` top bit set for interrupts (e.g. illegal instruction = 2, machine timer interrupt = 7); `mtvec` BASE+MODE (direct: PC=BASE; vectored: interrupts go to BASE+4*cause); `mret` returns from trap restoring interrupt-enable and privilege mode.

## Relevant excerpts

> "Asynchronous interrupts set `pc` to BASE+4×cause." (mtvec, vectored mode, as returned by the fetch tool)

## Used in

- Subtopic 6 (exceptions/interrupts).
- [[Exceptions and Interrupts]]

## History

- 2026-11-23: read (partial) and registered (researcher, stage 1).
- 2026-11-23: wording fix after light verification (synchronous/asynchronous definitions not on the page read; marked unverified in this source).
