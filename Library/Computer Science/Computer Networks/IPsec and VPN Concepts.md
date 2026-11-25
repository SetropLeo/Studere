---
title: IPsec and VPN Concepts
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[RFC 4301 - Security Architecture for IP (IPsec)]]", "[[RFC 3022 - Traditional IP NAT]]"]
tags: [finding, networking, security, ipsec]
---

# IPsec and VPN Concepts

> **Summary:** IPsec secures traffic at the IP layer. ESP is mandatory, AH optional; transport mode protects the next-layer data, tunnel mode wraps a whole IP packet; the SPD decides per packet. VPN is not defined by any read source.

## What it is

RFC 4301 (first third read, through Sec. 4.4.1): IPsec provides "interoperable, high quality, cryptographically-based security for IPv4 and IPv6." It works at the IP layer protecting all protocols above. Services: access control, connectionless integrity, data origin authentication, replay detection, confidentiality, limited traffic-flow confidentiality. [[RFC 4301 - Security Architecture for IP (IPsec)]]

## How it works

- "IPsec implementations MUST support ESP and MAY support AH." (Sec. 3.2) ESP (Encapsulating Security Payload) and AH (Authentication Header): expansions are unsourced gloss.
- Transport mode protects next-layer data; tunnel mode wraps a whole IP packet, used when a security gateway is an endpoint.
- "The SPD is an ordered database" (Sec. 4.4.1). The SPD (security policy database) chooses per packet DISCARD, BYPASS or PROTECT, matched by selectors (addresses, protocol, ports).
- Own inference: tunnel mode with gateways is the basis of site-to-site VPNs. The source note says this, but RFC 4301 as read does not define VPN as a term.
- NAT conflicts: RFC 3022 says NAT removes the end-to-end significance of an IP address and affects IPsec ([[NAT]]).

## Key terms

> **Security gateway**: a device that implements IPsec on behalf of hosts (gloss, unsourced).

## Example

None.

## Contradictions and uncertainties

- IKE and SA management (later RFC 4301 sections) not read. **VPN definition: gap.** **Firewalls: no readable source: gap** (they interact with IPsec filtering). RFC 4301 (Kent and Seo, Dec 2005; metadata confirmed on the rfc-editor page).

## Related

- [[TLS]], [[NAT]], [[Network Threats and Cryptographic Basics]], [[IP Addressing, Subnetting and CIDR]]

## Sources

- [[RFC 4301 - Security Architecture for IP (IPsec)]] - architecture, modes, SPD
- [[RFC 3022 - Traditional IP NAT]] - NAT effect on end-to-end addresses

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification (RFC 4301 author/date caveat removed).
