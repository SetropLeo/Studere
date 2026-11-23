---
title: Reinforcement Learning Basics
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: uncertain
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Berkeley CS188 Textbook - Probability, ML, Neural Networks and RL]]", "[[Dive into Deep Learning (Zhang et al)]]"]
tags: [finding, ai, ml, rl]
---

# Reinforcement Learning Basics

> **Summary:** Introductory only. Berkeley frames RL as online planning from samples (s, a, s', r) over episodes, split into model-based and model-free; d2l lists agent, rewards, policy and exploration versus exploitation.

## What it is

- Berkeley: RL is online planning; the agent learns from samples (s, a, s', r) gathered in episodes; methods are model-based or model-free.
- d2l: RL is one kind of machine learning, with an agent, rewards, a policy, and the exploration versus exploitation trade-off (names only in the source note).

## How it works

Not covered in depth by the read sources. Gap: Q-learning, value iteration, Markov decision processes and exploration strategies are not in the recorded content. Own inference: value iteration is dynamic-programming-like, see [[Dynamic Programming]]; not stated by a source.

## Key terms

> **Model-free**: the agent learns without an explicit model of transitions and rewards (gloss, unsourced; Berkeley names the split).

> **Episode**: one run of the agent in the environment (gloss, unsourced).

## Example

Not covered.

## Contradictions and uncertainties

- Depth is intro only; do not build a course module on this note alone.

## Related

- [[Machine Learning Basics]]
- [[Intelligent Agents and Rationality]]
- [[Dynamic Programming]] (own inference)

## Sources

- [[Berkeley CS188 Textbook - Probability, ML, Neural Networks and RL]] - intro
- [[Dive into Deep Learning (Zhang et al)]] - terminology

## History

- 2026-11-23: created (draft).
- 2026-11-23: verified by verifier, light pass, single-source accepted per user decision.
