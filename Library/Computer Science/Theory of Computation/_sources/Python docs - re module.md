---
title: Python docs - re module (regular expression operations)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: Python 3.15.2 documentation (version shown on the page when accessed)
url: https://docs.python.org/3/library/re.html
accessed: 2026-11-23
url-verified: true
tags: [source, python, regular-expressions, theory-of-computation]
review-by: 2027-05-23
---

# Python docs - re module

## Why it is reliable (or not)

Official Python documentation, level A for what Python's `re` does. It is not a source for formal language theory. Fast-changing: page describes 3.15 (e.g. `re.prefixmatch()` added in 3.15, `match()` soft-deprecated); older Pythons differ.

## Extracted points

- Subtopic 2 (practice): `re.fullmatch(pattern, string)` returns a Match only if the whole string matches, the right call to test membership of a string in the language of a pattern; `re.search` matches anywhere; `match`/`prefixmatch` only at the start.
- Backreferences (`\number`) exist: `(.+) \1` matches "the the" but not "thethe". A pattern with a backreference matches text depending on an earlier match, so Python `re` goes beyond formal regular expressions. This inference (that backreferences exceed regular languages) is from the fetch tool, not a sentence on the page; the formal claim should be backed by a theory source in stage 2.

## Relevant excerpts

> "This module provides regular expression matching operations similar to those found in Perl." (intro)

> "If the whole string matches the regular expression pattern, return a corresponding Match." (re.fullmatch)

## Used in

- [[Regular Expressions and Regular Languages]]

## History

- 2026-11-23: registered and read (researcher).
