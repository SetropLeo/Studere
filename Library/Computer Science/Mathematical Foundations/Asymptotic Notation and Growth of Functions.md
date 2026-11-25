---
title: Asymptotic Notation and Growth of Functions
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Sedgewick Wayne - Analysis of Algorithms]]", "[[OpenDSA - Lower Bounds and Theta Notation]]", "[[UTSA CS3343 Lecture 3 - Asymptotic Notation]]"]
tags: [finding, growth-of-functions, algorithm-analysis]
---

# Asymptotic Notation and Growth of Functions

> **Summary:** Big-O, Omega and Theta compare how fast functions grow, ignoring constant factors and small inputs. Formal definitions rest on level B sources only, and one source has an alternative Omega definition.

## What it is

> **Big-O** (upper bound): O(g) holds if there are positive c and n0 with 0 ≤ f(n) ≤ c·g(n) for all n ≥ n0 ([[UTSA CS3343 Lecture 3 - Asymptotic Notation]]).
> **Omega** (lower bound): constants c and n0 with T(n) ≥ c·g(n) for all n > n0 ([[OpenDSA - Lower Bounds and Theta Notation]]).
> **Theta**: both O and Omega ([[OpenDSA - Lower Bounds and Theta Notation]] gives only this "O and Ω" form); equivalently c1·g(n) ≤ f(n) ≤ c2·g(n) for n ≥ n0 (the two-constant form is in [[UTSA CS3343 Lecture 3 - Asymptotic Notation]] only).

## How it works

- Worked: 3n² + 4n - 2 = O(n²) with c = 6, n0 = 1; n³ is not O(n²) (UTSA).
- Selection sort: n² + 3n - 4 array accesses (UTSA). That this gives Theta(n²) is the archivist's inference; UTSA gives only the count.
- Drop lower-order terms and constants, but constants matter at small n: 100n² < n³ iff n > 100. A polynomial is bounded by an exponential c^n for base c > 1 (the base condition is the archivist's qualification). Use Theta when possible (UTSA).
- OpenDSA: bounds (upper/lower) and cases (worst/average/best) are separate choices; a bound applies to a specified input class. Some problems have no known Theta; asymptotic notation is described as "a powerful modeling tool" (OpenDSA's words); the idea that it is therefore not absolute truth is the archivist's gloss.
- [[Sedgewick Wayne - Analysis of Algorithms]] (level A): cost simplified with tilde notation; order of growth is one of "just a few functions" of the problem size (the explicit list 1, log N, N, N log N, N², N³, 2^N appears only in the textbook's table, which is an image and was not read as text). ThreeSum is order N³; faster versions reach N² log N. It uses Big-Oh only informally.

## Key terms

> **Order of growth**: the leading-term shape of a cost function in the input size N.
> **Tilde notation**: ~ f(N), cost with low-order terms dropped (Sedgewick and Wayne).

## Example

Counting array accesses (selection sort above) is how the sources connect to algorithm cost. Timing in Python is not covered (gap).

## Contradictions and uncertainties

- **Alternate Omega:** [[OpenDSA - Lower Bounds and Theta Notation]] also describes a definition with "an infinite number of values of n", not symmetric with Big-Oh, to handle an algorithm quadratic only on even n. The main definition above is the c, n0 one. This alternate Omega is the Hardy-Littlewood-style (limsup) definition, whereas Knuth's (the one used in CS) is the c, n0 one (archivist's background note, `unverified` against a read source; see Knuth 1976 below).
- **UTSA strict inequality:** UTSA literally writes Omega as "0 <= cg(n) < f(n)" on the page; this is a quirk of the source (non-standard), not a fetch artifact. OpenDSA uses ≥. Do not use the strict form.
- No level A source gives the formal definitions (Sedgewick-Wayne omit Omega and Theta); formal definitions rest on level B only, hence confidence `debated`. Candidate level A sources (to be read in stage 1): CLRS, Introduction to Algorithms; Knuth 1976, "Big Omicron and Big Omega and Big Theta". Little-o, little-omega and limit-based comparison are not covered (gap).

## Related

- [[Function]], [[Linear Recurrence Relations]], [[Induction and Recursion]]
- Cross-area (no note yet): algorithm analysis in Algorithms and Data Structures (INE5821).

## Sources

- [[UTSA CS3343 Lecture 3 - Asymptotic Notation]] — O, Theta, examples.
- [[OpenDSA - Lower Bounds and Theta Notation]] — Omega, Theta, alternate Omega, bounds vs cases.
- [[Sedgewick Wayne - Analysis of Algorithms]] — orders of growth, tilde notation.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: Theta two-constant form attributed to UTSA only (OpenDSA gives "O and Ω"); selection sort Theta(n²) marked as inference; Sedgewick-Wayne explicit list softened (image-only table); UTSA strict inequality reworded as a literal source quirk; "not absolute truth" unquoted as gloss; alternate Omega identified (Hardy-Littlewood limsup vs Knuth, unverified); polynomial vs exponential qualified (base c > 1); "100n² beats n³" -> "100n² < n³ iff n > 100"; candidate level A sources recorded; confidence stays debated.
- 2026-11-23: verified (light pass, single-source accepted per user decision); UTSA strict-Omega quirk (not a "fetch artifact") matches _sources.
