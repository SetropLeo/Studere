---
title: Python Docs - Time Complexity of Built-in Types
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: page footer "last updated Nov 23, 2026" (Python 3.15 documentation branch; page reports 3.15.2)
url: https://docs.python.org/3/builtins/time-complexity.html
accessed: 2026-11-23
url-verified: true
tags: [source, python, time-complexity, list, dict, set, amortized]
review-by: 2027-11-23
---

# Python Docs - Time Complexity of Built-in Types

## Why it is reliable (or not)

Official Python documentation (the old wiki.python.org TimeComplexity page now redirects here; I opened the wiki redirect notice and this page). Level A. It is for CPython and changes by version; the version read is 3.15.

## Extracted points

- list: append, get/set item, len are O(1) (append amortized); insert/pop/delete at index k are O(n - k); `x in l`, min, max are O(n); sort is O(n log n); concatenation O(len(l1)+len(l2)).
- set: membership, add, discard O(1) on average; union O(len(s1)+len(s2)); intersection O(min(len(s1), len(s2))).
- dict: get/set/delete/`in` O(1) on average; copy and iteration O(n); worst case O(n) if every key hashes to the same value.
- Sort is adaptive: already sorted or reverse-sorted input takes only O(n) comparisons.
- The page has no deque table, only the recommendation to use `collections.deque` for adds/removes at both ends.

## Relevant excerpts

> "Amortized. An individual operation may occasionally be O(n) when the underlying storage is resized, but this cost is spread over many operations, depending on the history of the container." (note 1)

> "In the worst case, when every key hashes to the same value, each of the O(1) operations below instead takes O(n) time." (dict/set note)

## Supports subtopics

2 (amortized in practice); 3 (list, hash table via dict/set); 5 (sort cost and adaptivity).

## Used in

- [[Dynamic Array and Linked List]]
- [[Hash Table]]
- [[Amortized Analysis]]
- [[Sorting Algorithms]]
- [[Stack and Queue]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: completed the amortized excerpt with its full ending, ", depending on the history of the container."
