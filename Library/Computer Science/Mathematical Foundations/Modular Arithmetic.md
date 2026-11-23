---
title: Modular Arithmetic
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Introduction to Number Theory (Veerman)]]", "[[MCS Ch8 Number Theory (Lehman Leighton Meyer)]]", "[[Elementary Number Theory (Barrus and Clark)]]", "[[Python pow built-in (modular exponentiation and inverse)]]"]
tags: [finding, number-theory, python]
---

# Modular Arithmetic

> **Summary:** Two integers are congruent modulo m when m divides their difference. Modular exponentiation and inverses are built into Python through three-argument `pow`.

## What it is

> **Congruence** (Def 1.5): a and b are congruent mod m when m divides b - a ([[Introduction to Number Theory (Veerman)]]). Example given: clock arithmetic (mod 12 or 24).

## How it works

- MCS chapter 8 covers modular arithmetic, remainder arithmetic, multiplicative inverses and cancelling, and Euler's theorem (section list) ([[MCS Ch8 Number Theory (Lehman Leighton Meyer)]]). Barrus and Clark list congruences, residue classes, CRT, Wilson/Euler/Fermat and computing a^n mod m (table of contents only) ([[Elementary Number Theory (Barrus and Clark)]]).
- Modular inverses are found with the Pulverizer ([[Divisibility and GCD]]): inference supported only by the RSA section of MCS (8.11), where the private key is computed that way; no source read states it for modular inverses in general.
- **Python:** `pow(base, exp, mod)` computes base**exp modulo mod, "more efficiently than pow(base, exp) % mod". With a negative exp and mod present, base must be relatively prime to mod. Since Python 3.8 this allows modular inverses. Example from the docs: `pow(38, -1, mod=97)` returns 23, and `23 * 38 % 97 == 1` ([[Python pow built-in (modular exponentiation and inverse)]]).

## Key terms

> **Modulus**: the number m in "mod m".
> **Modular inverse**: a number x with a*x ≡ 1 (mod m); it exists for a relatively prime to m (the condition gcd(a, m) = 1 is the archivist's gloss; the Python docs say "relatively prime"); 23 is the inverse of 38 mod 97 (Python docs example).
> **Relatively prime**: gcd equal to 1.

## Example

`pow(38, -1, 97)` gives 23 (Python >= 3.8, from the docs).

## Contradictions and uncertainties

- Veerman gives only the definition; the equivalence-relation property of congruence is not stated in any source read ([[Equivalence Relation]], unverified).
- The `review-by` date follows the researcher's note on the Python docs (re-check if the API changes).
- Euler's and Fermat's theorems and the Chinese remainder theorem (CRT) are named only in tables of contents; statements not read (gap). Congruence itself rests on Veerman alone. Python `pow` claims (3.8+, `pow(38, -1, 97)` = 23) were confirmed verbatim. Confidence `debated`; `review-by` stays 2027-11-23.

## Related

- [[Divisibility and GCD]], [[RSA]], [[Equivalence Relation]]
- Cross-area (no note yet): cryptography in Security; number representation in Computer Architecture.

## Sources

- [[Introduction to Number Theory (Veerman)]] — congruence definition.
- [[MCS Ch8 Number Theory (Lehman Leighton Meyer)]], [[Elementary Number Theory (Barrus and Clark)]] — section scope.
- [[Python pow built-in (modular exponentiation and inverse)]] — `pow` behaviour and the 38/97 example.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: modular-inverse gcd condition marked as gloss; "inverses found with the Pulverizer" marked as inference (MCS 8.11 only); Euler/Fermat/CRT kept as gaps; Python pow claims confirmed; confidence established -> debated; review-by kept 2027-11-23.
- 2026-11-23: verified (light pass, single-source accepted per user decision); inference and unverified items remain labelled.
