---
title: SEP - Computational Complexity Theory
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: reference encyclopedia (peer-reviewed entry)
author: not shown in the fetched page text (entry has an "Author and Citation Info" page; confirm there)
published: first published 2015-07-27; substantive revision 2016-07-20
url: https://plato.stanford.edu/entries/computational-complexity/
accessed: 2026-11-23
url-verified: true
tags: [source, theory-of-computation, complexity, np-completeness, pspace]
---

# SEP - Computational Complexity Theory

Only the first ~100,000 of ~227,000 characters of the page were read (covers decision problems, P, NP, reductions, NP-completeness, Cook-Levin, P vs NP, space classes, hierarchy theorems). The remainder (e.g. later sections) was not read.

## Why it is reliable (or not)

Stanford Encyclopedia of Philosophy: expert-authored, refereed by the SEP editorial process, regularly revised. Level A (reference work, philosophy-of-computing slant, but technically careful). Caveat: written for philosophers, so less hands-on; last substantive revision 2016, fine for these stable fundamentals.

## Extracted points

- Subtopic 1: decision problem = a set X of finite (binary) strings whose members must be recognised (examples PRIMES, SAT, TSP).
- Subtopic 7: P = decidable by a deterministic TM in polynomial time (taken as formal standard of feasibility). NP = decidable by a nondeterministic TM in polynomial time, equivalently verifiable with a polynomial-size certificate. Polynomial-time many-one reduction X <=_P Y via polynomial-time computable f with x in X iff f(x) in Y; transitive. NP-complete = in NP and every NP problem reduces to it. Cook (1971) and Levin (1973): SAT is NP-complete; 3-SAT, Vertex Cover, TSP etc. via reductions. P vs NP "often described as the single most important open question" of theoretical CS; if any NP-complete problem is in P then P = NP.
- Subtopic 8: space complexity = max tape cells used; PSPACE (polynomial space), TQBF PSPACE-complete (Stockmeyer and Meyer 1973); L = SPACE(log n). Hierarchy theorems (Theorem 3.1): time (Hartmanis-Stearns 1965), nondeterministic time (Cook 1972), space (Stearns-Hartmanis-Lewis 1965). Consequences P != EXP and L != PSPACE; chain L <= NL <= P <= NP <= PSPACE <= EXP with the other inclusions not known to be proper.

## Relevant excerpts

> "First published Mon Jul 27, 2015; substantive revision Wed Jul 20, 2016" (page header)

> "often described as the single most important open question" (P vs NP; fetcher's excerpt, wording around it not verified)

## Used in

- [[Alphabets, Strings and Languages]], [[Complexity Classes P and NP]], [[NP-Completeness and Cook-Levin]], [[Space Complexity and Complexity Hierarchy]]

## History

- 2026-11-23: registered and read partially (researcher). Content obtained via fetch summarization; the claim "P != EXP and L != PSPACE" as stated should be double-checked in stage 2 against the page text.
- 2026-11-23: the "P != EXP and L != PSPACE" recheck was done in stage 2 and the claim is now confirmed (archivist, stage 3 cleanup; the line above is kept as record).
