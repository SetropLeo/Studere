---
title: Python docs - ipaddress module
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: Python 3 docs (version current at access; page undated)
url: https://docs.python.org/3/library/ipaddress.html
accessed: 2026-11-23
url-verified: true
tags: [source, networking, python]
---

# Python docs - ipaddress

## Why it is reliable (or not)

Official documentation of the standard library. Level A. Fast-changing only marginally; review-by 2027-11.

## Extracted points

- (5) `ip_address`, `ip_network(strict=True)`, `ip_interface`; `strict` raises ValueError if host bits set; `subnets(prefixlen_diff, new_prefix)`, `supernet()`, `hosts()` (excludes network/broadcast except /31, /32).

## Relevant excerpts

> "If strict is True and host bits are set in the supplied address, then ValueError is raised. Otherwise, the host bits are masked out to determine the appropriate network address."
> "Returns an iterator over the usable hosts in the network."
> "One and only one of prefixlen_diff and new_prefix must be set."

## Used in

- [[IP Addressing, Subnetting and CIDR]], [[IPv6]]

## History

- 2026-11-23: read and recorded.
