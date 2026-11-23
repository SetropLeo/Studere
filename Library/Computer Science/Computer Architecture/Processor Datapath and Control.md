---
title: Processor Datapath and Control
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[nand2tetris - Projects 1 to 5 (Nisan and Schocken)]]", "[[Brown CSCI 1952y - Pipelined CPU Notes]]", "[[USFCA CS 315 - Processor Pipeline Hazards]]"]
tags: [finding, computer-architecture, cpu, datapath]
---

# Processor Datapath and Control

> **Summary:** nand2tetris Project 5 assembles the Hack CPU, memory and a top-level Computer chip with instruction ROM. The pipelined notes contrast this with single-cycle designs. No source is dedicated to datapath and control theory.

## What it is

> **Datapath**: the components (ALU, registers, memory paths) through which instruction data flows. Own gloss.

> **Hack**: nand2tetris's teaching architecture, not an industry ISA; do not generalize from it.

## How it works

- Project 5: assemble CPU, Memory (RAM16K, Screen, Keyboard) and the top-level Computer with instruction ROM; it runs Add, Max and Rect programs.
- Project 4: assembly is translated to binary by an assembler; Mult.asm and Fill.asm use memory-mapped screen and keyboard I/O.
- USFCA moves from a single-cycle processor to a five-stage pipeline with pipeline registers. Brown's pipeline registers carry both data and control. See [[Pipelining and Hazards]].

## Key terms

> **Memory-mapped I/O**: screen and keyboard accessed as memory locations (nand2tetris Project 4).

## Example

Own illustration idea: a tiny Python CPU that fetches an instruction, decodes it, runs the ALU, and updates a PC register, modeled on the nand2tetris bottom-up build (the source note suggests this as a project model).

## Contradictions and uncertainties

- No dedicated source for datapath and control design. Single-cycle vs multicycle comparison is not sourced beyond the USFCA mention. `confidence: debated`.
- Gap: control signal generation and instruction decoding logic in detail.

## Related

- [[Combinational Circuits]]
- [[Sequential Circuits and Finite State Machines]]
- [[Instruction Set Architecture]]
- [[Pipelining and Hazards]]
- [[Assembler, Linker and Loader]]

## Sources

- [[nand2tetris - Projects 1 to 5 (Nisan and Schocken)]] — Projects 4 and 5.
- [[Brown CSCI 1952y - Pipelined CPU Notes]] — pipeline registers carry data and control.
- [[USFCA CS 315 - Processor Pipeline Hazards]] — single-cycle to pipelined.

## History

- 2026-11-23: created.
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
