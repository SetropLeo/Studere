---
title: Haskell base library - Data.Semigroup documentation
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: Haskell base library maintainers (GHC / Core Libraries Committee)
published: "base-4.22.0.0 docs"
url: https://hackage-content.haskell.org/package/base-4.22.0.0/docs/Data-Semigroup.html
accessed: 2026-11-23
url-verified: true
tags: [source, semigroup, monoid, programming]
---

# Haskell base - Data.Semigroup

## Why it is reliable (or not)

Official library documentation of the language's standard library (version base-4.22.0.0). Level A for how the structures are used in programming, not for the mathematics itself. Only the first ~100k characters of a very long page were read (class definition and laws).

## Extracted points

- Semigroup = "types with an associative binary operation", method `(<>) :: a -> a -> a`.
- Law: `x <> (y <> z) = (x <> y) <> z`; regrouping must not change the result.
- Monoid adds a neutral element (`mempty`); some types (e.g. `NonEmpty`) are Semigroups but not Monoids. Shows semigroup-vs-monoid distinction in real code.
- Software-engineering relevance: associativity allows regrouping, which is what lets folds/reductions be split (inference from the law; not stated as such in the excerpt read).

## Relevant excerpts

> "The class of semigroups (types with an associative binary operation)." (Data.Semigroup, class Semigroup)

## Used in

- [[Semigroup, Monoid and Group]]

## History

- 2026-11-23: registered and read (researcher, stage 1).
