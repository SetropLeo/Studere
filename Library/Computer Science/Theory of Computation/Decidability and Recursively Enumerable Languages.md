---
title: Decidability and Recursively Enumerable Languages
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Critchlow and Eck - Foundations of Computation - Ch5 Turing Machines and Computability]]", "[[Critchlow and Eck - Foundations of Computation - Ch4 Grammars]]", "[[UAF CS 331 Chappell - Chomsky Hierarchy Lecture Notes]]"]
tags: [finding, theory-of-computation]
---

# Decidability and Recursively Enumerable Languages

> **Summary:** A language is recursive (decidable) if a Turing machine always halts with the right answer; it is recursively enumerable (acceptable) if a machine halts exactly on its members.

## What it is

Critchlow and Eck terminology: recursive = Turing-decidable; recursively enumerable (r.e.) = Turing-acceptable (a language that can be listed). Theorem 5.3: a language is recursive iff both it and its complement are r.e. Every decidable language is acceptable. General grammars generate exactly the r.e. languages (4.6); Chappell notes some languages are not r.e. at all.

## How it works

Terminology is the book's own. Own gloss (researcher's memory, not from a source): the book's terms are older, and other texts use "decidable/semi-decidable". The proof of Theorem 5.3 is not recorded.

## Key terms

> **Recursive language**: decided by a Turing machine (halts on all inputs).

> **Recursively enumerable language**: accepted by a Turing machine, which may loop on non-members.

## Example

The halting set K is r.e. but not recursive ([[The Halting Problem]]).

## Contradictions and uncertainties

- Single textbook for the definitions; `debated`.

## Related

- [[Turing Machines]], [[Chomsky Hierarchy]], [[Church-Turing Thesis]]

## Sources

- [[Critchlow and Eck - Foundations of Computation - Ch5 Turing Machines and Computability]], [[Critchlow and Eck - Foundations of Computation - Ch4 Grammars]], [[UAF CS 331 Chappell - Chomsky Hierarchy Lecture Notes]].

## History

- 2026-11-23: created.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: "older" terminology and "decidable/semi-decidable" labelled as own gloss.
