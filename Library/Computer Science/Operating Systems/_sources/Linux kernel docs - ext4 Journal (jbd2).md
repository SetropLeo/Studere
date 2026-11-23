---
title: Linux kernel docs - ext4 Journal (jbd2)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux kernel community (ext4 Data Structures and Algorithms)
published: living page (no date)
url: https://docs.kernel.org/filesystems/ext4/journal.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Linux kernel docs - ext4 Journal (jbd2)

## Why it is reliable (or not)

Official kernel documentation of a real file system. Detailed on-disk format; the index page (https://docs.kernel.org/filesystems/ext4/index.html, also opened) only lists chapters (Block Groups, Journal, Index Nodes) with no explanation.

## Extracted points

- Journal protects metadata consistency after a crash; important writes land in a reserved area first and can be replayed.
- Writes grouped into transactions; a transaction ends with a commit, otherwise replay discards it.
- Modes: data=ordered (default, metadata only journaled), data=journal (all data and metadata, slowest/safest), data=writeback.

## Relevant excerpts

> "the ext4 filesystem employs a journal to protect the filesystem against metadata inconsistencies" (Journal intro)

> "A finished transaction always ends with a commit." (transactions)

> "all data and metadata are written to disk through the journal" (data=journal)

## Used in

- Subtopic 6 (File systems: journaling)

## Used in findings

- [[File System Journaling and Crash Recovery]]

## History

- 2026-11-23: registered and read.
