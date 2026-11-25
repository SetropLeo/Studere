---
title: Python Docs - collections.deque
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: undated (current docs.python.org/3)
url: https://docs.python.org/3/library/collections.html#collections.deque
accessed: 2026-11-23
url-verified: true
tags: [source, python, deque, queue, list]
review-by: 2027-11-23
---

# Python Docs - collections.deque

## Why it is reliable (or not)

Official Python documentation. Level A. CPython-specific.

## Extracted points

- deque: O(1) appends and pops at either end; list: O(n) memory movement for `pop(0)` and `insert(0, v)`.
- deque indexed access is O(1) at both ends but O(n) in the middle.

## Relevant excerpts

> "Deques support thread-safe, memory efficient appends and pops from either side of the deque with approximately the same O(1) performance in either direction." (collections.deque)

> "Indexed access is O(1) at both ends but slows to O(n) in the middle. For fast random access, use lists instead." (collections.deque)

## Supports subtopics

3 (queues and deques in Python; list vs deque trade-off).

## Used in

- [[Stack and Queue]]

## History

- 2026-11-23: registered and read.
