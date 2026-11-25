---
title: Elementary Number Theory (Barrus and Clark)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Mike Barrus and W. Edwin Clark (University of Rhode Island / USF source material), LibreTexts
published: unknown (not stated on the pages read)
url: https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Elementary_Number_Theory_(Barrus_and_Clark)/01%3A_Chapters
accessed: 2026-11-23
url-verified: true
tags: [source, number-theory, modular-arithmetic, rsa]
---

# Elementary Number Theory (Barrus and Clark)

Pages read: chapter index and 1.27 The RSA Scheme (.../01%3A_Chapters/1.27%3A_The_RSA_Scheme), both opened 2026-11-23.

## Why it is reliable (or not)

University-authored open textbook, CC BY-NC-SA 4.0. Pure number theory text (not CS-oriented), which makes it independent from [[MCS Ch8 Number Theory (Lehman Leighton Meyer)]]. Publication date not shown. Only the index and the RSA section were read in detail; the other sections are known from the table of contents only.

## Extracted points

- Table of contents covers: 1.4 divisibility properties, 1.5 division algorithm, 1.7 gcd/lcm, 1.8 Euclidean algorithm, 1.9-1.10 Bezout's lemma and computing coefficients, 1.11 primes, 1.12 unique factorization, 1.17 congruences, 1.18 divisibility tests, 1.21 residue classes, 1.23 CRT, 1.24 Wilson/Euler/Fermat, 1.25 primality tests, 1.26 computing a^n mod m, 1.27 RSA.
- RSA (1.27): Bob publishes modulus m and exponent e; Alice computes M = x^e mod m; Bob decrypts with secret d. m = pq with distinct primes; e and d are inverses modulo phi(m) = (p-1)(q-1); correctness uses Fermat's little theorem; security tied to the open question of fast factoring.

## Relevant excerpts

> "Bob begins by making public two integers m and e" (1.27)

> "Is there a fast algorithm for factoring large integers?" (1.27, as quoted in the search/read summary; wording of the fetch tool, treat as paraphrase-level)

## Used in

- [[Divisibility and GCD]], [[Modular Arithmetic]], [[RSA]]
- [[_MOC Mathematical Foundations]] (pending)

## History

- 2026-11-23: registered and read by researcher.
