---
title: Berkeley CS188 Textbook - Probability, ML, Neural Networks and RL
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: UC Berkeley CS 188 staff (individual authors not shown in fetched text)
published: site current for Summer 2025
url: https://inst.eecs.berkeley.edu/~cs188/textbook/ml/
accessed: 2026-11-23
url-verified: true
tags: [source]
---

# Berkeley CS188 Textbook - Probability, ML, Neural Networks and RL

Pages read: `/ml/machine-learning.html`, `/ml/perceptrons.html`, `/ml/linear-regression.html`, `/ml/motivation.html`, `/rl/rl.html`, `/bayes-nets/probability.html` (base https://inst.eecs.berkeley.edu/~cs188/textbook/). Note: `/bayes_nets/` (underscore) returned 404; the working path uses a hyphen.

## Why it is reliable (or not)

Course notes from a major university AI course. Overfitting is NOT discussed on the ML intro page; use scikit-learn for it. Perceptron update rule was not in the fetched part.

## Extracted points

- Supervised vs unsupervised: supervised learns input-output mapping from labeled data; unsupervised finds structure in unlabeled data. Data split into train, validation, test; test set unseen until the end.
- Perceptron: linear classifier, activation h_w(x) = w . f(x), positive if > 0.
- Linear regression: continuous output as weighted sum of features; least squares, closed-form solution by setting gradient to zero.
- Neural networks: stacked perceptrons with nonlinear activations (sigmoid, ReLU); without nonlinearity the network collapses to a linear function. Universal approximation claim, softmax and log-likelihood are on `/ml/motivation.html` (not `/ml/perceptrons.html`); gradient ascent training.
- RL: online planning, samples (s,a,s',r), episodes; model-based vs model-free.
- Probability: random variables, distributions, joint, chain rule, marginalization, conditional probability, Bayes' rule P(A|B) = P(B|A)P(A)/P(B).

## Relevant excerpts

> "never seen by your agent until the very end of development" (test set; ML intro, as reported)

> "Regression problems are a form of machine learning problem in which the output is a continuous variable." (linear regression)

> "The basic idea of a linear classifier is to do classification using a linear combination of the features." (perceptrons)

## Used in

- Subtopic 4 (supervised/unsupervised, train/test, linear regression, RL intro); subtopic 5 (perceptron, multilayer networks); subtopic 7 (Bayes rule)

Findings: [[Machine Learning Basics]], [[Linear Regression and the Perceptron]], [[Neural Networks and Backpropagation]], [[Reinforcement Learning Basics]], [[Bayes' Rule and Probabilistic Reasoning]]

## History

- 2026-11-23: registered and read (researcher, stage 1).
- 2026-11-23: wording fix after light verification: page attribution corrected (universal approximation, softmax, log-likelihood on motivation.html, not perceptrons.html).
