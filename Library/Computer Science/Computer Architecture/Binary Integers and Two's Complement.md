---
title: Binary Integers and Two's Complement
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: uncertain
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Python Docs - Integer Bitwise Operations]]"]
tags: [finding, computer-architecture, number-systems]
---

# Binary Integers and Two's Complement

> **Summary:** Python integers follow two's-complement semantics for bitwise operations, as if they had infinitely many sign bits. This note rests only on the Python documentation, so it documents Python's behavior, not hardware two's complement in general.

## What it is

> **Two's complement**: a way of representing signed integers in binary in which negative numbers are handled by the same bitwise rules as non-negative ones. Own definition, unsourced: the Python docs describe Python's behavior, not a hardware definition of the encoding.

The Python reference says bitwise operations are computed as though in two's complement with an infinite number of sign bits (paraphrase of the Built-in Types section). A finite working width of `1 + max(x.bit_length(), y.bit_length())` bits gives the same result.

## How it works

- Operators: `|`, `^`, `&`, `<<`, `>>`, and unary `~`. Bitwise binary operators bind looser than arithmetic and tighter than comparisons.
- `x << n` equals `x * pow(2, n)`. `x >> n` equals floor division by `pow(2, n)`. A negative shift count raises `ValueError`.
- `int.bit_length()` gives the bits needed. `int.to_bytes(length, byteorder, signed=...)` produces bytes in big- or little-endian order. `signed=True` gives two's-complement bytes, and `OverflowError` is raised if the value does not fit.

## Key terms

> **Sign bit**: the most significant bit of a fixed-width signed value. Python ints are unbounded, so the docs model it as infinitely repeated.

> **Endianness**: byte order, `big` or `little`, chosen through the `byteorder` argument of `to_bytes`.

## Example

Own illustration (not from the source), using the documented operators:

```python
x = 5
print(x << 3 == x * 2**3)   # documented equivalence: True
print((-1).to_bytes(1, "big", signed=True))  # signed=True documented; shows one byte of all 1s
# Simulating an 8-bit register: Python ints are unbounded, so mask.
print((-1) & 0xFF)          # 255
```

The masking idiom is an inference recorded in the source note from the infinite-sign-bits statement; the docs excerpt read does not describe it as a recipe.

## Contradictions and uncertainties

- Single source (Python docs, level A). It is authoritative for Python, not for hardware. Hardware two's complement (how a negative value maps to bits, overflow behavior, fixed-width registers) is not covered by any source read. `confidence: uncertain` for the general concept.
- Only about the first 100k of 266k characters of the docs page were read.
- Own inference, unsourced: [[Modular Arithmetic]] is probably the right mathematical lens for fixed-width wraparound. No read source says this.
- Gap: binary/hex conversion procedures are not sourced.

## Related

- [[Floating-Point Representation]]
- [[Character Encoding and Unicode]]
- [[Instruction Set Architecture]] (sign-extended immediates)
- [[Modular Arithmetic]] (own inference, see above)

## Sources

- [[Python Docs - Integer Bitwise Operations]] — operators, infinite sign bits, shifts, `bit_length`, `to_bytes`.

## History

- 2026-11-23: created.
- 2026-11-23: light pass, single-source accepted per user decision (verifier; Python docs claims re-checked against stdtypes page).
- 2026-11-23: wording fix after light verification (Two's complement gloss labeled as own, unsourced definition; gap "no hardware-level source" kept).
