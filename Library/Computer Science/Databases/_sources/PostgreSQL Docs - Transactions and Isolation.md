---
title: PostgreSQL Docs - Transactions and Isolation
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: PostgreSQL Global Development Group
published: PostgreSQL 19 documentation ("current"), read 2026-11-23
url: https://www.postgresql.org/docs/current/tutorial-transactions.html
accessed: 2026-11-23
url-verified: true
tags: [source, databases]
---

# PostgreSQL Docs - Transactions and Isolation

Also read: `https://www.postgresql.org/docs/current/transaction-iso.html` (13.2).

## Why it is reliable (or not)

Official docs. Isolation behavior is PostgreSQL-specific (MVCC; Read Uncommitted acts as Read Committed; Repeatable Read prevents phantoms). The SQL standard and SQLite (serializable, file locks) differ.

## Extracted points

- Transaction = all-or-nothing bundle (atomicity); durability: committed changes logged to disk; isolation: others do not see partial changes.
- BEGIN / COMMIT / ROLLBACK; failed transaction enters aborted state; SAVEPOINT.
- Anomalies: dirty read, nonrepeatable read, phantom read, serialization anomaly.
- Four SQL levels; PostgreSQL implements three; default Read Committed; Serializable can fail with SQLSTATE 40001 and requires retry.

## Relevant excerpts

> "The essential point of a transaction is that it bundles multiple steps into a single, all-or-nothing operation." (tutorial-transactions)

> "A transaction reads data written by a concurrent uncommitted transaction." (dirty read, transaction-iso)

## Used in

- Subtopic 7 (ACID, concurrency intro). [[Transactions and ACID]], [[Isolation Levels and Anomalies]]

## History

- 2026-11-23: registered and read (light process).
