---
title: RFC 3022 - Traditional IP Network Address Translator (Traditional NAT)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: standard
author: IETF (P. Srisuresh, K. Egevang; confirmed on the rfc-editor page)
published: 2001-01 (January 2001; confirmed on the rfc-editor page)
url: https://www.rfc-editor.org/rfc/rfc3022.html
accessed: 2026-11-23
url-verified: true
tags: [source, networking, standard, nat]
---

# RFC 3022 - Traditional IP NAT

## Why it is reliable (or not)

IETF Informational RFC defining Basic NAT and NAPT. Level A for definitions; it is informational (not a standard) and describes a 2001-era design. Complements RFC 1918/4787 (not read).

## Extracted points

- (5) Basic NAT translates addresses only; NAPT also translates transport identifiers (ports), letting many private hosts share one address.
- Limitations: in a traditional NAT sessions are uni-directional (outbound), with exceptions via static maps; all packets of a session must pass the same NAT router; breaks end-to-end significance of addresses (affects IPsec); ALG needed for apps embedding addresses; fragments problematic.

## Relevant excerpts

> "translation in NAPT is extended to include IP address and Transport identifier" (Sec. 2)
> "taking away the end-to-end significance of an IP address" (Sec. 1)
> "sessions are uni-directional, outbound from the private network" (Sec. 2)

## Used in

- [[NAT]], [[IPsec and VPN Concepts]]

## History

- 2026-11-23: read and recorded. Author/date fields from RFC metadata, not the excerpt.
- 2026-11-23: wording fix after light verification (author/date confirmed on rfc-editor page; "mostly" dropped).
