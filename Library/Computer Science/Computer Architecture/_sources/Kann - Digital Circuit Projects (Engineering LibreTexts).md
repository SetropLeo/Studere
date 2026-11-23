---
title: Kann - Digital Circuit Projects (Engineering LibreTexts)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Charles W. Kann III (Gettysburg College; listed on LibreTexts as "Kahn" in the book URL)
published: LibreTexts page last modified 2022-05-09 (per the book landing page)
url: https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/Digital_Circuit_Projects_-_An_Overview_of_Digital_Circuits_Through_Implementing_Integrated_Circuits_(Kahn)
accessed: 2026-11-23
url-verified: true
tags: [source, computer-architecture, logic-gates, combinational, sequential, open-textbook]
---

# Kann - Digital Circuit Projects (Engineering LibreTexts)

Pages opened and read: book landing page (TOC, license), 5.4 Conclusion, 6.3 Full Adder, 7.2 Decoder Circuit, 8.1 Introduction (MUX), 9.3 Latches, 10.3 Implementing a State Machine. 9.4 edge-triggered flip-flop (read and confirmed 2026-11-23). Chapter 11 "Use of these ICs in a CPU" was opened but is only a thin overview and is not relied on.

## Why it is reliable (or not)

Open textbook (CC BY 4.0) by a university professor, hosted by LibreTexts, published via Scholarship at Gettysburg College. Level A (textbook). Hands-on, chip-level (74xx ICs, Logisim) rather than rigorous; no Karnaugh-map/minimization pages were opened. Some pages are thin (e.g. SR latch is not explained).

## Extracted points

- TOC: Gates, Associative Boolean Operators, Adders, Decoders, Multiplexers, Flip-Flops and Latches, Sequential Circuits, Use of ICs in a CPU.
- 5.4: Boolean operators can be associative, commutative, distributive, and this affects circuit implementation.
- Full adder: S = X xor Y xor Cin; Cout = (X and Y) or ((X xor Y) and Cin); chaining full adders (carry-out to next carry-in) gives a ripple-carry adder.
- Decoder: n inputs to 2^n lines, each output is an AND of normal/inverted inputs. MUX: selector with s select bits choosing among 2^s inputs.
- D latch: output follows D while clock high (Kann describes this behavior; "level-triggered" is a standard-terminology gloss, not Kann's wording); can misbehave if logic is faster than the clock pulse; edge-triggered flip-flop is the remedy.
- FSM: n-bit state register of D flip-flops updated on clock edge + combinational next-state logic fed back; implementable as hardwired gates or as a ROM table (mod-4 counter example).

## Relevant excerpts

> "A multiplexer (or MUX) is a selector circuit, having log(N) select lines to choose an output from N input values." (8.1)

> "the carry ripples through the digits of the addition" (6.3, as reported by the fetch tool; wording of the surrounding sentence not verified)

> "each AND gate producing an output for one and only one value from the 2 input lines." (7.2, as reported by the fetch tool)

## Used in

- Subtopics 2, 3, 4.
- [[Logic Gates and Boolean Algebra]], [[Combinational Circuits]], [[Sequential Circuits and Finite State Machines]]

## History

- 2026-11-23: read and registered (researcher, stage 1). Excerpts were returned by a fetch summarizer; re-check wording before quoting in findings.
- 2026-11-23: wording fix after light verification (9.4 read and confirmed; "level-triggered" is a terminology gloss; full-adder equations, decoder and MUX are supported by this source alone).
