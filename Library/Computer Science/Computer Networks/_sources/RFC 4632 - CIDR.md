---
title: RFC 4632 - Classless Inter-domain Routing (CIDR)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: standard
author: V. Fuller, T. Li (IETF, BCP 122)
published: 2006-08
url: https://www.rfc-editor.org/rfc/rfc4632.html
accessed: 2026-11-23
url-verified: true
tags: [source, networking, standard, ip]
---

# RFC 4632 - CIDR: The Internet Address Assignment and Aggregation Plan

## Why it is reliable (or not)

IETF Best Current Practice, obsoletes RFC 1519. Level A. IPv4-focused. Authors/date confirmed via search result metadata (rfc-editor).

## Extracted points

- (5) Classless variable-length prefixes replace Class A/B/C; goals: conserve address space, limit routing table growth.
- Prefix notation address/length 0 to 32; examples 172.16.0.0/16, 192.168.99.0/24.
- Aggregation along provider lines; multihoming weakens it.
- Forwarding is longest-match; aggregate routes need a discard route to avoid loops.
- Security: more-specific bogus announcements can hijack traffic.

## Relevant excerpts

> "Forwarding in the Internet is done on a longest-match basis." (Sec. 5.1)
> "the service provider advertises a single aggregate route for the larger block." (Sec. 4)

## Used in

- [[IP Addressing, Subnetting and CIDR]], [[Routing - Distance Vector, Link State and BGP]]

## History

- 2026-11-23: read and recorded.
