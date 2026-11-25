---
title: Cryptographic Hash Functions and HMAC
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-05-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Python docs - hashlib]]", "[[Python docs - hmac]]", "[[RFC 2104 - HMAC]]", "[[Python docs - secrets]]"]
tags: [finding, security, crypto, hashing, mac]
---

# Cryptographic Hash Functions and HMAC

> **Summary:** Python's hashlib exposes SHA-2, SHA-3, SHAKE and BLAKE2 and the legacy MD5/SHA-1; HMAC (RFC 2104) builds a keyed message authentication code from an iterative hash and a secret key.

## What it is

> **Hash function**: maps data to a fixed-size digest (gloss, unsourced).

> **MAC (message authentication code)**: a keyed value that lets the holder of the key check a message's authenticity and integrity (gloss, unsourced). RFC 2104 describes HMAC as a MAC built from an iterative hash H and a secret key K.

hashlib (Python docs): interface to SHA-2, SHA-3, SHAKE, BLAKE2 and legacy md5/sha1, the latter noted as having known collision weaknesses. BLAKE2 supports a keyed mode (usable as a MAC), salt and personalization. `hashlib.new(name, data, usedforsecurity=True)`; `algorithms_guaranteed` versus `algorithms_available` (guaranteed is a guarantee of names being present on all platforms, not a runtime guarantee: for example FIPS-mode builds may still block some algorithms); `hashlib.file_digest()` since 3.11.

## How it works

RFC 2104 construction: H(K xor opad, H(K xor ipad, text)), with ipad the byte 0x36 repeated and opad 0x5C repeated; the key is padded to the hash block size, and keys longer than the block size are hashed first. The strength depends on the properties of the underlying hash; the design is hash-agnostic. Output truncation is allowed (at least half the hash length and at least 80 bits). The RFC's concrete MD5/SHA-1 examples are dated (1997) but the construction is described as current in the source note.

Python hmac: `hmac.new(key, msg=None, digestmod)` where `digestmod` is required since 3.8 (docs: "Despite its argument position, it is required."); `hmac.digest(key, msg, digest)` is a faster one-shot (3.7+); `hmac.compare_digest(a, b)` resists timing attacks and should be used instead of `==` to verify a MAC; both arguments must be the same type. The secrets docs describe `secrets.compare_digest` as constant-time and cross-reference `hmac.compare_digest` ("See hmac.compare_digest() for additional details"); that the two are the same function is an implementation inference, not a docs statement. The "16+ byte" salt advice in the hashlib docs is specific to password hashing with pbkdf2 (16 bytes is also the BLAKE2b salt limit), not a general rule for salts.

## Key terms

> **Timing attack**: inferring secrets from how long a comparison takes (gloss, unsourced; the hmac docs say compare_digest resists them).

## Example

Own illustration, using only behavior documented above:

```python
import hmac, hashlib
key, msg = b"secret-key", b"message"
tag = hmac.new(key, msg, hashlib.sha256).digest()
ok = hmac.compare_digest(tag, hmac.new(key, msg, hashlib.sha256).digest())
```

## Contradictions and uncertainties

- Mostly one source per claim; the Python docs and RFC 2104 cover different aspects, not the same claim. Hence `debated`.
- Python docs content is version-dependent; review-by 2027-05-23.
- Own inference only: the XOR and padding steps are bit operations, and [[Modular Arithmetic]] is not needed for HMAC itself; modular arithmetic appears in public-key schemes such as [[RSA]]. Not sourced.
- Preimage/collision resistance definitions are not sourced (gap).

## Related

- [[Password Storage]] (pbkdf2_hmac), [[Secure Randomness in Python]], [[Security Properties - Confidentiality, Integrity, Availability]]
- [[Digital Signatures and EdDSA]], [[TLS]]

## Sources

- [[Python docs - hashlib]] - algorithms, legacy weaknesses, BLAKE2 keyed mode.
- [[Python docs - hmac]] - API, digestmod, compare_digest.
- [[RFC 2104 - HMAC]] - construction.
- [[Python docs - secrets]] - compare_digest (cross-reference to hmac.compare_digest).

## History

- 2026-11-23: created (draft).
- 2026-11-23: wording fix after light verification: compare_digest cross-reference (same function = inference); salt-size scope; algorithms_guaranteed is a name guarantee.
- 2026-11-23: light pass, single-source accepted per user decision (verifier; re-read hashlib, hmac and secrets docs).
