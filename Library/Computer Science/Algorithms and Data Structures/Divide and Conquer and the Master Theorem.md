---
title: Divide and Conquer and the Master Theorem
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[FSU Lacher - Divide and Conquer and the Master Theorem]]", "[[Indiana C343 - Algorithmic Paradigms]]", "[[Sedgewick Wayne - Sorting (algs4 2.1 and 2.2)]]"]
tags: [finding, divide-and-conquer, recurrences, master-theorem]
---

# Divide and Conquer and the Master Theorem

> **Summary:** Divide and conquer splits a problem into non-overlapping subproblems solved independently; its cost is a recurrence, and the Master Theorem solves recurrences of the form T(n) = aT(n/b) + f(n).

## What it is

> **Divide and conquer**: "break up a problem into non-overlapping subproblems, solve subproblems independently" ([[Indiana C343 - Algorithmic Paradigms]]; example given: quicksort).

> **Recurrence**: an equation that defines a cost T(n) in terms of T on smaller inputs. See [[Linear Recurrence Relations]] for the related math (the Master Theorem form is not linear-constant-coefficient; own remark).

Mergesort is the standard example ([[Sedgewick Wayne - Sorting (algs4 2.1 and 2.2)]]); see [[Sorting Algorithms]].

## How it works

- Merge sort recurrence: "T(n) = 2×T(n/2) + Θ(n)" ([[FSU Lacher - Divide and Conquer and the Master Theorem]], section 1).
- The Master Theorem applies to T(n) = aT(n/b) + f(n) and compares f(n) with n^d where d = log_b(a). It has three cases.
- Case 2 (as recorded by the verifier from the FSU page): the solution is Theta(n^d log n).
- Cases 1 and 3: the source note does not record their exact conditions or bounds, so they are not stated here (gap; recover from the FSU page or a second source such as Cormen, which the page cites for the proof).
- Wording re-checked against the FSU page on 2026-11-23 by the verifier (theorem form, d = log_b(a), three cases).
- Algs4 gives a related recurrence for sorted input in mergesort: T(N) = 2T(N/2) + 1, T(1) = 0 (an exercise). Mergesort uses between 1/2 N lg N and N lg N compares.
- Notation Theta: [[Asymptotic Notation and Growth of Functions]]. Recurrences are solved with induction techniques: [[Mathematical Induction]], [[Induction and Recursion]].

## Key terms

> **a, b, f(n)**: a is the number of subproblems, b the factor by which size shrinks, f(n) the cost of dividing and combining.

## Example

Merge sort: a = 2, b = 2, f(n) = Theta(n), so d = log_2 2 = 1 (own computation from the source's definitions). The resulting Theta(n log n) is consistent with algs4's compare counts but the condition selecting the case for this recurrence is not recorded in the source note (gap).

## Contradictions and uncertainties

- Master Theorem cases: only Case 2 (Theta(n^d log n)) is recorded; conditions for cases 1 and 3 are a gap; single Level B source with no named author; second source (Stanford CS161, CMU 15-451, Erickson) are PDFs and were unreadable. Gap.
- Divide and conquer vs dynamic programming: see [[Dynamic Programming]] (overlapping versus non-overlapping subproblems).

## Related

- [[Asymptotic Notation and Growth of Functions]]
- [[Linear Recurrence Relations]]
- [[Induction and Recursion]]
- [[Sorting Algorithms]]
- [[Dynamic Programming]]
- [[Greedy Algorithms]]

## Sources

- [[FSU Lacher - Divide and Conquer and the Master Theorem]] — merge sort recurrence; theorem form and d = log_b(a).
- [[Indiana C343 - Algorithmic Paradigms]] — definition of divide and conquer.
- [[Sedgewick Wayne - Sorting (algs4 2.1 and 2.2)]] — mergesort compare bounds and recurrence.

## History

- 2026-11-23: created (draft); Master Theorem cases deliberately left unstated.
- 2026-11-23: light pass, single-source accepted per user decision (status: verified). Verifier re-opened the FSU page: theorem form, d = log_b(a), three cases (Case 2: Theta(n^d log n)) and the merge sort recurrence confirmed; cases can now be added in a later edit.
- 2026-11-23: body edited (status stays verified): replaced "unverified wording" remark with the verifier's re-check note; added Case 2 (Theta(n^d log n)); cases 1 and 3 left as a gap because the source note does not record their exact conditions.
