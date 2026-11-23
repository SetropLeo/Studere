---
title: Equivalence Relation
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Applied Discrete Structures (Doerr, Levasseur)]]", "[[OpenDSA Sets and Relations (Shaffer)]]", "[[Open Logic Project Sets Relations Functions (Zach)]]"]
tags: [finding, relations]
---

# Equivalence Relation

> **Summary:** An equivalence relation is a [[Relation]] that is reflexive, symmetric and transitive. [[OpenDSA Sets and Relations (Shaffer)]] and [[Open Logic Project Sets Relations Functions (Zach)]] state this definition independently; [[Applied Discrete Structures (Doerr, Levasseur)]] agrees in the same terms.

## What it is

> **Equivalence relation**: a relation that is reflexive, symmetric and transitive.

Quoted from [[Open Logic Project Sets Relations Functions (Zach)]]: "A relation that is reflexive, symmetric, and transitive is called an equivalence relation." [[OpenDSA Sets and Relations (Shaffer)]] and [[Applied Discrete Structures (Doerr, Levasseur)]] give the same definition; the latter adds that "those relations which satisfy the definition behave quite like the equality relation".

## How it works

Reflexive (`a r a`), symmetric (if `a r b` then `b r a`) and transitive (`a r b` and `b r c` give `a r c`) together make the relation behave like "being the same in some respect". Congruence modulo m is a natural example, see [[Modular Arithmetic]]; that this congruence is an equivalence relation was not stated in the sources read (unverified, check in stage 3/4).

## Key terms

> **Reflexive / symmetric / transitive**: see [[Relation]].

## Example

Equality on any [[Set]] is an equivalence relation. This is the archivist's own inference (unverified): [[Applied Discrete Structures (Doerr, Levasseur)]] only says that equivalence relations behave like equality, not that equality is one. Lead only, not read: personal.math.ubc.ca/~PLP/book/ch_relations-5.html.

## Contradictions and uncertainties

- No divergence in the definition.
- Equivalence classes and partitions are not covered by the sources read (gap; the Open Logic page read does not cover them).

## Related

- [[Relation]], [[Partial Order]], [[Set]], [[Modular Arithmetic]]

## Sources

- [[Open Logic Project Sets Relations Functions (Zach)]] — definition (quoted).
- [[OpenDSA Sets and Relations (Shaffer)]] — definition.
- [[Applied Discrete Structures (Doerr, Levasseur)]] — definition, comparison with equality.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: "all three sources agree" reworded (OpenDSA and Open Logic independently confirmed, Doerr consistent); equality quote corrected to Doerr's actual wording; "equality is an equivalence relation" marked as own inference/unverified (UBC page lead only); congruence mod m remains unverified.
- 2026-11-23: verified (light pass, single-source accepted per user decision); Open Logic quote spot-checked; unverified items (equality, congruence) remain clearly marked.
