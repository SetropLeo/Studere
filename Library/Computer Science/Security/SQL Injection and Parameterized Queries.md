---
title: SQL Injection and Parameterized Queries
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[OWASP - SQL Injection Prevention Cheat Sheet]]"]
tags: [finding, security, appsec, sqli]
---

# SQL Injection and Parameterized Queries

> **Summary:** The OWASP primary defense against SQL injection is the parameterized query (prepared statement): SQL structure is kept separate from the data bound through the API. Defensive concepts only; no attack steps.

## What it is

> **SQL injection**: untrusted input ends up interpreted as part of a SQL statement instead of as data. (Gloss, unsourced: the fetched OWASP extract records the defenses, not a definition.)

> **Parameterized query / prepared statement**: a query whose structure is fixed and into which values are bound through the database API.

## How it works

OWASP guidance recorded in the source note:
- Use parameterized queries as the primary defense.
- Table names, column names and sort direction cannot be parameterized; use allow-list mapping.
- Avoid manual escaping, which is dialect-dependent. Page text as returned by fetch: "Do not manually escape untrusted values to construct SQL queries. Use parameterized queries instead." (reconfirmed against the live page on 2026-11-23.)
- Defense in depth: least-privilege database accounts, separate users per application, views, restricted OS account. Input validation complements, but does not replace, binding.

## Key terms

> **Allow-list**: a fixed set of permitted values that input is mapped to (gloss, unsourced).

## Example

Own illustration (not from the OWASP page); the placeholder behavior itself is documented in [[SQLite and Python sqlite3]]:

```python
import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE users (name TEXT)")
name = "alice"  # untrusted input
con.execute("INSERT INTO users VALUES (?)", (name,))  # bound, not concatenated
rows = con.execute("SELECT name FROM users WHERE name = ?", (name,)).fetchall()
```

## Contradictions and uncertainties

- Single level-B source, undated; its quoted line was reconfirmed on 2026-11-23.
- A formal definition and the mechanism of injection are not sourced (gap).

## Related

- [[SQLite and Python sqlite3]] (what this note adds: the security rationale for placeholders)
- [[SQL Queries, Joins and Aggregation]], [[SQL Views and Authorization]] (views and privileges as the defense-in-depth layers, linked as related; the OWASP page names views)
- [[Security Design Principles]], [[Access Control and Privilege]], [[Cross-Site Scripting]] (same root pattern, own inference: untrusted data treated as code)

## Sources

- [[OWASP - SQL Injection Prevention Cheat Sheet]] - all claims.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
