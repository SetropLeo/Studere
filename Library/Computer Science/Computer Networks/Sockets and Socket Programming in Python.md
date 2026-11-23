---
title: Sockets and Socket Programming in Python
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Python docs - Socket Programming HOWTO]]", "[[Python docs - socket module]]", "[[man7 - tcp(7)]]"]
tags: [finding, networking, python, sockets]
---

# Sockets and Socket Programming in Python

> **Summary:** A socket is the endpoint of two-way communication; SOCK_STREAM gives TCP, SOCK_DGRAM gives UDP. TCP has no message boundaries, and recv returning 0 bytes means the peer closed.

## What it is

- Families AF_INET / AF_INET6; types SOCK_STREAM (TCP) and SOCK_DGRAM (UDP, with sendto/recvfrom). An AF_INET address is a (host, port) pair. [[Python docs - socket module]]
- `create_connection` and `create_server` (dual-stack) exist as helpers (same source).

## How it works

- Client: socket, connect. Server: bind, listen, accept loop; the server socket only produces client sockets. [[Python docs - Socket Programming HOWTO]]
- `send` may send part of the data; `sendall` "continues to send data from bytes until either all data has been sent or an error occurs."
- TCP is a byte stream: "messages must either be fixed length (yuck), or be delimited (shrug), or indicate how long they are (much better), or end by shutting down the connection." tcp(7) confirms no record boundaries. [[man7 - tcp(7)]]
- "When a `recv` returns 0 bytes, it means the other side has closed (or is in the process of closing) the connection." The socket module: "A returned empty bytes object indicates that the client has disconnected." Two sources agree.
- The HOWTO says there is no EOT (end of transmission) on a socket.
- OS side, Own inference (not in the socket sources): sockets are reached through system calls ([[System Calls]]); a server handling many clients may use processes or threads ([[Process Creation - fork]], [[Threads]]); data arrival is signalled via the kernel's I/O machinery ([[Interrupts, DMA and Device IO]]).

## Key terms

> **Socket**: endpoint for communication between two programs (gloss, unsourced).

## Example

Own illustration of a length-prefixed receive helper (the behaviour used, recv returning b'' at close, is documented above; the code itself was not run):

```python
def recv_exact(sock, n):
    buf = b""
    while len(buf) < n:
        chunk = sock.recv(n - len(buf))
        if chunk == b"":            # peer closed
            raise ConnectionError("closed early")
        buf += chunk
    return buf
```

## Contradictions and uncertainties

- The HOWTO covers only IPv4 stream sockets. Non-blocking and select-based I/O not recorded: gap. Module docs are version-sensitive (review-by 2027-11).

## Related

- [[UDP vs TCP]], [[TLS]] (ssl wraps sockets), [[HTTP]], [[DNS]]
- [[System Calls]], [[Process Creation - fork]], [[Threads]], [[Interrupts, DMA and Device IO]] (own inference)

## Sources

- [[Python docs - Socket Programming HOWTO]] - client/server flow, message boundaries, recv 0
- [[Python docs - socket module]] - families, types, sendall, empty bytes
- [[man7 - tcp(7)]] - no record boundaries

## History

- 2026-11-23: created (stage 2, light process).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
