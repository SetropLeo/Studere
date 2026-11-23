---
title: Wisc CS 537 Notes - Files, Allocation and Crash Recovery
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: Barton P. Miller (University of Wisconsin-Madison), CS 537 lecture notes
published: undated (course notes site)
url: https://pages.cs.wisc.edu/~bart/537/lecturenotes/s23.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Wisc CS 537 Notes - Files, Allocation and Crash Recovery

Pages opened: s23 (Files, Disk Management), s24 (Unix and DEMOS Disk Allocation: https://pages.cs.wisc.edu/~bart/537/lecturenotes/s24.html), s27 (File System Crash Recovery: https://pages.cs.wisc.edu/~bart/537/lecturenotes/s27.html). s25 (Directories) not opened. Does not cover I/O devices/drivers (s23 summary).

## Why it is reliable (or not)

University course notes by a recognized professor; undated; classic Unix inode (13 pointers) rather than modern extents.

## Extracted points

- File = named collection of bits on disk; access patterns sequential/random; most files small but most space in large files.
- Allocation: contiguous, linked, block-pointer arrays/indexed, FAT, each with tradeoffs.
- Unix inode: descriptor in a fixed array indexed by i-number; 10 direct + single/double/triple indirect pointers.
- Crash recovery: fsck rescans; NTFS-style logging records updates before applying them and replays after crash; checkpoints; atomicity.

## Relevant excerpts

> "File: a named collection of bits stored on disk." (s23)

> "In Unix, the descriptor is called an i-node, and its index in the array is called its i-number." (s24)

## Used in

- Subtopic 6

## Used in findings

- [[Files and Inodes]], [[File System Journaling and Crash Recovery]]

## History

- 2026-11-23: registered and read.
