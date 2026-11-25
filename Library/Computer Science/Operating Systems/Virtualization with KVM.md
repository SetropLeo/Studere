---
title: Virtualization with KVM
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: uncertain
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Linux kernel docs - KVM API]]"]
tags: [finding, operating-systems]
---

# Virtualization with KVM

> **Summary:** KVM is a Linux subsystem for virtual machines, driven through `ioctl` calls on file descriptors. API-level only; no virtualization theory was read.

## What it is and how it works

KVM API doc (partially read, ~100k of ~370k characters): a handle on `/dev/kvm` (system) leads, via `KVM_CREATE_VM`, to a VM file descriptor that takes VM ioctls; vCPU and device fds follow, and `KVM_RUN` runs a vCPU. Hardware-assisted virtualization is mentioned only in passing (APICv/AVIC on x86).

## Contradictions and uncertainties

- GAPS: hypervisor theory (trap-and-emulate), VM vs container comparison. Not covered by any read source; do not infer.
- Single partial source, hence `uncertain`.

## Related

- [[Containers - Namespaces and cgroups]], [[System Calls]], [[Paging and Virtual Memory]]

## Sources

- [[Linux kernel docs - KVM API]]

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
