---
title: HTTP
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[MDN - An overview of HTTP]]"]
tags: [finding, networking, application]
---

# HTTP

> **Summary:** HTTP is a client-server, request/response, stateless application-layer protocol normally carried over TCP or TLS over TCP. Cookies add sessions. Only an overview page was read.

## What it is

[[MDN - An overview of HTTP]]: "an application layer protocol that is sent over TCP, or over a TLS-encrypted TCP connection, though any reliable transport protocol could theoretically be used."

## How it works

- Messages are requests and responses between client and server.
- "HTTP is stateless: there is no link between two requests being successively carried out on the same connection." "HTTP cookies allow the use of stateful sessions."
- The MDN overview does mention HTTP/2 (multiplexing, frames) and QUIC, but only briefly; HTTP/3 is not named on the page. The details of HTTP/2 framing and of QUIC were not recorded. [[MDN - An overview of HTTP]]

## Key terms

> **Stateless**: see excerpt above.

## Example

None.

## Contradictions and uncertainties

- Single source, documentation not the normative RFC 9110: gap. HTTP/2 and QUIC details, HTTP/3 (not named by the source), methods and status codes: gap.

## Related

- [[UDP vs TCP]], [[TLS]], [[DNS]], [[Sockets and Socket Programming in Python]]

## Sources

- [[MDN - An overview of HTTP]]

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
- 2026-11-23: wording fix after light verification (HTTP/2 and QUIC are mentioned by MDN; HTTP/3 is not named).
