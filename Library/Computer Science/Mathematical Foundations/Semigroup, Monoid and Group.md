---
title: Semigroup, Monoid and Group
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Doerr Levasseur Applied Discrete Structures]]", "[[Haskell base Data.Semigroup docs]]", "[[Milewski Free Monoids]]"]
tags: [finding, algebra, monoid, group]
---

# Semigroup, Monoid and Group

> **Summary:** Algebraic structures are sets with an operation obeying laws. A semigroup needs associativity; a monoid adds an identity; a group adds inverses. Programming sources show them in code.

## What it is

> **Semigroup**: a set (or type) with an associative binary operation: "types with an associative binary operation" ([[Haskell base Data.Semigroup docs]]).
> **Monoid**: a nonempty set with an associative operation that has an identity ([[Doerr Levasseur Applied Discrete Structures]], 11.2, quoted).
> **Group**: associativity, identity and inverses (Doerr and Levasseur).

## How it works

- Operations vocabulary: binary operation, associative, commutative, identity (Doerr and Levasseur 11.1).
- Monoid examples: finite 0-1 strings under concatenation (identity: empty string); 2x2 real matrices under multiplication. Group examples: integers under addition; power set under symmetric difference.
- Haskell: law `x <> (y <> z) = (x <> y) <> z`; Monoid adds `mempty`; a type such as `NonEmpty` is a Semigroup but not a Monoid ([[Haskell base Data.Semigroup docs]]).
- [[Milewski Free Monoids]] (blog, level B): lists form a monoid with `[]` and `++`; natural numbers under multiplication are a monoid that is not free. He says the laws cannot be expressed in Haskell and must be checked by the programmer (tool paraphrase).
- Doerr and Levasseur ch. 14 pairs monoids with automata: "each monoid can be viewed as a machine and each machine has a monoid associated with it" (chapter intro only).
- Hierarchy: since a monoid is a set with an associative operation plus an identity (Doerr 11.02), every monoid has an associative operation; a group adds inverses to this. This follows from the definitions above, not from a separate source.

## Key terms

> **Binary operation**: a rule combining two elements into one.
> **Identity**: an element that changes nothing when combined.
> **Inverse**: an element that undoes another.
> **Free monoid**: the monoid of sequences over a set, e.g. lists with concatenation.

## Example

Python strings under `+` with `""` as identity are a monoid (analogy; not stated in the sources). The Haskell docs infer that associativity allows regrouping, which lets folds be split; that inference is the researcher's and is not stated in the excerpt (`unverified`).

## Contradictions and uncertainties

- Doerr and Levasseur 11.02 does not define "semigroup" explicitly; the semigroup definition rests on the Haskell docs alone (a programming view, not mathematics), so confidence is `debated`. The Wikipedia-only claims (finite semigroups in theoretical CS since the 1950s; the hierarchy as a stated fact) were removed; [[Wikipedia Semigroup and Lattice (lead)]] is level C and not cited. The Haskell `NonEmpty` and law claims were confirmed against the base-4.22.0.0 page by one verifier.
- Candidate level A source (to be read in stage 1): Pin, Mathematical Foundations of Automata Theory.
- Haskell and Milewski are programming-flavoured, not pure mathematics. Group theory uses in CS: not covered (gap).

## Related

- [[Lattice]], [[Modular Arithmetic]], [[Relation]]
- Cross-area (no note yet): finite automata in Theory of Computation.

## Sources

- [[Doerr Levasseur Applied Discrete Structures]] — monoid, group, examples.
- [[Haskell base Data.Semigroup docs]] — semigroup law in code.
- [[Milewski Free Monoids]] — free monoids, lists.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: Chapter 14 quote corrected to Doerr's actual wording; Wikipedia-only items (1950s, hierarchy) deleted, hierarchy reworded as following from Doerr 11.02 definitions; Wikipedia removed from frontmatter sources and Sources section; semigroup definition flagged as resting on Haskell docs only; Python string example and fold inference remain labelled analogy/unverified; confidence established -> debated.
- 2026-11-23: verified (light pass, single-source accepted per user decision); Ch. 14 quote matches _sources verbatim, no invented quotation marks.
