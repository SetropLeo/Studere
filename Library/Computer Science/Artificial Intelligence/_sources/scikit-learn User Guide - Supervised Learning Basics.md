---
title: scikit-learn User Guide - Supervised Learning Basics
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: official doc
author: scikit-learn developers
published: version 1.9.1 (stable, as read 2026-11-23)
url: https://scikit-learn.org/stable/modules/cross_validation.html
accessed: 2026-11-23
url-verified: true
tags: [source]
review-by: 2027-05-23
---

# scikit-learn User Guide - Supervised Learning Basics

Pages read: https://scikit-learn.org/stable/user_guide.html, .../modules/cross_validation.html, .../modules/tree.html, .../modules/neighbors.html, .../modules/model_evaluation.html (version 1.9.1; the metrics page was read only partly, about the first 100k of 175k characters).

## Why it is reliable (or not)

Official documentation of the de facto Python ML library; version-dependent API details change, hence review-by. Good for practice code; conceptual depth is moderate.

## Extracted points

- Overfitting and holding out a test set; tuning on the test set leaks information; k-fold cross-validation; fit preprocessing on training folds only (Pipeline).
- Decision trees: non-parametric supervised method for classification and regression; overfitting mitigated by pruning, min samples per leaf, max depth; unstable; greedy training (optimal tree is NP-complete); scikit-learn uses optimized CART; criteria Gini/entropy.
- k-NN: predicts from labels of the k closest training samples (majority vote or mean); larger k suppresses noise but blurs boundaries; "non-generalizing" method that stores training data.
- Metrics: accuracy, precision = tp/(tp+fp), recall = tp/(tp+fn), F1, confusion matrix, MSE, R2.

## Relevant excerpts

> "Learning the parameters of a prediction function and testing it on the same data is a methodological mistake: a model that would just repeat the labels of the samples that it has just seen would have a perfect score but would fail to predict anything useful on yet-unseen data. This situation is called overfitting." (cross-validation)

> "Decision-tree learners can create over-complex trees that do not generalize the data well. This is called overfitting." (decision trees)

> "The optimal choice of the value k is highly data-dependent: in general a larger k suppresses the effects of noise, but makes the classification boundaries less distinct." (neighbors)

## Used in

- Subtopic 4 (train/test, overfitting, decision trees, k-NN, evaluation; Python practice)

Findings: [[Machine Learning Basics]], [[Decision Trees and k-Nearest Neighbors]]

## History

- 2026-11-23: registered and read (researcher, stage 1).
