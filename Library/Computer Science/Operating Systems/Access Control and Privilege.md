---
title: Access Control and Privilege
stage: 2
layer: finding
status: verified
created: 2026-11-23
updated: 2026-11-23
confidence: debated
review-by:
verified-on: 2026-11-23
verified-by: verifier
sources: ["[[Wisc CS 537 Notes - Protection and Security]]", "[[man7 - capabilities(7)]]", "[[man7 - credentials(7)]]"]
tags: [finding, operating-systems]
---

# Access Control and Privilege

> **Summary:** Protection combines authentication, authorization and enforcement; access rights can be stored per object (ACLs) or per subject (capabilities); Linux splits root's power into capabilities and tracks process identity with several IDs.

## What it is

- Wisc s29: a protection mechanism comprises authentication, authorization and access enforcement. Access matrix stored as **ACLs** (per object; Unix owner/group/other) or **capabilities** (per subject; deny by default, harder sharing). Enforcement code should be small and protected (security kernel), with layered privilege and minimum privilege per component, at a performance cost.
- Linux capabilities (man7): traditionally UID 0 bypasses kernel permission checks; since Linux 2.2 root's power is split into independent per-thread capabilities, e.g. `CAP_DAC_OVERRIDE` bypasses file read/write/execute checks, enabling least privilege.
- Credentials (man7): PID, PPID, real/effective/saved set-user-ID and group-ID, filesystem IDs, supplementary groups. Effective IDs (and filesystem IDs, which normally equal them) drive permission checks; set-user-ID programs use saved IDs to gain or drop privilege. fork copies IDs; execve keeps real IDs and may change effective/saved.

## Contradictions and uncertainties

- Terminology clash: Linux capabilities are privilege units, distinct from the textbook object-capability model in Wisc (man7 source note). Do not conflate.
- Wisc does not use the word "isolation". Wisc s30/s31 not opened. Authentication and security depth belong to the planned Security area.

## Related

- [[OS Kernel Architectures]], [[Process Creation - fork]], [[Files and Inodes]], [[Containers - Namespaces and cgroups]]

## Sources

- [[Wisc CS 537 Notes - Protection and Security]], [[man7 - capabilities(7)]], [[man7 - credentials(7)]]

## History

- 2026-11-23: created (draft).
- 2026-11-23: light pass, single-source accepted per user decision (verifier).
