---
title: Python docs - ssl module (TLS wrapper for sockets)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: Python 3 docs (mentions 3.15; undated)
url: https://docs.python.org/3/library/ssl.html
accessed: 2026-11-23
url-verified: true
tags: [source, networking, python, tls]
---

# Python docs - ssl

Read first ~100000 of ~145500 characters (Security considerations section not read).

## Why it is reliable (or not)

Official documentation. Level A. Security defaults change between versions; review-by 2027-06.

## Extracted points

- (7, 8) `create_default_context()` gives secure defaults (CERT_REQUIRED, hostname checking); `wrap_socket(sock, server_hostname=...)`; CERT_REQUIRED alone does not check hostnames, `check_hostname` needed; CERT_NONE accepts any cert (insecure).

## Relevant excerpts

> "This mode is **not** sufficient to verify a certificate in client mode as it does not match hostnames. `check_hostname` must be enabled as well to verify the authenticity of a cert."
> "Don't use this module without reading the Security considerations."

## Used in

- [[TLS]]

## History

- 2026-11-23: read and recorded.
