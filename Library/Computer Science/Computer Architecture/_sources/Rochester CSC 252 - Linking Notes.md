---
title: Rochester CSC 252 - Linking Notes
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: B
type: course
author: not stated on the page (University of Rochester CSC 252, course pages of Michael Scott by URL path)
published: unknown (date not stated)
url: https://www.cs.rochester.edu/u/scott/courses/252/notes/07_linking
accessed: 2026-11-23
url-verified: true
tags: [source, computer-architecture, assembler, linker, loader]
---

# Rochester CSC 252 - Linking Notes

## Why it is reliable (or not)

University course lecture notes (HTML), unsigned and undated; author inferred only from URL path. Level B. Unix/ELF-centric; fine for the toolchain concept.

## Extracted points

- Toolchain: compiler (gcc) to assembly .s, assembler (as) to object .o, linker (ld) to executable, loader copies program into memory and runs it.
- Assembler is two-pass: first records labels in a symbol table (forward references), then emits machine code.
- Linker resolves symbols across object files and libraries; relocation adjusts absolute addresses; PC-relative branches need less fixing.
- Static vs dynamic (shared) libraries; position-independent code, lazy linking.
- Loader: reads header, creates address space, copies code/data, sets up stack, jumps to startup routine that calls main.

## Relevant excerpts

> "A label may be used before it is defined" (assembler section)

## Used in

- Subtopic 6 (compiler/assembler/linker interface).
- [[Assembler, Linker and Loader]]

## History

- 2026-11-23: read and registered (researcher, stage 1).
