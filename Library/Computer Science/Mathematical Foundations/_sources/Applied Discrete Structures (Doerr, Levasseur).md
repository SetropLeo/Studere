---
title: Applied Discrete Structures (Doerr, Levasseur)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Alan Doerr and Kenneth Levasseur (University of Massachusetts Lowell)
published: 2017 (online version 3-14, June 2026)
url: https://discretemath.org/ads/index-ads.html
accessed: 2026-11-23
url-verified: true
tags: [source, sets, relations, functions]
---

# Applied Discrete Structures (Doerr, Levasseur)

## Why it is reliable (or not)

Open-access university textbook (CC BY-NC-SA 3.0 US), also listed on the Open Textbook Library (https://open.umn.edu/opentextbooks/textbooks/160), maintained into 2026. Written for a discrete-math course for CS students. Sections read: 1.1 (`s-set-Notation-and-Relations.html`), 6.3 (`s-properties-of-relations.html`), 7.1 (`s-function-def-notation.html`), 7.2 (`s-properties-of-functions.html`), all under https://discretemath.org/ads/. Content was extracted through a summarizing fetch tool, so quotes are short and should be rechecked on the page before being used verbatim in a course.

## Extracted points

- A set is informally "a collection of objects that are called elements"; the book says this is not a proper definition. Membership x ∈ A. Subset: every element of A is in B. Equality: A ⊆ B and B ⊆ A. Set-builder notation {expression | conditions}.
- Relation properties: reflexive, symmetric, antisymmetric, transitive.
- Symmetric: "whenever a r b, it follows that b r a". Antisymmetric: "whenever a r b and a ≠ b then b r a is false" (6.3).
- Equivalence relation = reflexive + symmetric + transitive; "those relations which satisfy the definition behave quite like the equality relation" (it is not said there that equality itself is an equivalence relation).
- Partial ordering = reflexive + antisymmetric + transitive (non-strict); set with it is a poset.
- Function (Def 7.1.1; numbering reported by one verifier only, unconfirmed on the page): each element of A is related to exactly one element of B; domain A, codomain B, range = set of images (subset of codomain).
- 7.2 (https://discretemath.org/ads/s-properties-of-functions.html): Def 7.2.1 injective (one-to-one): distinct inputs give distinct outputs (for all a, b in A, a ≠ b implies f(a) ≠ f(b)); Def 7.2.2 surjective (onto): range f(A) equals codomain B; Def 7.2.3 bijective: both injective and surjective.
- Programming links: function as a machine; small functions shown in two-line array notation; Sage/Python typing note. (The "lookup table / dictionary" reading is not in 7.1; it was removed.)

## Relevant excerpts

> "a collection of objects that are called elements" (1.1)

> "r is reflexive if and only if a r a for all a ∈ A." (6.3)

> "whenever a r b and b r c then a r c." (6.3)

> "each element of A is related to exactly one element of the set B." (7.1; definition number unconfirmed)

> "The range of a function is the set of images of its domain." (7.1)

## Used in

- [[Set]], [[Relation]], [[Equivalence Relation]], [[Partial Order]], [[Function]]

## History

- 2026-11-23: registered and read (sections 1.1, 6.3, 7.1, 7.2).
- 2026-11-23: stage 2 fixes: corrected the "behaves much like equality" quote; added symmetric/antisymmetric wordings and 7.2 definitions; removed the "lookup table like a dictionary" claim; marked Def 7.1.1 numbering as unconfirmed.
