---
title: Interrupts, DMA and Device IO
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Linux kernel docs - Generic IRQ handling]]", "[[Linux kernel docs - DMA API HOWTO]]", "[[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]]"]
tags: [finding, operating-systems]
---

# Interrupts, DMA and Device IO

> **Summary:** Devices signal the CPU with interrupts and move data with DMA. The sources read are kernel-developer (driver author) level, not beginner level.

## What it is

- Wisc (enterexit): entering the kernel happens through a processor interrupt; hardware vectors to a handler and saves PC/status on a kernel stack ([[Kernel and User Mode]]).
- Linux generic IRQ layer: designed to give a complete abstraction of interrupt handling for device drivers (request/enable/disable/free). Each IRQ has a descriptor, a flow handler (level, edge, fasteoi, ...) and chip primitives (ack, mask, unmask, EOI). The primary handler runs in hard interrupt context and may return `IRQ_WAKE_THREAD` to defer work to a threaded handler.
- DMA API: I/O devices use bus addresses, which may differ from physical addresses (IOMMU or bridge remapping). Mappings are coherent (long-lived) or streaming (single transfer, needs `dma_sync`), with direction and DMA masks.

## Contradictions and uncertainties

- Linux-specific and driver-level. GAPS: beginner-level device drivers, polling vs interrupts, block vs character devices. Wisc s23 does not cover I/O devices. Not described: these.

## Related

- [[Exceptions and Interrupts]] (architecture view), [[Kernel and User Mode]], [[System Calls]], [[Paging and Virtual Memory]]

## Sources

- [[Linux kernel docs - Generic IRQ handling]], [[Linux kernel docs - DMA API HOWTO]], [[Wisc CS 537 Notes - Processes, Dispatching, Kernel Entry]]

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
