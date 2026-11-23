---
title: Transactions and ACID
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[PostgreSQL Docs - Transactions and Isolation]]", "[[SQLite Docs - Datatypes Foreign Keys Atomic Commit]]", "[[Python Docs - sqlite3 module]]"]
tags: [finding, databases]
---

# Transactions and ACID

> **Summary:** A transaction bundles steps into an all-or-nothing unit. PostgreSQL and SQLite documentation both describe atomicity (two independent official sources); SQLite explains how it is implemented.

## What it is

PostgreSQL (verbatim excerpt): the essential point of a transaction is that it bundles multiple steps into a single, all-or-nothing operation. Durability: committed changes are logged to disk. Isolation: others do not see partial changes. SQLite (verbatim excerpt): atomic commit means that either all database changes within a single transaction occur or none of them occur.

## How it works

Commands: BEGIN, COMMIT, ROLLBACK, SAVEPOINT; a failed transaction enters an aborted state (PostgreSQL).

SQLite atomic commit (single engine, vendor description):

- A rollback journal is written before the database is changed.
- fsync calls are ordered.
- The commit point is when the journal is deleted.
- After a crash, recovery (rolling back a hot journal) happens on the first access to the database by any process.
- The default is synchronous=FULL.

In Python's sqlite3, `with con:` commits or rolls back; see [[SQLite and Python sqlite3]].

## Key terms

> **ACID**: atomicity, consistency, isolation, durability. The sources record atomicity, durability and isolation; consistency is not detailed in the source notes.

> **Hot journal**: a leftover rollback journal indicating an interrupted transaction (SQLite).

## Example

Own illustration: a money transfer debits one account and credits another inside one transaction; on error ROLLBACK leaves both unchanged.

## Contradictions and uncertainties

- Own inference: SQLite's journal-before-change idea resembles [[File System Journaling and Crash Recovery]]; the sources do not make the comparison.
- Own inference: concurrency control relates to [[Critical Sections and Semaphores]] and [[Deadlock]]; not stated by sources.
- Gap: SQLite locking and MVCC vs PostgreSQL not read. Gap: the C in ACID is not detailed.
- Version-dependent pages: review by 2027-11-23.

## Related

- [[Isolation Levels and Anomalies]]
- [[SQLite and Python sqlite3]]
- [[CAP and Eventual Consistency]] (BASE as counterpart to ACID, per Brewer)
- [[File System Journaling and Crash Recovery]], [[Critical Sections and Semaphores]], [[Deadlock]] (inference)

## Sources

- [[PostgreSQL Docs - Transactions and Isolation]] — all-or-nothing, durability, commands.
- [[SQLite Docs - Datatypes Foreign Keys Atomic Commit]] — atomic commit mechanism.
- [[Python Docs - sqlite3 module]] — commit/rollback in Python.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: "rolled back at next open" replaced by recovery on the first access by any process after a crash.
