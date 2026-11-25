---
title: Entity-Relationship Modeling
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Watt and Eng - Database Design Ch8-13 ER Modeling and Design Process]]", "[[RPI CSCI 4380 (Adali) - ER Models and Mapping]]"]
tags: [finding, databases]
---

# Entity-Relationship Modeling

> **Summary:** ER modeling describes data as entities, attributes and relationships before a relational schema is produced. Two sources (Watt and Eng, level A; RPI, level B) cover the core; notation differs between them.

## What it is

Watt and Eng (ch.8): entities (strong or weak), attributes (simple, composite, multivalued, derived), keys, nulls; relationship types 1:M, 1:1, M:N, unary, ternary. Design process (ch.13): requirements gathering, analysis (conceptual model), logical design, implementation (DDL), populating. Per ch.13, database design starts with a conceptual data model and produces a specification of a logical schema (verbatim excerpt).

RPI: weak entity key combines the key of the supporting entity with its own partial key. Cardinality uses arrows: a plain arrow means at most one; a rounded arrow means exactly one (required participation).

## How it works

Design advice (RPI): simpler models are better; avoid ternary relationships if binary suffice; check entities are in BCNF/3NF (see [[Normal Forms 1NF to BCNF]]). RPI also states that ER models are object-oriented, not relational, despite the name (recorded excerpt).

## Key terms

> **Weak entity**: an entity identified using the key of a supporting entity plus a partial key (RPI).

> **Cardinality / participation**: how many related instances are allowed, and whether participation is required (RPI arrow notation; Watt and Eng connectivity).

## Example

Own illustration: Employee (strong) and Dependent (weak, keyed by employee id plus dependent name).

## Contradictions and uncertainties

- Notation diverges: RPI uses arrows (not Chen or crow's foot, per its source note); Watt and Eng use their own diagrams. Check which notation a course uses.
- RPI ER page (re-read 2026-11-23): the plain arrow is "at most one"; "one and only one" is stated only for the rounded arrow. The earlier "exactly one" reading of the plain arrow does not appear on this page; any such wording elsewhere in RPI material is unconfirmed.
- The statement that ER models are "object-oriented, not relational" is a single course-note opinion, but Watt and Eng say ER models are readily translated to relations; these are compatible (modeling style vs translation), not a conflict.

## Related

- [[Mapping ER to Relational Schema]]
- [[Relational Model and Keys]]
- [[Normal Forms 1NF to BCNF]]
- [[Graph Representations and Traversal]]: own inference (an ER diagram is itself a graph); no source says this.

## Sources

- [[Watt and Eng - Database Design Ch8-13 ER Modeling and Design Process]] — entity/relationship types, design process.
- [[RPI CSCI 4380 (Adali) - ER Models and Mapping]] — arrow notation, weak entities, design advice.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: noted the ambiguity of RPI's plain arrow ("at most one" vs "exactly one").
