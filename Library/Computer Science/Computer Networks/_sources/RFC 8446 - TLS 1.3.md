---
title: RFC 8446 - The Transport Layer Security (TLS) Protocol Version 1.3
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: standard
author: IETF (E. Rescorla; confirmed on the rfc-editor page)
published: 2018-08 (August 2018; confirmed on the rfc-editor page)
url: https://www.rfc-editor.org/rfc/rfc8446.html
accessed: 2026-11-23
url-verified: true
tags: [source, networking, standard, security, tls]
---

# RFC 8446 - TLS 1.3

Read abstract and Section 1 only (the fetch covered the first 100000 of ~373000 characters; answer limited to Sec. 1).

## Why it is reliable (or not)

IETF Standards Track RFC, current TLS specification. Level A. Very long; only goals were used here.

## Extracted points

- (7, 8) TLS provides a secure channel: server always authenticated, client optionally; confidentiality; integrity; designed to prevent eavesdropping, tampering, message forgery (this last phrase is from the Abstract, not Sec. 1).

## Relevant excerpts

> "The primary goal of TLS is to provide a secure channel between two communicating peers." (Sec. 1)
> "The server side of the channel is always authenticated; the client side is optionally authenticated." (Sec. 1)
> "Data sent over the channel after establishment cannot be modified by attackers without detection." (Sec. 1)

## Used in

- [[TLS]], [[Network Threats and Cryptographic Basics]]

## History

- 2026-11-23: read abstract/Sec. 1 and recorded. Author/date from RFC metadata, verify before citing.
- 2026-11-23: wording fix after light verification (author/date confirmed on rfc-editor page; Abstract location of eavesdropping/tampering/forgery).
