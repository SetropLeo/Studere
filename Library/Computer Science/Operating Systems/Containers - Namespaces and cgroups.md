---
title: Containers - Namespaces and cgroups
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[man7 - namespaces(7)]]", "[[Linux kernel docs - Control Group v2]]"]
tags: [finding, operating-systems]
---

# Containers - Namespaces and cgroups

> **Summary:** Linux namespaces isolate what a process can see; cgroups limit what it can use. Together they are building blocks for containers. Kept as one note because the container link depends on both.

## What it is

- **Namespaces** (man7): a namespace wraps a global resource so its members see an isolated instance; changes are visible only inside it. Eight types: Cgroup, IPC, Network, Mount, PID, Time, User, UTS. The page says one use of namespaces is to implement containers.
- **cgroups v2** (kernel docs): a mechanism to organize processes hierarchically; each process is in exactly one cgroup; controllers enforce limits: cpu (`cpu.weight`, `cpu.max`), memory (`memory.max`, `memory.high`, `memory.low`/`min`), io (`io.max`, `io.weight`).

## Contradictions and uncertainties

- The cgroup doc (read ~100k of ~143k characters) does not mention containers explicitly; saying cgroups are part of containers rests on the namespaces page and general knowledge (unsourced). Container runtimes and the VM vs container comparison are gaps.

## Related

- [[Virtualization with KVM]], [[Access Control and Privilege]], [[Linux Scheduling Policies]], Security (planned area)

## Sources

- [[man7 - namespaces(7)]], [[Linux kernel docs - Control Group v2]]

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
