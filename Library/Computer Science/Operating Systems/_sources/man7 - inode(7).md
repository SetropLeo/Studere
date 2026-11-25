---
title: man7 - inode(7)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux man-pages project
published: living page (no date)
url: https://man7.org/linux/man-pages/man7/inode.7.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# man7 - inode(7)

## Why it is reliable (or not)

Official Linux man-pages. Describes inode metadata as seen via stat(2), not on-disk block layout.

## Extracted points

- Inode holds metadata: device, inode number (unique per filesystem), file type and mode, hard link count, owner UID/GID, size, block size and allocated blocks, timestamps (atime, mtime, ctime).

## Relevant excerpts

> "Each file has an inode containing metadata about the file." (DESCRIPTION)

## Used in

- Subtopic 6 (File systems: inodes)

## Used in findings

- [[Files and Inodes]]

## History

- 2026-11-23: registered and read.
