---
title: man7 - credentials(7)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux man-pages project
published: living page (no date)
url: https://man7.org/linux/man-pages/man7/credentials.7.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# man7 - credentials(7)

## Why it is reliable (or not)

Official Linux man-pages.

## Extracted points

- Process identity: PID, PPID, real/effective/saved set-UID and GID, filesystem IDs, supplementary groups.
- Effective IDs and filesystem IDs drive permission checks; set-user-ID programs use saved IDs to gain/drop privilege.
- fork copies IDs to the child; execve keeps real IDs, may change effective/saved.

## Relevant excerpts

> "The filesystem IDs normally have the same values as the corresponding effective ID" (Linux filesystem IDs)

## Used in

- Subtopic 8 (access control); Subtopic 2 (fork inheritance)

## Used in findings

- [[Access Control and Privilege]], [[Process and Process Control Block]], [[Process Creation - fork]]

## History

- 2026-11-23: registered and read.
