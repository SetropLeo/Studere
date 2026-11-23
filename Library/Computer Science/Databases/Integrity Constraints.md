---
title: Integrity Constraints
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Watt and Eng - Database Design Ch7-9 Relational Model and Integrity]]", "[[Guide to Database Systems - The Relational Model and UNC INLS 256 Notes]]", "[[PostgreSQL Docs - SQL Tutorial Constraints Views Privileges]]", "[[SQLite Docs - Datatypes Foreign Keys Atomic Commit]]"]
tags: [finding, databases]
---

# Integrity Constraints

> **Summary:** Rules that keep data valid: entity integrity, referential integrity and enterprise rules. The general rules are stated by Watt and Eng and the Guide; PostgreSQL and SQLite implement them with product-specific defaults.

## What it is

- Entity integrity: per Watt and Eng, neither the primary key nor any part of it can contain null values (ch.9, verbatim excerpt).
- Referential integrity: a foreign key must have a matching primary key or be null (ch.9, verbatim excerpt). It avoids orphan rows. Options on violation: cascade update/delete, set null (Watt and Eng); the Guide lists reject, cascade, set default/NULL.
- Enterprise constraints and business rules, including cardinality/connectivity (Watt and Eng).

Two sources (Watt and Eng, level A; Guide, level B) agree on entity and referential integrity.

## How it works

PostgreSQL (docs version 19; vendor docs describe PostgreSQL only):

- CHECK (a null result passes), NOT NULL, UNIQUE (nulls not equal by default), PRIMARY KEY (UNIQUE plus NOT NULL, one per table).
- FOREIGN KEY with ON DELETE/UPDATE: NO ACTION (default), RESTRICT, CASCADE, SET NULL, SET DEFAULT.

SQLite (vendor docs describe SQLite only):

- Foreign keys are disabled by default, for backwards compatibility, and must be enabled per connection with `PRAGMA foreign_keys = ON`.
- The pragma is a no-op inside a multi-statement transaction; the default action is NO ACTION; DEFERRABLE INITIALLY DEFERRED is supported; the parent key needs a PRIMARY KEY or UNIQUE.

## Key terms

> **Orphan row**: a child row whose foreign key points to no parent (consequence of broken referential integrity, per Watt and Eng).

> **Cascade**: propagate a parent update or delete to matching child rows.

## Example

Own illustration; the behavior comes from the SQLite source:

```python
import sqlite3
con = sqlite3.connect(":memory:")
con.execute("PRAGMA foreign_keys = ON")  # off by default, per connection
```

## Contradictions and uncertainties

- Defaults differ between engines: SQLite has foreign keys off by default; PostgreSQL docs describe constraints as enforced (the PostgreSQL note does not state a default-off setting). Do not assume one engine's behavior for another.
- The SQL standard was not read.
- Version-dependent pages (PostgreSQL, SQLite): review by 2027-11-23.

## Related

- [[Relational Model and Keys]]
- [[SQLite and Python sqlite3]]
- [[Mapping ER to Relational Schema]]
- Planned area: Security (access restrictions, injection).

## Sources

- [[Watt and Eng - Database Design Ch7-9 Relational Model and Integrity]] — entity and referential integrity, cascade/set null.
- [[Guide to Database Systems - The Relational Model and UNC INLS 256 Notes]] — constraint kinds, violation handling.
- [[PostgreSQL Docs - SQL Tutorial Constraints Views Privileges]] — SQL constraints in PostgreSQL.
- [[SQLite Docs - Datatypes Foreign Keys Atomic Commit]] — SQLite foreign key behavior.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision).
