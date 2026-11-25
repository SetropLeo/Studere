---
title: Context-Free Grammars and Parsing
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Critchlow and Eck - Foundations of Computation - Ch4 Grammars]]", "[[UAF CS 331 Chappell - Chomsky Hierarchy Lecture Notes]]"]
tags: [finding, theory-of-computation]
---

# Context-Free Grammars and Parsing

> **Summary:** Parsing decides whether a grammar derives a string and builds a parse tree; ambiguity and the LL(1)/LR(1) parser families are the main practical concerns.

## What it is

Read: section 4.3 (parsing and parse trees) of Critchlow and Eck. NOT read: 4.1 (CFG definitions), 4.2 (BNF), 4.5 (non-context-free languages). Definitions of CFG are therefore only light: Chappell (UAF) says context-free productions have a single nonterminal on the left-hand side.

From 4.3:
- Parsing means finding a derivation of a string from grammar G, or showing none exists (a membership test).
- In a parse tree the start symbol is the root and terminals are the leaves. Many derivations can share one tree; left derivations correspond one-to-one with parse trees (Theorem 4.5).
- A grammar is ambiguous if some string has more than one left derivation; the book's example is x + y * z.

## How it works

- LL(1): top-down, builds a left derivation, one symbol of lookahead.
- LR(1): bottom-up shift/reduce, builds a right derivation in reverse. (Use of LR(1) in compilers: `unverified`, not confirmed in the 4.3 fetch.) Some unambiguous grammars are LR(1) but not LL(1).

## Key terms

> **Parse tree**: tree showing a derivation, root = start symbol, leaves = terminals.

> **Ambiguous grammar**: a string has more than one left derivation (book's definition).

## Example

x + y * z can be derived with two different left derivations (two trees) in an ambiguous expression grammar.

## Contradictions and uncertainties

- Single textbook source for parsing claims; LL/LR statements are from a fetch summary. `debated`.

## Related

- [[Pushdown Automata]], [[Chomsky Hierarchy]], [[Alphabets, Strings and Languages]]

## Sources

- [[Critchlow and Eck - Foundations of Computation - Ch4 Grammars]] — section 4.3.
- [[UAF CS 331 Chappell - Chomsky Hierarchy Lecture Notes]] — context-free production form.

## History

- 2026-11-23: created.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: "widely used in compilers" for LR(1) marked unverified.
