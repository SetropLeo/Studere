---
title: Non-Relational Data Models
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: uncertain
review-by: 2027-11-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Official Docs - MongoDB Redis Neo4j Cassandra Data Models]]"]
tags: [finding, databases]
---

# Non-Relational Data Models

> **Summary:** Four product-documented models: document (MongoDB), key-value / data structure server (Redis), property graph (Neo4j), wide-column (Cassandra). Vendor documentation; no neutral taxonomy was read.

## What it is

- Document (MongoDB): documents within a collection need not have the same fields or data types (verbatim excerpt). Guidance: data accessed together should be stored together; embedding vs referencing.
- Key-value (Redis): Redis is a data structure server (verbatim excerpt). Types: strings, hashes, lists, sets, sorted sets, streams and others; hashes resemble Python dicts.
- Graph (Neo4j): a property graph of nodes (labels, properties) and directed typed relationships with properties.
- Wide-column (Cassandra): partitioned; the partition key decides node placement; eventually consistent semantics; no cross-partition transactions, distributed joins or foreign keys.

## How it works

Embedding vs referencing in MongoDB parallels denormalized vs foreign-key designs; this comparison to [[Mapping ER to Relational Schema]] is an own inference.

## Key terms

> **Embedding**: nesting related data inside one document.

> **Partition key**: Cassandra's key that decides node placement.

## Example

Own illustration: a Python dict, as in [[Hash Table]]-backed dicts, resembles a Redis hash (the source only says hashes resemble dicts).

## Contradictions and uncertainties

- Vendor docs describe their own product; Neo4j's claim that traversals avoid joins is a vendor claim. Not a neutral comparison.
- Gap: neutral NoSQL taxonomy; Dynamo paper unread.
- Own inference: graph storage relates to [[Graph Representations and Traversal]].
- Fast-changing products: review by 2027-11-23.

## Related

- [[CAP and Eventual Consistency]]
- [[Relational Model and Keys]]
- [[Graph Representations and Traversal]] (inference), [[Hash Table]] (inference)

## Sources

- [[Official Docs - MongoDB Redis Neo4j Cassandra Data Models]] — all four models.

## History

- 2026-11-23: created (light process).
- 2026-11-23: verified (light pass, single-source accepted per user decision).
