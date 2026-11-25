---
title: Ethernet, MAC Addresses and Medium Access
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Bonaventure - Computer Networking Principles Protocols and Practice]]", "[[Peterson and Davie - Computer Networks A Systems Approach]]"]
tags: [finding, networking, link-layer]
---

# Ethernet, MAC Addresses and Medium Access

> **Summary:** Ethernet uses 48-bit MAC addresses and a frame with a 46 to 1500 byte payload; shared media use CSMA/CD (Ethernet) or CSMA/CA (802.11); switches learn addresses.

## What it is

> **MAC address**: 48-bit link-layer address (both books).

## How it works

- **Frame** (Peterson and Davie): 64-bit preamble, 48-bit addresses, payload 46 to 1500 bytes, CRC-32. Bonaventure: min payload 46, max 1500. See [[Framing and Error Detection]].
- **CSMA/CD**: Peterson and Davie describe jam signal and exponential backoff, a 51.2 us figure and roughly 2500 m; Bonaventure gives a 51.2 us slot. The two books agree on 51.2 us. Peterson and Davie say it is the round-trip delay, equal to 512 bits at 10 Mbps, hence the 64-byte minimum frame; Bonaventure says the 51.2 us slot time corresponds to a minimum 64-byte frame. 46 bytes is the minimum payload (padded when shorter), which together with the header and CRC gives the 64-byte frame (the sum is own arithmetic, not stated by the sources).
- **CSMA/CA** is used in 802.11 (Bonaventure; wireless page of Peterson and Davie read for bandwidth/SNR only).
- **Switches** learn addresses, run **STP** (spanning tree protocol) and support **VLANs** (Bonaventure, lan.html). Ethernet has no TTL or hop limit: "As Ethernet does not contain any TTL or HopLimit, this loop will never stop." which is why loops must be removed (STP).
- Own inference: switch learning is a table keyed by address, comparable to a [[Hash Table]]; STP builds a loop-free subgraph, an idea related to spanning trees in [[Shortest Paths and Minimum Spanning Trees]] (not stated by the sources).

## Key terms

> **CSMA/CD**: carrier sense multiple access with collision detection. Expansion is unsourced gloss.

> **VLAN**: virtual LAN (named by Bonaventure; definition not recorded).

## Example

None sourced.

## Contradictions and uncertainties

- Wireless link-layer details: gap. Switch learning/STP/VLAN specifics rest on Bonaventure alone (point-level note).
- Exact backoff formula was not recorded.

## Related

- [[ARP and DHCP]], [[Framing and Error Detection]], [[Network Layering - OSI and TCP-IP]]
- [[Hash Table]], [[Shortest Paths and Minimum Spanning Trees]] (own inference)

## Sources

- [[Bonaventure - Computer Networking Principles Protocols and Practice]] - MAC, frame limits, CSMA/CD, CSMA/CA, switches, STP, VLAN
- [[Peterson and Davie - Computer Networks A Systems Approach]] - frame fields, backoff, jam

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification (origin of 51.2 us and 46-byte minimum payload added).
