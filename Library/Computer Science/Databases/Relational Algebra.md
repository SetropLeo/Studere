---
title: Relational Algebra
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[RPI CSCI 4380 (Adali) - Relational Algebra and Logic Notes]]", "[[Guide to Database Systems - The Relational Model and UNC INLS 256 Notes]]"]
tags: [finding, databases]
---

# Relational Algebra

> **Summary:** A mathematical query language over relations. Main source: RPI course notes (level B, single source for the operators) plus the UNC notes for closure. `debated` for that reason. Relational calculus is a gap.

## What it is

Per the RPI notes (verbatim excerpt): relational algebra is a mathematical query language for relations. Another recorded excerpt: as each operator returns a set of tuples, duplicates are removed.

## How it works

Operators in the RPI notes: selection (σ), projection (π, removes duplicates), union (∪), difference (−), Cartesian product (×), theta join and natural join (⋈), rename (ρ). Intersection is derived: R ∩ S = (R ∪ S) − ((R − S) ∪ (S − R)). Union and difference need union compatibility; rename before a product to avoid clashing attribute names.

Closure (UNC notes): each operation yields a relation, so operations compose. The UNC notes also list intersect and divide.

Set vs bag: algebra works on sets; SQL uses bags (duplicates). The bag extension adds duplicate elimination, extended projection, outer joins, aggregation and grouping (RPI).

Logic foundation (RPI logic page): facts are tuples and queries are Datalog rules; closed-world negation, safety. This is Datalog, not tuple/domain relational calculus.

## Key terms

> **Union compatibility**: operands have the same attributes/types so union and difference are defined (gloss, unsourced beyond the RPI use of the term).

> **Bag**: a collection that allows duplicates.

## Example

Own illustration: σ_{age>30}(Student) selects rows; π_{name}(...) keeps one column and drops duplicate names. In SQL, SELECT DISTINCT name FROM Student WHERE age > 30 corresponds; see [[SQL Queries, Joins and Aggregation]].

## Contradictions and uncertainties

- Gap: relational calculus has no readable source. Any link to [[First-Order Logic]] or [[Propositional Logic]] is Own inference (the RPI notes mention logic via Datalog only).
- Operator list varies slightly (UNC lists divide; RPI notes record intersection as derived).

## Related

- [[Relational Model and Keys]]
- [[SQL Queries, Joins and Aggregation]]
- [[Set]], [[Relation]], [[Function]]: own inference for the mathematical background.
- [[First-Order Logic]], [[Propositional Logic]]: own inference, see above.

## Sources

- [[RPI CSCI 4380 (Adali) - Relational Algebra and Logic Notes]] — operators, set vs bag, Datalog.
- [[Guide to Database Systems - The Relational Model and UNC INLS 256 Notes]] — closure, operator list.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision).
