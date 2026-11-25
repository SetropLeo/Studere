---
title: RISC-V ISA Manual - RV32I Base Integer ISA
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: standard
author: RISC-V International (ISA manual contributors)
published: manual versions listed on page 20240411, 20250508, 20260120; chapter "Version 2.1"
url: https://docs.riscv.org/reference/isa/v20260120/unpriv/rv32.html
accessed: 2026-11-23
url-verified: true
tags: [source, computer-architecture, isa, risc-v, instruction-formats]
review-by: 2027-11-23
---

# RISC-V ISA Manual - RV32I Base Integer ISA

## Why it is reliable (or not)

Official specification by the standards body RISC-V International. The page lists three manual versions without saying which applies to the chapter; URL pins v20260120. Read via a fetch summarizer, so bit-layout diagrams were not verified.

## Extracted points

- Four base formats R, I, S, U (B and J are immediate-encoding variants of S and U); all 32 bits; rs1/rs2/rd in fixed positions to simplify decoding.
- 32 integer registers x0..x31 (XLEN=32), x0 hardwired zero, plus pc; convention x1 return address, x2 stack pointer.
- Immediates are sign-extended, sign bit always instruction bit 31; 12-bit regular immediates; LUI/AUIPC 20-bit shifted left 12.
- Branches (BEQ, BNE, BLT, BLTU, BGE, BGEU) +/-4 KiB; JAL +/-1 MiB PC-relative; JALR register indirect.
- ECALL (service request to execution environment), EBREAK (debugger) are SYSTEM instructions.

## Relevant excerpts

> "All are a fixed 32 bits in length." (Base Instruction Formats)

## Used in

- Subtopic 6 (instruction formats, addressing modes: PC-relative, register+immediate); subtopic 5 (decode fields).
- [[Instruction Set Architecture]]

## History

- 2026-11-23: read and registered (researcher, stage 1).
