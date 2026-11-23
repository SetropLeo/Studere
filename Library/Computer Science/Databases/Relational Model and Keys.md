---
title: Relational Model and Keys
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Watt and Eng - Database Design Ch7-9 Relational Model and Integrity]]", "[[Guide to Database Systems - The Relational Model and UNC INLS 256 Notes]]"]
tags: [finding, databases]
---

# Relational Model and Keys

> **Summary:** A relation is a set of tuples over attribute domains; keys identify tuples. Two independent sources (Watt and Eng, level A; Guide to Database Systems with UNC notes, level B) agree on the core terms.

## What it is

Per Watt and Eng, a relation is a subset of the Cartesian product of domains; a tuple is a row, and there are no duplicate rows. The Guide to Database Systems and the UNC notes agree: domain, attribute, tuple, relation as a set of tuples, with order irrelevant. NULL marks unknown or unavailable; UNC notes it is ambiguous (unknown, inapplicable, no value).

## How it works

Keys:

- Superkey: a set of attributes for which no two tuples share the same values (Guide).
- Candidate key: a minimal superkey (Guide, "key = minimal superkey").
- Primary key: the chosen candidate key; the remaining candidate keys are alternate keys (Watt and Eng ch.8: "Alternate keys are all candidate keys not chosen as the primary key"; the Guide page does not mention alternate keys). Watt and Eng also list composite, secondary and foreign keys (ch.8).
- Foreign key: refers to a primary key of another (or the same) relation; see [[Integrity Constraints]].

Constraint kinds in the Guide: inherent (no duplicate tuples), schema-based (domain, entity, referential), application-based.

## Key terms

> **Relation**: subset of the Cartesian product of domains (Watt and Eng). See the mathematical [[Relation]] and [[Set]] notes; the link between the math notion and the database notion is the source's own statement, but the mathematical details come from the other notes.

> **Superkey** / **Candidate key** / **Primary key** / **Alternate key**: as above.

## Example

Own illustration: Student(id, email, name) where both id and email are unique: each is a candidate key, id is chosen as primary key, email is then an alternate key.

## Contradictions and uncertainties

- Watt and Eng ch.7 is thin; keys are defined in ch.8. The Guide pages have no named authors (level B).
- Gap: attribute closure and finding all candidate keys from functional dependencies are not covered; see [[Functional Dependencies]].

## Related

- [[Integrity Constraints]]
- [[Relational Algebra]]
- [[Entity-Relationship Modeling]]
- [[Relation]], [[Set]], [[Function]] (own inference: a functional dependency resembles a function from key to attribute values; not stated by the sources)

## Sources

- [[Watt and Eng - Database Design Ch7-9 Relational Model and Integrity]] — relation, tuple, keys.
- [[Guide to Database Systems - The Relational Model and UNC INLS 256 Notes]] — superkey, candidate/primary keys, NULL, constraint kinds.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision). Wording fix pending: "alternate key" is in Watt and Eng, not in the Guide page.
- 2026-11-23: wording fix after light verification: alternate key attributed to Watt and Eng ch.8, not the Guide; also fixed in the Guide source note. Also, the Sources line for the Guide no longer lists alternate keys.
