---
title: RFC 1122 - Requirements for Internet Hosts - Communication Layers
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: standard
author: IETF (R. Braden, ed.; confirmed on the rfc-editor page)
published: 1989-10 (October 1989; confirmed on the rfc-editor page)
url: https://www.rfc-editor.org/rfc/rfc1122.html
accessed: 2026-11-23
url-verified: true
tags: [source, networking, standard]
---

# RFC 1122 - Requirements for Internet Hosts, Communication Layers

Only Section 1.1.3 (Internet Protocol Suite) was read (first 100000 of ~300000 characters).

## Why it is reliable (or not)

IETF Internet Standard (STD 3), the normative definition of the 4-layer TCP/IP model. Level A. Old (1989) but still the canonical reference; some details superseded by later RFCs.

## Extracted points

- (1) TCP/IP suite has four layers: Application, Transport, Internet, Link.
- Transport: TCP (reliable, connection-oriented), UDP (connectionless). Internet layer: IP connectionless, no end-to-end guarantee; ICMP and IGMP belong here. Link: protocol for the directly connected network. DNS is a support protocol in the application layer.

## Relevant excerpts

> "The application layer is the top layer of the Internet protocol suite." (1.1.3)
> "All Internet transport protocols use the Internet Protocol (IP) to carry data from source host to destination host." (1.1.3)

## Used in

- [[Network Layering - OSI and TCP-IP]], [[UDP vs TCP]], [[DNS]]

## History

- 2026-11-23: read section 1.1.3 and recorded. Author/date fields come from RFC metadata, not from the excerpt read.
- 2026-11-23: wording fix after light verification (author R. Braden and Oct 1989 confirmed by the verifier on the rfc-editor page; caveat removed).
