---
title: Python Docs - Floating Point Arithmetic Tutorial
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: unknown (living documentation)
url: https://docs.python.org/3/tutorial/floatingpoint.html
accessed: 2026-11-23
url-verified: true
tags: [source, computer-architecture, number-systems, floating-point, python]
---

# Python Docs - Floating Point Arithmetic Tutorial

## Why it is reliable (or not)

Official Python tutorial chapter. Reliable for how IEEE 754 binary64 appears in Python; it is a practical explanation, not the IEEE 754 standard itself (the standard text was not accessed). Does not detail the sign/exponent/fraction bit layout in the part read.

## Extracted points

- Floats are base-2 fractions; `0.101` binary = 0.625.
- Python floats are almost always IEEE 754 binary64 (53 bits of precision), stored as J/2**N; 0.1 is stored as `3602879701896397 / 2 ** 55`.
- Most decimal fractions have no finite binary form, hence representation error; errors accumulate (`0.1 + 0.1 + 0.1 == 0.3` is False).
- Tools: `math.isclose`, `math.fsum`, `decimal`, `fractions.Fraction`.

## Relevant excerpts

> "Unfortunately, most decimal fractions cannot be represented exactly as binary fractions." (Floating-Point Arithmetic: Issues and Limitations)

## Used in

- Subtopic 1 (fixed vs floating point, IEEE 754).
- [[Floating-Point Representation]]

## History

- 2026-11-23: read and registered (researcher, stage 1).
