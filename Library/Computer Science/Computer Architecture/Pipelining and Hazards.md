---
title: Pipelining and Hazards
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Brown CSCI 1952y - Pipelined CPU Notes]]", "[[USFCA CS 315 - Processor Pipeline Hazards]]"]
tags: [finding, computer-architecture, pipelining, hazards]
---

# Pipelining and Hazards

> **Summary:** A five-stage pipeline overlaps instructions to raise throughput. Overlap causes data and control hazards, handled by forwarding, stalls (bubbles) and flushing. Two university sources agree on the basics.

## What it is

> **Pipeline**: overlapping instruction execution across stages with pipeline registers between them. Each instruction still takes five cycles (Brown).

> **Hazard**: overlap causes use of a value, or the PC, before it is ready (USFCA).

## How it works

- Stages: IF, ID, Ex, Mem, WB (Brown); USFCA names them IF, DR, EX, MEM, WB.
- Data hazard (RAW): the result is not yet written back. Forwarding bypasses the register file, moving data to where it is needed as soon as it exists; the most recent (closest) producer wins (both sources). USFCA's starter pipeline needs 3 nops; the register file's write-first-half, read-second-half timing removes one, and forwarding muxes remove the rest.
- Load-use: a load followed by a dependent instruction cannot be fixed by forwarding because the load's value is ready only in MEM (USFCA). Brown's hazard unit inserts a NOP (clears ID/Ex) and holds PC and IF/ID one cycle; USFCA calls it a one-cycle stall or bubble.
- Control hazard: branches and jumps are resolved in Mem in Brown's design and redirect the PC from EX in USFCA's; wrong-path instructions are flushed. The resolution stage differs by design.

## Key terms

> **Forwarding (bypassing)**: routing a result directly to an ALU input before write-back.

> **Bubble**: a no-op inserted by a stall.

## Example

Own illustration: `lw x5, 0(x1)` followed by `add x6, x5, x2` triggers a load-use stall (the pattern follows the sources' description).

## Contradictions and uncertainties

- Branch resolution stage differs (Mem in Brown vs EX in USFCA); this is a design difference, not a conflict.
- Gaps: structural hazards (USFCA summary silent, Brown not covering), branch prediction, SIMD and instruction-level parallelism.

## Related

- [[Processor Datapath and Control]]
- [[Instruction Set Architecture]]
- [[Exceptions and Interrupts]]
- [[Memory Hierarchy and Caches]]

## Sources

- [[Brown CSCI 1952y - Pipelined CPU Notes]] — stages, forwarding, hazard unit.
- [[USFCA CS 315 - Processor Pipeline Hazards]] — hazards, load-use, flush.

## History

- 2026-11-23: created.
- 2026-11-23: light pass, single-source accepted per user decision (verifier; both Brown and USFCA pages re-read and agree on forwarding, load-use stall and flush, so confidence established kept).
