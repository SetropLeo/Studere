---
title: Stack and Queue
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Sedgewick Wayne - Stacks Queues Hash Tables (algs4 1.3 and 3.4)]]", "[[Python Docs - collections.deque]]", "[[Python Docs - Time Complexity of Built-in Types]]"]
tags: [finding, stack, queue, deque]
---

# Stack and Queue

> **Summary:** A stack is last-in-first-out, a queue is first-in-first-out; in Python, `collections.deque` gives O(1) operations at both ends.

## What it is

> **Stack**: "A _pushdown stack_ is a collection that is based on the _last-in-first-out_ (LIFO) policy." ([[Sedgewick Wayne - Stacks Queues Hash Tables (algs4 1.3 and 3.4)]])

> **Queue**: a collection based on first-in-first-out (FIFO).

> **Deque**: double-ended queue, with adds and removes at both ends.

## How it works

- Linked-list implementations (algs4): the stack keeps its top at the front of the list; the queue adds at the end and removes from the front. Array implementation: resizing array, see [[Dynamic Array and Linked List]].
- algs4 section 1.3 does not state time bounds in its main text; "amortized" appears only in an exercise (queue from two stacks).
- Python: deque supports "thread-safe, memory efficient appends and pops from either side of the deque with approximately the same O(1) performance in either direction." A list has O(n) memory movement for `pop(0)` and `insert(0, v)`. Deque indexed access is O(1) at both ends and O(n) in the middle; for fast random access use lists ([[Python Docs - collections.deque]]).
- The Python time-complexity page has no deque table, only the recommendation to use deque for adds/removes at both ends ([[Python Docs - Time Complexity of Built-in Types]]).
- Stack and queue are the frontier containers behind DFS (stack, via recursion) and BFS (queue) in [[Graph Representations and Traversal]] (own link; the graph source states costs, not the container choice).

## Key terms

> **LIFO / FIFO**: last-in-first-out / first-in-first-out removal order.

## Example

```python
from collections import deque
q = deque()
q.append(1); q.append(2)   # O(1) at the right end (Python docs)
q.popleft()                # O(1) at the left end (Python docs); list.pop(0) is O(n)
s = []                     # list as stack: append/pop at the end (own usage; append amortized O(1))
s.append(1); s.pop()
```

## Contradictions and uncertainties

- Single source per implementation claim; Python facts are CPython-specific. `debated`.
- No source read states stack/queue operation bounds in the algorithmic (not Python) sense.

## Related

- [[Dynamic Array and Linked List]]
- [[Graph Representations and Traversal]]
- [[Binary Heap and Priority Queue]] (priority queue is a different abstraction: not FIFO)
- [[Partial Order]]: not used here; see priority queue for ordered keys.

## Sources

- [[Sedgewick Wayne - Stacks Queues Hash Tables (algs4 1.3 and 3.4)]] — LIFO/FIFO, linked implementations.
- [[Python Docs - collections.deque]] — deque costs.
- [[Python Docs - Time Complexity of Built-in Types]] — recommendation, list costs.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified).
