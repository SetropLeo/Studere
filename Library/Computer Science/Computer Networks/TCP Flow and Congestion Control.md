---
title: TCP Flow and Congestion Control
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Bonaventure - Computer Networking Principles Protocols and Practice]]", "[[man7 - tcp(7)]]"]
tags: [finding, networking, transport]
---

# TCP Flow and Congestion Control

> **Summary:** Flow control protects the receiver with a window; congestion control protects the network using slow start, ssthresh and AIMD. Bonaventure is the main source.

## What it is

> **Flow control**: the receiver advertises a window limiting what the sender may have outstanding (Bonaventure: receiver window).

> **Congestion control**: the sender limits its rate to avoid overloading the network.

## How it works

- Slow start: "the congestion window is doubled every round-trip-time" (congestion.html). ssthresh (slow start threshold) then marks the switch to congestion avoidance, which uses AIMD (additive increase, multiplicative decrease). Bonaventure also covers ECN, and states that fairness favours flows with a short RTT.
- [[man7 - tcp(7)]]: the congestion control algorithm is configurable (TCP_CONGESTION) and ECN is supported (Linux).
- **Nuance:** Go-back-n and selective repeat are generic retransmission schemes from the reliability chapter; TCP uses cumulative ACKs plus optional SACK. Which scheme TCP resembles was not stated in the notes read (Own inference: neither exactly).
- RTT: see [[Circuit vs Packet Switching and Network Delay]].

## Key terms

> **AIMD**: see above, expansion given by the source's terminology; the exact increase/decrease constants were not recorded.

## Example

Own illustration (arithmetic from the doubling rule): a window of 1 segment grows to 2, 4, 8 after successive RTTs while in slow start.

## Contradictions and uncertainties

- Single main source: `debated`. Algorithms such as Reno/CUBIC and their formulas: gap.

## Related

- [[UDP vs TCP]], [[Circuit vs Packet Switching and Network Delay]], [[Framing and Error Detection]]

## Sources

- [[Bonaventure - Computer Networking Principles Protocols and Practice]] - slow start, AIMD, fairness
- [[man7 - tcp(7)]] - configurable algorithm, ECN

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
