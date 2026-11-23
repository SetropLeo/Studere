---
title: nand2tetris - Projects 1 to 5 (Nisan and Schocken)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: Shimon Schocken (project pages credit); companion to the book "The Elements of Computing Systems" by Nisan and Schocken
published: page copyright 2017 and 2025 (project01 page); other pages not dated
url: https://www.nand2tetris.org/project01
accessed: 2026-11-23
url-verified: true
tags: [source, computer-architecture, logic-gates, alu, cpu, assembly, nand2tetris]
---

# nand2tetris - Projects 1 to 5

Pages opened and read: https://www.nand2tetris.org/project01, /project02, /project03, /project04, /project05.

## Why it is reliable (or not)

Official course site of a widely used, peer-recognized course (Hebrew University/IDC; MIT Press book). Level B: course material (project descriptions only, not the book chapters, which were not read). Hack is a teaching architecture, not an industry ISA; claims about it should not be generalized.

## Extracted points

- P1 Boolean Logic: build Not, And, Or, Xor, Mux, DMux, 16-bit and multi-way variants from Nand in HDL; test with .tst/.cmp scripts in a Hardware Simulator (Nand functional completeness used in practice).
- P2 Boolean Arithmetic: HalfAdder, FullAdder, Add16, Inc16, then the ALU; the ALU is the CPU centerpiece and "differs from one computer architecture to another".
- P3 Memory: Data Flip-Flop is primitive; build Bit, Register, RAM8 to RAM16K (addressing selects a register), and 16-bit PC (program counter).
- P4 Machine language: assembly translated to binary by an assembler; write Mult.asm and Fill.asm (I/O via memory-mapped screen/keyboard) in a CPU emulator.
- P5 Computer architecture: assemble CPU, Memory (RAM16K, Screen, Keyboard), and top-level Computer with instruction ROM; runs Add, Max, Rect programs.
- Good model for a Python "tiny CPU" project (bottom-up gates to computer).

## Relevant excerpts

> "The centerpiece of the CPU is the ALU, or Arithmetic-Logic Unit." (Project 2)

> "The computer's main memory, also called Random Access Memory, or RAM, is an addressable sequence of n-bit registers" (Project 3)

> "Complete the construction of the Hack CPU and the Hack hardware platform, leading up to the top-most Computer chip." (Project 5)

## Used in

- Subtopics 2, 3, 4, 5, 6 (ISA/assembly intro), project design for Python simulation.
- [[Logic Gates and Boolean Algebra]], [[Combinational Circuits]], [[Sequential Circuits and Finite State Machines]], [[Processor Datapath and Control]], [[Assembler, Linker and Loader]], [[Memory Hierarchy and Caches]]

## History

- 2026-11-23: read and registered (researcher, stage 1).
