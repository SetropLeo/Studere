---
title: Critchlow and Eck - Foundations of Computation - Ch5 Turing Machines and Computability
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Carol Critchlow and David J. Eck (Hobart and William Smith Colleges)
published: undated on page (open textbook; HTML on Engineering LibreTexts, not prepared by the authors)
url: https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Foundations_of_Computation_(Critchlow_and_Eck)/05%3A_Turing_Machines_and_Computability
accessed: 2026-11-23
url-verified: true
tags: [source, theory-of-computation, turing-machine, halting-problem, decidability]
---

# Critchlow and Eck - Foundations of Computation - Ch5 Turing Machines and Computability

Pages actually opened (under `/05%3A_Turing_Machines_and_Computability/`): `5.01%3A_Turing_Machines`, `5.02%3A_Computability`, `5.03%3A_The_Limits_of_Computation`.

## Why it is reliable (or not)

Open university textbook, level A, with formal definitions and a proof of the halting problem. Caveats: its terminology ("recursive", "recursively enumerable", "Turing-acceptable") is older; it does not name universal machines or reductions explicitly on these pages (a universal machine U is used in the proof that K is recursively enumerable); no complexity (P/NP) content; it is a short chapter.

## Extracted points

- Subtopic 5: Definition 5.1, Turing machine = (Q, Lambda, q0, delta), tape infinite in both directions, blank symbol #, halt state h; each step reads a cell, writes, moves L/R, changes state. A computation may never halt. Def 5.2 computes a function; Def 5.3 decides a language (halts with 1 or 0); Def 5.4 accepts a language (halts iff w in L). Every decidable language is acceptable.
- Church-Turing thesis stated informally on 5.2 (belief, cannot be proved); one-tape machine can simulate a two-tape machine (all the page says; no multi-tape generalisation or marker symbols confirmed).
- Subtopic 6: recursive = Turing-decidable; recursively enumerable = Turing-acceptable; Theorem 5.3: recursive iff both L and its complement are r.e.
- Halting problem: given T_n decide whether it halts on a^n; proved unsolvable by diagonal-style contradiction (machine M loops if H says halts). K is r.e. (via generator G and universal machine U). Other undecidable problems listed without proof: halts on all inputs, halts on given input, equivalence of two programs, halts on blank tape.
- No use of the word "reduction" on the page.

## Relevant excerpts

> "Given a Turing machine T_n, decide whether or not T_n will halt when it is run with input a^n." (5.3)

> "widely believed that anything that can reasonably be called computation can be done by a Turing machine" (5.2; fetcher's reproduction, minor quote-mark differences possible)

> "A language that can be listed in this way is said to be recursively enumerable" (5.2)

## Used in

- [[Turing Machines]], [[Church-Turing Thesis]], [[Decidability and Recursively Enumerable Languages]], [[The Halting Problem]]

## History

- 2026-11-23: wording fix after light verification: simulation remark narrowed to one-tape simulating two-tape.
- 2026-11-23: registered and read (researcher). Content obtained via fetch summarization.
