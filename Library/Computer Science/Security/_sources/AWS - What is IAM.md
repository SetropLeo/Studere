---
title: AWS - What is IAM (IAM User Guide)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: official doc
author: Amazon Web Services
published: undated
url: https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html
accessed: 2026-11-23
url-verified: true
tags: [source, security, cloud, iam]
review-by: 2027-05-23
---

# AWS - What is IAM

## Why it is reliable (or not)

Official vendor documentation; terminology (principal, role, policy) is AWS-specific though the authentication/authorization split is general. Link the existing Access Control and Privilege note for general theory.

## Extracted points

- IAM controls who is authenticated (signed in) and authorized (has permissions).
- Root user has complete access; do not use for everyday tasks; create other identities with needed permissions.
- Principal: IAM user, federated principal, role, or application; authorization checks policies.
- IAM is eventually consistent: changes need time to replicate.

## Relevant excerpts

> "You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources."

## Used in

- [[Cloud Shared Responsibility and IAM]]

## History

- 2026-11-23: registered and read.
