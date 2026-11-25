---
title: Linear Regression and the Perceptron
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
tags: [finding, ai, ml]
---

# Linear Regression and the Perceptron

> **Summary:** Linear regression predicts a continuous output as a weighted sum of features; the perceptron is a linear classifier. Berkeley CS188 is the main source; the perceptron update rule is a gap.

## What it is

- Regression (verbatim in the source note): "Regression problems are a form of machine learning problem in which the output is a continuous variable."
- Linear classifier (verbatim): "The basic idea of a linear classifier is to do classification using a linear combination of the features."

## How it works

- Perceptron (Berkeley): activation h_w(x) = w . f(x), where the class is positive if this value is greater than 0 (w weights, f(x) feature vector: gloss on symbols).
- Linear regression (Berkeley): output as a weighted sum of features; fit by least squares; closed-form solution by setting the gradient to zero.
- d2l has a linear regression chapter (including generalization, underfitting and overfitting) and presents gradient descent, see [[Neural Networks and Backpropagation]]; the page contents beyond the chapter list were not recorded.

## Key terms

> **Least squares**: choose weights minimizing the sum of squared prediction errors (gloss, unsourced beyond the term).

## Example

Not covered by the read source.

## Contradictions and uncertainties

- Gap: the perceptron learning (update) rule was not in the fetched part. Not stated here.
- Single detailed source (Berkeley).

## Related

- [[Machine Learning Basics]]
- [[Neural Networks and Backpropagation]]
- [[Decision Trees and k-Nearest Neighbors]]

## Sources

- [[Berkeley CS188 Textbook - Probability, ML, Neural Networks and RL]] - perceptron, regression
- [[Dive into Deep Learning (Zhang et al)]] - chapter scope

## History

- 2026-11-23: created (draft).
- 2026-11-23: verified by verifier, light pass, single-source accepted per user decision.
