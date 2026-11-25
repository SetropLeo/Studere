---
title: RSA
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[MCS Ch8 Number Theory (Lehman Leighton Meyer)]]", "[[Elementary Number Theory (Barrus and Clark)]]"]
tags: [finding, number-theory, cryptography]
---

# RSA

> **Summary:** RSA is a public-key scheme built from modular arithmetic on a product of two primes. Its security ASSUMES that factoring such products is hard; that "breaking RSA implies factoring" is itself an unproven conjecture (whether the two problems are equivalent is open). The algorithm is `established`; the security claim is a conjecture. Treated here as an application of number theory, not as a security guide.

## What it is

> **RSA**: a public-key encryption scheme where encryption uses a public key and decryption a private key ([[MCS Ch8 Number Theory (Lehman Leighton Meyer)]], 8.11).

## How it works

From [[MCS Ch8 Number Theory (Lehman Leighton Meyer)]]:

1. Choose distinct primes p and q; n = pq.
2. Pick e with gcd(e, (p-1)(q-1)) = 1. Public key = (e, n).
3. Private key d = inverse of e mod (p-1)(q-1), found with the Pulverizer ([[Divisibility and GCD]]).
4. Encrypt: m^e mod n. Decrypt using d.
5. Decryption works because of Euler's theorem, for a message m coprime to n; MCS defers the non-coprime case to Problem 8.81.

[[Elementary Number Theory (Barrus and Clark)]] (1.27) describes the same shape: public m and e, secret d, m = pq, e and d inverse modulo φ(m) = (p-1)(q-1), correctness via Fermat's little theorem (the special case of Euler's theorem for prime moduli, per Barrus and Clark). Two independent level A sources agree on the shape of the scheme.

## Key terms

> **Public / private key**: the published pair (e, n) versus the secret exponent d.
> **Euler's totient φ(m)**: here (p-1)(q-1) for m = pq.

## Example

The Python tools for each step are in [[Modular Arithmetic]]: modular exponentiation and the modular inverse via `pow`. Illustration only; no worked numeric example in the sources read. This is a toy-level learning link, not a recommendation to implement real encryption.

## Contradictions and uncertainties

- **Conjecture caveat:** security is tied to the open question of whether fast factoring exists (Barrus and Clark). MCS: it is "an important unproven conjecture in cryptography" that breaking RSA implies factoring. The problem of recovering m from the ciphertext without d is usually called the RSA problem (archivist gloss, not named in the sources read).
- **Carmichael λ(n):** standards use λ(n) = lcm(p−1, q−1) in place of (p−1)(q−1). Lead only (Wikipedia, not cited); candidate level A sources to be read in stage 1: NIST SP 800-56B; Rivest, Shamir and Adleman, CACM 1978.
- No source read gives key-size recommendations or padding practice. This is a gap, and key sizes are fast-changing; no `review-by` set because no figure is stated here.
- The "Chapter intro" claim that number theory underlies modern cryptography is from MCS (secondary to the topic).

## Related

- [[Modular Arithmetic]], [[Divisibility and GCD]]
- Cross-area (no note yet): cryptography principles in Security.

## Sources

- [[MCS Ch8 Number Theory (Lehman Leighton Meyer)]] — algorithm steps, conjecture.
- [[Elementary Number Theory (Barrus and Clark)]] — independent description, open question.

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: decryption via Euler's theorem stated for m coprime to n (MCS Problem 8.81 for the rest); summary now says security ASSUMES factoring is hard and that breaking RSA implies factoring is the unproven conjecture; named the RSA problem (gloss); Carmichael λ(n) recorded as lead with candidate sources; Fermat's little theorem noted as the prime-modulus special case; confidence stays established for the algorithm, security flagged as conjecture.
- 2026-11-23: verified (light pass, single-source accepted per user decision); algorithm established, security explicitly a conjecture.
