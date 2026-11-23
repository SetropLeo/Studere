---
title: OpenDSA Sets and Relations (Shaffer)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: book
author: Cliff Shaffer (Virginia Tech), OpenDSA Project contributors
published: 2012-2020 (copyright range stated on page)
url: https://opendsa-server.cs.vt.edu/ODSA/RST/en/Background/SetDef.rst
accessed: 2026-11-23
url-verified: true
tags: [source, sets, relations]
---

# OpenDSA Sets and Relations (Shaffer)

## Why it is reliable (or not)

Background chapter of the OpenDSA open eTextbook on data structures (MIT license), from a university CS department. Level B because it is a short background module aimed at data-structures students, not a full discrete-math text. The fetched file is the raw .rst source. It does not define functions.

## Extracted points

- Set = collection of distinguishable members.
- Relation R over S = set of ordered pairs from S.
- Equivalence relation = reflexive, symmetric, transitive.
- Partial order = antisymmetric and transitive; then "If the relation is reflexive, it is called a non-strict partial order. If the relation is irreflexive, it is called a strict partial order."
- Symmetric: "whenever aRb, then bRa". Antisymmetric: "whenever aRb and bRa, then a = b". Uses both "total order" and "linear order".
- Written for data-structures students; the page mentions UNION/FIND and minimum-cost spanning trees (it does not frame order relations as used for sorting; an earlier note claiming that was wrong and was deleted).

## Relevant excerpts

> "A set is a collection of distinguishable members or elements." 

> "A relation R over set S is a set of ordered pairs from S."

> "R is an equivalence relation on set S if it is reflexive, symmetric, and transitive."

> "A binary relation is called a partial order if it is antisymmetric and transitive."

> "If the relation is reflexive, it is called a non-strict partial order. If the relation is irreflexive, it is called a strict partial order."

## Divergence

None on partial order. This source gives a general definition (antisymmetric and transitive) and then names both variants; [[Applied Discrete Structures (Doerr, Levasseur)]] and [[Open Logic Project Sets Relations Functions (Zach)]] use the reflexive (non-strict, like ≤) one. A course should still state which variant it uses.

## Used in

- [[Set]], [[Relation]], [[Equivalence Relation]], [[Partial Order]]

## History

- 2026-11-23: registered and read.
- 2026-11-23: stage 2 fixes: corrected the partial order extraction and the "Divergence" section (source does name strict and non-strict variants); deleted the false "used for sorting" bullet; added symmetric/antisymmetric wordings.
