---
title: Brewer - CAP Twelve Years Later
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: paper
author: Eric Brewer (UC Berkeley, Google)
published: 2012-05-30 (InfoQ republication of the article from IEEE Computer magazine)
url: https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/
accessed: 2026-11-23
url-verified: true
tags: [source, databases]
---

# Brewer - CAP Twelve Years Later

## Why it is reliable (or not)

Written by the originator of the CAP conjecture; originally published in IEEE Computer (magazine, not strictly peer-reviewed research paper). Read via InfoQ's republication, not the IEEE original; DOI not verified. Single author's retrospective, so it is a position paper rather than a replicated study.

## Extracted points

- "2 of 3" is misleading: partitions are rare; the tradeoff matters only during a partition.
- Availability and consistency are continuous, choice can vary per operation.
- The three properties: consistency (C, "equivalent to having a single up-to-date copy of the data"), "high availability (A) of that data (for updates)", "tolerance to network partitions (P)" (re-read 2026-11-23).
- BASE expanded in the article as "Basically Available, Soft state, Eventually consistent" (per the verifier's re-read).
- Partition mode and recovery; BASE as counterpart to ACID; eventual consistency; version vectors, CRDTs, compensating actions.

## Relevant excerpts

> "The CAP theorem states that any networked shared-data system can have at most two of three desirable properties:"

> "Soft state and eventual consistency are techniques that work well in the presence of partitions"

## Used in

- Subtopic 8 (CAP, eventual consistency intro). [[CAP and Eventual Consistency]]

## History

- 2026-11-23: registered and read (light process).
- 2026-11-23: wording fix after light verification: recorded the three CAP properties and the BASE expansion from the verifier's re-read.
