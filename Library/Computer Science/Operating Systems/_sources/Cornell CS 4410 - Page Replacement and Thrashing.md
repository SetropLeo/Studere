---
title: Cornell CS 4410 - Page Replacement and Thrashing
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: Cornell University CS 4410 (instructor not named on page), Summer 2017
published: 2017
url: https://www.cs.cornell.edu/courses/cs4410/2017su/lectures/lec14-replacement.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Cornell CS 4410 - Page Replacement and Thrashing

## Why it is reliable (or not)

Ivy League university lecture notes; author not named; 2017.

## Extracted points

- Random, FIFO (circular buffer), OPT/Belady's (optimal, needs the future), LRU/MRU/LFU, second chance/clock (use bit).
- Belady's anomaly: more frames can increase FIFO faults.
- Thrashing and working set (pages accessed in past n time units).

## Relevant excerpts

> "Thrashing occurs when processes are actively using more memory than is physically present." (Thrashing)

> "it is possible that adding more frames can actually make performance worse!" (FIFO)

## Used in

- Subtopic 5 (page replacement; Python simulation)

## Used in findings

- [[Page Replacement and Thrashing]]

## History

- 2026-11-23: registered and read.
