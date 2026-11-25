---
title: Circuit vs Packet Switching and Network Delay
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Peterson and Davie - Computer Networks A Systems Approach]]", "[[Newman-Wolfe UF CEN4500 - Packet Switching]]", "[[Bonaventure - Computer Networking Principles Protocols and Practice]]"]
tags: [finding, networking, switching]
---

# Circuit vs Packet Switching and Network Delay

> **Summary:** Circuit switching reserves a path before data flows; packet switching sends discrete blocks that share links on demand. Latency is the sum of propagation, transmit and queuing delay.

## What it is

- **Circuit switching:** a dedicated circuit (the telephone is the example in Peterson and Davie); Newman-Wolfe: the path is reserved before data is sent.
- **Packet switching:** data is split into packets routed separately, links are shared, packets are pipelined. "data is transmitted from each flow on demand rather than during a predetermined time slot." ([[Peterson and Davie - Computer Networks A Systems Approach]]). This is **statistical multiplexing** with **store-and-forward** forwarding.
- Packet networks come as datagram or virtual-circuit organisations ([[Bonaventure - Computer Networking Principles Protocols and Practice]], [[Newman-Wolfe UF CEN4500 - Packet Switching]]).

## How it works

Latency components (Peterson and Davie; Newman-Wolfe discusses the same three qualitatively):

- propagation delay (time for the signal to travel the link),
- transmit delay (packet size divided by bandwidth, in words as the source states it),
- queuing delay (waiting in switches).

Formulas written as symbols (d_trans = L/R, d_prop = d/s) were NOT read from any source. They appeared in course PDFs that could not be opened, so they are intentionally not stated as sourced.

**RTT:** "We call this the round-trip time (RTT) of the network." **Delay x bandwidth product:** "the maximum number of bits that could be in transit through the pipe at any given instant." Peterson and Davie's example is 50 ms one-way delay on 45 Mbps giving 2.25e6 bits (as recorded; the product checks arithmetically: 45e6 x 0.05 = 2.25e6, Own inference).

## Key terms

> **Statistical multiplexing**: sharing a link by sending from each flow on demand (see excerpt above).

> **Store-and-forward**: a switch receives a whole packet before forwarding it (named in the source note; this gloss is unsourced).

## Example

Newman-Wolfe warns that treating propagation as negligible versus transmission is not always a safe assumption (the page reads "neglible", sic).

## Contradictions and uncertainties

- Delay formulas: gap (no readable source). Newman-Wolfe is from 1995 and qualitative.
- Queuing delay behaviour under load not sourced.

## Related

- [[Routing - Distance Vector, Link State and BGP]], [[TCP Flow and Congestion Control]] (RTT in congestion control)
- [[Channel Capacity - Nyquist and Shannon]]
- [[Network Layering - OSI and TCP-IP]]

## Sources

- [[Peterson and Davie - Computer Networks A Systems Approach]] - latency, RTT, delay x bandwidth, statistical multiplexing
- [[Newman-Wolfe UF CEN4500 - Packet Switching]] - circuit vs packet, qualitative delays
- [[Bonaventure - Computer Networking Principles Protocols and Practice]] - datagram vs virtual circuit

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
