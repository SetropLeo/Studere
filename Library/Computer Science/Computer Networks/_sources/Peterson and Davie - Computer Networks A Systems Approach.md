---
title: Peterson and Davie - Computer Networks, A Systems Approach (online, HTML)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Larry Peterson and Bruce Davie (attribution not shown on the fetched pages; commonly attributed)
published: Version 6.2-dev documentation, copyright 2024 (per page footer)
url: https://book.systemsapproach.org/
accessed: 2026-11-23
url-verified: true
tags: [source, networking, textbook]
---

# Peterson and Davie - Computer Networks: A Systems Approach

Pages read: `foundation/architecture.html`, `foundation/performance.html`, `foundation/requirements.html`, `direct/framing.html`, `direct/error.html`, `direct/encoding.html`, `direct/wireless.html`, `direct/ethernet.html`, `internetworking/basic-ip.html`, `security/trust.html` (all under https://book.systemsapproach.org/). Pages `direct/links.html` and `security/system.html` returned 404 (not used).

## Why it is reliable (or not)

Open (CC) version of a long-standing, widely adopted university textbook; maintained on GitHub. Level A. Note: authors are not named on the pages fetched; the attribution rests on general knowledge of the book. Security chapter page read covers only 8.1 (Trust and Threats), not firewalls/VPN.

## Extracted points

- (1) Layering as abstraction; encapsulation = header attached, payload = original message, stripped in reverse at the receiver; OSI 7 layers is a reference model ("no OSI-based network running today"); Internet architecture link/IP/transport/application, hourglass with IP as narrow waist.
- (2) Latency = propagation + transmit (size/bandwidth) + queuing; RTT; delay x bandwidth product (example 50 ms one-way, 45 Mbps = 2.25e6 bits). Encoding: NRZ, NRZI, Manchester (50% efficient), 4B/5B (80%), clock recovery. Wireless page: bandwidth as a frequency width, SNR, modulation schemes vs bit rates (no Shannon formula).
- (3) Circuit switching (dedicated circuit, telephone) vs packet switching (discrete blocks), statistical multiplexing, store-and-forward.
- (4) Framing (byte-oriented PPP, bit-oriented HDLC with bit stuffing after five 1s, clock-based SONET); Internet checksum (weak) and CRC (polynomial division mod 2; CRC-32 in Ethernet); Ethernet frame (64-bit preamble, 48-bit addresses, 46-1500 payload, CRC-32), CSMA/CD, jam, exponential backoff, 51.2 us (the round-trip delay, equal to 512 bits at 10 Mbps, hence the 64-byte minimum frame), ~2500 m; parity not covered on the page read.
- (5) IPv4 32-bit addresses; subnet mask AND; CIDR prefixes e.g. 192.4.16/20 and longest-prefix match; ARP (Sec. 3.3.6: cache, broadcast query, reply, entries timed out about every 15 minutes; it is on basic-ip.html, not the Ethernet page); DHCP (Sec. 3.3.7: a DHCP server provides configuration information; addresses can be leased); fragmentation/MTU.
- (8) Threats vs trust; "no perfect security"; risk management.

## Relevant excerpts

> "Abstractions naturally lead to layering, especially in network systems." (foundation/architecture.html)
> "We say that ... the application's data ..." (foundation/architecture.html; the phrase "the application's data is encapsulated in the new message created by RRP" appears inside this sentence with lowercase "the", not as a standalone capitalised sentence)
> "While there is no OSI-based network running today, the terminology it defined is still widely used" (foundation/architecture.html, verbatim)
> "We call this the round-trip time (RTT) of the network." (foundation/performance.html)
> "the maximum number of bits that could be in transit through the pipe at any given instant." (foundation/performance.html)
> "data is transmitted from each flow on demand rather than during a predetermined time slot." (foundation/requirements.html)
> "The recipient divides the received polynomial by C(x) and, if the result is 0, concludes that there were no errors." (direct/error.html)
> "the packet matches the longest prefix." (internetworking/basic-ip.html)

## Used in

- [[Network Layering - OSI and TCP-IP]], [[Line Coding and Transmission Media]], [[Circuit vs Packet Switching and Network Delay]], [[Framing and Error Detection]], [[Ethernet, MAC Addresses and Medium Access]], [[ARP and DHCP]], [[IP Addressing, Subnetting and CIDR]], [[Network Threats and Cryptographic Basics]]

## History

- 2026-11-23: read and recorded (stage 1, light process). Independent of Bonaventure book (different authors/text).
- 2026-11-23: wording fix after light verification (ARP/DHCP location, 51.2 us origin, quote wording, OSI sentence verbatim).
