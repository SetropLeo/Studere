---
title: Routing - Distance Vector, Link State and BGP
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Bonaventure - Computer Networking Principles Protocols and Practice]]", "[[RFC 4632 - CIDR]]"]
tags: [finding, networking, routing]
---

# Routing - Distance Vector, Link State and BGP

> **Summary:** RIP is distance vector (max metric 15), OSPF is link state with areas, and BGP is a path-vector protocol between autonomous systems driven by policy. Source: Bonaventure only.

## What it is

- **RIP**: distance vector; "The maximum metric supported by RIP is 15."
- **OSPF**: link state, organised in areas.
- **BGP**: path vector between ASes (autonomous systems), with import/export filters, local-pref, and customer/provider/peer relations (routing.html, bgp.html). [[Bonaventure - Computer Networking Principles Protocols and Practice]]

## How it works

- Forwarding uses the longest matching prefix ([[IP Addressing, Subnetting and CIDR]]); RFC 4632 says aggregate routes shrink routing tables, and bogus more-specific announcements can hijack traffic.
- Own inference (analogy, not in sources): distance vector resembles Bellman-Ford and link state resembles running Dijkstra on a full map, see [[Shortest Paths and Minimum Spanning Trees]]; the network is a graph, see [[Graph Representations and Traversal]].
- Mechanism detail (update rules, counting to infinity, LSA flooding, BGP decision process) was not recorded: gap.

## Key terms

> **AS (autonomous system)**: administrative routing domain; here used as in Bonaventure's BGP chapter (definition not recorded in detail).

> **Path vector**: the route announcement carries the path (gloss, unsourced beyond the term).

## Example

None.

## Contradictions and uncertainties

- Single source (`debated`). BGP security (hijack) is touched only by RFC 4632. Routing in the datagram model: see [[Circuit vs Packet Switching and Network Delay]].

## Related

- [[Graph Representations and Traversal]], [[Shortest Paths and Minimum Spanning Trees]]
- [[IP Addressing, Subnetting and CIDR]], [[NAT]]

## Sources

- [[Bonaventure - Computer Networking Principles Protocols and Practice]] - RIP, OSPF, BGP
- [[RFC 4632 - CIDR]] - aggregation, hijack risk

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
