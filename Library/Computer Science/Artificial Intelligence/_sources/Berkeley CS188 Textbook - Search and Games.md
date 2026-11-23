---
title: Berkeley CS188 Textbook - Search and Games
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: UC Berkeley CS 188 Introduction to Artificial Intelligence staff (individual authors not shown in fetched text)
published: Search chapter "Last updated: October 2024"; site current for Summer 2025 per index
url: https://inst.eecs.berkeley.edu/~cs188/textbook/search/
accessed: 2026-11-23
url-verified: true
tags: [source]
---

# Berkeley CS188 Textbook - Search and Games

Pages read (all HTML): `/search/` (index), `/search/agents.html`, `/search/uninformed.html`, `/search/informed.html`, `/search/local.html`, `/games/minimax.html`, under https://inst.eecs.berkeley.edu/~cs188/textbook/.

## Why it is reliable (or not)

University course notes from the course that uses AIMA; notes say some sections are adapted from AIMA. Good for exact definitions and complexities. Fetch output was a model-made summary of each page, so quoted fragments are those the summary reported as literal; check against the page before reusing verbatim. Consistency of heuristics was not covered in the informed-search page read.

## Extracted points

- Agent: rational agent has goals/preferences, acts for best expected outcome; sensors/actuators; reflex vs planning agents; PEAS (Performance, Environment, Actuators, Sensors).
- BFS: FIFO queue, complete, optimal only if equal costs, time and space O(b^s). DFS: LIFO stack, not complete (cycles), not optimal, time O(b^m), space O(bm). UCS: priority queue by path cost, complete and optimal with nonnegative edge costs, O(b^(C*/epsilon)).
- Greedy: expands lowest h only, not complete/optimal. A*: f(n)=g(n)+h(n); admissible means 0 <= h(n) <= h*(n); with admissible heuristic A* tree search is optimal.
- Minimax for zero-sum games, O(b^m). Alpha-beta pruning gives the same result as minimax; best-case about O(b^(m/2)).
- Local search: hill climbing (steepest ascent; local maxima and plateaus; random restart is complete), simulated annealing (accepts worse moves with probability decreasing with temperature; slow cooling reaches global optimum with probability approaching 1), genetic algorithms (population, fitness-proportional selection, crossover, mutation).

## Relevant excerpts

> "Depth-first search is not complete." (uninformed search)

> "UCS is also optimal if we assume all edge costs are nonnegative." (uninformed search)

> "always selects the frontier node with the lowest heuristic value for expansion" (greedy, informed search)

> "stop looking as soon as you know that n's value can at best equal the optimal value of n's parent." (minimax / alpha-beta)

## Used in

- Subtopic 2 (agents, uninformed/informed/adversarial search); subtopic 6 (hill climbing, simulated annealing, genetic algorithms)

Findings: [[Intelligent Agents and Rationality]], [[Uninformed Search]], [[Informed Search and A-Star]], [[Adversarial Search - Minimax and Alpha-Beta]], [[Local Search and Metaheuristics]]

## History

- 2026-11-23: registered and read (researcher, stage 1).
