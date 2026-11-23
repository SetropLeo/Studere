---
title: USFCA CS 315 - Processor Pipeline Hazards
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: Greg Benson (copyright credit on page footer; university inferred as University of San Francisco from links)
published: 2025-11-25 (from file name)
url: https://cs315-f25.cs.usfca.edu/lectures/15-cs315-2025-11-25-processor-pipeline-hazards/
accessed: 2026-11-23
url-verified: true
tags: [source, computer-architecture, pipelining, hazards, datapath]
---

# USFCA CS 315 - Processor Pipeline Hazards

## Why it is reliable (or not)

University lecture page (HTML), Fall 2025. Level B. Instructor and university inferred from footer and links, not stated explicitly.

## Extracted points

- Moves from single-cycle processor to five-stage pipeline (IF, DR, EX, MEM, WB) with pipeline registers; overlap raises throughput.
- Hazard = overlap causes use of a value (or PC) not yet ready. Data hazard (RAW): starter pipeline needs 3 nops; register file write-first-half/read-second-half removes one; forwarding muxes remove the rest; closest producer has priority.
- Load-use cannot be forwarded (value ready in MEM): stall one cycle, bubble.
- Control hazards: jumps and taken branches redirect PC from EX; flush wrong-path instructions.
- Structural hazards are not discussed in the summary read.

## Relevant excerpts

> "Load-use hazards cannot be forwarded because the load's value is ready only in MEM" (Load-use section)

## Used in

- Subtopic 7; subtopic 5 (single-cycle to pipelined).
- [[Pipelining and Hazards]], [[Processor Datapath and Control]]

## History

- 2026-11-23: read and registered (researcher, stage 1).
