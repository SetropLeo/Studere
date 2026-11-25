---
title: Aspnes Yale - Processor Scheduling
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: James Aspnes (Yale), PineWiki class notes (2003-2012 archive)
published: 2003-2012 (archive)
url: https://www.cs.yale.edu/homes/aspnes/pinewiki/ProcessorScheduling.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Aspnes Yale - Processor Scheduling

## Why it is reliable (or not)

University course notes by a known professor. Concise. Archived static copy.

## Extracted points

- FCFS (no preemption; describes the problem of a long burst running first, but the page does not use the word "convoy"), round robin (quantum tradeoff), SJF (burst estimated by exponential average), priority (starvation fixed by slowly increasing the priority of starving jobs; the page does not use the word "aging"; priority inversion fixed by boosting), EDF for real-time, multilevel queue, multilevel feedback queue (move by past behavior).
- Multiprocessor: symmetric/asymmetric, work stealing, affinity vs load balance.

## Relevant excerpts

> "The goal is to get graceful degradation in performance when the system is loaded."

> "Disadvantages: Low-priority jobs may starve"

## Used in

- Subtopic 3

## Used in findings

- [[CPU Scheduling Algorithms]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: wording fix after light verification (no "convoy" or "aging" wording on the page).
