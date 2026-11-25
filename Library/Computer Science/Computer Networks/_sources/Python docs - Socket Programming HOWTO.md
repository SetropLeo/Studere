---
title: Python docs - Socket Programming HOWTO
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Gordon McMillan (per Python docs HOWTO; not visible in the fetched excerpt)
published: Python 3 docs (page undated)
url: https://docs.python.org/3/howto/sockets.html
accessed: 2026-11-23
url-verified: true
tags: [source, networking, python, sockets]
---

# Python docs - Socket Programming HOWTO

## Why it is reliable (or not)

Official Python documentation HOWTO. Level A. Covers only IPv4 STREAM sockets; written long ago but the concepts are stable.

## Extracted points

- (7, 6) Client: socket, connect. Server: bind, listen, accept loop; server socket only produces client sockets.
- TCP is a byte stream with no message boundaries: messages must be fixed length, delimited, length-prefixed, or end by closing; send/recv may handle partial data; recv returning 0 bytes means peer closed.

## Relevant excerpts

> "messages must either be fixed length (yuck), or be delimited (shrug), or indicate how long they are (much better), or end by shutting down the connection."
> "When a `recv` returns 0 bytes, it means the other side has closed (or is in the process of closing) the connection."
> "there is _no_ EOT _on a socket._"

## Used in

- [[Sockets and Socket Programming in Python]]

## History

- 2026-11-23: read and recorded.
