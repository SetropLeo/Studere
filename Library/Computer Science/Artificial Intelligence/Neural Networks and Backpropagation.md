---
title: Neural Networks and Backpropagation
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Berkeley CS188 Textbook - Probability, ML, Neural Networks and RL]]", "[[Dive into Deep Learning (Zhang et al)]]"]
tags: [finding, ai, ml, deep-learning]
---

# Neural Networks and Backpropagation

> **Summary:** Multilayer networks stack perceptron-like units with nonlinear activations; backpropagation computes gradients by the chain rule, reusing stored forward-pass values, and gradient descent uses them to update parameters. Two sources, each covering part of the claims.

## What it is

- Berkeley: neural networks are stacked perceptrons with nonlinear activations (sigmoid, ReLU). Without nonlinearity the network collapses to a linear function. The universal approximation claim (not detailed in the source note), softmax and log-likelihood are on Berkeley's motivation.html page, not on perceptrons.html.
- d2l (verbatim): "Backpropagation refers to the method of calculating the gradient of neural network parameters."

## How it works

- d2l: gradients computed by the chain rule from output to input, reusing values stored in the forward pass; training alternates forward pass, backpropagation and optimizer update.
- Gradient descent (d2l): x <- x - eta * grad f(x). The learning rate trade-off (verbatim): "Too large and we diverge, too small and we do not make progress."
- Confidence `debated` (not `established`): the nonlinearity claim rests on Berkeley, backpropagation and the learning rate on d2l; no claim is confirmed by both.

## Key terms

> **Activation function**: nonlinear function applied to a unit's weighted sum, e.g. sigmoid, ReLU (Berkeley).

> **Learning rate** (eta): step size of gradient descent (d2l).

## Example

Own illustration: a network with only linear activations is equivalent to one linear map (Berkeley states the collapse; the algebra is not in the source).

## Contradictions and uncertainties

- Nielsen's book and deeplearningbook.org could not be read (certificate error, truncated content). The d2l intro was read only in part (100k of 139k characters).
- Berkeley's motivation.html page (Neural Networks: Motivation) states training by gradient ascent on the log-likelihood ("We find the optimal values of the parameters using the gradient ascent method"); Berkeley's optimization.html page defines gradient ascent (maximize an objective) and gradient descent (minimize a loss, opposite direction). d2l uses gradient descent on a loss; treating the two as a sign convention is own inference.

## Related

- [[Linear Regression and the Perceptron]]
- [[Machine Learning Basics]]
- [[Dynamic Programming]] (own inference: reuse of stored intermediate values resembles memoization; not stated by d2l)

## Sources

- [[Berkeley CS188 Textbook - Probability, ML, Neural Networks and RL]] - multilayer networks, activations
- [[Dive into Deep Learning (Zhang et al)]] - backpropagation, gradient descent

## History

- 2026-11-23: created (draft).
- 2026-11-23: verified by verifier, light pass, single-source accepted per user decision.
- 2026-11-23: wording fix after light verification: learning-rate quote confirmed verbatim; Berkeley page attribution corrected (universal approximation, softmax, log-likelihood are on motivation.html).
- 2026-11-23: verifier re-check: Contradictions sentence corrected; gradient ascent is stated on motivation.html (and defined on optimization.html), not perceptrons.html.
