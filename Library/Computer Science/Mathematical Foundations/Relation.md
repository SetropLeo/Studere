---
title: Relation
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

# Relation

> **Summary:** A relation over a set is a set of ordered pairs of its elements. Properties such as reflexive, symmetric, antisymmetric and transitive classify relations and define [[Equivalence Relation]] and [[Partial Order]].

## What it is

> **Relation**: a set of ordered pairs from a [[Set]] S ([[OpenDSA Sets and Relations (Shaffer)]]); a way of relating elements of A, formally a set of ordered pairs ([[Open Logic Project Sets Relations Functions (Zach)]]).

## How it works

Four properties are used for a relation r on a set A ([[Applied Discrete Structures (Doerr, Levasseur)]]):

- Reflexive: `a r a` for all a in A (quoted from the source).
- Symmetric: "whenever a r b, it follows that b r a" (Doerr 6.3); [[OpenDSA Sets and Relations (Shaffer)]]: "whenever aRb, then bRa".
- Antisymmetric: "whenever a r b and a ≠ b then b r a is false" (Doerr 6.3); [[OpenDSA Sets and Relations (Shaffer)]]: "whenever aRb and bRa, then a = b". The two wordings are logically equivalent (inference of the archivist; both are given by the sources).
- Transitive: whenever `a r b` and `b r c` then `a r c` (quoted from the source).

Combinations (see their own notes): reflexive + symmetric + transitive = [[Equivalence Relation]]; reflexive + antisymmetric + transitive = [[Partial Order]] (non-strict convention). [[Open Logic Project Sets Relations Functions (Zach)]] also names a preorder (reflexive + transitive) and a linear order (a partial order that is also connected).

## Key terms

> **Ordered pair**: two elements in a fixed order, `(a, b)`; a relation is a set of these.
> **Preorder**: a reflexive and transitive relation ([[Open Logic Project Sets Relations Functions (Zach)]]).
> **Linear order**: a partial order that is also connected ([[Open Logic Project Sets Relations Functions (Zach)]]; that source uses "linear order"; [[OpenDSA Sets and Relations (Shaffer)]] uses both "total order" and "linear order").

## Example

[[Applied Discrete Structures (Doerr, Levasseur)]] notes that "those relations which satisfy the definition behave quite like the equality relation" (said of equivalence relations). [[OpenDSA Sets and Relations (Shaffer)]] is written for data-structures students (its page mentions UNION/FIND and minimum-cost spanning trees); it gives no code.

## Contradictions and uncertainties

- The word "connected" for linear orders is still undefined in the extract (gap). Candidate second sources (to be read in stage 1): Open Logic relations-complete.pdf (builds.openlogicproject.org).
- Relations of more than two elements (n-ary) and composition of relations: not covered (gap).

## Related

- [[Set]], [[Equivalence Relation]], [[Partial Order]], [[Function]], [[Lattice]]

## Sources

- [[OpenDSA Sets and Relations (Shaffer)]] — relation as set of ordered pairs.
- [[Open Logic Project Sets Relations Functions (Zach)]] — formal pairs, preorder, linear order.
- [[Applied Discrete Structures (Doerr, Levasseur)]] — the four properties.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: deleted the false claim that OpenDSA frames order relations as used for sorting (page mentions UNION/FIND and minimum-cost spanning trees); replaced the "definitions not copied" caveat with the literal Doerr 6.3 and OpenDSA wordings of symmetric/antisymmetric; corrected the equality quote to Doerr's actual wording; noted OpenDSA uses both "total order" and "linear order"; "connected" left as gap.
- 2026-11-23: verified (light pass, single-source accepted per user decision); OpenDSA "sorting" claim confirmed removed; quotes spot-checked against _sources.
