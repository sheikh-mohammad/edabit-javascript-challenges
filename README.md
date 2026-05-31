# Edabit JavaScript Challenges

A personal workspace for solving [Edabit](https://edabit.com/)-style programming challenges in JavaScript. Each file captures the problem statement (as comments), working solutions, and—where useful—small checks or `console.log` output for local experimentation.

This repository exists to **practice and deepen JavaScript skills**. It is **not** maintained as a collaborative open source project. See the [License](#license) section for how you may use or reference this material.

---

## Table of contents

- [Overview](#overview)
- [What is in this repository](#what-is-in-this-repository)
- [Project structure](#project-structure)
- [Difficulty levels](#difficulty-levels)
- [Requirements](#requirements)
- [How to run a challenge locally](#how-to-run-a-challenge-locally)
- [File and code conventions](#file-and-code-conventions)
- [Current challenge inventory](#current-challenge-inventory)
- [Workflow tips](#workflow-tips)
- [Relationship to Edabit](#relationship-to-edabit)
- [License](#license)
- [Author](#author)

---

## Overview

Edabit-style challenges are small, focused exercises: implement a function (or fix buggy code) so it matches the stated examples and notes. This repo keeps those exercises organized by difficulty so you can revisit patterns, compare approaches, and track progress over time.

**Goals of this project:**

- Reinforce JavaScript fundamentals (functions, arrays, loops, operators, edge cases).
- Build a searchable archive of solved problems and problem wording.
- Run solutions locally with Node.js without needing a separate test runner for quick checks.

---

## What is in this repository

| Item | Description |
|------|-------------|
| `very-easy/`, `easy/`, `medium/`, `hard/` | Challenge files grouped by approximate difficulty. |
| Each `*.js` file | Comment block with the prompt, examples, and notes; your implementation below. |
| No `package.json` | Plain Node.js scripts; no bundler or framework required. |

At the time of writing there are **17** challenge files across four difficulty folders.

---

## Project structure

```text
edabit-javascript-challenges/
├── README.md
├── LICENSE
├── very-easy/
├── easy/
├── medium/
└── hard/
```

File names are numbered and kebab-cased from the challenge title (for example `02-return-the-sum-of-two-numbers.js`). A few titles include spaces or punctuation in the filename; quote paths when running them in the shell.

---

## Difficulty levels

| Folder | Typical focus |
|--------|----------------|
| `very-easy/` | Basic returns, arithmetic, simple array/string access, small bug fixes. |
| `easy/` | Slightly more logic, aggregation, or comparisons. |
| `medium/` | More control flow, data shaping, or careful reading of requirements. |
| `hard/` | Fewer files here; puzzles that need more steps or constraints. |

Difficulty labels mirror how problems are often grouped on practice sites; they are subjective and for navigation only.

---

## Requirements

- **[Node.js](https://nodejs.org/)** (LTS recommended) so you can run files with the `node` command.

No additional npm packages are required for the current challenges.

---

## How to run a challenge locally

From the repository root:

```bash
node very-easy/01-how-edabit-works.js
```

Many files end with `console.log(...)` calls that print sample outputs; others are minimal and only define functions—you can add temporary logs while debugging.

---

## File and code conventions

- **Problem text** lives at the top in line comments (`//`) so the file stays valid JavaScript.
- **Solutions** use whatever style fits the exercise: function declarations, arrow functions, or small scripts.
- **Naming** follows the challenge title for easy grep and sorting.

When you add new challenges, keep the same pattern: prompt in comments, then implementation, optional local checks at the bottom.

---

## Current challenge inventory

### Very easy (`very-easy/`)

| File | Topic (short) |
|------|----------------|
| `01-how-edabit-works.js` | Introduction / return a string |
| `02-return-the-sum-of-two-numbers.js` | Arithmetic |
| `03-convert-minutes-into-seconds.js` | Unit conversion |
| `04-return-the-next-number-from-the-integer-passed.js` | Increment |
| `05-area-of-a-triangle.js` | Formula |
| `06-convert-age-to-days.js` | Conversion |
| `07-buggy-code-part-1.js` | Fix mistakes |
| `08-return-the-first-element-in-an-array.js` | Arrays |
| `09-power-calculator.js` | Exponentiation |
| `10-convert-hours-into-seconds.js` | Conversion |
| `11-maximum-edge-of-a-triangle.js` | Triangle inequality |
| `12-return-the-remainder-from-two-numbers.js` | Modulo |
| `13-find-the-perimeter-of-a-rectangle.js` | Perimeter |
| `14-return-something-to-me.js` | String return |
| `15-correct-the-mistakes.js` | Debugging |
| `16-Is-the-less-than-or-equal-to-zero` | Comparison |
| `17-sum-of-polygon-angles` | Geometry |
| `18-basketball-points.js`  | Calculations |
| `19-basic-variable-assignment.js`  | Variable assignment basics|
| `20-less-than-100.js`  | Comparison |
| `21-buggy-code-part-5.js`  | Loop debugging|
| `22-buggy-code-part-7.js`  | Advanced debugging|
| `23-the-farm-problem.js`  | Arithmetic operations|
| `24-using-the-&&-operator.js`  | Boolean |
| `25-are-the-numbers-equal.js`  | Comparison |
| `26-football-points.js`  | Calculations |
| `27-convert-hours-and-minutes-into-seconds.js`  | Calculations |
| `28-fix-the-expression.js`  | Conditionals |
| `29-equality-check.js`  | Comparison |
| `30-profitable-gamble.js`  | Comparison |
| `31-boolean-to-string-conversion.js`  | Conversion |
| `32-using-arrow-functions.js`  | Arrow functions |
| `33-frames-per-second.js`  | Arithmetic problems |
| `34-miserable-parody-of-a-calculator.js`  | Evaluator |

### Easy (`easy/`)

| File | Topic (short) |
|------|----------------|
| `02-add-up-the-numbers-from-a-single-number.js` | Summation pattern |
| `05-find-the-smallest-and-biggest-numbers.js` | Min / max |

### Medium (`medium/`)

| File | Topic (short) |
|------|----------------|
| `01-how-much-is-true.js` | Count `true` in array |
| `02-A-redundant-function.js` | Function behavior |

### Hard (`hard/`)

| File | Topic (short) |
|------|----------------|
| `01-seven-boom.js` | String / digit puzzle |

*(Regenerate this table when you add files, or link to a script if you automate listing later.)*

---

## Workflow tips

1. **Read the Notes section** in the comments; edge cases are often specified there.
2. **Run the file** after each change to confirm behavior matches the examples.
3. **Keep Edabit as the source of truth** for official tests and wording if you are also solving on the site.
4. **Version control**: small commits per challenge make history easy to browse.

---

## Relationship to Edabit

Challenge descriptions in comments are derived from or aligned with exercises commonly found on Edabit and similar practice platforms. **Edabit** and related branding are properties of their respective owners. This repository is an independent study log; it is not affiliated with or endorsed by Edabit.

If you reuse problem text publicly, respect the original site’s terms and intellectual property.

---

## License

This repository is **not** offered as an open source contribution project. It is maintained for **personal practice and skill development**.

All rights are reserved unless explicitly stated otherwise in the [`LICENSE`](LICENSE) file. **Pull requests, issues asking for feature work, or unsolicited contributions are not solicited.** You may read the code for your own learning at your own risk, subject to the license.

---

## Author

**Sheikh Mohammad**

- GitHub: [sheikh-mohammad](https://github.com/sheikh-mohammad/edabit-javascript-challenges)

For questions about collaboration or reuse beyond personal reading, use the contact options on the author’s GitHub profile.
