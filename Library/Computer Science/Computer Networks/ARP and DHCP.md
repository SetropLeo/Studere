---
title: ARP and DHCP
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Peterson and Davie - Computer Networks A Systems Approach]]"]
tags: [finding, networking]
---

# ARP and DHCP

> **Summary:** ARP maps IP addresses to link-layer addresses using a cache, a broadcast query and a reply; DHCP is a server that provides configuration information to hosts, with leased addresses. Single source.

## What it is

> **ARP (Address Resolution Protocol)**: expansion is unsourced gloss; Peterson and Davie (Sec. 3.3.6) describe a cache, a broadcast query, a reply and entry expiry (about every 15 minutes).

> **DHCP**: Dynamic Host Configuration Protocol (expansion is unsourced gloss). Peterson and Davie (internetworking/basic-ip.html, Sec. 3.3.7) describe a DHCP server that provides configuration information to hosts; addresses can be leased.

## How it works

- ARP (Peterson and Davie, internetworking/basic-ip.html, Sec. 3.3.6; not the Ethernet page): a host consults its cache; on a miss it broadcasts a query; the owner replies; cache entries are timed out about every 15 minutes. [[Peterson and Davie - Computer Networks A Systems Approach]]
- Bonaventure does not explain IPv4 ARP (source note); it covers IPv6 neighbour discovery (NDP), see [[IPv6]].
- DHCP (Peterson and Davie, Sec. 3.3.7): a DHCP server provides configuration information to hosts; addresses can be leased rather than assigned permanently. [[Peterson and Davie - Computer Networks A Systems Approach]]

## Key terms

See above.

## Example

None.

## Contradictions and uncertainties

- Single source for both: `debated`. ARP second source: gap. DHCP message exchange and the exact fields handed out: gap (only "configuration information" and leasing are recorded).

## Related

- [[Ethernet, MAC Addresses and Medium Access]], [[IP Addressing, Subnetting and CIDR]], [[IPv6]]
- [[Hash Table]] (cache as key/value table, own inference)

## Sources

- [[Peterson and Davie - Computer Networks A Systems Approach]] - ARP steps (Sec. 3.3.6), DHCP (Sec. 3.3.7)

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification (ARP citation moved from the Ethernet page to Sec. 3.3.6; DHCP facts from Sec. 3.3.7 added).
