---
title: Fuzzy Logic
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[SEP - Fuzzy Logic]]"]
tags: [finding, ai, logic]
---

# Fuzzy Logic

> **Summary:** Fuzzy sets give elements a degree of membership in the interval [0,1]; conjunction is modelled by t-norms (minimum, product, Lukasiewicz). Source: SEP entry by Cintula, Fermuller and Noguera (revised 2021-11-11), read as a summary.

## What it is

- Reported by fetch (recheck): "A fuzzy set assigns a degree of membership, typically a real number from the interval [0,1], to elements of a universe."

## How it works

- Conjunction is modelled by t-norms; the standard examples are minimum, product and Lukasiewicz (SEP).
- Disjunction is defined as max (SEP). Negation is 1-x under Goguen-style semantics; Goedel negation is used for min and product (SEP). SEP does not name t-conorms.

## Key terms

> **t-norm**: a function that models conjunction on degrees of truth (SEP names the term; the formal definition was not recorded).

## Example

Own illustration: with min as t-norm, a degree 0.7 AND a degree 0.4 gives 0.4.

## Contradictions and uncertainties

- The SEP entry is mathematical (mathematical fuzzy logic), not an engineering introduction. Gap: a beginner source (e.g. on fuzzy control).
- Single source, summary only.
- Gap: the term t-conorm is not named by SEP; the formal definition of Goedel negation is not recorded.

## Related

- [[Logic-Based Knowledge Representation and Inference]]
- [[Propositional Logic]] (own inference: classical truth values are the 0/1 special case)
- [[Bayes' Rule and Probabilistic Reasoning]]

## Sources

- [[SEP - Fuzzy Logic]] - degrees, t-norms

## History

- 2026-11-23: created (draft).
- 2026-11-23: verified by verifier, light pass, single-source accepted per user decision.
- 2026-11-23: wording fix after light verification: added SEP's disjunction (max) and negation (1-x Goguen-style; Goedel for min and product); gap updated.
