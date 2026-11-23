---
title: Floating-Point Representation
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Python Docs - Floating Point Arithmetic Tutorial]]"]
tags: [finding, computer-architecture, number-systems, floating-point]
---

# Floating-Point Representation

> **Summary:** Python floats are almost always IEEE 754 binary64 values, stored as binary fractions. Most decimal fractions, including 0.1, cannot be stored exactly, so rounding error appears and accumulates.

## What it is

> **Floating point**: representing real numbers approximately as binary fractions with limited precision.

> **IEEE 754 binary64**: a floating-point format with 53 bits of precision, used by almost all Python floats according to the tutorial. "64-bit" is the meaning of the name (binary64), not a claim sourced from the tutorial, which says only "53 bits of precision". The standard text itself was not read.

## How it works

- Floats are base-2 fractions: binary `0.101` equals 0.625.
- A float is stored as J / 2**N. The tutorial says 0.1 is stored as `3602879701896397 / 2 ** 55`.
- Most decimal fractions have no finite binary form, which causes representation error. Errors accumulate: `0.1 + 0.1 + 0.1 == 0.3` is `False`.
- Tools named by the tutorial: `math.isclose`, `math.fsum`, `decimal`, `fractions.Fraction`.

## Key terms

> **Representation error**: the difference between a decimal value and the nearest stored binary fraction.

## Example

```python
print(0.1 + 0.1 + 0.1 == 0.3)   # False (stated in the tutorial)
import math
print(math.isclose(0.1 + 0.1 + 0.1, 0.3))  # tool named in the tutorial; result True is own illustration
```

## Contradictions and uncertainties

- Single source (Python tutorial, level A). It is not the IEEE 754 standard. `confidence: debated` for lack of a second source.
- Gap: the sign/exponent/fraction bit layout, special values (NaN, infinity), and rounding modes were not covered by the part read.
- The tutorial says "almost always" binary64, so other platforms are not excluded.

## Related

- [[Binary Integers and Two's Complement]]
- [[Character Encoding and Unicode]]

## Sources

- [[Python Docs - Floating Point Arithmetic Tutorial]] — binary fractions, 0.1 storage, accumulation, tools.

## History

- 2026-11-23: created.
- 2026-11-23: light pass, single-source accepted per user decision (verifier; 0.1 = 3602879701896397 / 2**55 and 53-bit precision re-checked on the tutorial).
- 2026-11-23: wording fix after light verification ("64-bit" labeled as the meaning of the name, not a sourced claim).
