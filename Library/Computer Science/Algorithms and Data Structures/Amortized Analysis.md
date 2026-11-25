---
title: Amortized Analysis
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Cornell CS3110 - Amortized Analysis]]", "[[Open Data Structures - Chapter intros (arrays, sorting)]]", "[[Python Docs - Time Complexity of Built-in Types]]"]
tags: [finding, amortized-analysis]
---

# Amortized Analysis

> **Summary:** Amortized analysis is a worst-case analysis of a sequence of operations; it can give a tighter per-operation bound than analyzing each operation alone.

## What it is

> **Amortized cost**: the cost of an operation averaged over a worst-case sequence of operations (no probability involved; it is a worst-case guarantee on the sequence, per [[Cornell CS3110 - Amortized Analysis]]).

## How it works

Three methods (Cornell CS3110):
- **Aggregate**: bound the total cost of n operations and divide by n.
- **Accounting (banker's)**: charge a fixed amount per operation; surplus pays for later expensive operations; the balance never goes negative.
- **Potential (physicist's)**: a potential function that is zero initially and never negative; amortized cost = actual cost + change in potential.

Dynamic array doubling (all three methods in the source):
- Copies happen at exponentially spaced points; the total over n insertions is O(n).
- Charging 3 per insertion covers it.
- Potential Phi = 2n - m gives about 3 per insertion, so O(1) amortized.
- Growth must be geometric: fixed-increment growth leads to linear amortized cost.

Corroboration: Open Data Structures says that over any sequence of m add/remove operations from empty, the total cost of growing and shrinking the backing array is O(m), so O(1) amortized per operation. Python documentation marks list append as amortized: "An individual operation may occasionally be O(n) when the underlying storage is resized, but this cost is spread over many operations, depending on the history of the container." See [[Dynamic Array and Linked List]].

## Key terms

> **Potential function**: a function of the data structure state, zero at the start and never negative, used to pay for future costs.

> **Geometric growth**: capacity multiplied by a constant factor on resize (for example doubling).

## Example

```python
# Supported by Python docs: append is amortized O(1) (occasional O(n) resize).
xs = []
for i in range(1000):
    xs.append(i)
```

Union-find with path compression has an amortized bound too: [[Union-Find]].

## Contradictions and uncertainties

- The dynamic-array result has three agreeing sources (Cornell, ODS, Python docs). The general method descriptions (aggregate/accounting/potential) come only from Cornell (Level B), so the note stays `debated`.
- Do not confuse with average-case analysis (which assumes an input distribution, see [[Hash Table]]); this distinction is stated by Cornell's "worst-case analysis of a sequence" only.

## Related

- [[Algorithm Analysis]]
- [[Dynamic Array and Linked List]]
- [[Union-Find]]
- [[Asymptotic Notation and Growth of Functions]]
- [[Function]]

## Sources

- [[Cornell CS3110 - Amortized Analysis]] — three methods, array doubling, geometric growth.
- [[Open Data Structures - Chapter intros (arrays, sorting)]] — O(m) total for m operations.
- [[Python Docs - Time Complexity of Built-in Types]] — append amortized.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (status: verified). Note: Python quote is truncated (original continues ", depending on the history of the container.").
- 2026-11-23: completed the Python docs quote with its full ending, ", depending on the history of the container."
