---
title: Instruction Set Architecture
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[RISC-V ISA Manual - RV32I Base Integer ISA]]"]
tags: [finding, computer-architecture, isa, risc-v]
---

# Instruction Set Architecture

> **Summary:** The RISC-V RV32I base ISA uses fixed 32-bit instructions, 32 integer registers with x0 hardwired to zero, sign-extended immediates, and PC-relative branches and jumps.

## What it is

> **ISA**: the interface between software and hardware; here, RISC-V RV32I as specified by RISC-V International.

## How it works

- Four base formats R, I, S, U. B and J are immediate-encoding variants of S and U. All are 32 bits; rs1, rs2 and rd sit in fixed positions to simplify decoding.
- 32 integer registers x0..x31 (XLEN=32), x0 hardwired to zero, plus pc. Convention: x1 return address, x2 stack pointer.
- Immediates are sign-extended, with the sign bit always instruction bit 31. Regular immediates are 12 bits; LUI and AUIPC take 20 bits shifted left 12.
- Branches (BEQ, BNE, BLT, BLTU, BGE, BGEU) reach +/-4 KiB; JAL reaches +/-1 MiB PC-relative; JALR is register indirect.
- ECALL (service request to the execution environment) and EBREAK (debugger) are SYSTEM instructions.

## Key terms

> **XLEN**: register width in bits (32 for RV32).

> **Sign extension**: widening a value by replicating its sign bit. See [[Binary Integers and Two's Complement]].

## Example

Not provided: bit-layout diagrams were not verified because the source was read through a fetch summarizer.

## Contradictions and uncertainties

- Single source (official spec, level A), read via summarizer; verify bit positions and ranges against the manual before relying on them. The convention for x1 and x2 is a calling convention, not an architectural rule (the source note calls it a convention).
- The manual page lists three versions without saying which applies; the URL pins v20260120. `review-by: 2027-11-23`.
- Gaps: classic addressing modes in x86, MIPS, ARM; RISC vs CISC comparison; the M/A/F extensions.

## Related

- [[Assembler, Linker and Loader]]
- [[Exceptions and Interrupts]]
- [[Processor Datapath and Control]]
- [[Pipelining and Hazards]]

## Sources

- [[RISC-V ISA Manual - RV32I Base Integer ISA]] — formats, registers, immediates, branch ranges.

## History

- 2026-11-23: created.
- 2026-11-23: light pass, single-source accepted per user decision (verifier; formats, x0, sign extension, +/-4 KiB and +/-1 MiB re-checked on the RV32I page).
