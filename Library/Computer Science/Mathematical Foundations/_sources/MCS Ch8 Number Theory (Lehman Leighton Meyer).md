---
title: MCS Ch8 Number Theory (Lehman Leighton Meyer)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Eric Lehman, F. Thomson Leighton, Albert R. Meyer (MIT; used in MIT OCW 6.042J)
published: 2021-06-30 (LibreTexts last-modified; underlying text from MIT 6.042J, Spring 2015 OCW)
url: https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Mathematics_for_Computer_Science_(Lehman_Leighton_and_Meyer)/02%3A_Structures/08%3A_Number_Theory
accessed: 2026-11-23
url-verified: true
tags: [source, number-theory, modular-arithmetic, rsa]
---

# MCS Ch8 Number Theory (Lehman Leighton Meyer)

Pages read (all opened 2026-11-23): chapter index, 8.2 The Greatest Common Divisor
(.../08%3A_Number_Theory/8.02%3A_The_Greatest_Common_Divisor), 8.11 RSA Public Key Encryption
(.../8.11%3A_RSA_Public_Key_Encryption). Also read: MIT OCW course page https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/ (CC BY-NC-SA, Meyer and Chlipala, Spring 2015). Note: the PDF versions could not be text-extracted by the tool; only the HTML LibreTexts pages were read.

## Why it is reliable (or not)

University open textbook from MIT, used in a real course (6.042J). CC BY-NC-SA. Written for CS students. It is proof-heavy, so for a beginner it is a reference to pair with gentler material. Mirror is hosted by LibreTexts, so wording may differ slightly from the MIT PDF.

## Extracted points

- Chapter 8 sections: 8.1 Divisibility; 8.2 GCD; 8.3 Prime Mysteries; 8.4 Fundamental Theorem of Arithmetic; 8.6 Modular Arithmetic; 8.7 Remainder Arithmetic; 8.9 Multiplicative Inverses and Cancelling; 8.10 Euler's Theorem; 8.11 RSA.
- gcd(a, b) = gcd(b, rem(a, b)) for b != 0 (Euclid's algorithm); takes at most 1 + 2 log a transitions (upper bound; log base unspecified in the main text, a footnote gives log_φ a).
- The Pulverizer (extended Euclid) writes gcd = s*a + t*b; it is fast on huge numbers, so useful in cryptography.
- RSA: choose distinct primes p, q; n = pq; pick e with gcd(e, (p-1)(q-1)) = 1; public key (e, n); private key d = inverse of e mod (p-1)(q-1), found with the Pulverizer; encrypt m^e mod n; decrypt with d.
- Why decoding works: Euler's theorem, for m coprime to n (non-coprime case deferred to Problem 8.81).
- Security assumes that factoring a product of two large primes is hard; that breaking RSA implies factoring is an unproven conjecture (equivalence open).
- The chapter's intro says number theory, often seen as impractical, underlies modern cryptography and secure online communication.

## Relevant excerpts

> "Euclid's algorithm can easily be formalized as a state machine" (8.2)

> "It is an important unproven conjecture in cryptography" (8.11, on RSA attacks implying factoring)

## Used in

- [[Divisibility and GCD]], [[Modular Arithmetic]], [[RSA]]
- [[_MOC Mathematical Foundations]] (pending)

## History

- 2026-11-23: registered and read by researcher.
- 2026-11-23: stage 2 fixes: Euclid bound restated as an upper bound; Euler decryption restricted to coprime m; security wording corrected.
