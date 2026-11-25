---
title: Adversarial Search - Minimax and Alpha-Beta
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Berkeley CS188 Textbook - Search and Games]]"]
tags: [finding, ai, search, games]
---

# Adversarial Search - Minimax and Alpha-Beta

> **Summary:** Minimax is the basic algorithm for zero-sum games; alpha-beta pruning returns the same result while skipping branches. Single source (Berkeley CS188).

## What it is

> **Zero-sum game**: one player's gain is the other's loss (gloss, unsourced). Berkeley presents minimax for this case.

## How it works

- Minimax: time complexity O(b^m) (Berkeley), b branching factor, m maximum depth (gloss on symbols, unsourced).
- Alpha-beta pruning: gives the same result as minimax. Berkeley's exact wording is that it "can reduce our runtime to as good as O(b^(m/2))": a best case, not a guarantee. The page adds "In practice, it's often a lot less."
- Pruning idea (verbatim): "stop looking as soon as you know that n's value can at best equal the optimal value of n's parent."

## Key terms

> **Pruning**: skipping parts of the search tree that cannot change the result (gloss, unsourced).

## Example

Not covered by the read source.

## Contradictions and uncertainties

- Worst-case behavior of alpha-beta, move ordering and depth-limited evaluation functions are not in the source note: gap.

## Related

- [[Uninformed Search]]
- [[Informed Search and A-Star]]
- [[Graph Representations and Traversal]] (own inference: game trees are traversed depth first; not stated in the source)

## Sources

- [[Berkeley CS188 Textbook - Search and Games]] - minimax, alpha-beta

## History

- 2026-11-23: created (draft).
- 2026-11-23: verified by verifier, light pass, single-source accepted per user decision.
- 2026-11-23: wording fix after light verification: "about" replaced by Berkeley's "as good as O(b^(m/2))" (best case), added "In practice, it's often a lot less"; removed recheck hedges.
