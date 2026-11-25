---
title: Linux kernel docs - DMA API HOWTO
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux kernel community (Documentation/core-api)
published: living page (no date)
url: https://docs.kernel.org/core-api/dma-api-howto.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Linux kernel docs - DMA API HOWTO

## Why it is reliable (or not)

Official kernel documentation for driver authors. Advanced; use for concepts only, not for beginner exposition.

## Extracted points

- Devices use bus addresses, which can differ from physical addresses (IOMMU/bridge remapping).
- Coherent (long-lived) vs streaming (single transfer, needs dma_sync) mappings; mapping direction; DMA masks.

## Relevant excerpts

> "I/O devices use a third kind of address: a 'bus address'." (Part I)

## Used in

- Subtopic 7 (I/O: DMA, drivers)

## Used in findings

- [[Interrupts, DMA and Device IO]]

## History

- 2026-11-23: registered and read.
