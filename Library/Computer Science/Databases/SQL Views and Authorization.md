---
title: SQL Views and Authorization
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[PostgreSQL Docs - SQL Tutorial Constraints Views Privileges]]"]
tags: [finding, databases]
---

# SQL Views and Authorization

> **Summary:** In PostgreSQL a view is a named query reusable as a table, and privileges are managed with GRANT and REVOKE. Single vendor source, describing PostgreSQL only.

## What it is

- View: a named query that can be used like a table; it gives abstraction (PostgreSQL tutorial-views).
- Privileges: GRANT/REVOKE of SELECT, INSERT, UPDATE, DELETE, REFERENCES and others; the PUBLIC pseudo-role; WITH GRANT OPTION; owner and superuser (ddl-priv).

## How it works

Own inference: a view combined with a grant lets a user see only selected columns or rows. The source note records views as abstraction and privileges separately; it does not state this combination.

## Key terms

> **Privilege**: a right to perform an operation on an object, granted by GRANT.

> **PUBLIC**: PostgreSQL pseudo-role standing for all roles.

## Example

Own illustration:

```sql
CREATE VIEW v AS SELECT id, name FROM person;
GRANT SELECT ON v TO analyst;
```

## Contradictions and uncertainties

- PostgreSQL only. Whether other systems (including SQLite) support GRANT/REVOKE is not recorded in the source notes, so it is not stated here.
- Version-dependent (PostgreSQL 19 docs): review by 2027-11-23.

## Related

- [[Database Management System and Data Independence]] (views as external schema is an own inference)
- [[SQL Queries, Joins and Aggregation]]
- Planned area: Security (access control).

## Sources

- [[PostgreSQL Docs - SQL Tutorial Constraints Views Privileges]] — views, GRANT/REVOKE.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision).
