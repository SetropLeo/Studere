---
title: Propositional Logic
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[SEP Classical Logic]]", "[[Logic and Proof (Avigad et al)]]", "[[CMU 15-311 Logic and Mechanized Reasoning]]"]
tags: [finding, logic]
---

# Propositional Logic

> **Summary:** Propositional logic studies statements built from sentence letters and connectives, ignoring the internal structure of the sentences. Its semantics uses truth assignments and truth tables.

## What it is

> **Propositional logic**: a language with sentence letters (whose internal structure is ignored) plus connectives, e.g. negation, conjunction, disjunction and conditional (list not exhaustive). [[SEP Classical Logic]] does not present propositional logic as a separate system; the only related text read there is that "zero-place predicate letters are sometimes called sentence letters". The propositional language itself is taken from [[Logic and Proof (Avigad et al)]] (chs. 2-6).

## How it works

- A **truth assignment** is "a function that assigns a truth value to each element of a set of propositional variables" ([[Logic and Proof (Avigad et al)]], 6.1).
- Semantics works with truth assignments and truth tables; the book also covers natural deduction, soundness and completeness (chs. 2-6) ([[Logic and Proof (Avigad et al)]]).
- A formula true under every truth assignment is a tautology (valid): see [[Logical Validity and Consequence]].
- Soundness: derivable implies valid. Completeness: valid implies derivable. These are SEP's informal glosses ([[SEP Classical Logic]]), not formal theorem statements.

## Key terms

> **Sentence letter / propositional variable**: a symbol standing for a whole statement.
> **Connective**: an operator such as negation, conjunction, disjunction, conditional.
> **Truth assignment**: a choice of true or false for each variable.
> **Tautology**: a formula true under every truth assignment.

## Example

Use in CS: [[CMU 15-311 Logic and Mechanized Reasoning]] sequences propositional logic, first-order logic, SAT solvers, SMT solvers and theorem provers; this shows propositional logic as the base of SAT solving, from a syllabus only (no definitions taken from it).

## Contradictions and uncertainties

- The [[CMU 15-311 Logic and Mechanized Reasoning]] page names the LAMR book (avigad.github.io/lamr), not "Logic and Proof"; whether it is independent of [[Logic and Proof (Avigad et al)]] is uncertain (same instructor, Avigad). The CMU page also says it is outdated. [[SEP Classical Logic]] is the independent source, but only the first ~100000 of 124709 characters were read, and it does not present propositional logic separately. Hence confidence `debated`.
- Normal forms (CNF), decidability and the SAT problem itself: not covered (gap).

## Related

- [[First-Order Logic]], [[Logical Validity and Consequence]], [[Direct Proof]], [[Proof by Contradiction]]
- Cross-area (no note yet): Boolean algebra and gates in Computer Architecture; SAT in Theory of Computation.

## Sources

- [[SEP Classical Logic]] — sentence letters remark, soundness and completeness glosses.
- [[Logic and Proof (Avigad et al)]] — truth assignments, truth tables.
- [[CMU 15-311 Logic and Mechanized Reasoning]] — place of logic in CS (syllabus).

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: SEP does not present propositional logic separately, reworded and propositional language attributed to Avigad; connective list marked non-exhaustive; soundness/completeness presented as SEP informal glosses; corrected the claim that CMU 15-311 reuses Avigad's textbook (page names LAMR; independence uncertain; page is outdated); confidence established -> debated (SEP only partly read).
- 2026-11-23: verified (light pass, single-source accepted per user decision); caveats on SEP/CMU independence kept visible.
