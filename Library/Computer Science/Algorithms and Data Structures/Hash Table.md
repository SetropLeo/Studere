---
title: Hash Table
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Sedgewick Wayne - Stacks Queues Hash Tables (algs4 1.3 and 3.4)]]", "[[Python Docs - Time Complexity of Built-in Types]]"]
tags: [finding, hash-table, dict, set]
---

# Hash Table

> **Summary:** A hash table maps keys to array positions through a hash function; operations are O(1) on average but O(n) when keys collide badly.

## What it is

> **Hash table**: a symbol table that stores keys in an array indexed by a hash function of the key (own gloss; the sources describe the two collision strategies below).

Related to [[Function]] (a hash function maps keys to indices; own remark).

## How it works

algs4 section 3.4:
- **Separate chaining**: M linked lists; alpha = N/M; "the number of compares (equality tests) for search and insert is proportional to N/M" under the uniform hashing assumption (Property L).
- **Linear probing**: M > N, load factor must be < 1; average probes about 1/2(1 + 1/(1-alpha)) for hits and about 1/2(1 + 1/(1-alpha)^2) for misses and inserts.
- The hash page states no propositions on resizing.

Python (CPython docs, version 3.15):
- set: membership, add, discard O(1) on average; union O(len(s1)+len(s2)); intersection O(min(len(s1), len(s2))).
- dict: get/set/delete/`in` O(1) on average; copy and iteration O(n).
- "In the worst case, when every key hashes to the same value, each of the O(1) operations below instead takes O(n) time."

```python
d = {}
d["a"] = 1        # O(1) on average (Python docs)
"a" in d          # O(1) on average
```

## Key terms

> **Load factor (alpha)**: N/M, keys divided by table size.

> **Uniform hashing assumption**: each key is equally likely to hash to any of the M slots, independently (standard meaning; the source states the assumption by name only).

## Example

With alpha = 1/2 under linear probing, a hit costs about 1/2(1 + 2) = 1.5 probes and a miss about 1/2(1 + 4) = 2.5 (own arithmetic from the source formulas).

## Contradictions and uncertainties

- Average-case bounds depend on the hashing assumption; the worst case is linear (Python docs). This is not a divergence, but a distinction: see [[Algorithm Analysis]].
- Two sources, but on different claims (algs4: chaining/probing; Python: dict/set). No second source for the formulas. `debated`.
- Python's collision strategy (CPython uses open addressing, from general knowledge) is NOT in the sources read; unverified.
- Hash functions and resizing: gap.

## Related

- [[Algorithm Analysis]]
- [[Dynamic Array and Linked List]]
- [[Amortized Analysis]]
- [[Trie]] (tries aim to be "as fast as hashing, more flexible than binary search trees")
- Planned area: Databases (hash indexes).

## Sources

- [[Sedgewick Wayne - Stacks Queues Hash Tables (algs4 1.3 and 3.4)]] — chaining, probing, formulas.
- [[Python Docs - Time Complexity of Built-in Types]] — dict/set costs and worst case.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified).
