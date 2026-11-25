---
title: IPv6
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Bonaventure - Computer Networking Principles Protocols and Practice]]", "[[Python docs - ipaddress]]"]
tags: [finding, networking, ip]
---

# IPv6

> **Summary:** IPv6 addressing uses prefixes with longest-prefix forwarding, the `::` shorthand, ICMPv6 and NDP; fragmentation happens only at the source. NAT and CIDR were short-term IPv4 fixes.

## What it is

Per [[Bonaventure - Computer Networking Principles Protocols and Practice]] (ipv6.html): IPv6 addressing, `::` notation, prefixes, longest-prefix match ("it must forward packets along the route having the longest prefix length."), ICMPv6, NDP (neighbour discovery protocol), and fragmentation only at the source. NAT and CIDR are described as short-term IPv4 fixes: "NAT allowed multiple hosts to share a single public IPv4 address."

## How it works

- The `ipaddress` module handles IPv6 as well as IPv4 (`ip_address`, `ip_network`); see [[Python docs - ipaddress]] and [[Python docs - socket module]] (AF_INET6).
- Address length, header fields and notation rules beyond `::` were not recorded.

## Key terms

> **NDP**: neighbour discovery protocol; its role (replacing ARP in IPv6) is Own inference, since Bonaventure's note says IPv4 ARP is not explained.

## Example

None sourced.

## Contradictions and uncertainties

- Single source: `debated`. NAT64 and IPv4/IPv6 transition: gap.

## Related

- [[IP Addressing, Subnetting and CIDR]], [[NAT]], [[ARP and DHCP]]

## Sources

- [[Bonaventure - Computer Networking Principles Protocols and Practice]] - IPv6 features
- [[Python docs - ipaddress]] - module handles IPv6 (as recorded)

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
