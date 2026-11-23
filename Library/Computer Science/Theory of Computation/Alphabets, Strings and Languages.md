---
title: Alphabets, Strings and Languages
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Critchlow and Eck - Foundations of Computation - Ch3 Languages Regular Expressions and FSA]]", "[[SEP - Computational Complexity Theory]]"]
tags: [finding, theory-of-computation]
---

# Alphabets, Strings and Languages

> **Summary:** Formal language theory starts from an alphabet (a finite non-empty set of symbols), strings over it, and languages (sets of strings). Decision problems can be viewed as sets of strings.

## What it is

- Per Critchlow and Eck (Ch3, section 3.1), an alphabet is a finite, non-empty set of symbols and a string is a finite sequence of symbols. A language over an alphabet Sigma is a subset of Sigma* (the set of all strings over Sigma).
- The same page notes that there are uncountably many languages over any alphabet. The comparison "more languages than programs, since programs are countable" is the researcher's gloss; the page does not make the countability link (see source note).
- SEP (Computational Complexity Theory) describes a decision problem as a set X of finite strings (the word "binary" in the SEP definition was not re-checked: `unverified`) whose members must be recognised; examples named are PRIMES, SAT and TSP.

## How it works

Every later concept is defined in terms of languages: a machine (see [[Finite Automata - DFA and NFA]], [[Pushdown Automata]], [[Turing Machines]]) or a grammar (see [[Context-Free Grammars and Parsing]]) *recognises* or *generates* a set of strings, and the [[Chomsky Hierarchy]] classifies languages by the weakest machine that handles them. Complexity classes ([[Complexity Classes P and NP]]) are sets of such languages/decision problems.

## Key terms

> **Alphabet**: finite non-empty set of symbols (Critchlow and Eck 3.1).

> **String**: finite sequence of symbols from an alphabet.

> **Language**: a subset of Sigma*.

> **Decision problem**: a set of finite strings to be recognised (SEP complexity).

## Example

Over Sigma = {a, b}, the set {a^n b^n | n >= 0} is a language (it is used in [[Pumping Lemma for Regular Languages]]).

## Contradictions and uncertainties

- Single-source for the definitions (one textbook page, obtained through a fetch summarizer); the definitions are standard but not independently confirmed by a second read source here, hence `debated`.
- Own inference: a language is a [[Set]] of strings, and a recognising machine defines a membership [[Function]] from strings to yes/no; a [[Relation]] view is not covered by the sources.

## Related

- [[Set]], [[Function]], [[Relation]] (own inference: the mathematical vocabulary is the same)
- [[Finite Automata - DFA and NFA]], [[Regular Expressions and Regular Languages]], [[Chomsky Hierarchy]], [[Decidability and Recursively Enumerable Languages]]

## Sources

- [[Critchlow and Eck - Foundations of Computation - Ch3 Languages Regular Expressions and FSA]] — alphabet, string, language definitions.
- [[SEP - Computational Complexity Theory]] — decision problem as a set of strings.

## History

- 2026-11-23: created.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: "binary" in the SEP decision-problem definition marked unverified.
