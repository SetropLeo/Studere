---
title: Lattice
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Judson AATA Lattices and Boolean Algebras]]", "[[Doerr Levasseur Applied Discrete Structures]]"]
tags: [finding, order, lattices]
---

# Lattice

> **Summary:** A lattice is a [[Partial Order]] in which every pair of elements has a least upper bound (join) and a greatest lower bound (meet). Two level A textbooks agree.

## What it is

> **Lattice**: a poset in which "every pair of elements in L has a least upper bound and a greatest lower bound" ([[Judson AATA Lattices and Boolean Algebras]], 19.1). Join (a ∨ b) = lub, meet (a ∧ b) = glb ([[Doerr Levasseur Applied Discrete Structures]]).

## How it works

- Examples: the power set P(X) under inclusion (join = union, meet = intersection); subgroups of a group under inclusion; divisors of 24 under divisibility ([[Judson AATA Lattices and Boolean Algebras]]); divisors of 105, where lub of 3 and 7 is 21 ([[Doerr Levasseur Applied Discrete Structures]], 13.01).
- Non-distributive examples: the diamond and the pentagon are named in Doerr and Levasseur; the diamond has a worked example, the pentagon is only named.
- Algebra view: the operations are commutative, associative, idempotent and satisfy absorption laws; a nonempty set with two operations satisfying these laws is a lattice, with order recovered by a ⪯ b iff a ∨ b = b, so order view and algebra view are equivalent (Judson).
- Boolean algebras generalize intersection and union; lattices have found applications in logic, circuit theory and probability (Judson, chapter intro; to recheck, this sentence was not re-opened by the verifiers).

## Key terms

> **Join / meet**: least upper bound / greatest lower bound of two elements.
> **Idempotent**: a ∨ a = a (and a ∧ a = a).
> **Absorption laws**: laws linking join and meet (not spelled out in the extract).

## Example

Subsets of {1,2,3} ordered by inclusion: join is union, meet is intersection; see [[Set]].

## Contradictions and uncertainties

- Applications in computing (dataflow analysis, abstract interpretation) appear only in [[Wikipedia Semigroup and Lattice (lead)]] (level C, lead only, `unverified`); not cited and not used as basis. No level A or B source read confirms them (gap). Candidate sources (to be read in stage 1): Nielson, Nielson and Hankin, Principles of Program Analysis; Cousot and Cousot (abstract interpretation).
- Semilattices and Hasse diagrams: not read at A level (gap).

## Related

- [[Partial Order]], [[Semigroup, Monoid and Group]], [[Set]], [[Propositional Logic]]
- Cross-area (no note yet): Boolean algebra and circuits in Computer Architecture.

## Sources

- [[Judson AATA Lattices and Boolean Algebras]] — definition, examples, algebra view.
- [[Doerr Levasseur Applied Discrete Structures]] — join/meet, divisor lattices, nondistributive examples.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: D105 example cited to Doerr 13.01 (not 13.02); diamond worked / pentagon only named; added "nonempty" and a ⪯ b iff a ∨ b = b to the algebra-to-order direction; Judson applications sentence flagged to recheck; Wikipedia lead removed from frontmatter sources and Sources section (mentioned only as an uncited lead in gaps); candidate sources recorded.
- 2026-11-23: verified (light pass, single-source accepted per user decision); Judson applications sentence now confirmed in _sources ("applications in logic, circuit theory, and probability", Ch. 19 intro).
