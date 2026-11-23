---
title: Machine Learning Basics
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by: 2027-05-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Berkeley CS188 Textbook - Probability, ML, Neural Networks and RL]]", "[[Dive into Deep Learning (Zhang et al)]]", "[[scikit-learn User Guide - Supervised Learning Basics]]"]
tags: [finding, ai, ml]
---

# Machine Learning Basics

> **Summary:** Machine learning builds predictors from data. Supervised and unsupervised learning are stated by two read sources (Berkeley and d2l; d2l also lists reinforcement learning). The train/validation/test split is single-source (Berkeley only); overfitting and the metrics are single-source (scikit-learn only, a partly read page).

## What it is

- d2l: "Machine learning is the study of algorithms that can learn from experience." (recorded verbatim in the source note).
- Kinds: supervised learning (labeled data; regression and classification) and unsupervised learning (structure in unlabeled data) are stated by both Berkeley and d2l (d2l also names self-supervised). d2l also lists reinforcement learning (see [[Reinforcement Learning Basics]]); the Berkeley ML intro page covers only supervised and unsupervised, and reinforcement learning has its own Berkeley chapter.
- Two sources agree only on supervised and unsupervised; the split, overfitting and metrics are single-source (see below), hence confidence `debated`.

## How it works

- Splits (Berkeley only, single-source): data divided into train, validation and test; the test set is "never seen by your agent until the very end of development" (verbatim).
- Overfitting (scikit-learn only, single-source; verbatim in the source note): learning parameters and testing on the same data is a methodological mistake; the model that repeats labels "would have a perfect score but would fail to predict anything useful on yet-unseen data. This situation is called overfitting." d2l's linear regression chapter also covers generalization, underfitting and overfitting (chapter title level only).
- Leakage and validation (scikit-learn): tuning on the test set leaks information; k-fold cross-validation; fit preprocessing on the training folds only (use a Pipeline).
- Metrics (scikit-learn only, single-source; page partly read): accuracy; precision = tp/(tp+fp); recall = tp/(tp+fn); F1; confusion matrix; MSE; R2. Definitions of accuracy, F1, MSE and R2 are not recorded in the source note (gloss, unsourced if added).

## Key terms

> **Overfitting**: fitting the training data so closely that predictions on unseen data are poor (scikit-learn wording above).

> **Cross-validation**: repeated train/validate splits (k folds) to estimate generalization (scikit-learn, paraphrased).

> **Precision / recall**: tp/(tp+fp) and tp/(tp+fn), tp = true positives, fp = false positives, fn = false negatives (scikit-learn; symbol meanings are gloss, unsourced).

## Example

Own illustration (not from a read page; standard scikit-learn API names, recheck against version 1.9.1 docs):

```python
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
model = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5))
print(cross_val_score(model, X, y, cv=5))  # scaler is refit inside each training fold
```

## Contradictions and uncertainties

- Berkeley's ML intro page does not discuss overfitting; that comes from scikit-learn and d2l.
- scikit-learn metrics page read only partially (about 100k of 175k characters). Version 1.9.1 as read; API may change (review-by 2027-05-23).

## Related

- [[Linear Regression and the Perceptron]]
- [[Decision Trees and k-Nearest Neighbors]]
- [[Neural Networks and Backpropagation]]
- [[Reinforcement Learning Basics]]
- [[Bayes' Rule and Probabilistic Reasoning]]

## Sources

- [[Berkeley CS188 Textbook - Probability, ML, Neural Networks and RL]] - supervised/unsupervised kinds, split (split: Berkeley only)
- [[Dive into Deep Learning (Zhang et al)]] - definition, kinds (supervised, unsupervised, reinforcement)
- [[scikit-learn User Guide - Supervised Learning Basics]] - overfitting, cross-validation, metrics (scikit-learn only)

## History

- 2026-11-23: created (draft).
- 2026-11-23: verifier light pass: confidence downgraded established -> debated (summary overclaims 2 read sources for split and overfitting); left draft pending wording fix.
- 2026-11-23: wording fix after light verification: Summary and sources lines now state that only supervised/unsupervised are two-source; split, overfitting and metrics marked single-source; split quote confirmed verbatim.
- 2026-11-23: verified by verifier, light pass, single-source accepted per user decision.
