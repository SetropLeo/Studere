---
title: Dive into Deep Learning (Zhang et al)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book (open, HTML, Cambridge University Press 2023)
author: Aston Zhang, Zachary C. Lipton, Mu Li, Alexander J. Smola
published: 2023 (version 1.0.3)
url: https://d2l.ai/
accessed: 2026-11-23
url-verified: true
tags: [source]
---

# Dive into Deep Learning (Zhang et al)

Pages read: https://d2l.ai/ (authors/version), /chapter_introduction/index.html, /chapter_linear-regression/index.html, /chapter_multilayer-perceptrons/backprop.html, /chapter_optimization/gd.html.

## Why it is reliable (or not)

Published textbook by recognized researchers, used in many university courses, with executable code (Python; PyTorch/others). Deep-learning-centric; brief on classical AI. Intro page: only first 100k of 139k characters read.

## Extracted points

- Kinds of ML: supervised (regression, classification), unsupervised/self-supervised, reinforcement learning (agent, rewards, policy, exploration vs exploitation).
- Backpropagation: gradient computation by the chain rule from output to input, reusing values stored in the forward pass; training alternates forward pass, backprop and optimizer update.
- Gradient descent: x <- x - eta * grad f(x); learning rate too large diverges, too small makes no progress.
- Linear regression chapter includes generalization, underfitting and overfitting.

## Relevant excerpts

> "Machine learning is the study of algorithms that can learn from experience." (introduction)

> "Backpropagation refers to the method of calculating the gradient of neural network parameters." (backprop section)

> "Too large and we diverge, too small and we do not make progress." (gradient descent; as reported by fetch)

## Used in

- Subtopic 4 (kinds of ML), subtopic 5 (backprop, gradient descent, deep learning overview)

Findings: [[Machine Learning Basics]], [[Linear Regression and the Perceptron]], [[Neural Networks and Backpropagation]], [[Reinforcement Learning Basics]]

## History

- 2026-11-23: registered and read (researcher, stage 1). Nielsen's book (neuralnetworksanddeeplearning.com) could not be opened (certificate error) and was discarded; deeplearningbook.org returned truncated content and was discarded.
