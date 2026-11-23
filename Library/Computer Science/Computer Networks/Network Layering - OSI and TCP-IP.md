---
title: Network Layering - OSI and TCP-IP
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Bonaventure - Computer Networking Principles Protocols and Practice]]", "[[Peterson and Davie - Computer Networks A Systems Approach]]", "[[RFC 1122 - Requirements for Internet Hosts (layers)]]"]
tags: [finding, networking]
---

# Network Layering - OSI and TCP-IP

> **Summary:** Networks are organised as layers, each using the service of the one below and hiding its details. The number of layers depends on the model: 7 (OSI), 5 (Bonaventure's teaching model) or 4 (TCP/IP per RFC 1122).

## What it is

> **Layering** (gloss, unsourced paraphrase of the idea): splitting communication into stacked functions, each offering a service to the layer above. [[Peterson and Davie - Computer Networks A Systems Approach]] opens with the statement "Abstractions naturally lead to layering, especially in network systems."

## How it works

- **Five-layer model (Bonaventure):** physical (bits), datalink (frames), network (packets), transport (segments), application (SDUs). OSI has 7 layers because session and presentation are split out of the application layer. TCP/IP has 4 layers according to RFC 1122: Application, Transport, Internet, Link. [[Bonaventure - Computer Networking Principles Protocols and Practice]]
- **RFC 1122 (Sec. 1.1.3 only was read):** the four layers are Application, Transport, Internet, Link. All Internet transport protocols use IP to carry data from source host to destination host (recorded excerpt). TCP is reliable and connection-oriented; UDP is connectionless; IP is connectionless with no end-to-end guarantee; ICMP and IGMP belong to the Internet layer; DNS is a support protocol in the application layer. [[RFC 1122 - Requirements for Internet Hosts (layers)]]
- **Encapsulation:** a header is attached to a message from the layer above; the original message becomes the payload; headers are stripped in reverse order at the receiver. Peterson and Davie, in a sentence of the form "We say that ... the application's data is encapsulated in the new message created by RRP" (lowercase "the"; the quote is verbatim only inside that sentence). Bonaventure describes nesting but, per the source note, does not use the word. [[Peterson and Davie - Computer Networks A Systems Approach]]
- **Hourglass / narrow waist:** Peterson and Davie present the Internet architecture as link / IP / transport / application, with IP as the narrow waist. They also state that OSI is a reference model: "While there is no OSI-based network running today, the terminology it defined is still widely used" (verbatim). In that terminology, layer 2 is the link layer and layer 4 is the transport layer (layer numbering, as the OSI terms are used in practice). [[Peterson and Davie - Computer Networks A Systems Approach]]

## Key terms

> **Encapsulation**: wrapping the data of one layer inside the message (header plus payload) of the layer below.

> **Narrow waist**: image of an hourglass whose thin middle is IP, so that many applications and many link technologies meet at one protocol.

## Example

Naming divergence (see below): a web request is data of the application layer; TCP adds a transport header; IP adds a network header; the link layer frames it (Own illustration combining the points above).

## Contradictions and uncertainties

- **Layer count and names diverge.** OSI: 7. Bonaventure: 5 (physical and datalink separate), and he also refers to a Link layer that combines the physical and datalink layers (recorded excerpt, referencemodels.html). RFC 1122: 4, Link, Internet, Transport, Application. Peterson and Davie: link/IP/transport/application. The Internet layer of RFC 1122 corresponds to Bonaventure's network layer (Own inference from the lists).
- RFC 1122 (R. Braden, Oct 1989; metadata confirmed on the rfc-editor page). Only Sec. 1.1.3 was read.
- Own inference: layers behave like abstraction interfaces, comparable to system call boundaries in [[System Calls]] (analogy, not sourced).

## Related

- [[Sockets and Socket Programming in Python]] (the application's door into the transport layer)
- [[UDP vs TCP]], [[IP Addressing, Subnetting and CIDR]], [[Ethernet, MAC Addresses and Medium Access]]
- [[System Calls]] (analogy only)
- [[Sequential Circuits and Finite State Machines]] (protocol state machines, own inference)

## Sources

- [[Bonaventure - Computer Networking Principles Protocols and Practice]] - 5/7/4 layer lists
- [[Peterson and Davie - Computer Networks A Systems Approach]] - encapsulation, narrow waist, OSI as reference
- [[RFC 1122 - Requirements for Internet Hosts (layers)]] - 4-layer TCP/IP, Sec. 1.1.3

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification (quote capitalisation, OSI and narrow-waist wording verbatim, RFC 1122 metadata).
