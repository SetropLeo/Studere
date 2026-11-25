---
title: Mapping ER to Relational Schema
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[RPI CSCI 4380 (Adali) - ER Models and Mapping]]", "[[Watt and Eng - Database Design Ch8-13 ER Modeling and Design Process]]"]
tags: [finding, databases]
---

# Mapping ER to Relational Schema

> **Summary:** Each entity becomes a relation; many-to-many needs a linking relation (both sources agree). The one-to-many foreign-key rule and subclass mapping come from RPI only; Watt and Eng give no 1:M mapping rule.

## What it is

Per Watt and Eng (ch.8), ER models are readily translated to relations (verbatim excerpt). The mapping there is brief.

## How it works

RPI rules:

- Entity becomes a relation.
- 1:N: foreign key on the many side (RPI only).
- 1:1: key on the side with required participation.
- M:N: new relation with the combined keys and any relationship attributes.
- Subclasses: three options (one relation; one per subclass; parent plus subclass relations) (RPI only).

Watt and Eng (ch.8): M:N becomes a linking relation with both primary keys; 1:1 is "rare"; unary uses a self-referencing key. 1:M is defined only with a department example and said to "should be the norm"; no mapping rule or foreign key is given. The sources agree on M:N only.

## Key terms

> **Linking relation**: relation created for an M:N relationship holding the keys of both sides (Watt and Eng).

## Example

Own illustration: Student and Course (M:N) become Student, Course and Enrollment(student_id, course_id, ...), with constraints from [[Integrity Constraints]].

## Contradictions and uncertainties

- The 1:N foreign-key rule and subclass mapping are single source (RPI).
- Sources agree on M:N only.
- Watt and Eng call 1:1 rare; RPI gives a rule for where to place the key; no conflict, but different emphasis.

## Related

- [[Entity-Relationship Modeling]]
- [[Integrity Constraints]]
- [[Relational Model and Keys]]
- [[Normal Forms 1NF to BCNF]]

## Sources

- [[RPI CSCI 4380 (Adali) - ER Models and Mapping]] — mapping rules.
- [[Watt and Eng - Database Design Ch8-13 ER Modeling and Design Process]] — linking relation, other cases.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verification pass kept draft and downgraded confidence to debated: Watt and Eng ch.8 does not state "1:M via foreign key"; fix attribution (1:N foreign key is RPI only).
- 2026-11-23: wording fix after light verification: removed the 1:M foreign-key attribution to Watt and Eng (ch.8 re-fetched twice: no 1:M rule, 1:M "should be the norm"); sources agree on M:N only; 1:N foreign key and subclass mapping marked RPI-only. Status draft and confidence debated unchanged.
- 2026-11-23: light pass, single-source accepted per user decision. Verified against RPI ER page and Watt and Eng ch.8; status verified, confidence debated.
