---
title: Chomsky Hierarchy
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[UAF CS 331 Chappell - Chomsky Hierarchy Lecture Notes]]", "[[DePaul CSC 415 - The Chomsky Hierarchy Notes]]", "[[Critchlow and Eck - Foundations of Computation - Ch4 Grammars]]"]
tags: [finding, theory-of-computation]
---

# Chomsky Hierarchy

> **Summary:** Four nested classes of grammars and languages, each with a matching machine: regular (finite automaton), context-free (PDA), context-sensitive (linear bounded automaton) and recursively enumerable (Turing machine).

## What it is

| Type | Class | Machine | Example (DePaul) |
|------|-------|---------|------------------|
| 3 | regular | finite automaton | a* |
| 2 | context-free | nondeterministic PDA | a^n b^n |
| 1 | context-sensitive | linear bounded automaton | a^n b^n c^n |
| 0 | recursively enumerable | Turing machine | - |

Chappell (UAF): production forms are A -> epsilon, A -> b, A -> bC (regular); single nonterminal on the left (context-free); str1 A str2 -> str1 any str2 (context-sensitive); arbitrary grammar (type 0). He states that each category is contained in the next, and that some languages are not recursively enumerable.

DePaul says the types form a strict hierarchy (author and date not shown on the page). Chappell states only containment. No divergence found; strictness rests on DePaul alone, with examples, but no proof is in any source read.

Critchlow and Eck (4.6): general grammars (rules u -> x with u any string containing a nonterminal) generate exactly the recursively enumerable languages. That book's pages read do not mention the hierarchy by name.

## How it works

More expressive grammar form gives a more powerful machine: see [[Finite Automata - DFA and NFA]], [[Pushdown Automata]], [[Turing Machines]]. Context-sensitive languages and LBAs have only light support (Chappell: "we don't care much", per the source note).

## Key terms

> **Linear bounded automaton (LBA)**: machine paired with context-sensitive languages in the course notes; definition not given in the sources read.

## Example

a^n b^n is not regular ([[Pumping Lemma for Regular Languages]]) but is context-free.

## Contradictions and uncertainties

- Strictness: asserted by DePaul only; Chappell only containment. `debated`.
- Both are level B course notes.

## Related

- [[Decidability and Recursively Enumerable Languages]], [[Context-Free Grammars and Parsing]], [[Regular Expressions and Regular Languages]]

## Sources

- [[UAF CS 331 Chappell - Chomsky Hierarchy Lecture Notes]] — four types, machines, containment.
- [[DePaul CSC 415 - The Chomsky Hierarchy Notes]] — examples, strictness claim.
- [[Critchlow and Eck - Foundations of Computation - Ch4 Grammars]] — general grammars = r.e.

## History

- 2026-11-23: created.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
