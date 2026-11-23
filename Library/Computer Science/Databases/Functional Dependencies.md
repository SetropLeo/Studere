---
title: Functional Dependencies
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Watt and Eng - Database Design Ch11-12 Functional Dependencies and Normalization]]"]
tags: [finding, databases]
---

# Functional Dependencies

> **Summary:** A functional dependency says one attribute (the determinant) fixes another; Armstrong's axioms give inference rules. Single textbook source, PK-centric; closure algorithms are a gap.

## What it is

Per Watt and Eng (ch.11): an FD is written determinant to dependent. Their definition (verbatim excerpt) speaks of attribute Y being functionally dependent on attribute X, usually the primary key; this is a PK-centric framing.

## How it works

Armstrong's axioms (Watt and Eng): reflexivity, augmentation, transitivity. Derived rules: union and decomposition.

## Key terms

> **Determinant**: the left-hand side of an FD (the attribute that determines another).

> **Armstrong's axioms**: the inference rules for FDs, as listed above ("sound" is not claimed by the source).

## Example

Own illustration: in Student(id, name, dept, dept_head) the FDs id → name, id → dept and dept → dept_head hold; combining by transitivity gives id → dept_head. See [[Normal Forms 1NF to BCNF]].

## Contradictions and uncertainties

- Gap: attribute closure (X+), minimal cover and candidate-key finding are not covered by the source. Needed for exercises.
- Own inference: an FD can be seen as a [[Function]] from determinant values to dependent values; not stated by the source.

## Related

- [[Normal Forms 1NF to BCNF]]
- [[Relational Model and Keys]]
- [[Function]]

## Sources

- [[Watt and Eng - Database Design Ch11-12 Functional Dependencies and Normalization]] — FD definition, Armstrong's axioms.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: dropped "sound" from the Armstrong gloss (not in the source).
