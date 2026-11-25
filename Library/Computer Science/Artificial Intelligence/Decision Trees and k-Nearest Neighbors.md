---
title: Decision Trees and k-Nearest Neighbors
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-05-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[scikit-learn User Guide - Supervised Learning Basics]]"]
tags: [finding, ai, ml]
---

# Decision Trees and k-Nearest Neighbors

> **Summary:** Two simple supervised methods documented by scikit-learn 1.9.1: decision trees (rule-based, prone to overfitting) and k-NN (predicts from the k closest training samples). Single source.

## What it is

- Decision tree: a non-parametric supervised method for classification and regression (scikit-learn).
- k-NN: predicts from the labels of the k closest training samples, by majority vote (classification) or mean (regression); scikit-learn calls it a "non-generalizing" method that stores training data.

## How it works

- Trees: scikit-learn uses an optimized version of CART; criteria include Gini and entropy. Training is greedy; finding the optimal tree is NP-complete (scikit-learn; own inference link to [[NP-Completeness and Cook-Levin]]). Trees can be unstable.
- Overfitting (verbatim in source note): "Decision-tree learners can create over-complex trees that do not generalize the data well. This is called overfitting." Mitigation: pruning, minimum samples per leaf, maximum depth.
- k choice (verbatim): "The optimal choice of the value k is highly data-dependent: in general a larger k suppresses the effects of noise, but makes the classification boundaries less distinct."

## Key terms

> **CART**: Classification and Regression Trees; the algorithm family scikit-learn's implementation is based on (the expansion of the acronym is gloss, unsourced).

> **Pruning**: reducing tree size to limit overfitting (scikit-learn lists it as mitigation).

## Example

Own illustration (standard scikit-learn names; recheck against the docs):

```python
from sklearn.tree import DecisionTreeClassifier
tree = DecisionTreeClassifier(max_depth=3, min_samples_leaf=5)  # limits to curb overfitting
```

## Contradictions and uncertainties

- Single source; page versions change (review-by 2027-05-23). Neighbor search structures were not recorded.

## Related

- [[Machine Learning Basics]]
- [[Linear Regression and the Perceptron]]
- [[NP-Completeness and Cook-Levin]] (own inference)

## Sources

- [[scikit-learn User Guide - Supervised Learning Basics]] - trees, k-NN

## History

- 2026-11-23: created (draft).
- 2026-11-23: verified by verifier, light pass, single-source accepted per user decision.
