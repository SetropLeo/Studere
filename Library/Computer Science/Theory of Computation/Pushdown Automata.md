---
title: Pushdown Automata
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Critchlow and Eck - Foundations of Computation - Ch4 Grammars]]", "[[UAF CS 331 Chappell - Chomsky Hierarchy Lecture Notes]]", "[[DePaul CSC 415 - The Chomsky Hierarchy Notes]]"]
tags: [finding, theory-of-computation]
---

# Pushdown Automata

> **Summary:** A pushdown automaton (PDA) is a finite automaton with a stack; PDAs accept exactly the context-free languages, and nondeterminism matters.

## What it is

Critchlow and Eck (4.4) describe a PDA as a finite automaton with an auxiliary stack, given by a tuple (Q, Sigma, Lambda, q0, delta, F). In this book a PDA accepts w if it can read all of w and end in a state of F with an empty stack.

Theorem 4.6: a language is context-free iff some PDA accepts it. The page sketches the grammar-to-PDA direction (it does not give a full proof of the theorem).

Nondeterminism: there are context-free languages that are not deterministic context-free, unlike DFA/NFA (see [[Finite Automata - DFA and NFA]]).

Chappell and DePaul both pair context-free languages with a (nondeterministic) PDA.

## How it works

The stack gives unbounded memory used in last-in-first-out fashion (gloss, unsourced). Example language: a^n b^n (DePaul), which no finite automaton accepts ([[Pumping Lemma for Regular Languages]]).

## Key terms

> **PDA**: finite automaton with a stack.

> **Deterministic context-free language**: language accepted by a deterministic PDA (gloss, unsourced).

## Example

a^n b^n: push on each a, pop on each b (own illustration of the idea).

## Contradictions and uncertainties

- UNRESOLVED: the acceptance mode (final state AND empty stack) is, per the source note, this book's convention; other texts use final state or empty stack. No second source read here compares them, so the divergence is recorded, not resolved.
- Only one direction of Theorem 4.6 (grammar to PDA) is sketched in the page read.

## Related

- [[Context-Free Grammars and Parsing]], [[Chomsky Hierarchy]], [[Turing Machines]]

## Sources

- [[Critchlow and Eck - Foundations of Computation - Ch4 Grammars]] — section 4.4.
- [[UAF CS 331 Chappell - Chomsky Hierarchy Lecture Notes]], [[DePaul CSC 415 - The Chomsky Hierarchy Notes]] — CF paired with NPDA; a^n b^n example.

## History

- 2026-11-23: created.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: Theorem 4.6 grammar-to-PDA direction "sketched", not "proved".
