---
title: Python Docs - sqlite3 module
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Python Software Foundation
published: Python 3 docs (current; mentions 3.12 autocommit and 3.14), read 2026-11-23
url: https://docs.python.org/3/library/sqlite3.html
accessed: 2026-11-23
url-verified: true
tags: [source, databases]
---

# Python Docs - sqlite3 module

## Why it is reliable (or not)

Official standard-library documentation. Note: I read the first ~100,000 of 108,815 characters; transaction-control prose section was cut off in the fetch summary, so details come from the reference/how-to parts. Behavior is version-dependent (autocommit attribute since 3.12; default legacy mode may change). `review-by` recommended.

## Extracted points

- `autocommit`: False (PEP 249 behavior, recommended), True, or LEGACY_TRANSACTION_CONTROL (current default; uses `isolation_level`).
- `commit()`, `rollback()`, `close()` (pending changes lost without commit), `in_transaction`.
- Legacy mode: execute() opens a transaction implicitly before INSERT/UPDATE/DELETE/REPLACE; executescript() commits first.
- `with con:` commits on success, rolls back on exception; does not close connection.
- Placeholders: `?` (qmark) and `:name`; never build SQL with string operations (injection).

## Relevant excerpts

> "If the body of the `with` statement finishes without exceptions, the transaction is committed. If this commit fails, or if the body raises an uncaught exception, the transaction is rolled back."

> "The `INSERT` statement implicitly opens a transaction, which needs to be committed before changes are saved in the database."

## Used in

- Subtopic 7 (sqlite3 transactions in Python), 4 (parameterized queries). [[SQLite and Python sqlite3]], [[Transactions and ACID]]

## History

- 2026-11-23: registered and read (light process).
