---
title: Linux kernel docs - Control Group v2
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux kernel community (Documentation/admin-guide)
published: living page (no date)
url: https://docs.kernel.org/admin-guide/cgroup-v2.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Linux kernel docs - Control Group v2

## Why it is reliable (or not)

Official kernel documentation. Only first ~100k of ~143k characters read. Does not mention containers explicitly; linking cgroups to containers relies on man7 namespaces(7) and general knowledge.

## Extracted points

- cgroups organize processes hierarchically; each process is in exactly one cgroup; controllers enforce resource limits.
- cpu controller (cpu.weight, cpu.max), memory controller (memory.max, memory.high, memory.low/min), io controller (io.max, io.weight).

## Relevant excerpts

> "cgroup is a mechanism to organize processes hierarchically" (Introduction)

## Used in

- Subtopic 7 (containers: resource limits); Subtopic 8 (isolation)

## Used in findings

- [[Containers - Namespaces and cgroups]]

## History

- 2026-11-23: registered and read (partially).
