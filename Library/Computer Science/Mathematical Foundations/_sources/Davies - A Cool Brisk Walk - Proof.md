---
title: Davies - A Cool Brisk Walk Through Discrete Mathematics - Ch 9 Proof
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Stephen Davies (University of Mary Washington)
published: undated on page (open textbook, hosted on Mathematics LibreTexts)
url: https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/A_Cool_Brisk_Walk_Through_Discrete_Mathematics_(Davies)/09%3A_Proof/9.3%3A_Proof_by_induction
accessed: 2026-11-23
url-verified: true
tags: [source, proofs, induction, contradiction]
---

# Davies - A Cool Brisk Walk Through Discrete Mathematics - Ch 9 Proof

Pages read: 9.1 Proof concepts, 9.2 Types of proof (`.../09%3A_Proof/9.2%3A_Types_of_proof`), 9.3 Proof by induction (URL above).

## Why it is reliable (or not)

Open university-author textbook for beginners in discrete math, hosted by LibreTexts. Informal and conversational tone (good for a beginner, less rigorous than Hammack). The page footer says "not declared license" (metadata says 4.0). No formal peer review known.

## Extracted points

- A proof is a "chain of reasoning": each step can be logically deduced from the ones that preceded it; axioms are "the things we're allowed to start with"; the result is a theorem (9.1).
- Direct proof: start from what is known, proceed by positive steps to the conclusion (9.2).
- Contradiction (reductio ad absurdum): assume the negation of the claim; if that leads to a contradiction, the assumption was false so the claim holds. Example: sqrt(2) irrational (assume a/b in lowest terms, both end up even) (9.2).
- Induction: for a claim P(n) over natural numbers, verify the base case, then show P(k) implies P(k+1). The hypothesis P(k) is assumed, not proven (9.3).
- Strong induction: assume all earlier cases; useful when a problem splits into smaller parts not exactly "one less" (9.3).
- Induction/recursion link: the author calls induction "proof by recursion"; the work is deferred to smaller cases, with a tree-traversal analogy, and the base case handles the simplest instance (9.3). ("Like a recursive function" is not in the text.)

## Relevant excerpts

> "This is where you start from what's known and proceed directly by positive steps towards your conclusion." (9.2, direct proof)

> "this tells you that the original assumption of ¬X must have been false." (9.2, contradiction)

> "A proof is essentially a chain of reasoning" (9.1; the rest of the sentence was not recorded)

## Used in

- [[Direct Proof]], [[Proof by Contradiction]], [[Mathematical Induction]], [[Induction and Recursion]]

## History

- 2026-11-23: registered and read (researcher). Note: 9.1/9.2 do not discuss counterexamples or universal-statement strategy.
- 2026-11-23: stage 2 fixes: proof definition rewritten to Davies's wording; "like a recursive function" removed.
