---
title: Logic and Proof (Avigad et al)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: book
author: Jeremy Avigad, Joseph Hua, Robert Y. Lewis, Floris van Doorn
published: "2017 (copyright line; docs version 3.18.4)"
url: https://leanprover-community.github.io/logic_and_proof/
accessed: 2026-11-23
url-verified: true
tags: [source]
---

# Logic and Proof (Avigad et al)

## Why it is reliable (or not)

Open university textbook (Carnegie Mellon course material; Avigad is a CMU logician). Beginner-oriented with a Lean proof-assistant slant, which is extra to our needs. Not peer-reviewed in the journal sense. Pages read: table of contents, ch. 6 (semantics of propositional logic), ch. 10 (semantics of first-order logic).

## Extracted points

- Propositional logic (chs. 2-6): language, natural deduction, classical reasoning, semantics (truth assignments, truth tables), soundness and completeness.
- First-order logic (chs. 7-10): functions, predicates, relations, quantifiers, equality, semantics, soundness and completeness.
- Validity (propositional) = true under every truth assignment; logical consequence = every assignment making all of Gamma true makes A true.
- First-order: models = domain plus interpretation; validity = true in every model; consequence = every model of Gamma is a model of A.
- Decidability is not stated by the pages read; do not cite this source for it. Chs. 7-9 were seen only in the table of contents.

## Relevant excerpts

> "a function that assigns a truth value to each element of a set of propositional variables" (6.1, truth assignment)

> "A propositional formula is said to be a tautology, or valid, if it is true under any truth assignment." (6.3)

> "A is said to be a logical consequence of Γ if, given any truth assignment that makes every formula in Γ true, A is true as well." (6.3)

> "Formally, an interpretation of a unary predicate P in a domain D is the set of elements of D for which P is true." (10.1)

> "We will call this structure—the domain D, paired with the interpretation—a model for the language." (10.2)

> "We will say that A is a logical consequence of Γ if every model of Γ is a model of A." (10.4)

## Used in

- [[Propositional Logic]], [[First-Order Logic]], [[Logical Validity and Consequence]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: stage 2 fixes: removed the truth-table/decidability sentence from extracted points; noted chs. 7-9 seen only in the TOC.
