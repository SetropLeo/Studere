---
title: Watt and Eng - Database Design Ch3-5 DBMS and Data Independence
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Adrienne Watt, Nelson Eng (LibreTexts INT 2080, Prince George's Community College; open textbook "Database Design")
published: unknown (date not shown on page)
url: https://eng.libretexts.org/Courses/Prince_Georges_Community_College/INT_2080%3A_Database_Design_(Watt_and_Eng)/05%3A_Data_Modelling
accessed: 2026-11-23
url-verified: true
tags: [source, databases]
---

# Watt and Eng - Database Design Ch3-5 DBMS and Data Independence

Also read: ch.3 `.../03%3A_Characteristics_and_Benefits_of_a_Database`, ch.14 `.../14%3A_Database_Users` (same base path). The opentextbc.ca original returned HTTP 403, so the LibreTexts mirror (CC BY) was used.

## Why it is reliable (or not)

Open (CC BY) university-level textbook, widely used in courses. Introductory and simplified: it does not use the terms "three-schema" or "data dictionary" (it says "system catalogue"). Pair with Elmasri/Navathe for the formal ANSI-SPARC wording if needed.

## Extracted points

- DBMS benefits: controlled redundancy, integrity constraints, access restrictions, many simultaneous users, backup and recovery.
- Data independence: data structure is stored in the system catalogue (metadata), not in programs.
- Layered abstraction: external schemas (user views), one conceptual schema, one physical schema; logical vs physical data independence.
- User categories: end users (application users, sophisticated users), application programmers, database administrators (DBAs).

## Relevant excerpts

> "the data structure is stored in the system catalogue and not in the programs." (ch.3)

> "Physical data independence refers to the immunity of the internal model to changes in the physical model" (ch.5)

> "logical data independence: the ability to change the logical schema without changing the external schema" (ch.5)

## Used in

- Subtopic 1 (DBMS and data models). [[Database Management System and Data Independence]]

## History

- 2026-11-23: registered and read (light process).
