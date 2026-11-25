---
title: FSU Lacher - Divide and Conquer and the Master Theorem
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: not named on page (URL path suggests Florida State University, user "lacher")
published: 2018-09-03 ("Version 09/03/18" on the page)
url: https://www.cs.fsu.edu/~lacher/courses/notes/div_conq.html
accessed: 2026-11-23
url-verified: true
tags: [source, recurrences, master-theorem, divide-and-conquer]
---

# FSU Lacher - Divide and Conquer and the Master Theorem

## Why it is reliable (or not)

University course notes, Level B. Author is not named on the page (attribution to FSU/Lacher is an inference from the URL). It cites Cormen (Introduction to Algorithms) for the Master Theorem proof. Thin on proof; use for statement and examples only. A search also showed that most Master-theorem notes (Stanford CS161, CMU, Northeastern) are PDFs, unreadable here; if a second source is wanted, use one of those.

## Extracted points

- Section 1 derives the merge sort recurrence: T(n) = 2T(n/2) + Theta(n).
- Section 4 "Recurrences and the Master Theorem": states the theorem for T(n) = aT(n/b) + f(n) with three cases, using d = log_b(a).

## Relevant excerpts

> "T(n) = 2×T(n/2) + Θ(n)" (section 1, merge sort)

## Supports subtopics

2 (recurrences, divide and conquer, Master theorem); 7 (divide and conquer paradigm).

## Used in

- [[Divide and Conquer and the Master Theorem]] (three cases deliberately not stated: wording unverified)

## History

- 2026-11-23: registered and read. The exact three-case statement was summarized from the fetch, not copied; verify before writing it as a finding.
