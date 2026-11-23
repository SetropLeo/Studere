---
title: Cloud Shared Responsibility and IAM
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: uncertain
review-by: 2027-05-23
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[AWS - Shared Responsibility Model]]", "[[AWS - What is IAM]]"]
tags: [finding, security, cloud, iam]
---

# Cloud Shared Responsibility and IAM

> **Summary:** AWS-specific (vendor) documentation: the provider secures the cloud infrastructure, the customer secures what it puts in the cloud; IAM controls who is authenticated and authorized. Vendor-specific; other providers were not read.

## What it is

Shared responsibility: security "of" the cloud belongs to AWS (hardware, software, networking, facilities); security "in" the cloud to the customer (data, configuration, guest OS depending on the service, e.g., EC2 versus S3). Responsibilities shift with the service model. Verbatim: "AWS is responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud." and "Customers are responsible for managing their data (including encryption options)."

IAM: "You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources." The root user has complete access and should not be used for everyday tasks; create other identities with the needed permissions. A principal is an IAM user, federated principal, role or application; authorization checks policies. IAM is eventually consistent: changes take time to replicate.

> **Principal**, **role**, **policy**: AWS-specific terms.

## How it works

The authentication-versus-authorization split is general; see [[Access Control and Privilege]] for OS-level theory. The advice against everyday use of the root user matches [[Security Design Principles]] (least privilege); that connection is own inference.

## Key terms

See above.

## Contradictions and uncertainties

- `uncertain`: vendor pages (level B), marketing tone; Azure and Google equivalents and isolation mechanisms not read (gap). Own inference: [[Containers - Namespaces and cgroups]] relate to isolation but are not discussed in these sources.

## Related

- [[Access Control and Privilege]], [[Security Design Principles]], [[Authentication Assurance and Password Policy]]

## Sources

- [[AWS - Shared Responsibility Model]] - split of duties.
- [[AWS - What is IAM]] - IAM concepts.

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
