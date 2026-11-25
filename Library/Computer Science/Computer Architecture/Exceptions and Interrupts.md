---
title: Exceptions and Interrupts
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[RISC-V ISA Manual - Machine-Level ISA (Traps)]]"]
tags: [finding, computer-architecture, exceptions, interrupts, risc-v]
---

# Exceptions and Interrupts

> **Summary:** In RISC-V machine mode, exceptions are synchronous and interrupts are asynchronous. Both trap into M-mode and are reported in `mcause`. Reference-level note only.

## What it is

> **Exception**: synchronous event tied to an instruction. Unverified in this note's source: the synchronous/asynchronous definitions are stated in the RISC-V Unprivileged spec introduction, not re-read here, and are not on the machine-level page read (first 100k characters).

> **Interrupt**: asynchronous event external to the instruction stream. Same caveat as above (RISC-V Unprivileged spec introduction, not re-read here; unverified in this note's source).

## How it works

- `mepc` holds the address of the interrupted or faulting instruction.
- `mcause`: the top bit is set for interrupts. Examples: illegal instruction = 2, machine timer interrupt = 7.
- `mtvec` holds BASE and MODE. Direct mode: PC = BASE. Vectored mode: interrupts go to BASE + 4 x cause (the fetch tool reported this wording, so recheck).
- `mret` returns from the trap, restoring interrupt-enable and privilege mode.

## Key terms

> **CSR**: control and status register, such as `mepc`, `mcause`, `mtvec`.

> **Trap**: transfer of control to a handler due to an exception or interrupt.

## Example

None; the source is a specification and was read only partially.

## Contradictions and uncertainties

- Single source, level A, only about 100k of 163.6k characters read. `confidence: debated`.
- Gaps: interaction with pipelines (precise exceptions), non-RISC-V mechanisms, supervisor mode and OS handling. Planned area (plain text): Operating Systems.

## Related

- [[Instruction Set Architecture]]
- [[Pipelining and Hazards]]

## Sources

- [[RISC-V ISA Manual - Machine-Level ISA (Traps)]] — trap CSRs and behavior.

## History

- 2026-11-23: created.
- 2026-11-23: light pass, single-source accepted per user decision (verifier; mtvec, mepc, mcause codes 2 and 7, mret re-checked on the machine-level page).
- 2026-11-23: wording fix after light verification (synchronous/asynchronous definitions no longer attributed to the machine-level page; marked as stated in the Unprivileged spec introduction, not re-read here).
