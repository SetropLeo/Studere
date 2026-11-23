---
title: man7 - namespaces(7)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux man-pages project
published: living page (no date)
url: https://man7.org/linux/man-pages/man7/namespaces.7.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# man7 - namespaces(7)

## Why it is reliable (or not)

Official Linux man-pages. Directly states the namespace-container relationship.

## Extracted points

- A namespace wraps a global resource so members see an isolated instance.
- Eight types: Cgroup, IPC, Network, Mount, PID, Time, User, UTS.
- Namespaces are a building block for containers; changes are visible only inside the namespace.

## Relevant excerpts

> "One use of namespaces is to implement containers." (DESCRIPTION)

## Used in

- Subtopic 7 (containers); Subtopic 8 (isolation)

## Used in findings

- [[Containers - Namespaces and cgroups]]

## History

- 2026-11-23: registered and read.
