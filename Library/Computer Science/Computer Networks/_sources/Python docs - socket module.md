---
title: Python docs - socket module
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: Python 3 docs (page mentions 3.15 features; undated)
url: https://docs.python.org/3/library/socket.html
accessed: 2026-11-23
url-verified: true
tags: [source, networking, python, sockets]
---

# Python docs - socket

Read first ~100000 of ~111500 characters.

## Why it is reliable (or not)

Official standard-library reference. Level A. Version-sensitive; review-by 2027-11.

## Extracted points

- (6, 7) Families AF_INET/AF_INET6; types SOCK_STREAM (TCP) and SOCK_DGRAM (UDP, sendto/recvfrom); `create_connection`, `create_server` (dual-stack), `sendall` vs `send`; `recv` returns b'' when peer disconnected.

## Relevant excerpts

> "Unlike `send()`, this method continues to send data from _bytes_ until either all data has been sent or an error occurs."
> "A returned empty bytes object indicates that the client has disconnected."
> "A pair `(host, port)` is used for the `AF_INET` address family"

## Used in

- [[Sockets and Socket Programming in Python]], [[IPv6]]

## History

- 2026-11-23: read and recorded.
