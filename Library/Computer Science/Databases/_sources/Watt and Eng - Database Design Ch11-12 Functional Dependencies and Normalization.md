---
title: Watt and Eng - Database Design Ch11-12 Functional Dependencies and Normalization
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Adrienne Watt, Nelson Eng (open textbook "Database Design")
published: unknown (date not shown on page)
url: https://eng.libretexts.org/Courses/Prince_Georges_Community_College/INT_2080%3A_Database_Design_(Watt_and_Eng)/12%3A_Normalization
accessed: 2026-11-23
url-verified: true
tags: [source, databases]
---

# Watt and Eng - Database Design Ch11-12 Functional Dependencies and Normalization

Also read: ch.11 `.../11%3A_Functional_Dependencies` (same base path).

## Why it is reliable (or not)

Open textbook (CC BY). Definitions are PK-centric (non-key attributes vs "the" primary key), simpler than the candidate-key-based definitions in Elmasri/Navathe or Silberschatz (3NF/BCNF with all candidate keys, prime attributes). Ch.11 does not define attribute closure (X+) or minimal cover: a gap for the exercises on closure and candidate-key finding. Use as beginner explanation; confirm formal definitions elsewhere.

## Extracted points

- FD: determinant -> dependent. Armstrong's axioms: reflexivity, augmentation, transitivity; derived union, decomposition.
- 1NF: only single values at each row/column intersection; repeating groups moved to a new table.
- 2NF: 1NF and no partial dependency on a composite key.
- 3NF: 2NF and no transitive dependency.
- BCNF: every determinant is a candidate key; stricter than 3NF.

## Relevant excerpts

> "For any relation R, attribute Y is functionally dependent on attribute X (usually the PK)" (ch.11)

> "a non-key attribute may not be functionally dependent on another non-key attribute." (ch.12, 3NF)

## Used in

- Subtopic 6 (FDs and normalization). Closure/candidate-key algorithm still needs a source. [[Functional Dependencies]], [[Normal Forms 1NF to BCNF]]

## History

- 2026-11-23: registered and read (light process).
