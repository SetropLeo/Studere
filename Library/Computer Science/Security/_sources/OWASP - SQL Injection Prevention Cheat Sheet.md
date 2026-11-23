---
title: OWASP - SQL Injection Prevention Cheat Sheet
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: blog
author: OWASP Cheat Sheets Series Team
published: undated
url: https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, appsec, sqli]
---

# OWASP - SQL Injection Prevention Cheat Sheet

## Why it is reliable (or not)

OWASP community guidance, widely used industry reference (level B). Undated. Pairs with the Python sqlite3 docs already in the library (Databases/_sources) for placeholders.

## Extracted points

- Primary defense: parameterized queries (prepared statements); SQL structure is separate from data bound via the API.
- Table/column names and sort direction cannot be parameterized: use allow-list mapping.
- Avoid manual escaping (dialect-dependent).
- Defense in depth: least-privilege DB accounts, separate users per app, views, restricted OS account; input validation complements, not replaces, binding.

## Relevant excerpts

> "Do not manually escape untrusted values to construct SQL queries. Use parameterized queries instead." (reconfirmed 2026-11-23)

## Used in

- [[SQL Injection and Parameterized Queries]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: wording fix after light verification: key quote reconfirmed against the page; "as returned by page fetch" flag dropped.
