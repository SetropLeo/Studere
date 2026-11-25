---
stage: 0
date: 2026-11-23
status: scoped
outcome: library+course
path: Library/Computer Science
tags: [request]
---

# Computer Science Theoretical Foundations

## Topic

Theoretical foundations of Computer Science, from fundamentals through several themes, modeled on a reference curriculum: UFSC Bacharelado em Ciencias da Computacao, curriculo 20271 (9 phases, 3000 h CNE). The reference document is kept as the scope source; see [[_Curriculum Map]].

## Context (who I am, what I already know)

The user already programs (practical experience) but lacks the theoretical base of Computer Science. Practice exercises in Python.

## Goal (what I want to be able to do/understand)

Understand the theory behind what they already do: logic and discrete mathematics, how algorithms are analyzed, how machines, operating systems, networks and databases work, what is computable, how AI and security are grounded. Be able to reason formally about programs and systems, not only write them.

## Current level
<!-- zero | basic | intermediate | advanced -->
basic in theory (intermediate in programming)

## Recorded assumptions

- Programming fundamentals in Python are assumed (curriculum INE5802 is not taught as a module).
- Chosen scope is "core": nine areas (see below). The user did not ask for calculus, linear algebra, statistics, software engineering, compilers, paradigms, distributed/parallel computing, graphics or electives; these are annotated, not researched.
- Reference curriculum is a structure guide only; facts in the library come from researched sources (stage 1), not from the curriculum document.
- Breadth over depth per area (one introductory-to-intermediate pass); deeper dives can follow via later `research-topic` runs with `depth: specific`.
- The user asked that all curriculum items left out remain annotated for later study (done in the Curriculum Map, section "Deferred").
- Fast-changing parts (AI, security, networks practice) get `review-by`.
- Outcome: library + full course (default route A).

## Scope

### Path in the library

`Library/Computer Science/<Area>/` with areas: Mathematical Foundations, Algorithms and Data Structures, Computer Architecture, Operating Systems, Computer Networks, Databases, Theory of Computation, Artificial Intelligence, Security. Folders are created only when notes exist. Curriculum Map: `Library/Computer Science/_Curriculum Map.md`.

### Subtopics

Full per-area list with guiding questions is in [[_Curriculum Map]] (section "In-scope areas"). Summary:

| # | Subtopic (area) | Guiding question |
|---|-----------------|------------------|
| 1 | Mathematical Foundations | What logic, proof, counting and number tools underlie all of computing? |
| 2 | Algorithms and Data Structures | How do we organize data and measure the cost of solving problems? |
| 3 | Computer Architecture | How do transistors become a machine that runs instructions? |
| 4 | Operating Systems | How does software share and protect hardware? |
| 5 | Computer Networks | How do machines exchange data reliably across the world? |
| 6 | Databases | How is data stored, queried and kept consistent? |
| 7 | Theory of Computation | What can and cannot be computed, and at what cost? |
| 8 | Artificial Intelligence | What are the main approaches to machine intelligence? |
| 9 | Security | How are systems and data protected, and why does cryptography work? |

## History

- 2026-11-23: request created and scoped (core scope, library + course).
