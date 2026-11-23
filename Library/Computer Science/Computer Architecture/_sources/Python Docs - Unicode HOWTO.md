---
title: Python Docs - Unicode HOWTO
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation (A. M. Kuchling per the HOWTO series; author line not verified on fetched text)
published: unknown (living documentation)
url: https://docs.python.org/3/howto/unicode.html
accessed: 2026-11-23
url-verified: true
tags: [source, computer-architecture, character-encoding, python]
---

# Python Docs - Unicode HOWTO

## Why it is reliable (or not)

Official Python documentation. Reliable for Unicode/UTF-8 concepts as used in Python; it is not the Unicode Standard itself. Author attribution was not confirmed from the fetched text.

## Extracted points

- Unicode: each character has a code point (integer 0 to 0x10FFFF, e.g. U+265E); an encoding maps code points to bytes.
- UTF-8: code points below 128 are one byte identical to ASCII; others take 2 to 4 bytes; byte-oriented, no byte-order issues; ASCII-compatible.
- Python 3: `str` (text) vs `bytes` (encoded data); `encode()`/`decode()`; `chr()`/`ord()`.
- Good practice: decode early, encode late.

## Relevant excerpts

> "UTF-8 is a byte oriented encoding." (Unicode HOWTO)

## Used in

- Subtopic 1 (character encoding).
- [[Character Encoding and Unicode]]

## History

- 2026-11-23: read and registered (researcher, stage 1).
