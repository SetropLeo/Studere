---
title: Framing and Error Detection
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

# Framing and Error Detection

> **Summary:** The link layer delimits frames (flags with byte or bit stuffing, or clock-based framing) and detects errors with a checksum or, better, a CRC.

## What it is

> **Framing**: marking where a frame starts and ends in a bit stream (gloss, unsourced).

> **Stuffing**: inserting extra bits or characters so that the delimiter does not appear inside the data. Peterson and Davie: HDLC (bit-oriented) uses bit stuffing after five 1s.

## How it works

- Framing styles ([[Peterson and Davie - Computer Networks A Systems Approach]]): byte-oriented (PPP), bit-oriented (HDLC), clock-based (SONET). Bonaventure covers flags and bit/character stuffing.
- Checksum: "The simplest error detection scheme is the checksum." ([[Bonaventure - Computer Networking Principles Protocols and Practice]]). Peterson and Davie call the Internet checksum weak.
- CRC: polynomial division modulo 2; "The recipient divides the received polynomial by C(x) and, if the result is 0, concludes that there were no errors." CRC-32 is used in Ethernet. Bonaventure: an N-bit CRC detects all errors affecting a burst of less than N bits.
- Own inference: polynomial arithmetic mod 2 is arithmetic in a field of two elements, related to [[Modular Arithmetic]] (not stated by the sources).
- Bonaventure also covers retransmission schemes Go-back-n and selective repeat at the link layer; see [[TCP Flow and Congestion Control]] for the nuance.

## Key terms

> **CRC (cyclic redundancy check)**: error-detecting code from polynomial division; see above.

## Example

Own illustration (Python's zlib.crc32 is not covered by any library source; not used). No worked example is sourced.

## Contradictions and uncertainties

- **Parity bits are NOT covered** by any source read (the Peterson and Davie error page read does not cover them): gap. Error-correcting codes: gap.
- The exact generator polynomial of CRC-32 was not recorded.

## Related

- [[Ethernet, MAC Addresses and Medium Access]], [[UDP vs TCP]] (checksums in transport), [[Line Coding and Transmission Media]]
- [[Modular Arithmetic]] (own inference)

## Sources

- [[Bonaventure - Computer Networking Principles Protocols and Practice]] - checksum, CRC burst property, stuffing
- [[Peterson and Davie - Computer Networks A Systems Approach]] - framing types, CRC division, CRC-32

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
