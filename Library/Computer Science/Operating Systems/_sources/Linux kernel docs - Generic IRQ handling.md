---
title: Linux kernel docs - Generic IRQ handling
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux kernel community (Documentation/core-api/genericirq)
published: living page (no date)
url: https://docs.kernel.org/core-api/genericirq.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Linux kernel docs - Generic IRQ handling

## Why it is reliable (or not)

Official kernel documentation; driver-author level.

## Extracted points

- Generic layer abstracts interrupt handling for drivers (request/enable/disable/free).
- Each IRQ has a descriptor, flow handler (level, edge, fasteoi, ...) and chip primitives (ack, mask, unmask, EOI).
- Primary handler runs in hard interrupt context; may return IRQ_WAKE_THREAD to defer work to a threaded handler.

## Relevant excerpts

> "The generic interrupt handling layer is designed to provide a complete abstraction of interrupt handling for device drivers." (Introduction)

## Used in

- Subtopic 7 (interrupts, drivers)

## Used in findings

- [[Interrupts, DMA and Device IO]]

## History

- 2026-11-23: registered and read.
