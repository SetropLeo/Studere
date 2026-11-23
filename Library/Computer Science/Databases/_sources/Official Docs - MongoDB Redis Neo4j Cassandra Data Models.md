---
title: Official Docs - MongoDB Redis Neo4j Cassandra Data Models
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: MongoDB Inc.; Redis Ltd.; Neo4j Inc.; Apache Software Foundation (Cassandra)
published: current docs, read 2026-11-23
url: https://www.mongodb.com/docs/manual/core/data-modeling-introduction/
accessed: 2026-11-23
url-verified: true
tags: [source, databases]
---

# Official Docs - MongoDB Redis Neo4j Cassandra Data Models

Pages read: MongoDB `https://www.mongodb.com/docs/manual/core/data-modeling-introduction/`; Redis `https://redis.io/docs/latest/develop/data-types/`; Neo4j `https://neo4j.com/docs/getting-started/get-started-with-neo4j/graph-database/`; Cassandra `https://cassandra.apache.org/doc/latest/cassandra/architecture/overview.html`.

## Why it is reliable (or not)

Vendor/project official documentation, so authoritative on what each product does but promotional about its own advantages (e.g. Neo4j's claim that traversals avoid joins is a vendor claim). Not a neutral comparison; combine with the Brewer CAP source. Product-specific, not a general taxonomy.

## Extracted points

- Document (MongoDB): flexible schema, polymorphic data; "data that's accessed together should be stored together"; embedding vs referencing.
- Key-value / data structure server (Redis): strings, hashes, lists, sets, sorted sets, streams, etc. (current Redis docs also list JSON, arrays, probabilistic types, time series and vector sets); hashes resemble Python dicts.
- Graph (Neo4j): property graph of nodes (labels, properties) and directed typed relationships with properties.
- Wide-column (Cassandra): partitioned wide-column; partition key decides node placement; eventually consistent semantics; no cross-partition transactions, distributed joins or foreign keys.

## Relevant excerpts

> "Documents within a single collection are not required to have the same set of fields or data types." (MongoDB)

> "Redis is a data structure server." (Redis)

## Used in

- Subtopic 8 (non-relational models, when to use). [[Non-Relational Data Models]]

## History

- 2026-11-23: registered and read (light process).
- 2026-11-23: wording fix after light verification: added the further Redis types (JSON, arrays, probabilistic types, time series, vector sets).
