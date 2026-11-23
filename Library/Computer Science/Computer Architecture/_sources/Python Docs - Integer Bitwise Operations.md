---
title: Python Docs - Integer Bitwise Operations
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: unknown (living documentation; page read as served on access date)
url: https://docs.python.org/3/library/stdtypes.html
accessed: 2026-11-23
url-verified: true
tags: [source, computer-architecture, number-systems, python]
---

# Python Docs - Integer Bitwise Operations

## Why it is reliable (or not)

Official CPython reference (Built-in Types). Authoritative for Python semantics, not for hardware two's complement in general. Only the first ~100k of 266k characters of the page were read (covers the "Bitwise Operations on Integer Types" section, `int.bit_length`, `int.to_bytes`).

## Extracted points

- Operators: `|`, `^`, `&`, `<<`, `>>`, unary `~`. Bitwise binary operators bind looser than arithmetic, tighter than comparisons.
- Python ints behave as two's complement with infinitely many sign bits; a finite working width of `1 + max(x.bit_length(), y.bit_length())` gives the same result.
- `x << n` equals `x * pow(2, n)`; `x >> n` equals floor division by `pow(2, n)`; negative shift counts raise `ValueError`.
- `int.bit_length()`, `int.to_bytes(length, byteorder, signed=)` (big/little endian, `signed=True` for two's complement bytes, `OverflowError` if it does not fit).
- Practical use: simulate fixed-width registers in Python by masking (`x & 0xFF`), since Python ints are unbounded (inference from the infinite sign bits statement).

## Relevant excerpts

> "The result of bitwise operations is calculated as though carried out in two's complement with an infinite number of sign bits." (Bitwise Operations on Integer Types)

## Used in

- Subtopic 1 (number systems, two's complement); Python practice for gate/CPU simulation.
- [[Binary Integers and Two's Complement]]

## History

- 2026-11-23: read and registered (researcher, stage 1).
