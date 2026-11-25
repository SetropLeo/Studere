---
title: Dynamic Array and Linked List
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Python Docs - Time Complexity of Built-in Types]]", "[[Open Data Structures - Chapter intros (arrays, sorting)]]", "[[Sedgewick Wayne - Stacks Queues Hash Tables (algs4 1.3 and 3.4)]]", "[[Cornell CS3110 - Amortized Analysis]]"]
tags: [finding, array, linked-list, python]
---

# Dynamic Array and Linked List

> **Summary:** A dynamic (resizing) array gives O(1) indexing and amortized O(1) append; a linked list gives cheap insertion at the front but no indexing.

## What it is

> **Dynamic array**: an array that grows (and shrinks) by reallocating its backing storage. Python's `list` is the practical example.

> **Linked list**: nodes holding an item and a reference to the next node ([[Sedgewick Wayne - Stacks Queues Hash Tables (algs4 1.3 and 3.4)]]); the easiest insertion is at the beginning.

## How it works

Dynamic array:
- algs4: double when full in push(); halve when less than one-quarter full in pop().
- ODS: ArrayStack get/set O(1), add/remove O(n - i); total resizing cost over m operations O(m), so O(1) amortized. See [[Amortized Analysis]] for the proof via accounting/potential and why growth must be geometric.
- Python list (CPython, docs version 3.15): append, get/set item, len O(1) (append amortized); insert/pop/delete at index k O(n - k); `x in l`, min, max O(n); sort O(n log n); concatenation O(len(l1)+len(l2)). The docs say: "An individual operation may occasionally be O(n) when the underlying storage is resized, but this cost is spread over many operations, depending on the history of the container."
- `pop(0)` and `insert(0, v)` on a list cost O(n) memory movement; [[Stack and Queue]] covers `collections.deque` as the alternative.

Linked list: only the node structure and front insertion are supported by the read sources. No source read gives linked-list cost tables (gap).

## Key terms

> **Backing array**: the fixed-size array a dynamic array reallocates when full.

## Example

```python
xs = []
xs.append(1)      # amortized O(1)  (Python docs)
xs.insert(0, 0)   # O(n - k) with k = 0, i.e. O(n)  (Python docs)
```

## Contradictions and uncertainties

- Python costs are CPython-specific and version-dependent (review-by 2027-11-23).
- Python's growth factor is not given by the sources read; do not assume doubling for CPython (own caution). Doubling is the textbook scheme in algs4 and Cornell.
- Array-side claims have 3-4 agreeing sources; linked-list claims have a single source. Overall `debated`.

## Related

- [[Amortized Analysis]]
- [[Stack and Queue]]
- [[Hash Table]]
- [[Function]]
- Planned area: Computer Architecture (memory layout, contiguous storage).

## Sources

- [[Python Docs - Time Complexity of Built-in Types]] — list costs.
- [[Open Data Structures - Chapter intros (arrays, sorting)]] — ArrayStack costs, amortized O(m).
- [[Sedgewick Wayne - Stacks Queues Hash Tables (algs4 1.3 and 3.4)]] — linked list, resizing rule.
- [[Cornell CS3110 - Amortized Analysis]] — doubling analysis.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified). Note: Python quote is truncated (original continues ", depending on the history of the container.").
- 2026-11-23: completed the Python docs quote with its full ending, ", depending on the history of the container."
