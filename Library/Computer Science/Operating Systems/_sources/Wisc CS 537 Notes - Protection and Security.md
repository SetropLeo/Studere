---
title: Wisc CS 537 Notes - Protection and Security
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: Barton P. Miller (University of Wisconsin-Madison), CS 537 lecture notes
published: undated (marked "updated" on index)
url: https://pages.cs.wisc.edu/~bart/537/lecturenotes/s29.html
accessed: 2026-11-23
url-verified: true
tags: [source, operating-systems]
---

# Wisc CS 537 Notes - Protection and Security

## Why it is reliable (or not)

University course notes by a recognized systems and security professor. Does not use the word "isolation" explicitly. s30 and s31 (abuses, encryption) not opened.

## Extracted points

- Protection mechanism = authentication, authorization, access enforcement.
- Access matrix stored as ACLs (per object; Unix owner/group/other) or capabilities (per subject; deny by default, harder sharing).
- Enforcement code should be small and run protected (security kernel); layered privilege, minimum per component, at a performance cost.

## Relevant excerpts

> "The purpose of a protection system is to prevent accidental or intentional misuse of a system."

> "with each level getting the minimum privilege necessary to do its job."

## Used in

- Subtopic 8

## Used in findings

- [[Access Control and Privilege]], [[OS Kernel Architectures]]

## History

- 2026-11-23: registered and read.
