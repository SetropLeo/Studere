---
title: Files and Inodes
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[man7 - inode(7)]]", "[[Wisc CS 537 Notes - Files, Allocation and Crash Recovery]]"]
tags: [finding, operating-systems]
---

# Files and Inodes

> **Summary:** A file is a named collection of bits on disk; in Unix a per-file descriptor, the inode, holds its metadata and (in the classic design) the block pointers.

## What it is

- Wisc s23: a file is a named collection of bits stored on disk. Access is sequential or random; most files are small but most space is in large files.
- Wisc s24: in Unix the descriptor is called an i-node and its index in a fixed array is the i-number.
- man7 inode(7): each file has an inode with metadata: device, inode number (unique per filesystem), file type and mode, hard link count, owner UID/GID, size, block size and allocated blocks, timestamps (atime, mtime, ctime). It describes the metadata seen via `stat(2)`, not the on-disk layout. Both sources agree that the inode is the per-file descriptor.

## How it works

- Allocation schemes (Wisc): contiguous, linked, block-pointer arrays/indexed, FAT, each with tradeoffs.
- Classic Unix inode (Wisc): 10 direct pointers plus single, double and triple indirect pointers. This is the classic design; the Wisc source note mentions 13 pointers in total and that modern extents differ. Whether any given modern filesystem still uses this layout is not covered here.

## Contradictions and uncertainties

- man7 does not mention block pointers, and Wisc does not list stat fields; the two describe complementary views. Pointer layout comes from Wisc only.
- Own inference: the indirect-pointer scheme is a tree-like index (cf. [[Binary Search Tree]] only loosely; not sourced).

## Related

- [[File System Journaling and Crash Recovery]], [[Access Control and Privilege]], [[Paging and Virtual Memory]]

## Sources

- [[man7 - inode(7)]], [[Wisc CS 537 Notes - Files, Allocation and Crash Recovery]]

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
