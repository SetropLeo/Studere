---
title: PostgreSQL Docs - SQL Tutorial Constraints Views Privileges
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: PostgreSQL Global Development Group
published: PostgreSQL 19 documentation ("current"), read 2026-11-23
url: https://www.postgresql.org/docs/current/ddl-constraints.html
accessed: 2026-11-23
url-verified: true
tags: [source, databases]
---

# PostgreSQL Docs - SQL Tutorial Constraints Views Privileges

Pages read (all under `https://www.postgresql.org/docs/current/`): `ddl-constraints.html` (5.5), `ddl-priv.html` (privileges), `tutorial-join.html`, `tutorial-views.html`, `tutorial-agg.html`.

## Why it is reliable (or not)

Official documentation of the PostgreSQL project. Describes PostgreSQL's dialect: some points differ from SQLite (e.g. SQLite foreign keys off by default, dynamic typing) and from the SQL standard. Version-dependent: `current` URLs change; the version was 19.

## Extracted points

- Constraints: CHECK (null passes), NOT NULL, UNIQUE (nulls not equal by default), PRIMARY KEY = UNIQUE + NOT NULL (one per table), FOREIGN KEY with ON DELETE/UPDATE NO ACTION (default), RESTRICT, CASCADE, SET NULL, SET DEFAULT.
- Joins: inner join with JOIN ... ON; LEFT OUTER JOIN keeps unmatched left rows with nulls; self join with aliases.
- Aggregates: count/sum/avg/max/min, GROUP BY; WHERE filters rows before grouping, HAVING filters groups after.
- Views: a named query reusable as a table; give abstraction.
- Privileges: GRANT/REVOKE (SELECT, INSERT, UPDATE, DELETE, REFERENCES, ...), PUBLIC pseudo-role, WITH GRANT OPTION, owner/superuser.

## Relevant excerpts

> "Queries that access multiple tables (or multiple instances of the same table) at one time are called *join* queries." (tutorial-join)

> "`WHERE` selects input rows before groups and aggregates are computed ... whereas `HAVING` selects group rows after groups and aggregates are computed." (tutorial-agg)

> "A not-null constraint simply specifies that a column must not assume the null value." (5.5.2)

## Used in

- Subtopic 4 (SQL), also 2 (keys/constraints in SQL). [[SQL Queries, Joins and Aggregation]], [[SQL Views and Authorization]], [[Integrity Constraints]]

## History

- 2026-11-23: registered and read (light process).
