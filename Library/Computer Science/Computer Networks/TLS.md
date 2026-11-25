---
title: TLS
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-06-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[RFC 8446 - TLS 1.3]]", "[[Bonaventure - Computer Networking Principles Protocols and Practice]]", "[[Python docs - ssl module]]"]
tags: [finding, networking, security]
---

# TLS

> **Summary:** TLS provides a secure channel between two peers. What was read: RFC 8446 abstract and Sec. 1 only, Bonaventure's TLS chapter (point notes), and the first part of the Python ssl docs.

## What it is

- RFC 8446 Sec. 1: "The primary goal of TLS is to provide a secure channel between two communicating peers." "The server side of the channel is always authenticated; the client side is optionally authenticated." "Data sent over the channel after establishment cannot be modified by attackers without detection." Goals: confidentiality, integrity. The RFC 8446 Abstract (not Sec. 1) says TLS is designed to prevent eavesdropping, tampering and message forgery. [[RFC 8446 - TLS 1.3]]
- Bonaventure (tls.html): handshake goals, TLS 1.2 versus 1.3, certificates, PKI (public key infrastructure), SNI (server name indication). Detail not recorded.

## How it works

- Handshake mechanics of RFC 8446 (beyond Sec. 1) were NOT read: gap.
- Python: `ssl.create_default_context()` gives secure defaults (CERT_REQUIRED, hostname checking); `wrap_socket(sock, server_hostname=...)`. CERT_REQUIRED alone does not check hostnames: "This mode is **not** sufficient to verify a certificate in client mode as it does not match hostnames. `check_hostname` must be enabled as well to verify the authenticity of a cert." CERT_NONE accepts any certificate (insecure). The docs warn: "Don't use this module without reading the Security considerations." (that section was not read). [[Python docs - ssl module]]
- Used under HTTP ([[HTTP]]) over TCP ([[UDP vs TCP]]).

## Key terms

> **Certificate / PKI**: terms named by Bonaventure; definitions not recorded.

## Example

Own illustration (API names from the ssl note; not run):

```python
import socket, ssl
ctx = ssl.create_default_context()
with socket.create_connection(("example.org", 443)) as s:
    with ctx.wrap_socket(s, server_hostname="example.org") as t:
        print(t.version())
```

## Contradictions and uncertainties

- RFC 8446 (E. Rescorla, Aug 2018; metadata confirmed on the rfc-editor page). Cipher suites, key exchange and cryptographic details: gap. Fast-changing: review-by set. Own inference: the key exchange relies on public-key mathematics like [[RSA]] / [[Modular Arithmetic]], but RFC 8446 as read does not say so.

## Related

- [[Network Threats and Cryptographic Basics]], [[IPsec and VPN Concepts]], [[Sockets and Socket Programming in Python]], [[HTTP]]

## Sources

- [[RFC 8446 - TLS 1.3]] - goals (Sec. 1 only)
- [[Bonaventure - Computer Networking Principles Protocols and Practice]] - handshake, certificates
- [[Python docs - ssl module]] - API and defaults

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification (Abstract vs Sec. 1 for eavesdropping/tampering/forgery; RFC metadata confirmed).
