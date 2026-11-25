---
title: Isolation Levels and Anomalies
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[PostgreSQL Docs - Transactions and Isolation]]"]
tags: [finding, databases]
---

# Isolation Levels and Anomalies

> **Summary:** Isolation levels trade protection from concurrency anomalies against cost. The source is PostgreSQL's documentation, so behavior below is PostgreSQL-specific unless stated.

## What it is

Anomalies named in the PostgreSQL docs: dirty read (a transaction reads data written by a concurrent uncommitted transaction, verbatim excerpt), nonrepeatable read, phantom read, serialization anomaly.

## How it works

- The SQL standard has four levels; PostgreSQL implements three.
- Default: Read Committed.
- Per the source note: Read Uncommitted acts as Read Committed in PostgreSQL; Repeatable Read prevents phantoms (PostgreSQL behavior).
- Serializable can fail with SQLSTATE 40001 and requires the application to retry.

## Key terms

> **Dirty read**, **nonrepeatable read**, **phantom read**, **serialization anomaly**: as named above; full definitions of the last three are in the PostgreSQL page, not reproduced in the source note.

## Example

Own illustration: under Serializable, wrap the transaction in a retry loop for SQLSTATE 40001.

## Contradictions and uncertainties

- The standard and SQLite (serializable, file locks per the source note's remark) differ from PostgreSQL; that SQLite claim was not verified by a SQLite page read here.
- Single source; vendor behavior is not the whole category.
- Gap: SQL standard unread; locking vs MVCC not covered.

## Related

- [[Transactions and ACID]]
- [[Critical Sections and Semaphores]], [[Deadlock]]: own inference (concurrency background).

## Sources

- [[PostgreSQL Docs - Transactions and Isolation]] — anomalies and levels.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: the SQLite "serializable, file locks" remark stays flagged unverified (no SQLite page read for it).
