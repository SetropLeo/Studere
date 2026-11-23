---
title: OS Kernel Architectures
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[NYU Gottlieb - OS Lecture 4 (structure)]]", "[[Wisc CS 537 Notes - Protection and Security]]"]
tags: [finding, operating-systems]
---

# OS Kernel Architectures

> **Summary:** Operating systems can be structured as one large program (monolithic), as layers, or as a minimal kernel with services in user processes (microkernel). Single dated source.

## What it is

Per NYU Gottlieb (2008-09 notes):
- **Monolithic**: the OS is one large program.
- **Layered**: THE system is layered by convention; Multics enforces layers in hardware.
- **Microkernel**: the kernel (portion in supervisor mode) is kept as small as possible and services run as processes. Benefit: fault isolation. Cost: extra process switches. Policy goes to user mode, mechanism stays in the kernel.

## How it works

The microkernel idea echoes the policy/mechanism split also seen in [[Context Switch and Dispatching]] (scheduler = policy, dispatcher = mechanism, Wisc). Wisc's protection notes recommend small, protected enforcement code (a security kernel) and minimum privilege per layer, at a performance cost: related, though not stated as a microkernel argument.

## Key terms

> **Microkernel**: a minimal supervisor-mode kernel with services as user-level processes (NYU Gottlieb).

## Example

None recorded. Examples of real systems' structure (e.g. Linux) are not stated in these sources (gap).

## Contradictions and uncertainties

- Single source (NYU, dated); the notes' remarks on microkernel popularity are time-bound and not reproduced here. Confidence `debated`.
- Gap: no source read on hybrid kernels or modern comparisons.

## Related

- [[Kernel and User Mode]], [[Access Control and Privilege]], [[Context Switch and Dispatching]]

## Sources

- [[NYU Gottlieb - OS Lecture 4 (structure)]] - the three structures
- [[Wisc CS 537 Notes - Protection and Security]] - small security kernel, layered privilege

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
