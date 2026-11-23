---
title: RPI CSCI 4380 (Adali) - ER Models and Mapping
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: Sibel Adali (Rensselaer Polytechnic Institute, CSCI 4380 Database Systems 1)
published: Fall 2025 course notes
url: https://cs.rpi.edu/~sibel/csci4380/fall2025/course_notes/er.html
accessed: 2026-11-23
url-verified: true
tags: [source, databases]
---

# RPI CSCI 4380 (Adali) - ER Models and Mapping

## Why it is reliable (or not)

University course notes by the instructor. Level B. Uses an arrow-based cardinality notation (not Chen or crow's foot), which differs from Watt and Eng. Note the divergence when teaching notation.

## Extracted points

- Cardinality via arrows: plain arrow = at most one; rounded arrow = exactly one (required participation).
- Weak entities: key combines key of supporting entity with own partial key.
- Mapping: entity -> relation; 1:N -> foreign key on the many side; 1:1 -> key on the side with required participation; M:N -> new relation with combined keys and relationship attributes; subclasses -> three options (one relation, one per subclass, parent + subclass relations).
- Design advice: prefer simpler models, avoid ternary relationships if binary suffice; check entities are in BCNF/3NF.

## Relevant excerpts

> "ER models are object-oriented, not relational (despite the obvious name)." 

> "Simpler models are better: if ternary relationships are not needed, then don't use them."

## Used in

- Subtopic 5 (ER modeling and mapping). [[Entity-Relationship Modeling]], [[Mapping ER to Relational Schema]]

## History

- 2026-11-23: registered and read (light process).
