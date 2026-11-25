---
title: Divisibility and GCD
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Introduction to Number Theory (Veerman)]]", "[[MCS Ch8 Number Theory (Lehman Leighton Meyer)]]", "[[Elementary Number Theory (Barrus and Clark)]]"]
tags: [finding, number-theory]
---

# Divisibility and GCD

> **Summary:** a divides b when b = a*c for an integer c; the gcd is the largest common divisor, computed fast by Euclid's algorithm, and the extended version (the Pulverizer) also finds integer coefficients.

## What it is

> **Divides** (Def 1.1): a | b when b = a*c for some integer c ([[Introduction to Number Theory (Veerman)]]).
> **GCD** (Def 1.2): for non-zero a and b, the largest integer dividing both (always >= 1) (Veerman).

## How it works

- Euclid's algorithm: gcd(a, b) = gcd(b, rem(a, b)) for b ≠ 0; it takes at most 1 + 2 log a transitions (an upper bound; the base of the logarithm is unspecified in the main text, a footnote gives log_φ a); it "can easily be formalized as a state machine" ([[MCS Ch8 Number Theory (Lehman Leighton Meyer)]], 8.2). Independent support is only a lead, not read: Lamé's theorem / Knuth (MathWorld "EuclideanAlgorithm", Wikipedia "Lamé's theorem").
- The **Pulverizer** (extended Euclid) writes gcd = s*a + t*b; it is fast on huge numbers, hence useful in cryptography (MCS 8.2). Barrus and Clark call this Bezout's lemma and computing the coefficients (sections 1.9-1.10, table of contents only) ([[Elementary Number Theory (Barrus and Clark)]]). Bezout/extended Euclid therefore rests on MCS plus a table of contents.
- Uses: modular inverses and [[RSA]] key generation; see [[Modular Arithmetic]].

## Key terms

> **Pulverizer**: MCS name for the extended Euclidean algorithm, giving s, t with gcd(a,b) = s*a + t*b.
> **Bezout coefficients**: the integers s and t above (Barrus and Clark term, ToC only).

## Example

Not sourced in code. Python's standard library offers gcd, but the sources read do not mention it (unverified); leave for stage 4.

## Contradictions and uncertainties

- Veerman's section does not cover Euclid or cryptography. The 1 + 2 log a transition bound is from one source (MCS); Barrus and Clark were read only for the table of contents and RSA. Confidence `debated`.
- Primes, fundamental theorem of arithmetic and primality tests (e.g. Miller-Rabin): listed in tables of contents only; not read (gap).

## Related

- [[Modular Arithmetic]], [[RSA]], [[Mathematical Induction]]
- Cross-area (no note yet): hashing and checksums (Security; Algorithms and Data Structures).

## Sources

- [[Introduction to Number Theory (Veerman)]] — definitions.
- [[MCS Ch8 Number Theory (Lehman Leighton Meyer)]] — Euclid, Pulverizer.
- [[Elementary Number Theory (Barrus and Clark)]] — table of contents (Bezout, Euclid).

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: gcd definition restricted to non-zero a, b (Veerman Def 1.2); "about 1 + 2 log a steps" corrected to an upper bound of at most 1 + 2 log a transitions, base unspecified (footnote log_φ a); Lamé/Knuth recorded as leads only; Bezout/extended Euclid flagged as resting on MCS plus a TOC; confidence established -> debated.
- 2026-11-23: verified (light pass, single-source accepted per user decision); "about 1+2 log a steps" confirmed corrected to upper bound, matches MCS source note.
