---
title: NP-Completeness and Cook-Levin
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

# NP-Completeness and Cook-Levin

> **Summary:** A problem is NP-complete if it is in NP and every NP problem reduces to it; SAT was the first, shown by Cook (1971) and Levin (1973). Whether P = NP is open.

## What it is

Per SEP: NP-complete = in NP and every NP problem reduces to it (polynomial-time many-one, see [[Complexity Classes P and NP]]). Cook (1971) and Levin (1973): SAT is NP-complete. 3-SAT, Vertex Cover and TSP are shown NP-complete via reductions. "If any NP-complete problem is in P then P = NP" is standard but was not seen in the portion of SEP read (`unverified`). P vs NP is described as often called the single most important open question of theoretical computer science (the quoted phrase in the source note is a fetcher excerpt; paraphrased here, recheck).

## How it works

Own inference: SAT is the satisfiability problem for formulas of [[Propositional Logic]]; SEP's treatment in the part read is of SAT as a decision problem, and its link to logic notes was not read.

## Key terms

> **SAT**: Boolean satisfiability, decision problem named in SEP; definition not recorded in the source note (gloss, unsourced: is there a truth assignment making a formula true).

## Example

Problems shown NP-complete via reductions: 3-SAT, Vertex Cover, TSP (as named by SEP; SEP does not give the order of a reduction chain in the text read).

## Contradictions and uncertainties

- Gap: Cook-Levin proof sketch and further NP-complete problem examples are not sourced.
- Single source; `debated`.

## Related

- [[Complexity Classes P and NP]], [[Propositional Logic]], [[Graph Representations and Traversal]] (own inference: Vertex Cover and TSP are graph problems; not stated in the source note)

## Sources

- [[SEP - Computational Complexity Theory]] — NP-completeness, Cook-Levin, P vs NP.

## History

- 2026-11-23: created.
- 2026-11-23: verified (light pass, single-source accepted per user decision).
- 2026-11-23: wording fix after light verification: replaced "chain of reductions" with "problems shown NP-complete via reductions"; "any NP-complete in P implies P = NP" marked standard but unverified in the SEP portion read.
