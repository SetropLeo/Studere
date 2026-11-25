---
title: man7 - tcp(7)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Linux man-pages project
published: undated (current man-pages release at access)
url: https://man7.org/linux/man-pages/man7/tcp.7.html
accessed: 2026-11-23
url-verified: true
tags: [source, networking, tcp, linux]
---

# man7 - tcp(7)

## Why it is reliable (or not)

Linux man-pages project, maintained with kernel developers. Level A for Linux behaviour; Linux-specific, not general TCP theory.

## Extracted points

- (6) TCP gives reliable, stream-oriented, full-duplex connection between two sockets; in-order delivery and retransmission; per-packet checksum; no record boundaries; point-to-point only; congestion control algorithm configurable (default and per-socket TCP_CONGESTION); ECN supported; unacked retransmissions end in ETIMEDOUT.

## Relevant excerpts

> "TCP guarantees that the data arrives in order and retransmits lost packets."
> "a reliable, stream-oriented, full-duplex connection between two sockets" (as quoted by the fetch step)

## Used in

- [[UDP vs TCP]], [[TCP Flow and Congestion Control]], [[Sockets and Socket Programming in Python]]

## History

- 2026-11-23: read and recorded.
