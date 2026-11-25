---
title: Function
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: uncertain
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Applied Discrete Structures (Doerr, Levasseur)]]"]
tags: [finding, functions]
---

# Function

> **Summary:** A function relates each element of a domain to exactly one element of a codomain; injective, surjective and bijective describe how the pairing behaves. Only one source covers this, so confidence is `uncertain`.

## What it is

> **Function**: "each element of A is related to exactly one element of the set B" ([[Applied Discrete Structures (Doerr, Levasseur)]], 7.1; the definition number 7.1.1 could not be confirmed by one verifier, so it is not cited). A is the **domain**, B the **codomain**, and "the range of a function is the set of images of its domain", a subset of the codomain.

A function is thus a special kind of [[Relation]] between two [[Set]]s.

## How it works

Definitions from section 7.2 of [[Applied Discrete Structures (Doerr, Levasseur)]] (https://discretemath.org/ads/s-properties-of-functions.html):

- Injective (also "one-to-one", Def 7.2.1): distinct inputs give distinct outputs, for all a, b in A, a ≠ b implies f(a) ≠ f(b).
- Surjective (also "onto", Def 7.2.2): the range f(A) equals the codomain B.
- Bijective (Def 7.2.3): both injective and surjective.

The book presents a function as a machine and shows small functions in two-line array notation, with a note on Sage/Python typing.

## Key terms

> **Domain / codomain / range**: input set, declared output set, set of actual outputs.
> **Injective, surjective, bijective**: see the definitions above (Doerr 7.2).

## Example

A function with a small finite domain can be written as a Python `dict`. This is the archivist's own analogy, not a claim of the source; leave exercises for stage 4.

## Contradictions and uncertainties

- Single source (level A, via a summarizing fetch tool). [[OpenDSA Sets and Relations (Shaffer)]] does not define functions; [[Open Logic Project Sets Relations Functions (Zach)]] was read only for relations. A second source is needed (gap); confidence stays `uncertain`.
- Candidate second sources (to be read in stage 1): Open Logic functions section (builds.openlogicproject.org); Judson, Abstract Algebra: Theory and Applications (functions chapter); Hammack, Book of Proof (functions chapter).
- Composition and inverse functions: not covered (gap).

## Related

- [[Set]], [[Relation]], [[Asymptotic Notation and Growth of Functions]]

## Sources

- [[Applied Discrete Structures (Doerr, Levasseur)]] — definition, domain/codomain/range, injective/surjective/bijective definitions (7.2).

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: dropped "like a dictionary" and "as hinted by the source" (7.1 uses two-line array notation; Python dict kept only as labelled own analogy); filled in Doerr 7.2 definitions of injective, surjective, bijective; dropped the 7.1.1 numbering (unconfirmed); recorded candidate second sources; confidence stays uncertain (single source).
- 2026-11-23: verified (light pass, single-source accepted per user decision); "dictionary" claim confirmed removed, Python dict only as labelled analogy.
