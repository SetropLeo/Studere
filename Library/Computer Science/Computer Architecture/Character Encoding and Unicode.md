---
title: Character Encoding and Unicode
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Python Docs - Unicode HOWTO]]"]
tags: [finding, computer-architecture, character-encoding]
---

# Character Encoding and Unicode

> **Summary:** Unicode assigns each character a code point; an encoding such as UTF-8 maps code points to bytes. Python 3 separates text (`str`) from encoded data (`bytes`).

## What it is

> **Code point**: an integer from 0 to 0x10FFFF identifying a character, for example U+265E.

> **Encoding**: a mapping from code points to bytes.

## How it works

- UTF-8: code points below 128 are one byte identical to ASCII. Other code points take 2 to 4 bytes. It is byte-oriented, has no byte-order issues, and is ASCII-compatible.
- Python 3: `str` is text, `bytes` is encoded data. `encode()` and `decode()` convert; `chr()` and `ord()` map between code points and characters.
- Practice recommended by the HOWTO: decode early, encode late.

## Key terms

> **UTF-8**: the HOWTO calls it a byte-oriented encoding.

## Example

```python
print(ord("A"))            # code point 65; ord/chr documented
print("A".encode("utf-8")) # one byte, same as ASCII (documented property)
```

Output values are own illustration.

## Contradictions and uncertainties

- Single source (Python HOWTO, level A). It is not the Unicode Standard. Author line unverified. `confidence: debated`.
- Gap: UTF-16/UTF-32, normalization, and the Unicode Standard itself are not covered.

## Related

- [[Binary Integers and Two's Complement]]
- [[Floating-Point Representation]]

## Sources

- [[Python Docs - Unicode HOWTO]] — code points, UTF-8, `str`/`bytes`.

## History

- 2026-11-23: created.
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
