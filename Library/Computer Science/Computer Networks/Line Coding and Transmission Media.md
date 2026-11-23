---
title: Line Coding and Transmission Media
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Peterson and Davie - Computer Networks A Systems Approach]]", "[[Bonaventure - Computer Networking Principles Protocols and Practice]]", "[[Newman-Wolfe UF CEN4500 - Transmission]]"]
tags: [finding, networking, physical-layer]
---

# Line Coding and Transmission Media

> **Summary:** Line coding maps bits to signals so the receiver can recover both data and clock. NRZ, NRZI, Manchester (50% efficient) and 4B/5B (80%) are the encodings recorded; media are twisted pair, coax, fibre and wireless.

## What it is

> **Line coding / encoding**: how bits are represented as signal levels on the link (gloss, unsourced).

> **Clock recovery**: the receiver extracting bit timing from the signal itself; a clock mismatch is a listed impairment in Bonaventure.

## How it works

- Encodings from [[Peterson and Davie - Computer Networks A Systems Approach]] (direct/encoding.html, only point-level notes available): NRZ, NRZI, Manchester (50% efficient), 4B/5B (80% efficient), with clock recovery as the motivating problem. Detailed signal rules were not recorded in the source note, so they are not given here.
- Bonaventure mentions simple line coding (+5V / -5V), Manchester encoding, and impairments such as interference and clock mismatch. [[Bonaventure - Computer Networking Principles Protocols and Practice]]
- Own inference: efficiency of 50% for Manchester means one data bit takes two signal elements; 80% for 4B/5B means 4 data bits per 5 signal elements.
- Media: twisted pair, coax, fibre (multi-mode, single-mode), wireless (Bonaventure and Newman-Wolfe). Bit rate is measured in bps (Bonaventure).
- Wireless: bandwidth as a frequency width, SNR, modulation schemes versus bit rates (Peterson and Davie wireless page). Modulation types ASK, PSK, FSK are listed by [[Newman-Wolfe UF CEN4500 - Transmission]].

## Key terms

> **NRZ / NRZI / Manchester / 4B/5B**: encodings named in the sources; see above for what was recorded.

## Example

None sourced beyond the efficiency figures.

## Contradictions and uncertainties

- The encoding details come from point notes of a single book page: confidence `debated`. Manchester and 50%, 4B/5B and 80% are each stated only by Peterson and Davie.
- Newman-Wolfe's media list is from 1995 and outdated (no modern Ethernet cabling): gap.

## Related

- [[Channel Capacity - Nyquist and Shannon]]
- [[Framing and Error Detection]]
- [[Combinational Circuits]] / [[Sequential Circuits and Finite State Machines]] (encoders are digital logic; own inference)

## Sources

- [[Peterson and Davie - Computer Networks A Systems Approach]] - NRZ, NRZI, Manchester, 4B/5B, clock recovery
- [[Bonaventure - Computer Networking Principles Protocols and Practice]] - media, Manchester, impairments
- [[Newman-Wolfe UF CEN4500 - Transmission]] - media, modulation (outdated)

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
