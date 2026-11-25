---
title: Guide to Database Systems - The Relational Model and UNC INLS 256 Notes
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: book
author: Authors not listed on page (Guide to Database Systems, OpenALG / Manifold, CC BY 4.0); UNC INLS 256 Database I course notes (author not named)
published: unknown
url: https://alg.manifoldapp.org/read/guide-to-database-systems/section/b8bd26b4-9bbd-4159-86dc-f11c7695fd0c
accessed: 2026-11-23
url-verified: true
tags: [source, databases]
---

# Guide to Database Systems - The Relational Model and UNC INLS 256 Notes

Also read: `https://ils.unc.edu/bmh/courses/gnet712/2014_spring/notes/relational.html` (UNC course notes; also lists RA operators: select, project, union, intersect, difference, product, join, divide).

## Why it is reliable (or not)

Both pages lack named authors, so level B (not A). Open-licensed text and university course material; they agree with each other and with Watt and Eng on keys/integrity (independent origins), which supports the claims. Use as second source for subtopic 2.

## Extracted points

- Domain, attribute, tuple, relation = set of tuples; order irrelevant; NULL marks unknown/unavailable (UNC: ambiguous: unknown, inapplicable, no value).
- Constraints: inherent (no duplicate tuples), schema-based (domain, entity, referential), application-based.
- Superkey: no two tuples share values; key = minimal superkey; primary key = chosen candidate key. (The page does not mention "alternate key"; that term is in Watt and Eng ch.8.)
- Foreign key must match a referenced primary key value or be NULL; violations handled by reject, cascade, set default/NULL.
- UNC: relational algebra has closure (each operation yields a relation).

## Relevant excerpts

> "the subset of attributes for which no two tuples have the same values" (Guide to Database Systems, superkey; as returned by the page text summary, short phrase)

## Used in

- Subtopic 2 (relational model); minor for subtopic 3. [[Relational Model and Keys]], [[Integrity Constraints]], [[Relational Algebra]]

## History

- 2026-11-23: registered and read (light process).
- 2026-11-23: wording fix after light verification: removed the "alternate keys" claim from extracted points (not on the page).
