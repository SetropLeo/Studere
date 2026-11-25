---
title: Watt and Eng - Database Design Ch8-13 ER Modeling and Design Process
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Adrienne Watt, Nelson Eng (ch.8 adapted from Nguyen Kim Anh, CC BY 3.0)
published: unknown (date not shown on page)
url: https://eng.libretexts.org/Courses/Prince_Georges_Community_College/INT_2080%3A_Database_Design_(Watt_and_Eng)/08%3A_The_Entity_Relationship_Data_Model
accessed: 2026-11-23
url-verified: true
tags: [source, databases]
---

# Watt and Eng - Database Design Ch8-13 ER Modeling and Design Process

Also read: ch.13 `.../13%3A_Database_Development_Process` (same base path).

## Why it is reliable (or not)

Open textbook (CC BY). Accessible; the ER-to-relational mapping is described briefly inside ch.8, less rule-by-rule than Elmasri/Navathe. See the RPI notes source for a fuller mapping.

## Extracted points

- Entities (strong/weak), attributes (simple, composite, multivalued, derived), keys, nulls.
- Relationship types: 1:M, 1:1, M:N, unary, ternary.
- Mapping: M:N becomes a linking relation with both primary keys; 1:1 is "rare"; unary uses a self-referencing key. 1:M is defined only with a department example and said to "should be the norm"; the chapter gives no mapping rule and no foreign key for 1:M.
- Design process: requirements gathering, analysis (conceptual model), logical design, implementation (DDL), populating.

## Relevant excerpts

> "ER models are readily translated to relations." (ch.8)

> "Database design starts with a conceptual data model and produces a specification of a logical schema." (ch.13)

## Used in

- Subtopic 5 (ER modeling, design process). [[Entity-Relationship Modeling]], [[Mapping ER to Relational Schema]]

## History

- 2026-11-23: registered and read (light process).
- 2026-11-23: wording fix after light verification: removed the overstated "1:M via foreign key" extracted point (ch.8 re-fetched twice; no 1:M mapping rule).
