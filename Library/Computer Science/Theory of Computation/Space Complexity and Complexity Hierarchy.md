---
title: Space Complexity and Complexity Hierarchy
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[SEP - Computational Complexity Theory]]"]
tags: [finding, theory-of-computation, complexity]
---

# Space Complexity and Complexity Hierarchy

> **Summary:** Space complexity counts tape cells used; classes L, PSPACE and others sit in a chain of inclusions, of which only a few are known to be proper.

## What it is

Per SEP: space complexity = maximum tape cells used; PSPACE = polynomial space; L = SPACE(log n). TQBF is PSPACE-complete (Stockmeyer and Meyer, 1973). Hierarchy theorems (Theorem 3.1): time (Hartmanis-Stearns 1965), nondeterministic time (Cook 1972), space (Stearns-Hartmanis-Lewis 1965).

Chain: L <= NL <= P <= NP <= PSPACE <= EXP. The hierarchy theorems give P != EXP and L != PSPACE; the other inclusions are not known to be proper. This statement was confirmed by re-reading SEP.

## How it works

Hierarchy theorems say more resources solve strictly more problems. Savitch's theorem is NOT covered (gap).

## Key terms

> **TQBF**: true quantified Boolean formulas, PSPACE-complete (SEP).

## Example

None sourced.

## Contradictions and uncertainties

- Single source, fetch-summarized; recheck. `debated`.

## Related

- [[Complexity Classes P and NP]], [[NP-Completeness and Cook-Levin]], [[Asymptotic Notation and Growth of Functions]] (own inference)

## Sources

- [[SEP - Computational Complexity Theory]] — space classes, hierarchy theorems.

## History

- 2026-11-23: created.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: removed the recheck flag; L != PSPACE and P != EXP confirmed by re-reading SEP.
