---
title: Berkeley CS188 Textbook - Logic
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: UC Berkeley CS 188 staff (individual authors not shown in fetched text; some sections adapted from AIMA)
published: site current for Summer 2025
url: https://inst.eecs.berkeley.edu/~cs188/textbook/logic/
accessed: 2026-11-23
url-verified: true
tags: [source]
---

# Berkeley CS188 Textbook - Logic

Pages read: `/logic/` (index), `/logic/propositional.html`, `/logic/first-order-logical-inference.html`.

## Why it is reliable (or not)

Course notes from a leading AI course, adapted in part from AIMA. Planning is NOT covered here (see the Stuttgart planning lecture notes source). Fetched summaries only; unification and resolution were not found on the FOL inference page.

## Extracted points

- Chapter outline: knowledge-based agents, language of logic, propositional logic and inference, theorem proving, forward chaining, first-order logic and inference, logical agents.
- Propositional logic: a model is a truth assignment to all symbols (N symbols give 2^N models); valid / satisfiable / unsatisfiable; CNF conversion steps (eliminate biconditional, implications, De Morgan, distribute).
- FOL inference: propositionalization (then SAT solvers such as DPLL/WalkSAT; Herbrand's theorem), or lifted inference with Generalized Modus Ponens and first-order forward chaining.

## Relevant excerpts

> "A model is an assignment of true or false to all the proposition symbols" (propositional logic)

> "repeatedly applies generalized Modus Ponens and substitution" (first-order inference; as reported by fetch)

## Used in

- Subtopic 3 (propositional/FOL inference, knowledge bases)

Findings: [[Logic-Based Knowledge Representation and Inference]]

## History

- 2026-11-23: registered and read (researcher, stage 1).
