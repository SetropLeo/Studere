---
title: Linux kernel docs - KVM API
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux kernel community (Documentation/virt/kvm)
published: living page (no date)
url: https://docs.kernel.org/virt/kvm/api.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Linux kernel docs - KVM API

## Why it is reliable (or not)

Official kernel documentation. Only first ~100k of ~370k characters read; API reference, not a conceptual intro to virtualization.

## Extracted points

- KVM is a Linux subsystem for VMs, driven by ioctls on file descriptors: /dev/kvm (system) -> VM fd -> vCPU/device fds; KVM_RUN runs a vCPU.
- Hardware-assisted virtualization is mentioned only in passing (e.g. APICv/AVIC on x86). Conceptual VM theory is a gap here.

## Relevant excerpts

> "A KVM_CREATE_VM ioctl on this handle will create a VM file descriptor which can be used to issue VM ioctls." (Introduction)

## Used in

- Subtopic 7 (virtual machines)

## Used in findings

- [[Virtualization with KVM]]

## History

- 2026-11-23: registered and read (partially).
