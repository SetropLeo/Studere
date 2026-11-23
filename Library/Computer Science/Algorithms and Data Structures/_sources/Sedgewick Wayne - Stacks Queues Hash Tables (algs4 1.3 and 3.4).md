---
title: Sedgewick Wayne - Stacks, Queues, Linked Lists and Hash Tables (algs4 1.3 and 3.4)
stage: 1
layer: source
status: read
created: 2026-11-23
updated: 2026-11-23
level: A
type: book
author: Robert Sedgewick, Kevin Wayne
published: Algorithms, 4th edition (booksite pages undated)
url: https://algs4.cs.princeton.edu/13stacks/
accessed: 2026-11-23
url-verified: true
tags: [source, stack, queue, linked-list, hash-table]
---

# Sedgewick Wayne - Stacks, Queues, Linked Lists and Hash Tables (algs4 1.3 and 3.4)

Pages read: https://algs4.cs.princeton.edu/13stacks/ and https://algs4.cs.princeton.edu/34hash/

## Why it is reliable (or not)

Official booksite of a standard Princeton textbook. Level A. Java-based; concepts transfer to Python. Section 1.3 does not state time bounds in its main text.

## Extracted points

- Stack is LIFO, queue is FIFO; linked-list implementations (top at the front for the stack; queue adds at the end, removes from the front).
- Linked list: nodes with an item and a reference to the next node; easiest insertion is at the beginning.
- Resizing array: double when full in push(); halve when less than one-quarter full in pop(). "Amortized" appears only in an exercise (queue from two stacks).
- Hash tables: separate chaining (M lists, alpha = N/M, search/insert cost proportional to N/M under uniform hashing assumption) and linear probing (M > N, load factor must be < 1; average probes ~ 1/2(1 + 1/(1-alpha)) for hits and ~ 1/2(1 + 1/(1-alpha)^2) for misses/inserts).
- The hash page states no propositions on resizing.

## Relevant excerpts

> "A _pushdown stack_ is a collection that is based on the _last-in-first-out_ (LIFO) policy." (1.3)

> "the number of compares (equality tests) for search and insert is proportional to N/M." (3.4, Property L, separate chaining)

## Supports subtopics

3 (stacks, queues, linked lists, hash tables).

## Used in

- [[Stack and Queue]]
- [[Dynamic Array and Linked List]]
- [[Hash Table]]

## History

- 2026-11-23: registered and read.
