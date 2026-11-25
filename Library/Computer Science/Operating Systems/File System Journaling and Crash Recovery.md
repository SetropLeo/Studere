---
title: File System Journaling and Crash Recovery
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Linux kernel docs - ext4 Journal (jbd2)]]", "[[Wisc CS 537 Notes - Files, Allocation and Crash Recovery]]"]
tags: [finding, operating-systems]
---

# File System Journaling and Crash Recovery

> **Summary:** After a crash, a file system must be made consistent again, either by scanning (fsck) or by replaying a log (journal) of updates recorded before they were applied.

## What it is

- Wisc s27: `fsck` rescans the file system. NTFS-style logging records updates before applying them and replays after a crash; also checkpoints and atomicity.
- ext4 docs: the ext4 file system uses a journal to protect against metadata inconsistencies; important writes land in a reserved area first and can be replayed.

Two sources agree on the log-then-apply idea.

## How it works

- Writes are grouped into transactions; a finished transaction always ends with a commit, otherwise replay discards it (ext4 docs, verbatim for the commit sentence).
- Modes: `data=ordered` (default; only metadata is journaled), `data=journal` (all data and metadata go through the journal; slowest and safest per source note), `data=writeback` (details not recorded).

## Contradictions and uncertainties

- Wisc describes NTFS-style logging, not ext4; they are compared here at concept level only. On-disk journal format is not covered here. The Wisc inode is classic Unix, not necessarily ext4's.

## Related

- [[Files and Inodes]], [[Memory Hierarchy and Caches]] (own inference only)

## Sources

- [[Linux kernel docs - ext4 Journal (jbd2)]], [[Wisc CS 537 Notes - Files, Allocation and Crash Recovery]]

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
