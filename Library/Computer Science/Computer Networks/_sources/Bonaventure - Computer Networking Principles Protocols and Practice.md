---
title: Bonaventure - Computer Networking Principles, Protocols and Practice (online, HTML)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Olivier Bonaventure (and contributors)
published: 3rd edition 2021/2022; 4th edition in progress as of Sept 2025 (per the book homepage)
url: https://beta.computer-networking.info/syllabus/default/
accessed: 2026-11-23
url-verified: true
tags: [source, networking, textbook]
---

# Bonaventure - Computer Networking: Principles, Protocols and Practice

Open textbook, HTML. Pages read (all under `https://beta.computer-networking.info/syllabus/default/`): `principles/reliability.html`, `principles/network.html`, `principles/referencemodels.html`, `principles/security.html`, `protocols/transport-service.html`, `protocols/udp.html`, `protocols/tcp.html`, `protocols/congestion.html`, `protocols/dns.html`, `protocols/tls.html`, `protocols/ipv6.html`, `protocols/routing.html`, `protocols/bgp.html`, `protocols/lan.html`. Homepage: https://www.computer-networking.info/

## Why it is reliable (or not)

University-level open textbook by a professor (UCLouvain), widely used in courses, cites RFCs, has labs/exercises. Level A (textbook). Caveats: footer copyright reads 2014 though content is 3rd edition; the tool read pages via a summarizing model, so excerpts below are the quotes the tool returned (checked against the page by the fetch step). Does not cover Shannon/Nyquist, delay formulas, ARP (IPv4), IPv4 subnet arithmetic, firewalls, IPsec, VPN.

## Extracted points

- (1) Five-layer model: physical (bits), datalink (frames), network (packets), transport (segments), application (SDUs). OSI has 7 layers (session, presentation split from application). TCP/IP has 4 layers per RFC 1122 (Application, Transport, Internet, Link). Encapsulation is described as nesting but the term is not used.
- (2) Physical layer: bit rate in bps, media (twisted pair, coax, fibre multi/single-mode, wireless), simple line coding (+5V/-5V), Manchester encoding, impairments (interference, clock mismatch). No capacity formulas.
- (3) Datagram vs virtual circuit organisations (network.html); flat vs hierarchical addressing, longest-match.
- (4) Link layer: framing (flags, bit/character stuffing), checksum and CRC (N-bit CRC detects bursts shorter than N), Go-back-n/selective repeat, Ethernet 48-bit MAC, frame format, min payload 46, max 1500, CSMA/CD (51.2 us slot), CSMA/CA (802.11), switches learn addresses, STP, VLAN. ARP not explained (see Systems Approach note).
- (5) IPv6 addressing, `::`, prefixes, longest-prefix match, ICMPv6, NDP, fragmentation only at the source; NAT/CIDR mentioned as short-term IPv4 fixes; RIP (distance vector, max metric 15), OSPF (link state, areas), BGP (path vector, AS, import/export filters, local-pref, customer/provider/peer relations).
- (6) UDP: unreliable connectionless, 4-field header, checksum with pseudo header. TCP: 3-way handshake, cumulative ACKs, RTO, fast retransmit, SACK, receiver window flow control, FIN/RST. Congestion control: slow start, ssthresh, AIMD, congestion avoidance, ECN, fairness favours short RTT. Ports identify applications.
- (7) DNS: authoritative vs resolver, recursive queries, TTL caching, record types A/AAAA/NS/CNAME/PTR. TLS: handshake goals, TLS 1.2 vs 1.3, certificates, PKI, SNI.
- (8) Threats: eavesdropping, MITM, DoS/DDoS, reflection/amplification, replay; crypto primitives; authenticated Diffie-Hellman. Firewalls/VPN/IPsec NOT covered.

## Relevant excerpts

> "The simplest error detection scheme is the checksum." (reliability.html, datalink layer)
> "An N-bits CRC can detect all transmission errors affecting a burst of less than N bits in the transmitted frame." (reliability.html)
> "the Link layer which combines the functions of the physical and datalink layers" (referencemodels.html)
> "the congestion window is doubled every round-trip-time" (congestion.html, slow start)
> "The maximum metric supported by RIP is 15." (routing.html, RIP)
> "it must forward packets along the route having the longest prefix length." (ipv6.html)
> "As Ethernet does not contain any TTL or HopLimit, this loop will never stop." (lan.html)
> "NAT allowed multiple hosts to share a single public IPv4 address." (ipv6.html)

## Used in

- [[Network Layering - OSI and TCP-IP]], [[Line Coding and Transmission Media]], [[Circuit vs Packet Switching and Network Delay]], [[Framing and Error Detection]], [[Ethernet, MAC Addresses and Medium Access]], [[IP Addressing, Subnetting and CIDR]], [[IPv6]], [[Routing - Distance Vector, Link State and BGP]], [[NAT]], [[UDP vs TCP]], [[TCP Flow and Congestion Control]], [[DNS]], [[TLS]], [[Network Threats and Cryptographic Basics]]

## History

- 2026-11-23: read and recorded (stage 1, light process).
