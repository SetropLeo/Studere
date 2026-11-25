---
title: Python pow built-in (modular exponentiation and inverse)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: Python 3 docs (3.8 introduced negative-exponent modular inverse)
url: https://docs.python.org/3/library/functions.html#pow
accessed: 2026-11-23
url-verified: true
tags: [source, python, modular-arithmetic]
---

# Python pow built-in (modular exponentiation and inverse)

## Why it is reliable (or not)

Official language documentation. Connects the theory to what the learner can run. Version note: modular inverse via pow requires Python >= 3.8. Docs track the current Python 3 release; re-check if the API changes (review-by 2027-11).

## Extracted points

- pow(base, exp, mod) computes base**exp modulo mod, more efficiently than pow(base, exp) % mod.
- With negative exp and mod present, base must be relatively prime to mod (gcd = 1); result is pow(inv_base, -exp, mod), where inv_base is the modular inverse.
- Example: pow(38, -1, mod=97) returns 23, and 23 * 38 % 97 == 1.

## Relevant excerpts

> "return _base_ to the power _exp_, modulo _mod_ (computed more efficiently than `pow(base, exp) % mod`)" (pow)

> "If _mod_ is present and _exp_ is negative, _base_ must be relatively prime to _mod_." (pow)

> "Changed in version 3.8: For `int` operands, the three-argument form of `pow` now allows the second argument to be negative, permitting computation of modular inverses." (pow)

## Used in

- [[Modular Arithmetic]]
- [[_MOC Mathematical Foundations]] (pending)

## History

- 2026-11-23: registered and read by researcher.
