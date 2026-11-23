---
name: study-interview
description: Short interview protocol to understand the user's situation before studying a new topic, going deeper on an existing one or generating a course (current level, broad vs specific, goal, practice, expected outcome). Use whenever the request is to learn/study/go deeper on something or create a course, before running any research.
---

# Study interview

Runs in the main conversation (needs the user). Goal: collect the workflows' `args` with the fewest questions.

## Before asking

1. Grep/Glob in `Library/` for the topic and synonyms. If it already exists, mention it in one line (what is there, `status`, `review-by`) and adjust the questions: does the user want to **extend**, **build the course from what exists** or **revalidate**?
2. Don't ask what the request already answered. A phrase like "I'm a programmer, I know nothing about LLMs" already gives level and context.

## Questions (AskUserQuestion, up to 4 at once; only the missing ones)

1. **Starting point** (`level`): Zero (never seen it) | Basic (know the concept) | Intermediate (already use it) | Advanced (want the fine details). Also ask "what do you already know about it?" when the level is not zero (free field via "Other").
2. **Scope** (`depth`, `focus`): Broad overview of the whole topic | Go deep on something specific (what?).
3. **What for** (`goal`, `context`): e.g. use at work, build a project, understand out of curiosity, prepare for an interview/exam. Also ask about stack, language or tools if the topic is technical (`practicePreference`).
4. **Outcome** (`outcome`): Research + full course (default, the user usually wants this) | Research/library only.

Rules:
- Ask only what would change the result. If something is inferable, assume it and record the assumption.
- Short, concrete options; the recommended one first.
- A single round of questions. No interrogation.

## Output

Assemble and confirm in one line, without waiting for approval: "I'll research X (level N, focus F, for O) and build the course." Then follow the routing in `CLAUDE.md`. Mapping:

| Answer | Workflow arg |
|--------|--------------|
| topic | `topic` |
| starting point + what they already know | `level` / `startLevel`, `context` |
| broad vs specific | `depth` (`broad` \| `specific`), `focus` |
| what for | `goal` |
| practice stack/format | `practicePreference` |
| outcome | decides whether to run `generate-course` afterwards |
