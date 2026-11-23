---
title: Logic-Based Knowledge Representation and Inference
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Berkeley CS188 Textbook - Logic]]", "[[SEP - Artificial Intelligence]]", "[[AIMA 4th Edition Companion Site (Russell and Norvig)]]"]
tags: [finding, ai, logic]
---

# Logic-Based Knowledge Representation and Inference

> **Summary:** A knowledge-based agent stores sentences in logic and infers new ones. Berkeley CS188 covers propositional models, validity and satisfiability, CNF, and two routes for first-order inference: propositionalization and lifted inference with Generalized Modus Ponens. Unification and resolution were not on the pages read.

## What it is

- SEP lists logic-based (logicist) AI as one major approach (see [[What Artificial Intelligence Is - History and Approaches]]).
- Berkeley chapter outline: knowledge-based agents, language of logic, propositional logic and inference, theorem proving, forward chaining, first-order logic and inference, logical agents. Only the propositional and first-order inference pages were read.

## How it works

- Propositional model: "A model is an assignment of true or false to all the proposition symbols" (as recorded in the source note). With N symbols there are 2^N models.
- A sentence is valid, satisfiable or unsatisfiable (Berkeley). The definitions are not recorded in the source note; see [[Logical Validity and Consequence]] for the library's definition (own inference that they coincide).
- CNF conversion steps (Berkeley): eliminate biconditionals, eliminate implications, apply De Morgan's laws, distribute.
- First-order inference (Berkeley): (a) propositionalization, then a SAT solver such as DPLL or WalkSAT, relying on Herbrand's theorem; (b) lifted inference using Generalized Modus Ponens and first-order forward chaining ("repeatedly applies generalized Modus Ponens and substitution", as reported by fetch; recheck).

## Key terms

> **Model**: a truth assignment to all symbols (Berkeley).

> **CNF**: conjunctive normal form, a conjunction of clauses (gloss, unsourced).

> **Propositionalization**: turning first-order sentences into propositional ones so that propositional solvers apply (gloss, unsourced).

## Example

Not covered by the read source. Own illustration: with symbols P and Q there are 2^2 = 4 models.

## Contradictions and uncertainties

- Gap: unification, resolution and the soundness/completeness of the inference methods were not found on the page read.
- Gap: AIMA chapters 7 to 10 (logical agents, FOL, inference, knowledge representation) were seen as table of contents only.
- Own inference: SAT, the problem solved after propositionalization, is NP-complete, see [[NP-Completeness and Cook-Levin]] and [[Complexity Classes P and NP]]. Berkeley's summary does not say this.
- Own inference: [[Propositional Logic]], [[First-Order Logic]] and [[Logical Validity and Consequence]] cover the same formal objects from the mathematical side; I have not checked every definition against them.

## Related

- [[Propositional Logic]] (own inference)
- [[First-Order Logic]] (own inference)
- [[Logical Validity and Consequence]] (own inference)
- [[NP-Completeness and Cook-Levin]] (own inference)
- [[Complexity Classes P and NP]] (own inference)
- [[Fuzzy Logic]]
- [[Bayes' Rule and Probabilistic Reasoning]]

## Sources

- [[Berkeley CS188 Textbook - Logic]] - models, CNF, FOL inference
- [[SEP - Artificial Intelligence]] - logic-based approach in context
- [[AIMA 4th Edition Companion Site (Russell and Norvig)]] - scope only

## History

- 2026-11-23: created (draft).
- 2026-11-23: verified by verifier, light pass, single-source accepted per user decision.
- 2026-11-23: wording fix after light verification: tagged [[Propositional Logic]], [[First-Order Logic]] and [[Logical Validity and Consequence]] as (own inference) under Related.
