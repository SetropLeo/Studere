---
title: Logical Validity and Consequence
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[SEP Classical Logic]]", "[[Logic and Proof (Avigad et al)]]"]
tags: [finding, logic]
---

# Logical Validity and Consequence

> **Summary:** An argument is valid when no interpretation makes all premises true and the conclusion false. In [[Propositional Logic]] the interpretations are truth assignments; in [[First-Order Logic]] they are models.

## What it is

> **Valid argument** ([[SEP Classical Logic]]): "An argument is valid if there is no interpretation (in the semantics) in which its premises are all true and its conclusion false" (verified against the page; one verifier retrieved only part of the sentence, so a light recheck before verbatim use in a course is advisable).

## How it works

Propositional case ([[Logic and Proof (Avigad et al)]], 6.3):

- "A propositional formula is said to be a tautology, or valid, if it is true under any truth assignment."
- "A is said to be a logical consequence of Γ if, given any truth assignment that makes every formula in Γ true, A is true as well."

First-order case (10.4): "We will say that A is a logical consequence of Γ if every model of Γ is a model of A." Validity means true in every model; this is a paraphrase of Avigad's "true in every possible model" (archivist wording, not a quote).

Soundness and completeness tie this semantic notion to derivations: derivable implies valid, valid implies derivable (SEP's informal glosses, [[SEP Classical Logic]]).

## Key terms

> **Logical consequence**: A follows from a set Γ of premises when every interpretation that makes Γ true makes A true.
> **Tautology**: a propositional formula valid under all truth assignments.
> **Soundness / completeness**: proofs only give valid conclusions / every valid conclusion has a proof.

## Example

Checking validity of a propositional argument by enumerating all truth assignments is what a truth table does; the sources define the criterion, not code. A Python enumeration over assignments could illustrate it in stage 4.

## Contradictions and uncertainties

- No divergence between the two sources. Light recheck of the SEP sentence before verbatim use (see above).
- Decidability of validity (gap, not sourced): the archivist's background expectation is that propositional validity is decidable by truth tables and first-order validity is undecidable but semi-decidable; this is `unverified`. Candidate sources (to be read in stage 1): SEP, Church's Thesis, Supplement A (plato.stanford.edu/entries/church/supplementA.html); Wikipedia Entscheidungsproblem (lead only, not a citation); SEP "Logical Consequence" as extra source for the definition.
- Confidence set to `debated`: the semantic definition is given by two sources, but SEP was only partly read and the quote needs a light recheck.

## Related

- [[Propositional Logic]], [[First-Order Logic]], [[Direct Proof]], [[Proof by Contradiction]]

## Sources

- [[SEP Classical Logic]] — semantic definition, soundness, completeness.
- [[Logic and Proof (Avigad et al)]] — tautology, consequence in both logics.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: SEP validity sentence now verified, removed the "relayed by fetch tool" caveat (light recheck note kept); Avigad 10.4 quote corrected to start "We will say that..."; "true in every model" marked as paraphrase; decidability expectation recorded as unverified with candidate sources; confidence established -> debated.
- 2026-11-23: verified (light pass, single-source accepted per user decision); Avigad 10.4 quote spot-checked verbatim; decidability expectation remains marked unverified.
