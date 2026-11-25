---
title: Wisc CS 537 Notes - Deadlock
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: Barton P. Miller (University of Wisconsin-Madison), CS 537 lecture notes
published: undated (course notes site)
url: https://pages.cs.wisc.edu/~bart/537/lecturenotes/s12.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Wisc CS 537 Notes - Deadlock

## Why it is reliable (or not)

University course notes by a recognized professor. Divergence seen in search snippets (not read in full): some course notes call the four conditions "necessary and sufficient" while NYU notes say necessary but not sufficient. This page lists the conditions without stating this nuance in the extract; settle the wording with a second source.

## Extracted points

- Four conditions: no sharing (mutual exclusion), no preemption, incremental requests (hold and wait), circular wait.
- Strategies: detection (then terminate processes), prevention (negate one condition: request all at once, hierarchical ordering, preemption), Banker's algorithm (Dijkstra; processes declare maximum needs; avoidance-style).
- Practical stance: strong theory but largely ignored in practice.

## Relevant excerpts

> "Deadlock is one area where there is a strong theory, but it is almost completely ignored in practice." (page intro)

> "Since all are waiting, none can provide any of the things being waited for." (page text)

## Used in

- Subtopic 4

## Used in findings

- [[Deadlock]]

## History

- 2026-11-23: registered and read.
