---
title: Logic Gates and Boolean Algebra
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[nand2tetris - Projects 1 to 5 (Nisan and Schocken)]]", "[[Kann - Digital Circuit Projects (Engineering LibreTexts)]]"]
tags: [finding, computer-architecture, logic-gates]
---

# Logic Gates and Boolean Algebra

> **Summary:** Digital hardware is built from logic gates. In nand2tetris, Not, And, Or, Xor, Mux, DMux and their 16-bit and multi-way variants are all built from Nand. Boolean operators can be associative, commutative and distributive, which affects circuit design.

## What it is

> **Logic gate**: a circuit computing a Boolean function of its inputs.

> **Nand functional completeness**: the property that Nand alone can build the other gates. nand2tetris Project 1 uses it in practice by building those gates from Nand in HDL. The source note records this as practice, not as a proof.

## How it works

- nand2tetris Project 1: build Not, And, Or, Xor, Mux, DMux and 16-bit and multi-way variants from Nand in HDL, tested with `.tst`/`.cmp` scripts in a Hardware Simulator.
- Kann section 5.4: Boolean operators can be associative, commutative and distributive, and this affects how circuits are implemented. The specific laws were not itemized in the source note.

## Key terms

> **HDL**: hardware description language, used in nand2tetris to define chips.

## Example

Own illustration in Python (not from sources), a Nand-only Not and And:

```python
def nand(a, b): return 1 - (a & b)
def not_(a): return nand(a, a)
def and_(a, b): return not_(nand(a, b))
```

## Contradictions and uncertainties

- Two sources (level B course, level A textbook) but they support different parts; each claim is single-source. `confidence: debated`.
- Own inference, not from sources: Boolean algebra over `{0, 1}` corresponds to [[Propositional Logic]], and the operator laws resemble the order-theoretic structure in [[Lattice]]. No read source makes either link.
- Gaps: Karnaugh maps, De Morgan's laws, and minimization were not read (Kann's pages on them were not opened).

## Related

- [[Combinational Circuits]]
- [[Sequential Circuits and Finite State Machines]]
- [[Propositional Logic]] (own inference)
- [[Lattice]] (own inference)

## Sources

- [[nand2tetris - Projects 1 to 5 (Nisan and Schocken)]] — Project 1, building gates from Nand.
- [[Kann - Digital Circuit Projects (Engineering LibreTexts)]] — operator laws (5.4), gate overview.

## History

- 2026-11-23: created.
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
