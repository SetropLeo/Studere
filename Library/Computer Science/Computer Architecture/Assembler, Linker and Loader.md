---
title: Assembler, Linker and Loader
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Rochester CSC 252 - Linking Notes]]", "[[nand2tetris - Projects 1 to 5 (Nisan and Schocken)]]"]
tags: [finding, computer-architecture, assembler, linker, loader]
---

# Assembler, Linker and Loader

> **Summary:** A Unix toolchain turns source into assembly, then object files, then an executable, which the loader places in memory. The assembler is two-pass so labels can be used before they are defined.

## What it is

> **Assembler**: translates assembly to machine code (nand2tetris Project 4 describes assembly translated to binary by an assembler).

> **Linker**: resolves symbols across object files and libraries.

> **Loader**: copies the program into memory and runs it.

## How it works

- Toolchain (Rochester): compiler (gcc) to assembly `.s`, assembler (`as`) to object `.o`, linker (`ld`) to executable, loader to memory.
- Assembler: first pass records labels in a symbol table (forward references), second pass emits machine code. The notes say a label may be used before it is defined.
- Linker: relocation adjusts absolute addresses; PC-relative branches need less fixing. Static vs dynamic (shared) libraries; position-independent code; lazy linking.
- Loader: reads the header, creates the address space, copies code and data, sets up the stack, and jumps to a startup routine that calls `main`.

## Key terms

> **Symbol table**: map from labels to addresses built during the first assembler pass.

> **Relocation**: adjusting addresses once final placement is known.

## Example

Own illustration idea: a two-pass assembler in Python for a toy instruction set (nand2tetris-style).

## Contradictions and uncertainties

- Rochester notes are unsigned and undated, Unix/ELF-centric. `confidence: debated`.
- Planned area (plain text): Operating Systems will cover process address spaces in depth.

## Related

- [[Instruction Set Architecture]]
- [[Processor Datapath and Control]]
- [[Hash Table]] (own inference: a symbol table is naturally a map; no source says so)

## Sources

- [[Rochester CSC 252 - Linking Notes]] — toolchain, two-pass assembler, linking, loading.
- [[nand2tetris - Projects 1 to 5 (Nisan and Schocken)]] — assembler role in Project 4.

## History

- 2026-11-23: created.
- 2026-11-23: light pass, single-source accepted per user decision (verifier; Rochester notes re-checked).
