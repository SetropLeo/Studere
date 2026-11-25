---
title: Doerr and Levasseur - Applied Discrete Structures (posets, lattices, monoids, groups)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Alan Doerr and Kenneth Levasseur (University of Massachusetts Lowell)
published: "open textbook; AIM page lists Version 3-14, June 2026; LibreTexts copy CC BY-NC-SA 3.0"
url: https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Applied_Discrete_Structures_(Doerr_and_Levasseur)/13%3A_Boolean_Algebra/13.01%3A_Posets_Revisited
accessed: 2026-11-23
url-verified: true
tags: [source, order-theory, lattices, monoids, groups, discrete-math]
---

# Doerr and Levasseur - Applied Discrete Structures

Pages read (LibreTexts copy, base `https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Applied_Discrete_Structures_(Doerr_and_Levasseur)/`):
- `13%3A_Boolean_Algebra/13.01%3A_Posets_Revisited`
- `13%3A_Boolean_Algebra/13.02%3A_Lattices`
- `11%3A_Algebraic_Structures/11.01%3A_Operations`
- `11%3A_Algebraic_Structures/11.02%3A_Algebraic_Systems`
- `14%3A_Monoids_and_Automata` (chapter intro and section list)
- Book home https://discretemath.org (version/licence info)

## Why it is reliable (or not)

University textbook for sophomore-level discrete structures aimed at computer science students; approved open textbook (AIM). Level A. Written for CS audience, so best fit for the user's level. Only chapter intros were read for Ch. 14; page-level text was summarized by a tool. The book does not define "semigroup" in 11.02 (goes straight to monoid) and gives no computing applications in 13.02.

## Extracted points

- Partial ordering: relation that is "reflexive, antisymmetric, and transitive"; (L, <=) is a poset. Examples: (R, <=), (P(A), subset), divisibility on {1,2,3,6}.
- Upper/lower bounds and least upper bound defined; example in D105 (divisors of 105 under divisibility): lub of 3 and 7 is 21, of 3 and 5 is 15.
- Hasse diagram is used (power set of {1,2,3}, D30) but not formally defined on the 13.01 page.
- Lattice: poset in which every pair has a glb and lub; join = lub, meet = glb; (P(A), subset) is a lattice (join = union). Nondistributive examples: diamond and pentagon.
- Monoid: nonempty set with an associative operation that has an identity. Examples: B* (finite 0-1 strings) under concatenation with empty string as identity; 2x2 real matrices under multiplication.
- Group: monoid-like structure with associativity, identity, and inverses. Examples: integers under addition; power set under symmetric difference.
- Chapter 14 links monoids and automata: "each monoid can be viewed as a machine and each machine has a monoid associated with it" (chapter intro; corrected wording); sections 14.1 Monoids, 14.2 Free Monoids and Languages, 14.3 Finite-State Machines, 14.4 The Monoid of a Finite-State Machine.
- Operations page defines binary operation, associative, commutative, identity.

## Relevant excerpts

> "Let M be any nonempty set and let * be any operation on M that is associative and has an identity in M." (11.2, monoid definition)

> "reflexive, antisymmetric, and transitive" (13.1, partial ordering)

> "the two topics that we will discuss in this chapter seem totally unrelated" (Ch. 14 intro; topics are monoids and automata)

## Used in

- [[Partial Order]], [[Lattice]], [[Semigroup, Monoid and Group]]

## History

- 2026-11-23: registered and read (researcher, stage 1).
- 2026-11-23: stage 2 fixes: Ch. 14 wording corrected; the D105 example is on 13.01 (not 13.02).
