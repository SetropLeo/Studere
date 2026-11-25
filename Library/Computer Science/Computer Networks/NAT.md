---
title: NAT
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[RFC 3022 - Traditional IP NAT]]", "[[Bonaventure - Computer Networking Principles Protocols and Practice]]"]
tags: [finding, networking, nat]
---

# NAT

> **Summary:** Basic NAT translates addresses only; NAPT also translates transport identifiers (ports), so many private hosts can share one address. It has well-known limits.

## What it is

- **Basic NAT**: address translation only. **NAPT**: "translation in NAPT is extended to include IP address and Transport identifier" ([[RFC 3022 - Traditional IP NAT]], Sec. 2).
- Bonaventure: "NAT allowed multiple hosts to share a single public IPv4 address." and calls it a short-term IPv4 fix. [[Bonaventure - Computer Networking Principles Protocols and Practice]]

## How it works

Limitations (RFC 3022): in a traditional NAT, sessions are "uni-directional, outbound from the private network" (Sec. 2), with exceptions via static maps; all packets of a session must pass through the same NAT router; NAT is "taking away the end-to-end significance of an IP address" (Sec. 1; affects IPsec, see [[IPsec and VPN Concepts]]); ALGs (application level gateways) are needed for applications embedding addresses; fragments are problematic.

Own inference: the translation table is keyed by address/port, like a [[Hash Table]]; ports come from the transport layer ([[UDP vs TCP]]).

## Key terms

> **ALG**: application-level gateway; here as named by the source (expansion unsourced gloss).

## Example

None sourced.

## Contradictions and uncertainties

- RFC 3022 (Srisuresh and Egevang, Jan 2001; metadata confirmed on the rfc-editor page) is Informational and 2001-era. RFC 1918 (private ranges) not read: gap. NAT64: gap. Firewalls: no readable source: gap.

## Related

- [[IP Addressing, Subnetting and CIDR]], [[IPv6]], [[IPsec and VPN Concepts]], [[UDP vs TCP]]

## Sources

- [[RFC 3022 - Traditional IP NAT]] - definitions, limits
- [[Bonaventure - Computer Networking Principles Protocols and Practice]] - address sharing

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier). Confidence downgraded established -> debated: Basic NAT vs NAPT and the limitations rest on RFC 3022 alone; Bonaventure only states address sharing.
- 2026-11-23: wording fix after light verification ("mostly" dropped; section locations of quotes; RFC metadata confirmed). Confidence stays debated.
