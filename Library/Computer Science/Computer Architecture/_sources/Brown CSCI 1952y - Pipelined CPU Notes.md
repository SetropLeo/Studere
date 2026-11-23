---
title: Brown CSCI 1952y - Pipelined CPU Notes
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: not listed on the page (Brown University CS1952y, Spring 2024)
published: 2024 (Spring)
url: https://cs.brown.edu/courses/csci1952y/2024/notes/pipelined_cpu.html
accessed: 2026-11-23
url-verified: true
tags: [source, computer-architecture, pipelining, hazards, risc-v]
---

# Brown CSCI 1952y - Pipelined CPU Notes

## Why it is reliable (or not)

University course notes (HTML) from an archived 2024 course on RISC-V CPU design. Level B. Does not cover structural hazards or branch prediction (only mentions prediction as a later topic).

## Extracted points

- Five stages IF, ID, Ex, Mem, WB; pipeline registers carry data and control; each instruction takes five cycles but instructions overlap.
- Data hazards: result not yet written back; forwarding from Ex/Mem to ALU inputs bypassing the register file, most recent producer wins.
- Load followed by dependent instruction cannot be fixed by forwarding: hazard unit inserts a NOP (clear ID/Ex) and holds PC and IF/ID one cycle.
- Control hazards: branches/jumps resolved in Mem stage here; wrong-path instructions flushed.

## Relevant excerpts

> "we simply bypass the register file and move data to the correct place the moment it is available" (forwarding)

## Used in

- Subtopic 7 (pipelining, data and control hazards); subtopic 5 (pipeline vs single-cycle).
- [[Pipelining and Hazards]], [[Processor Datapath and Control]]

## History

- 2026-11-23: read and registered (researcher, stage 1).
