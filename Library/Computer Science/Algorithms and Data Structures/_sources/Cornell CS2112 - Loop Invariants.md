---
title: Cornell CS2112 - Loop Invariants
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: not stated on page (Cornell CS 2112 course staff)
published: 2019 (Fall 2019 course page; no date on the page itself)
url: https://cs.cornell.edu/courses/cs2112/2019fa/lectures/loopinv
accessed: 2026-11-23
url-verified: true
tags: [source, algorithm-analysis, correctness, loop-invariants]
---

# Cornell CS2112 - Loop Invariants

## Why it is reliable (or not)

University lecture notes (Cornell). Level B: no named author or date on the page; the year comes from the URL. Covers correctness and termination of loops, using binary search. A web search also surfaced other course notes (UAlberta, Wellesley, York) with the same initialization/maintenance/termination structure, which were not opened.

## Extracted points

- A loop invariant is a property that holds at the start and end of every iteration.
- Proof steps: establishment (true after initialization), preservation (if invariant and guard hold before the body, the invariant holds after), postcondition (invariant plus false guard imply the intended result).
- Termination is shown with a loop variant (a quantity that strictly decreases and is bounded below). The first three steps give partial correctness; adding termination gives total correctness.
- Worked example: binary search invariant with three clauses (array sorted, 0 <= l <= r <= a.length-1, k in a[l..r]).

## Relevant excerpts

> "Show that the loop invariant is true just after loop initialization." (page, proof steps)

## Supports subtopics

1 (finiteness and correctness via loop invariants).

## Used in

- [[Loop Invariant and Algorithm Correctness]]

## History

- 2026-11-23: registered and read.
