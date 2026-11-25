---
title: Pumping Lemma for Regular Languages
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Critchlow and Eck - Foundations of Computation - Ch3 Languages Regular Expressions and FSA]]"]
tags: [finding, theory-of-computation]
---

# Pumping Lemma for Regular Languages

> **Summary:** Theorem 3.6 gives a necessary property of regular languages; Theorem 3.7 uses it to prove that {a^n b^n | n >= 0} is not regular.

## What it is

Theorem 3.6 (pumping lemma) is stated in section 3.7 of Critchlow and Eck. The exact statement is not recorded in the source note, so it is not reproduced here (gap: recheck the page). Theorem 3.7 proves {a^n b^n | n >= 0} non-regular by choosing the string a^N b^N. The page names {a^p | p prime} as non-regular but does not prove it.

## How it works

Proof pattern (from the read source): assume the language is regular, pick a long string of the form a^N b^N where N is tied to the lemma, and derive a contradiction. Details of the pumping step are not recorded.

## Key terms

> **Pumping lemma**: a property every regular language satisfies; used to prove non-regularity (gloss, unsourced beyond the use in Theorem 3.7).

## Example

a^n b^n is non-regular, so no [[Finite Automata - DFA and NFA]] accepts it; it is context-free, however (see [[Pushdown Automata]], [[Chomsky Hierarchy]]; example from DePaul).

## Contradictions and uncertainties

- Single source. The pumping lemma for context-free languages (section 4.5) was not read: gap.

## Related

- [[Regular Expressions and Regular Languages]], [[Chomsky Hierarchy]]

## Sources

- [[Critchlow and Eck - Foundations of Computation - Ch3 Languages Regular Expressions and FSA]] — Theorems 3.6 and 3.7.

## History

- 2026-11-23: created.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
