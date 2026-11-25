---
title: SQL Queries, Joins and Aggregation
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[PostgreSQL Docs - SQL Tutorial Constraints Views Privileges]]", "[[RPI CSCI 4380 (Adali) - Relational Algebra and Logic Notes]]"]
tags: [finding, databases]
---

# SQL Queries, Joins and Aggregation

> **Summary:** The PostgreSQL tutorial (level A, one product's dialect) and the RPI sql_basics notes (level B) both cover SELECT, joins, aggregates and GROUP BY/HAVING; details below come from PostgreSQL.

## What it is

SQL query basics in the RPI notes: SELECT/WHERE/DISTINCT, DML (INSERT/UPDATE/DELETE), DDL, joins, aggregates, GROUP BY/HAVING, and set operations UNION/INTERSECT/EXCEPT.

## How it works

PostgreSQL tutorial:

- Joins: queries that access multiple tables (or multiple instances of the same table) at one time are called join queries (verbatim excerpt). Inner join with JOIN ... ON; LEFT OUTER JOIN keeps unmatched left rows with nulls; a self join uses aliases.
- Aggregates: count, sum, avg, max, min, with GROUP BY.
- WHERE vs HAVING: WHERE selects input rows before groups and aggregates are computed; HAVING selects group rows afterward (paraphrase of the verbatim excerpt in the source note).

## Key terms

> **Outer join**: a join that keeps rows without a match, filling with nulls (PostgreSQL, left variant).

> **Self join**: joining a table to itself via aliases.

## Example

Own illustration:

```sql
SELECT c.name, count(*) FROM orders o JOIN customers c ON o.cid = c.id
GROUP BY c.name HAVING count(*) > 5;
```

## Contradictions and uncertainties

- PostgreSQL docs describe PostgreSQL; other systems and the SQL standard (not read) may differ.
- SQL uses bag semantics while algebra uses sets; see [[Relational Algebra]].
- Gap: indexes, query processing and optimization are not covered at all. Own inference only: indexes are commonly built on structures like [[Balanced Search Trees]] or [[Hash Table]]; no source here says it.
- Gap: SQLite lang_* DDL/DML pages unread.

## Related

- [[Relational Algebra]]
- [[SQL Views and Authorization]]
- [[SQLite and Python sqlite3]]
- [[Integrity Constraints]]

## Sources

- [[PostgreSQL Docs - SQL Tutorial Constraints Views Privileges]] — joins, aggregates, WHERE vs HAVING (PostgreSQL 19).
- [[RPI CSCI 4380 (Adali) - Relational Algebra and Logic Notes]] — SQL basics list, bag semantics.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision).
