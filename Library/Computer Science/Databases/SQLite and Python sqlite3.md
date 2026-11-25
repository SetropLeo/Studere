---
title: SQLite and Python sqlite3
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[SQLite Docs - Datatypes Foreign Keys Atomic Commit]]", "[[Python Docs - sqlite3 module]]"]
tags: [finding, databases]
---

# SQLite and Python sqlite3

> **Summary:** SQLite types belong to values, and Python's sqlite3 module offers placeholders and transaction control. Each claim has one official source, hence `debated`.

## What it is

SQLite (datatype3): the datatype of a value is associated with the value itself, not with its container (verbatim excerpt). Column affinity is recommended, not required. STRICT tables (3.37.0 and later) enforce types.

## How it works

Python docs (read to about 100,000 of 108,815 characters; the transaction-control prose section was cut off in the fetch, so details come from reference/how-to parts):

- Placeholders: `?` (qmark) and `:name`; never build SQL with string operations, because of SQL injection.
- `commit()`, `rollback()`, `close()` (pending changes are lost without commit), `in_transaction`.
- `autocommit` attribute (since 3.12 per the source note): False (PEP 249 behavior, recommended), True, or LEGACY_TRANSACTION_CONTROL (current default, uses `isolation_level`).
- Legacy mode: execute() opens a transaction implicitly before INSERT/UPDATE/DELETE/REPLACE; executescript() commits first.
- `with con:` commits on success and rolls back on exception; it does not close the connection.
- Foreign keys: see [[Integrity Constraints]].
- Crash recovery (SQLite atomic commit): after a crash, a hot journal is recovered on the first access to the database by any process; see [[Transactions and ACID]].

## Key terms

> **Type affinity**: SQLite's recommended (not required) preferred type for a column.

> **Placeholder**: a parameter marker in SQL text that the driver binds separately from the SQL.

## Example

Own illustration; behavior per the Python source:

```python
import sqlite3
con = sqlite3.connect(":memory:")
con.execute("PRAGMA foreign_keys = ON")
con.execute("CREATE TABLE t(id INTEGER PRIMARY KEY, name TEXT)")
with con:  # commit on success, rollback on exception
    con.execute("INSERT INTO t(name) VALUES (?)", ("Ada",))
    con.execute("INSERT INTO t(name) VALUES (:n)", {"n": "Bob"})
con.close()
```

## Contradictions and uncertainties

- Version-dependent: the autocommit default may change; review by 2027-11-23.
- Excerpts in the source notes came partly via a fetch summarizer: wording is paraphrased here; recheck verbatim before quoting.
- Gap: SQLite locking/MVCC vs PostgreSQL not read; SQLite lang_* DDL/DML pages unread.
- Gap: the transaction-control prose of the Python page was not read.

## Related

- [[Integrity Constraints]]
- [[Transactions and ACID]]
- [[SQL Queries, Joins and Aggregation]]
- [[Sockets and Socket Programming in Python]]: own inference, another Python standard-library I/O interface.
- Planned area: Security (injection).

## Sources

- [[SQLite Docs - Datatypes Foreign Keys Atomic Commit]] — typing, foreign key pragma.
- [[Python Docs - sqlite3 module]] — placeholders, transactions, `with con:`.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: crash-recovery wording stated as recovery on the first access by any process (replaces "rolled back at next open").
