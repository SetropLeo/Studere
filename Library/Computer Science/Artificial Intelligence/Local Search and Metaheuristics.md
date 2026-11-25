---
title: Local Search and Metaheuristics
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
tags: [finding, ai, search]
---

# Local Search and Metaheuristics

> **Summary:** Local search improves a current candidate step by step instead of building paths. Berkeley CS188 covers hill climbing (with random restart), simulated annealing and genetic algorithms. Single source.

## What it is

> **Local search**: search that keeps a current state (or population) and moves to neighbors, without tracking the path (gloss, unsourced).

## How it works

- Hill climbing (steepest ascent): can get stuck at local maxima and plateaus; random restart is complete (Berkeley).
- Simulated annealing: accepts worse moves with a probability that decreases with temperature; slow cooling reaches the global optimum with probability approaching 1 (Berkeley, as summarized).
- Genetic algorithms: a population, fitness-proportional selection, crossover and mutation (Berkeley).

## Key terms

> **Local maximum**: a state better than all its neighbors but not the best overall (gloss, unsourced).

## Example

Not covered by the read source. Own illustration: restart hill climbing from several random starts and keep the best result.

## Contradictions and uncertainties

- Single source; fetch summary only. The conditions for the annealing guarantee (cooling schedule) were not recorded.

## Related

- [[Uninformed Search]]
- [[Informed Search and A-Star]]

## Sources

- [[Berkeley CS188 Textbook - Search and Games]] - local search methods

## History

- 2026-11-23: created (draft).
- 2026-11-23: verified by verifier, light pass, single-source accepted per user decision.
