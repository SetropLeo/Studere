---
title: Combinational Circuits
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
tags: [finding, computer-architecture, combinational]
---

# Combinational Circuits

> **Summary:** Adders, multiplexers, decoders and the ALU are combinational building blocks. Adders chain into ripple-carry adders; an ALU is the centerpiece of the CPU.

## What it is

> **Combinational circuit**: a circuit built from gates only, with no state storage. Own gloss; the sources use the term implicitly.

## How it works

- Full adder (Kann 6.3): S = X xor Y xor Cin; Cout = (X and Y) or ((X xor Y) and Cin). Chaining full adders, carry-out into the next carry-in, gives a ripple-carry adder.
- Decoder (Kann 7.2): n inputs drive 2^n output lines, and each output is an AND of normal or inverted inputs.
- MUX (Kann 8.1): a selector circuit with s select bits choosing among 2^s inputs.
- nand2tetris Project 2: HalfAdder, FullAdder, Add16, Inc16, then the ALU. The ALU is the centerpiece of the CPU and differs from one architecture to another (paraphrase). Project 1 builds Mux and DMux.

## Key terms

> **ALU**: Arithmetic-Logic Unit, the centerpiece of the CPU (nand2tetris Project 2).

> **Ripple carry**: the carry propagates through the digits of the addition, one full adder to the next.

## Example

Own illustration in Python:

```python
def full_adder(x, y, cin):
    s = x ^ y ^ cin
    cout = (x & y) | ((x ^ y) & cin)
    return s, cout
```

The formulas come from Kann 6.3; the code is own illustration.

## Contradictions and uncertainties

- The full-adder equations, the decoder and the MUX rest on Kann alone (one source). nand2tetris (level B) only supports the build order (HalfAdder, FullAdder, Add16) and the role of the ALU; it gives no equations. Confidence therefore stays `debated`. The half adder, carry-lookahead and ALU control bits were not read.
- Kann excerpts came through a fetch summarizer. Wording above is paraphrased; recheck before quoting.

## Related

- [[Logic Gates and Boolean Algebra]]
- [[Sequential Circuits and Finite State Machines]]
- [[Processor Datapath and Control]]
- [[Binary Integers and Two's Complement]]

## Sources

- [[Kann - Digital Circuit Projects (Engineering LibreTexts)]] — full adder, ripple carry, decoder, MUX.
- [[nand2tetris - Projects 1 to 5 (Nisan and Schocken)]] — adders and ALU build order.

## History

- 2026-11-23: created.
- 2026-11-23: light pass, single-source accepted per user decision (verifier). Confidence downgraded established -> debated: full adder equations are only in Kann (verified on 6.3); nand2tetris names FullAdder but gives no equations, so the sentence in "Contradictions and uncertainties" claiming the equations "match across the two sources" is unsupported and needs rewording by the archivist.
- 2026-11-23: wording fix after light verification (Contradictions section reworded: equations, decoder, MUX rest on Kann alone; nand2tetris supports only build order and ALU role).
