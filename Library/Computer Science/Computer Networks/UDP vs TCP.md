---
title: UDP vs TCP
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Bonaventure - Computer Networking Principles Protocols and Practice]]", "[[man7 - tcp(7)]]", "[[RFC 1122 - Requirements for Internet Hosts (layers)]]"]
tags: [finding, networking, transport]
---

# UDP vs TCP

> **Summary:** UDP is an unreliable connectionless transport with a 4-field header and a checksum; TCP is a reliable, ordered, connection-oriented byte stream built on handshake, cumulative ACKs, timeouts and fast retransmit.

## What it is

- **UDP**: unreliable, connectionless, 4-field header, checksum computed with a pseudo header (Bonaventure). RFC 1122 Sec. 1.1.3 also classes UDP as connectionless.
- **TCP**: reliable and connection-oriented (RFC 1122). Linux tcp(7): "a reliable, stream-oriented, full-duplex connection between two sockets" (as quoted by the fetch step) and "TCP guarantees that the data arrives in order and retransmits lost packets." It is point-to-point only, has a per-packet checksum and no record boundaries.
- Ports identify applications (Bonaventure).

## How it works

TCP mechanisms (Bonaventure, tcp.html): 3-way handshake; cumulative ACKs; RTO (retransmission timeout); fast retransmit; SACK (selective acknowledgements); receiver window flow control; FIN and RST to end or abort. tcp(7): unacknowledged retransmissions eventually end in ETIMEDOUT; congestion control algorithm is configurable (default, and per socket via TCP_CONGESTION); ECN is supported. See [[TCP Flow and Congestion Control]].

Because TCP has no record boundaries, applications must frame their own messages: see [[Sockets and Socket Programming in Python]].

## Key terms

> **Pseudo header**: extra fields (named by Bonaventure) included in the UDP checksum computation; contents not recorded.

> **RTO**: retransmission timeout, how long TCP waits before resending.  (gloss, unsourced)

## Example

None beyond [[Sockets and Socket Programming in Python]].

## Contradictions and uncertainties

- tcp(7) is Linux-specific, not general TCP theory. Header formats of TCP and timer calculation not recorded: gap.
- Own inference: TCP endpoints behave as state machines (handshake, close), see [[Sequential Circuits and Finite State Machines]].

## Related

- [[TCP Flow and Congestion Control]], [[Sockets and Socket Programming in Python]], [[Network Layering - OSI and TCP-IP]], [[NAT]], [[HTTP]], [[DNS]]

## Sources

- [[Bonaventure - Computer Networking Principles Protocols and Practice]] - UDP, TCP mechanisms
- [[man7 - tcp(7)]] - Linux TCP semantics
- [[RFC 1122 - Requirements for Internet Hosts (layers)]] - TCP/UDP roles

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
