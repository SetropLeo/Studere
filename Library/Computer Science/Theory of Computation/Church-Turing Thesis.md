---
title: Church-Turing Thesis
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[SEP - The Church-Turing Thesis]]", "[[Critchlow and Eck - Foundations of Computation - Ch5 Turing Machines and Computability]]"]
tags: [finding, theory-of-computation]
---

# Church-Turing Thesis

> **Summary:** The thesis says that anything effectively computable can be computed by a Turing machine; it is a thesis (a belief about an informal notion), not a theorem.

## What it is

SEP (entry first published 1997-01-08, substantive revision 2023-12-18; only about the first half of the entry was read) gives the common formulation that every effective computation can be carried out by a Turing machine; Church's version used lambda-definability / recursive functions. Critchlow and Eck (5.2) state it informally as a widely held belief that anything reasonably called computation can be done by a Turing machine, and say it cannot be proved: that "cannot be proved" statement is Critchlow and Eck's explicit claim only. The SEP notes record just that it is a thesis, not a theorem; they do not record Kleene or any other attribution of unprovability, so none is asserted here. Caveat: SEP also treats Turing's argument as a proof of a related theorem and discusses stronger claims (physical and others); that part of the entry (second half) was not read. Both read portions agree it is a thesis about an informal notion; confidence stays `established` on that narrow claim only.

## How it works

It links informal "algorithm" to the formal [[Turing Machines]], which lets impossibility results such as [[The Halting Problem]] speak about all algorithms.

## Key terms

> **Effective computation**: informal notion of a step-by-step mechanical procedure (gloss, unsourced).

## Example

See the one-tape-simulates-two-tape remark in [[Turing Machines]] (supporting evidence for robustness; own reading).

## Contradictions and uncertainties

- SEP's distinction between the thesis and stronger physical claims was not read in the portion covered. Gap.

## Related

- [[Decidability and Recursively Enumerable Languages]], [[Algorithm Analysis]] (own inference: algorithm analysis presupposes a model of computation)

## Sources

- [[SEP - The Church-Turing Thesis]] — formulation, history, revision date.
- [[Critchlow and Eck - Foundations of Computation - Ch5 Turing Machines and Computability]] — informal statement, not provable.

## History

- 2026-11-23: created.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: "cannot be proved" attributed to Critchlow and Eck only; added caveat on SEP (Turing's argument as proof of a related theorem, stronger claims, second half unread).
