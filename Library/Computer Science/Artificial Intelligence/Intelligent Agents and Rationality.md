---
title: Intelligent Agents and Rationality
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: established
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Berkeley CS188 Textbook - Search and Games]]", "[[SEP - Artificial Intelligence]]"]
tags: [finding, ai]
---

# Intelligent Agents and Rationality

> **Summary:** An agent perceives through sensors and acts through actuators; a rational agent acts to get the best expected outcome given its goals or preferences. PEAS is the checklist for specifying a task environment.

## What it is

- SEP (attributed to Russell and Norvig) defines AI as the study of agents that receive percepts from the environment and perform actions.
- Berkeley CS188: a rational agent is "an entity that has goals or preferences and tries to perform a series of actions" that yield the best expected outcome; agents have sensors and actuators; it distinguishes reflex agents from planning agents.
- Both sources use the same agent framing; the shared claim is the percept-action loop. Confidence `established` applies to that framing only (2 read sources); the details of PEAS and reflex/planning rest on Berkeley alone.

## How it works

> **PEAS**: Performance measure, Environment, Actuators, Sensors; the four items used to describe a task (Berkeley CS188).

Reflex agents choose an action from the current percept; per Berkeley a reflex agent "doesn't think about the consequences of its actions". Planning agents consider consequences of actions before choosing (paraphrase).

Environment types (Berkeley agents page): partially vs fully observable, stochastic vs deterministic, single-agent vs multi-agent, static vs dynamic, and known vs unknown physics.

## Key terms

> **Rational agent**: an agent that acts for the best expected outcome given its goals or preferences (Berkeley, paraphrased).

> **Percept**: what the agent senses from the environment (SEP usage).

## Example

Own illustration (gloss, unsourced): for a robot vacuum, performance = area cleaned; environment = rooms; actuators = wheels and brush; sensors = bump and dirt sensors.

## Contradictions and uncertainties

- Berkeley lists the environment types but the note does not record their formal definitions: gap.

## Related

- [[What Artificial Intelligence Is - History and Approaches]]
- [[Uninformed Search]]
- [[Informed Search and A-Star]]

## Sources

- [[Berkeley CS188 Textbook - Search and Games]] - rational agent, PEAS, reflex vs planning
- [[SEP - Artificial Intelligence]] - agent definition

## History

- 2026-11-23: created (draft).
- 2026-11-23: verified by verifier, light pass, single-source accepted per user decision.
- 2026-11-23: wording fix after light verification: added Berkeley's verbatim rational-agent and reflex-agent wording and the environment types; removed the environment-types gap and the fetch-summary hedge.
