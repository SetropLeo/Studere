---
title: Normal Forms 1NF to BCNF
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Watt and Eng - Database Design Ch11-12 Functional Dependencies and Normalization]]"]
tags: [finding, databases]
---

# Normal Forms 1NF to BCNF

> **Summary:** Normal forms are progressively stricter rules that reduce redundancy. The definitions below are Watt and Eng's, which are primary-key-based, not candidate-key-based.

## What it is

Per Watt and Eng (ch.12):

- 1NF: only single values at each row/column intersection; repeating groups move to a new table.
- 2NF: 1NF and no partial dependency on a composite key.
- 3NF: 2NF and no transitive dependency. A recorded excerpt: a non-key attribute may not be functionally dependent on another non-key attribute.
- BCNF: every determinant is a candidate key; stricter than 3NF.

## How it works

Normalization uses [[Functional Dependencies]] to find partial and transitive dependencies and then splits tables. Own inference: the splitting follows the dependencies found.

## Key terms

> **Partial dependency**: a non-key attribute depends on only part of a composite key.

> **Transitive dependency**: a non-key attribute depends on another non-key attribute.

## Example

Own illustration: Student(id, dept, dept_head) with dept → dept_head violates 3NF; split into Student(id, dept) and Dept(dept, dept_head).

## Contradictions and uncertainties

- The source note says the 1NF-3NF definitions are PK-centric ("non-key attributes vs the primary key"), simpler than candidate-key-based definitions in Elmasri/Navathe or Silberschatz (3NF/BCNF with all candidate keys, prime attributes). Those textbooks were not read; this is the source note's remark. Treat these as beginner definitions.
- Gap: candidate-key-based 3NF/BCNF, decomposition algorithms, lossless join and dependency preservation are not covered.

## Related

- [[Functional Dependencies]]
- [[Entity-Relationship Modeling]] (RPI advises checking entities are in BCNF/3NF)
- [[Relational Model and Keys]]

## Sources

- [[Watt and Eng - Database Design Ch11-12 Functional Dependencies and Normalization]] — definitions of 1NF to BCNF.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision).
