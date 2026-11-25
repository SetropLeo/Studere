---
title: Channel Capacity - Nyquist and Shannon
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: uncertain
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Newman-Wolfe UF CEN4500 - Transmission]]", "[[Wikipedia - Shannon-Hartley theorem (lead)]]"]
tags: [finding, networking, physical-layer]
---

# Channel Capacity - Nyquist and Shannon

> **Summary:** Two formulas bound the data rate of a channel: Nyquist for a noiseless channel and Shannon for a channel with white noise. Only one level B source (1995 course notes) supports them here, so confidence is low.

## What it is

> **Bandwidth (H)**: width of the frequency range of the channel, in Hz (Newman-Wolfe uses H).

> **Signal-to-noise ratio (S/N)**: ratio of signal to noise power; in dB it is 10 log(S/N) (Newman-Wolfe).

## How it works

Per [[Newman-Wolfe UF CEN4500 - Transmission]] (level B):

- Nyquist, noiseless channel: R = 2H lg L, with L signal levels.
- Shannon, white noise: R < H lg(1 + S/N).
- Practical systems usually attain only 1/4 to 1/2 of the Shannon limit (recorded excerpt).

The notation lg is base-2 logarithm: Newman-Wolfe states "lg = log base 2" (sourced).

## Key terms

> **Shannon limit**: the upper bound on the rate at which data can be sent with arbitrarily low error. Cross-check only (level C), lead wording: "the theoretical tightest upper bound on the information rate of data that can be communicated at an arbitrarily low error rate." (lead only, [[Wikipedia - Shannon-Hartley theorem (lead)]])

## Example

Own illustration (arithmetic from the formulas, not from a source): H = 3000 Hz, 2 levels gives Nyquist R = 2 x 3000 x 1 = 6000 bit/s. With S/N = 1000 (30 dB), Shannon bound = 3000 x lg(1001), roughly 29.9 kbit/s.

## Contradictions and uncertainties

- Single level B source, dated 1995, terse. No level A source: gap. Peterson and Davie's wireless page mentions SNR but gives no Shannon formula.
- Cross-check (level C, cross-check only): the Wikipedia article states C = B log2(1 + S/N) (section "Statement of the theorem") and that the Nyquist pulse rate is at most 2B (section "Nyquist rate"); these are in the article body, not the lead. The lead supplies only the Shannon-limit gloss above. It agrees with Newman-Wolfe but is only a lead and not a basis for the claim. Note it writes capacity with an equality while Newman-Wolfe writes R < H lg(1+S/N); both read as an upper bound (Own inference).

## Related

- [[Line Coding and Transmission Media]]
- [[Circuit vs Packet Switching and Network Delay]] (bandwidth as bit rate)
- Planned area Theory of Computation / information theory: not in the library yet.

## Sources

- [[Newman-Wolfe UF CEN4500 - Transmission]] - formulas and practical fraction
- [[Wikipedia - Shannon-Hartley theorem (lead)]] - cross-check only (level C)

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification (lg base 2 sourced; Wikipedia formula location in article body).
