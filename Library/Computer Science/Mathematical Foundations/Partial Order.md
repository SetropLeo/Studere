---
title: Partial Order
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Applied Discrete Structures (Doerr, Levasseur)]]", "[[Doerr Levasseur Applied Discrete Structures]]", "[[Open Logic Project Sets Relations Functions (Zach)]]", "[[Judson AATA Lattices and Boolean Algebras]]", "[[OpenDSA Sets and Relations (Shaffer)]]"]
tags: [finding, relations, order]
---

# Partial Order

> **Summary:** A partial order is a [[Relation]] that is reflexive, antisymmetric and transitive; a set with one is a poset (non-strict convention). There is no real divergence among sources: [[OpenDSA Sets and Relations (Shaffer)]] gives a general definition (antisymmetric and transitive) and then names both the non-strict and the strict variant, so a course should still state which variant it uses.

## What it is

> **Partial order**: a relation that orders some, but not necessarily all, pairs of elements.
> **Poset** (partially ordered set): a set together with a partial order.

**Convention used in this library: non-strict (reflexive), like ≤ or ⊆.** Confirmed by Doerr 13.01, Judson and Open Logic (and by OpenDSA's non-strict variant):

- [[Applied Discrete Structures (Doerr, Levasseur)]]: reflexive, antisymmetric, transitive (non-strict).
- [[Doerr Levasseur Applied Discrete Structures]] (13.1): "reflexive, antisymmetric, and transitive"; examples (R, ≤), (P(A), subset), divisibility on {1,2,3,6}.
- [[Judson AATA Lattices and Boolean Algebras]]: reflexive, antisymmetric, transitive; a poset.
- [[Open Logic Project Sets Relations Functions (Zach)]]: "A preorder which is also anti-symmetric is called a partial order", where a preorder is reflexive and transitive (same result); wording also at the LibreTexts mirror of Open Logic (math.libretexts.org).
- [[OpenDSA Sets and Relations (Shaffer)]]: "A binary relation is called a partial order if it is antisymmetric and transitive"; then "If the relation is reflexive, it is called a non-strict partial order. If the relation is irreflexive, it is called a strict partial order."

## How it works

Examples from the sources: integers, rationals and reals under ≤; the power set P(X) under inclusion; divisors of 24 (or of 105, or of {1,2,3,6}) under divisibility ([[Judson AATA Lattices and Boolean Algebras]], [[Doerr Levasseur Applied Discrete Structures]]). Bounds: a least upper bound (lub) and greatest lower bound (glb) of a pair may exist; when they exist for every pair the poset is a [[Lattice]]. In D105 (divisors of 105 under divisibility), lub of 3 and 7 is 21 and lub of 3 and 5 is 15 ([[Doerr Levasseur Applied Discrete Structures]], 13.01).

A [[Relation]] that is a partial order and also connected is a linear order ([[Open Logic Project Sets Relations Functions (Zach)]]).

## Key terms

> **Antisymmetric**: if `a r b` and `b r a` then a = b ([[OpenDSA Sets and Relations (Shaffer)]]: "whenever aRb and bRa, then a = b"; Doerr 6.3: "whenever a r b and a ≠ b then b r a is false").
> **Least upper bound / greatest lower bound**: the smallest element above (largest below) two given elements.

## Example

Divisibility on {1,2,3,6}: 2 and 3 are not comparable (neither divides the other), which is why the order is "partial" ([[Doerr Levasseur Applied Discrete Structures]] lists this poset; the incomparability remark is derived, not quoted).

## Contradictions and uncertainties

- **Strict vs non-strict: not a divergence.** [[OpenDSA Sets and Relations (Shaffer)]] gives a general definition (antisymmetric and transitive) and then names both variants (reflexive = non-strict, irreflexive = strict). This library uses the non-strict (reflexive) convention, confirmed by Doerr 13.01, Judson and Open Logic. A course should still say which variant it uses.
- Hasse diagrams are used in [[Doerr Levasseur Applied Discrete Structures]] but not formally defined on the page read (gap). Topological sort: not covered (gap).

## Related

- [[Relation]], [[Equivalence Relation]], [[Lattice]], [[Set]]
- Cross-area (no note yet): sorting and comparison in Algorithms and Data Structures.

## Sources

- [[Applied Discrete Structures (Doerr, Levasseur)]], [[Doerr Levasseur Applied Discrete Structures]], [[Judson AATA Lattices and Boolean Algebras]], [[Open Logic Project Sets Relations Functions (Zach)]] — non-strict definition and examples.
- [[OpenDSA Sets and Relations (Shaffer)]] — general definition, then non-strict and strict variants.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: removed the false "divergence" and the "researchers' interpretation, unverified" framing (OpenDSA does name non-strict and strict variants); removed "unverified" from the antisymmetric gloss and added literal wordings; confidence debated -> established (4+ sources); Open Logic wording cited via LibreTexts mirror; D105 example attributed to Doerr 13.01.
- 2026-11-23: verified (light pass, single-source accepted per user decision); false OpenDSA "divergence" confirmed removed; OpenDSA and Open Logic quotes spot-checked against _sources.
