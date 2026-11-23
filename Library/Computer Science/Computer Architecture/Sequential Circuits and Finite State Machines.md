---
title: Sequential Circuits and Finite State Machines
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Kann - Digital Circuit Projects (Engineering LibreTexts)]]", "[[nand2tetris - Projects 1 to 5 (Nisan and Schocken)]]"]
tags: [finding, computer-architecture, sequential, fsm]
---

# Sequential Circuits and Finite State Machines

> **Summary:** Circuits with memory are built from latches and flip-flops. A finite state machine is a state register of D flip-flops updated on the clock edge, plus combinational next-state logic fed back.

## What it is

> **D latch**: storage whose output follows D while the clock is high (Kann 9.3). Calling this "level-triggered" is a standard-terminology gloss: Kann describes the behavior and does not use the term "level-triggered".

> **Edge-triggered flip-flop**: the remedy for latch misbehavior when logic is faster than the clock pulse (Kann 9.4, page read and confirmed).

> **Finite state machine (FSM)**: n-bit state register of D flip-flops plus combinational next-state logic fed back. Implementable as hardwired gates or as a ROM table, as in Kann's mod-4 counter example (10.3).

## How it works

- nand2tetris Project 3: the Data Flip-Flop is a primitive; from it build Bit, Register, RAM8 up to RAM16K (addressing selects a register), and a 16-bit program counter PC. RAM is an addressable sequence of n-bit registers (paraphrase).
- FSM loop: state register output goes into next-state logic with inputs, whose output feeds the register input at the next clock edge.

## Key terms

> **Register**: a group of flip-flops storing a multi-bit value.

> **Program counter (PC)**: register holding the address of the next instruction (nand2tetris builds a 16-bit one).

## Example

Mod-4 counter: a 2-bit state register whose next-state logic adds 1 (example named in Kann 10.3). Details not reproduced.

## Contradictions and uncertainties

- The latch vs edge-triggered flip-flop behavior is single-source (Kann). The label "level-triggered" is a standard-terminology gloss, not Kann's wording. `confidence: debated`.
- Gaps: SR latch (Kann's page does not explain it), master-slave design, setup/hold times, Moore vs Mealy machines.
- Kann excerpts came through a fetch summarizer; paraphrased here, recheck before quoting.
- Planned area (plain text): Theory of Computation will cover FSMs as abstract machines; no link yet.

## Related

- [[Combinational Circuits]]
- [[Logic Gates and Boolean Algebra]]
- [[Processor Datapath and Control]]
- [[Memory Hierarchy and Caches]]

## Sources

- [[Kann - Digital Circuit Projects (Engineering LibreTexts)]] — latch, flip-flop, FSM structure.
- [[nand2tetris - Projects 1 to 5 (Nisan and Schocken)]] — Project 3 memory build-up.

## History

- 2026-11-23: created.
- 2026-11-23: light pass, single-source accepted per user decision (verifier; Kann 9.3, 9.4, 10.3 and nand2tetris Project 3 re-checked).
- 2026-11-23: wording fix after light verification (Kann 9.4 now read and confirmed; "level-triggered" marked as a terminology gloss, not Kann's wording).
