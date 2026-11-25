---
title: Watt and Eng - Database Design Ch7-9 Relational Model and Integrity
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Adrienne Watt, Nelson Eng (LibreTexts INT 2080, open textbook "Database Design")
published: unknown (date not shown on page)
url: https://eng.libretexts.org/Courses/Prince_Georges_Community_College/INT_2080%3A_Database_Design_(Watt_and_Eng)/09%3A_Integrity_Rules_and_Constraints
accessed: 2026-11-23
url-verified: true
tags: [source, databases]
---

# Watt and Eng - Database Design Ch7-9 Relational Model and Integrity

Also read: ch.7 `.../07%3A_The_Relational_Data_Model` and ch.8 `.../08%3A_The_Entity_Relationship_Data_Model` (same base path).

## Why it is reliable (or not)

Open textbook (CC BY), used in courses. Ch.7 is thin (relation, tuple, domain only; the Key Terms heading does not define keys); keys are defined in ch.8. Not a source for relational algebra.

## Extracted points

- A relation is a subset of the Cartesian product of domains; tuple = row; no duplicate rows.
- Keys (ch.8): candidate, composite, primary, secondary, alternate, foreign.
- Entity integrity: primary key (or any part) cannot be null.
- Referential integrity: foreign key must match a primary key value in the parent or be null; avoids orphan rows; options cascade update/delete, set null.
- Enterprise constraints and business rules (cardinality/connectivity).

## Relevant excerpts

> "Referential integrity requires that a foreign key must have a matching primary key or it must be null." (ch.9)

> "Neither the PK nor any part of it can contain null values." (ch.9)

## Used in

- Subtopic 2 (relational model). [[Relational Model and Keys]], [[Integrity Constraints]]

## History

- 2026-11-23: registered and read (light process).
