---
title: Linear Recurrence Relations
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Levin - Discrete Mathematics An Open Introduction]]", "[[Guichard - Combinatorics and Graph Theory]]", "[[MIT OCW 6.042J Mathematics for Computer Science]]"]
tags: [finding, recurrence, combinatorics]
---

# Linear Recurrence Relations

> **Summary:** A recurrence defines each term from earlier terms. Linear homogeneous recurrences with constant coefficients can be solved by the characteristic-root technique or by generating functions; Fibonacci is the standard example.

## What it is

> **Recurrence relation**: "a recursive definition without the initial conditions" ([[Levin - Discrete Mathematics An Open Introduction]], 2.4).
> **Linear homogeneous with constant coefficients**: each term is a linear combination of some number of previous terms (Levin's wording). Example not of this kind: a_n = 2a_{n-1} + 1 (not homogeneous) (Levin).

## How it works

Characteristic roots ([[Levin - Discrete Mathematics An Open Introduction]]): for a_n + α a_{n-1} + β a_{n-2} = 0, solve x² + αx + β = 0.

- Distinct roots r1, r2: a_n = a·r1^n + b·r2^n.
- Repeated root r: a_n = a·r^n + b·n·r^n.
- Constants come from the initial conditions.
- Caution: Levin switches sign conventions between boxes (the form a_n + α a_{n-1} + β a_{n-2} = 0 versus the form a_n = c1 a_{n-1} + c2 a_{n-2}), so signs of α, β must be read against the form used.

Fibonacci F_n = F_{n-1} + F_{n-2}, F_0 = 0, F_1 = 1 is solved this way (golden ratio); Levin reaches the golden-ratio roots but does not write out the closed form.

Generating functions ([[Guichard - Combinatorics and Graph Theory]], 3.4): f(x) = Σ a_i x^i; for Fibonacci f(x) = x/(1-x-x²), giving the closed form F_i = (1/√5)((1+√5)/2)^i − (1/√5)((1−√5)/2)^i (only Guichard writes this out).

## Key terms

> **Initial conditions**: the starting values that pin down a unique sequence.
> **Characteristic equation**: the polynomial equation obtained by replacing a_{n-k} with x^{n-k} and dividing out (archivist gloss; Levin derives the equation x² + αx + β = 0 for the second-order case).
> **Generating function**: a power series whose coefficients are the sequence terms.

## Example

Fibonacci above; a Python loop computing F_n against the closed form is a stage 4 idea (the sources give no code).

## Contradictions and uncertainties

- Both level A sources reach the golden-ratio roots (Levin by characteristic roots, Guichard by generating functions); they use different methods, not a conflict, but only Guichard writes out the closed form. [[MIT OCW 6.042J Mathematics for Computer Science]] is scope only: it lists recurrences just as topics that "may also be covered".
- Confidence `debated` until a second body-level source is read (candidate sources, to be read in stage 1: Rosen, Discrete Mathematics and Its Applications; MCS recurrences chapter).
- Non-homogeneous recurrences and the Master theorem: not covered (gap). Proof by [[Mathematical Induction]] of a closed form: not covered.

## Related

- [[Mathematical Induction]], [[Induction and Recursion]], [[Permutations and Combinations]], [[Pigeonhole Principle]]
- Cross-area (no note yet): recurrences for analysing recursive algorithms (Algorithms and Data Structures).

## Sources

- [[Levin - Discrete Mathematics An Open Introduction]] — definitions, characteristic roots.
- [[Guichard - Combinatorics and Graph Theory]] — generating functions.
- [[MIT OCW 6.042J Mathematics for Computer Science]] — scope only.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: dropped "fixed" (Levin: "some number of previous terms"); added Levin sign-convention caution; reworded Fibonacci agreement (only Guichard writes the closed form, now written out); characteristic equation gloss marked own/Levin derivation; MIT OCW scope only; confidence established -> debated.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
