---
title: DNS
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Bonaventure - Computer Networking Principles Protocols and Practice]]", "[[RFC 1122 - Requirements for Internet Hosts (layers)]]"]
tags: [finding, networking, application]
---

# DNS

> **Summary:** DNS resolves names using authoritative servers and resolvers, with recursive queries and TTL-based caching, and record types A, AAAA, NS, CNAME and PTR.

## What it is

Per [[Bonaventure - Computer Networking Principles Protocols and Practice]] (dns.html): authoritative servers versus resolvers, recursive queries, TTL (time to live) caching, record types A, AAAA, NS, CNAME, PTR. RFC 1122 Sec. 1.1.3 classes DNS as a support protocol in the application layer ([[RFC 1122 - Requirements for Internet Hosts (layers)]]).

## How it works

Hierarchy details, the exact query steps and what each record type holds were not recorded beyond the names above. Own inference: caching with TTL behaves like a [[Hash Table]] with expiry.

## Key terms

> **Resolver**: component that asks DNS servers on behalf of a client (gloss, unsourced). **Authoritative**: a server holding the definitive data for a zone (gloss, unsourced).

## Example

Python `socket.getaddrinfo` use is not recorded in the socket source note: not given.

## Contradictions and uncertainties

- Single main source: `debated`. DNSSEC: gap. Transport used by DNS: not recorded.

## Related

- [[HTTP]], [[UDP vs TCP]], [[Hash Table]], [[IPv6]]

## Sources

- [[Bonaventure - Computer Networking Principles Protocols and Practice]]
- [[RFC 1122 - Requirements for Internet Hosts (layers)]] - application-layer classification

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
