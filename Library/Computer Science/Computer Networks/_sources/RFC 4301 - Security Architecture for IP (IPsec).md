---
title: RFC 4301 - Security Architecture for the Internet Protocol (IPsec)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: standard
author: IETF (S. Kent, K. Seo; confirmed on the rfc-editor page)
published: 2005-12 (December 2005; confirmed on the rfc-editor page)
url: https://www.rfc-editor.org/rfc/rfc4301.html
accessed: 2026-11-23
url-verified: true
tags: [source, networking, standard, security, ipsec]
---

# RFC 4301 - IPsec architecture

Read the first ~100000 of ~274000 characters (through Sec. 4.4.1).

## Why it is reliable (or not)

IETF Standards Track RFC; normative IPsec architecture. Level A. Dense; a beginner needs the summary below. Later sections (IKE, SA management) not read. Does not define "VPN" as a term (not read for that).

## Extracted points

- (8) IPsec works at the IP layer, protecting all protocols above; services: access control, connectionless integrity, data origin authentication, replay detection, confidentiality, limited traffic-flow confidentiality.
- ESP mandatory, AH optional. Transport mode protects next-layer data; tunnel mode wraps a whole IP packet (used when a security gateway is an endpoint, i.e. the basis of site-to-site VPNs).
- SPD decides per packet: DISCARD, BYPASS, PROTECT, matched by selectors (addresses, protocol, ports).

## Relevant excerpts

> "IPsec implementations MUST support ESP and MAY support AH." (Sec. 3.2)
> "The SPD is an ordered database" (Sec. 4.4.1)
> "interoperable, high quality, cryptographically-based security for IPv4 and IPv6." (Sec. 2.1)

## Used in

- [[IPsec and VPN Concepts]]

## History

- 2026-11-23: partially read and recorded. Author/date from RFC metadata, not the excerpt.
- 2026-11-23: wording fix after light verification (author/date confirmed on rfc-editor page; caveat removed).
