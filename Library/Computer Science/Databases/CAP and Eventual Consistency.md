---
title: CAP and Eventual Consistency
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Brewer - CAP Twelve Years Later]]"]
tags: [finding, databases]
---

# CAP and Eventual Consistency

> **Summary:** Brewer, originator of CAP, argues that the "2 of 3" slogan is misleading: the tradeoff matters mainly during a network partition. Single author's retrospective, read via InfoQ.

## What it is

The article states the CAP theorem as: any networked shared-data system can have at most two of three desirable properties (verbatim opening as recorded in the source note). The three properties, per the article, are consistency ("equivalent to having a single up-to-date copy of the data"), "high availability (A) of that data (for updates)" and "tolerance to network partitions".

## How it works

- Partitions are rare, so the tradeoff matters only during a partition.
- Availability and consistency are continuous, and the choice can vary per operation.
- Partition mode and recovery are the design steps: operate during a partition, then repair.
- BASE is the counterpart to ACID; soft state and eventual consistency work well in the presence of partitions (recorded excerpt).
- Techniques mentioned: version vectors, CRDTs, compensating actions.

## Key terms

> **BASE**: "Basically Available, Soft state, Eventually consistent"; the counterpart to ACID, per Brewer.

> **Eventual consistency**: replicas converge over time; this gloss is own wording, beyond Brewer's use of the term.

## Example

Own illustration: during a partition, a shopping cart accepts writes on both sides and merges later.

## Contradictions and uncertainties

- Read via InfoQ's republication, not the IEEE original; DOI not verified. A position paper, not replicated research.
- Gap: the Gilbert-Lynch proof and the Dynamo paper are unread.
- Own inference: partition behavior relates to [[UDP vs TCP]] and [[Sockets and Socket Programming in Python]] (network unreliability); not stated in the source.
- Fast-moving field: review by 2027-11-23.

## Related

- [[Transactions and ACID]]
- [[Non-Relational Data Models]] (Cassandra's eventual consistency)
- [[UDP vs TCP]], [[Sockets and Socket Programming in Python]] (inference)
- [[TLS]]: not related by any source; omit unless a security area links it.

## Sources

- [[Brewer - CAP Twelve Years Later]] — "2 of 3", partition mode, BASE.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: replaced the unsourced gloss of the three properties and the BASE expansion with the wording from the Brewer/InfoQ article; eventual-consistency gloss labelled own wording.
