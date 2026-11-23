---
title: Database Management System and Data Independence
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Watt and Eng - Database Design Ch3-5 DBMS and Data Independence]]"]
tags: [finding, databases]
---

# Database Management System and Data Independence

> **Summary:** A DBMS keeps the description of the data (metadata) in a system catalogue instead of inside programs, and organizes it in layers so that changes at one layer need not break the next. Single source, so confidence is `debated`.

## What it is

> **DBMS** (Database Management System): software that manages a shared database. Gloss, unsourced; the source lists what a DBMS provides rather than defining it.

Watt and Eng list these benefits of a DBMS: controlled redundancy, integrity constraints, access restrictions, many simultaneous users, and backup and recovery. Per the source note, the data structure is stored in the system catalogue (metadata) and not in the programs; this is the basis of data independence.

## How it works

The source describes layered abstraction:

- external schemas: the user views;
- one conceptual schema (the logical schema);
- one physical schema.

Two kinds of independence follow. Physical data independence concerns the immunity of the internal model to changes in the physical model. Logical data independence is the ability to change the logical schema without changing the external schema (both are short phrases from the source note's recorded excerpts, from ch.5).

User categories named by the source: end users (application users and sophisticated users), application programmers, and database administrators (DBAs).

## Key terms

> **System catalogue**: where the data structure (metadata) is stored, per Watt and Eng.

> **Data independence**: the separation of programs from data structure and storage; see the two kinds above.

## Example

Own illustration (not from a source): if a table gains a new column, a view that selects only the old columns keeps working. This is the logical independence idea applied to SQL views; see [[SQL Views and Authorization]].

## Contradictions and uncertainties

- The terms "three-schema architecture" and "data dictionary" are not used by any source read in this area. Watt and Eng say "system catalogue". Do not treat the other terms as sourced here.
- Gap: the formal ANSI-SPARC wording is unread (the source note suggests Elmasri/Navathe). The three layers above are Watt and Eng's wording.
- Single source only (an introductory textbook), hence `debated`.

## Related

- [[Relational Model and Keys]]
- [[SQL Views and Authorization]]
- [[Transactions and ACID]]
- [[Paging and Virtual Memory]]: own inference, an operating-system analogy of an abstraction layer hiding physical storage; no source here says this.
- Planned area: Security (access restrictions).

## Sources

- [[Watt and Eng - Database Design Ch3-5 DBMS and Data Independence]] — benefits, system catalogue, layers, independence.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision).
