---
title: Critchlow and Eck - Foundations of Computation - 1.9 Application Recursion and Induction
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Carol Critchlow and David J. Eck (Hobart and William Smith Colleges)
published: undated on page (open textbook on Engineering LibreTexts)
url: https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Foundations_of_Computation_(Critchlow_and_Eck)/01%3A_Logic_and_Proof/1.09%3A_Application-_Recursion_and_Induction
accessed: 2026-11-23
url-verified: true
tags: [source, induction, recursion]
---

# Critchlow and Eck - Foundations of Computation - 1.9 Recursion and Induction

## Why it is reliable (or not)

Open university textbook written for computer science students; CC BY-NC-SA. It is the only source here that proves recursive *programs* correct by induction, which is exactly the user's context. The page was re-read in stage 2 verification: the factorial, Hanoi and TreeSum claims (Theorems 1.14-1.16) are confirmed.

## Extracted points

- Recursion is closely related to induction (paraphrase): the inductive case corresponds to the recursive call; the base case prevents an infinite chain of calls.
- Factorial (Theorem 1.14): P(n) = "factorial(n) correctly computes n!"; base case n = 0; inductive step assumes P(k) and shows P(k+1). Simple induction.
- Towers of Hanoi (Theorem 1.15): induction on the number of disks.
- TreeSum (Theorem 1.16): strong (second-form) induction on number of nodes, since subtrees can have any smaller size.
- Exercises: recursive power function, leaf counting in binary trees, sorted printing of binary sort trees.

## Relevant excerpts

(none literal; "closely related to induction" is a paraphrase and is not quoted)

## Used in

- [[Mathematical Induction]], [[Induction and Recursion]]

## History

- 2026-11-23: registered and read (researcher).
- 2026-11-23: stage 2 fixes: page re-verified (Theorems 1.14-1.16); fetch-paraphrase caveats removed; "closely related to induction" unquoted.
