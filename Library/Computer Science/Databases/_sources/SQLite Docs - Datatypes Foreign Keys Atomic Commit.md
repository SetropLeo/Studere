---
title: SQLite Docs - Datatypes Foreign Keys Atomic Commit
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: SQLite project (sqlite.org)
published: current docs, read 2026-11-23 (page dates not recorded)
url: https://www.sqlite.org/foreignkeys.html
accessed: 2026-11-23
url-verified: true
tags: [source, databases]
---

# SQLite Docs - Datatypes Foreign Keys Atomic Commit

Pages read: `https://www.sqlite.org/datatype3.html`, `https://www.sqlite.org/foreignkeys.html`, `https://www.sqlite.org/atomiccommit.html`.

## Why it is reliable (or not)

Official documentation of the engine the user will practice with. Key for Python sqlite3 exercises, where SQLite deviates from other systems (dynamic typing, foreign keys off by default).

## Extracted points

- Dynamic typing: type belongs to the value; column "affinity" is recommended, not required; STRICT tables (3.37.0+) enforce types.
- Foreign keys disabled by default; `PRAGMA foreign_keys = ON` per connection; no-op inside a multi-statement transaction; default action NO ACTION; DEFERRABLE INITIALLY DEFERRED; parent key needs PK or UNIQUE.
- Atomic commit: rollback journal written before changing the database; fsync ordering; commit point = journal deleted; after a crash, hot journal recovery happens on the first access by any process; default synchronous=FULL.

## Relevant excerpts

> "In SQLite, the datatype of a value is associated with the value itself, not with its container." (datatype3)

> "Foreign key constraints are disabled by default (for backwards compatibility), so must be enabled separately for each database connection." (foreignkeys)

> "Atomic commit means that either all database changes within a single transaction occur or none of them occur." (atomiccommit)

## Used in

- Subtopics 2, 4, 7 (SQLite-specific behavior and durability). [[SQLite and Python sqlite3]], [[Integrity Constraints]], [[Transactions and ACID]]

## History

- 2026-11-23: registered and read (light process).
