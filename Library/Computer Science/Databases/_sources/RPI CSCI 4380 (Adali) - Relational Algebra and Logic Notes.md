---
title: RPI CSCI 4380 (Adali) - Relational Algebra and Logic Notes
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: Sibel Adali (Rensselaer Polytechnic Institute, CSCI 4380 Database Systems 1)
published: Fall 2026 course notes (relational_algebra, sql_basics); Spring 2016 (logic_bagsemantics)
url: https://www.cs.rpi.edu/~sibel/csci4380/fall2026/course_notes/relational_algebra.html
accessed: 2026-11-23
url-verified: true
tags: [source, databases]
---

# RPI CSCI 4380 (Adali) - Relational Algebra and Logic Notes

Also read: `https://www.cs.rpi.edu/~sibel/csci4380/fall2026/course_notes/sql_basics.html` and `https://cs.rpi.edu/~sibel/csci4380/spring2016/course_notes/logic_bagsemantics.html`.

## Why it is reliable (or not)

University course notes by the course instructor, current-year. Level B (course material). The relational_algebra page has no relational calculus; the logic page covers Datalog (a logic-based language equivalent to algebra, plus recursion), not tuple/domain calculus as in textbooks.

## Extracted points

- Operators: selection, projection (dedupes), union, difference, intersection (derived), Cartesian product, theta/natural join, rename; union compatibility; renaming before product.
- Algebra works on sets; SQL uses bags (duplicates); bag extension adds duplicate elimination, extended projection, outer joins, aggregation, grouping.
- Intersection: R ∩ S = (R ∪ S) − ((R − S) ∪ (S − R)).
- Queries have a foundation in logic: facts = tuples, queries = Datalog rules; closed-world negation, safety.
- SQL notes: SELECT/WHERE/DISTINCT, DML (INSERT/UPDATE/DELETE), DDL, joins, aggregates, GROUP BY/HAVING, set ops UNION/INTERSECT/EXCEPT.

## Relevant excerpts

> "Relational algebra is a mathematical query language for relations." (relational_algebra)

> "As each operator returns a set of tuples, any duplicate values will be removed." (relational_algebra)

## Used in

- Subtopic 3 (relational algebra; calculus only partially via Datalog), subtopic 4 (SQL queries, minor). [[Relational Algebra]], [[SQL Queries, Joins and Aggregation]]

## History

- 2026-11-23: registered and read (light process).
