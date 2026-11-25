---
title: First-Order Logic
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

# First-Order Logic

> **Summary:** First-order logic extends [[Propositional Logic]] with individual constants, variables, predicates, identity and quantifiers, and is interpreted in models (a domain plus an interpretation).

## What it is

> **First-order logic** ("classical elementary logic"): adds individual constants, variables, predicate letters, identity and quantifiers (for all, exists) ([[SEP Classical Logic]]). This vocabulary list could not be matched to the SEP text actually read (unverified wording); the quantifiers and the model-based semantics are confirmed by [[Logic and Proof (Avigad et al)]].

## How it works

- [[Logic and Proof (Avigad et al)]] (chs. 7-10) is listed in its table of contents as covering functions, predicates, relations, quantifiers, equality, semantics, soundness and completeness; only the table of contents (chs. 7-9) and the text of ch. 10 were read, so coverage of chs. 7-9 is unverified.
- Semantics: "Formally, an interpretation of a unary predicate P in a domain D is the set of elements of D for which P is true" (10.1; quoted in full, the earlier note had silently dropped "Formally,"). "We will call this structure—the domain D, paired with the interpretation—a model for the language" (10.2).
- Validity and consequence are defined through models: see [[Logical Validity and Consequence]].

## Key terms

> **Predicate**: a property or relation applied to terms (e.g. P(x)).
> **Quantifier**: for all (universal) or exists (existential).
> **Domain**: the set of things the variables range over.
> **Model**: a domain paired with an interpretation of the symbols ([[Logic and Proof (Avigad et al)]]).

## Example

Use in CS: first-order logic appears in the CMU 15-311 sequence before SAT/SMT solvers and first-order theorem provers ([[CMU 15-311 Logic and Mechanized Reasoning]], syllabus only).

## Contradictions and uncertainties

- The sentence that truth tables cannot be used directly for first-order validity was deleted from the findings: no source read states it (unverified). Decidability is not supported by any source read: listed as a gap. Candidate sources (to be read in stage 1): SEP, Church's Thesis, Supplement A (plato.stanford.edu/entries/church/supplementA.html); Open Logic Project.
- SEP read only partially (first 100000 of 124709 characters). Confidence `debated`.

## Related

- [[Propositional Logic]], [[Logical Validity and Consequence]], [[Set]], [[Relation]]
- Cross-area (no note yet): Theory of Computation (decidability), Databases (relational calculus).

## Sources

- [[SEP Classical Logic]] — vocabulary of the language.
- [[Logic and Proof (Avigad et al)]] — semantics, models.
- [[CMU 15-311 Logic and Mechanized Reasoning]] — syllabus placement.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: SEP vocabulary list marked unverified wording; Avigad chs. 7-9 coverage marked unverified (TOC only); deleted the truth-table sentence and recorded decidability candidates; Avigad 10.1 quote given with omission and 10.2 quote fixed; confidence established -> debated.
- 2026-11-23: verified (light pass, single-source accepted per user decision); Avigad 10.1 quote spot-checked verbatim; unverified SEP vocabulary wording remains marked.
