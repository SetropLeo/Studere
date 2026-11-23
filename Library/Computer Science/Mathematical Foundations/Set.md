---
title: Set
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Applied Discrete Structures (Doerr, Levasseur)]]", "[[OpenDSA Sets and Relations (Shaffer)]]"]
tags: [finding, sets]
---

# Set

> **Summary:** A set is a collection of distinguishable objects called elements. Sets are the base vocabulary on which [[Relation]], [[Function]] and most other discrete-math notions are built.

## What it is

> **Set**: a collection of distinguishable members, called elements ([[OpenDSA Sets and Relations (Shaffer)]]; [[Applied Discrete Structures (Doerr, Levasseur)]]).

[[Applied Discrete Structures (Doerr, Levasseur)]] introduces a set informally as "a collection of objects that are called elements" and says openly that this is not a proper definition, only a working description.

## How it works

- Membership: `x ∈ A` means x is an element of A.
- Subset: A is a subset of B when every element of A is in B ([[Applied Discrete Structures (Doerr, Levasseur)]]).
- Equality: A = B exactly when A ⊆ B and B ⊆ A ([[Applied Discrete Structures (Doerr, Levasseur)]]).
- Set-builder notation: `{expression | conditions}` describes a set by a rule ([[Applied Discrete Structures (Doerr, Levasseur)]]).

## Key terms

> **Element**: an object that belongs to a set.
> **Subset**: a set all of whose elements also belong to another set.
> **Set-builder notation**: writing a set as `{expression | conditions}`.

## Example

Python set-builder notation resembles a set comprehension, `{x*x for x in range(5)}`. This is an analogy for study, not a claim made by the sources; the sources do not discuss Python sets (unverified as a statement of the sources, practice belongs to stage 4).

## Contradictions and uncertainties

- Sources do not give a formal (axiomatic) definition; the informal one is used.
- Not covered by the sources read: power set, complement, set operations as a topic, equivalence classes and partitions (gap). (An earlier remark that union and intersection "appear only as examples" was dropped as unverifiable.)
- Confidence is `debated` (not `established`) until a second independent source on sets is read in stage 1; the two sources read are an informal textbook description and a short background module.
- Candidate second sources (to be read in stage 1): Open Logic Project, sets chapter (builds.openlogicproject.org).

## Related

- [[Relation]], [[Function]], [[Equivalence Relation]], [[Partial Order]], [[Lattice]]

## Sources

- [[Applied Discrete Structures (Doerr, Levasseur)]] — informal definition, membership, subset, equality, set-builder notation.
- [[OpenDSA Sets and Relations (Shaffer)]] — "collection of distinguishable members".

## History

- 2026-11-23: created.
- 2026-11-23: stage 2 fixes after verification: confidence established -> debated (second independent source needed); dropped unverifiable "union and intersection appear only as examples"; Python example kept flagged as analogy; recorded candidate second source.
- 2026-11-23: verified (light pass, single-source accepted per user decision); fixes from history confirmed applied; quotes spot-checked against _sources.
