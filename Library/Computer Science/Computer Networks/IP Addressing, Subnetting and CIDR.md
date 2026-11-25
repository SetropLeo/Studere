---
title: IP Addressing, Subnetting and CIDR
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Peterson and Davie - Computer Networks A Systems Approach]]", "[[RFC 4632 - CIDR]]", "[[Bonaventure - Computer Networking Principles Protocols and Practice]]", "[[Python docs - ipaddress]]"]
tags: [finding, networking, ip]
---

# IP Addressing, Subnetting and CIDR

> **Summary:** IPv4 addresses are 32 bits; a subnet mask selects the network part by AND; CIDR replaces classes with variable-length prefixes; forwarding picks the longest matching prefix.

## What it is

- IPv4 addresses have 32 bits; the network part is found by ANDing with the subnet mask ([[Peterson and Davie - Computer Networks A Systems Approach]]).
- **CIDR** ([[RFC 4632 - CIDR]]): classless variable-length prefixes replace Class A/B/C. Goals: conserve address space and limit routing table growth. Prefix notation address/length with length 0 to 32 (examples 172.16.0.0/16 and 192.168.99.0/24). Peterson and Davie's example: 192.4.16/20.

## How it works

- **Aggregation:** "the service provider advertises a single aggregate route for the larger block." (RFC 4632 Sec. 4). Multihoming weakens it. An aggregate route needs a discard route to avoid loops. A more-specific bogus announcement can hijack traffic (security note in RFC 4632).
- **Longest-prefix match:** "Forwarding in the Internet is done on a longest-match basis." (RFC 4632 Sec. 5.1); Peterson and Davie: "the packet matches the longest prefix."; Bonaventure states the same for IPv6 (see [[IPv6]]). Three sources agree.
- Own inference: longest-prefix matching is a lookup over prefixes, comparable to a trie ([[Trie]]) (not stated by the sources); the mask AND is a bitwise operation on integers.
- **Python ipaddress** ([[Python docs - ipaddress]]): `ip_network(strict=True)` raises ValueError if host bits are set, otherwise host bits are masked out; `subnets(prefixlen_diff, new_prefix)` (exactly one of the two must be set); `supernet()`; `hosts()` returns usable hosts (excludes network and broadcast address except for /31 and /32).

## Key terms

> **Prefix length**: number of leading bits that form the network part, written after a slash.

> **Aggregate route**: one route advertised for a larger block (RFC 4632).

## Example

Own illustration (not executed; the behaviour follows the documented API, the arithmetic is mine):

```python
import ipaddress
net = ipaddress.ip_network("192.168.99.0/24")   # example prefix from RFC 4632
for sub in net.subnets(new_prefix=26):           # 4 subnets of 64 addresses
    print(sub)
```

## Contradictions and uncertainties

- Worked subnetting examples from a source: gap. RFC 1918 (private addresses) and RFC 791 (IPv4 header) were not read: gap. Fragmentation/MTU only named in Peterson and Davie.

## Related

- [[IPv6]], [[NAT]], [[Routing - Distance Vector, Link State and BGP]], [[ARP and DHCP]]
- [[Binary Integers and Two's Complement]] (bit manipulation, own inference), [[Trie]]

## Sources

- [[RFC 4632 - CIDR]] - CIDR, aggregation, longest match
- [[Peterson and Davie - Computer Networks A Systems Approach]] - mask AND, 192.4.16/20, longest prefix
- [[Bonaventure - Computer Networking Principles Protocols and Practice]] - hierarchical addressing, longest match
- [[Python docs - ipaddress]] - API behaviour

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
