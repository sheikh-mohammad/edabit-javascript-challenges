# Project Documentation - Easy JavaScript Challenges

## Project Overview

This directory contains **easy difficulty** JavaScript programming challenges sourced from Edabit-style exercises. It's part of a larger personal practice workspace (`/home/sheikh-mohammad/Documents/code/edabit-javascript-challenges/`) organized by difficulty levels.

**Purpose**: Reinforce JavaScript fundamentals through focused, small-scale exercises covering loops, arrays, functions, basic algorithms, and arithmetic operations.

**Key Technologies**: 
- JavaScript (ES6+)
- Node.js runtime environment
- No external dependencies or build tools required

## Directory Structure

```
easy/
├── 02-add-up-the-numbers-from-a-single-number.js
├── 05-find-the-smallest-and-biggest-numbers.js
└── README.md
```

## Building and Running

**Requirements**:
- Node.js (LTS recommended)
- No npm packages required

**Running Challenges**:
```bash
# Navigate to the easy directory
cd /home/sheikh-mohammad/Documents/code/edabit-javascript-challenges/easy

# Run any challenge file
node 02-add-up-the-numbers-from-a-single-number.js
node 05-find-the-smallest-and-biggest-numbers.js
```

Each file includes `console.log()` statements that demonstrate the solution with sample inputs and outputs.

## Development Conventions

### File Naming
- Files are numbered and kebab-cased (e.g., `02-add-up-the-numbers-from-a-single-number.js`)
- Numbering follows the challenge sequence in the repository
- File names are derived from challenge titles for easy identification

### Code Structure
- **Problem Statement**: Included at the top of each file as line comments (`//`)
- **Solution**: Implementation follows the problem description
- **Testing**: Most files include `console.log()` calls for local verification
- **Style**: Flexible approach using function declarations, arrow functions, or scripts as appropriate

### Content Guidelines
- Each file is self-contained and runnable independently
- Problem descriptions include examples and edge case notes
- Solutions focus on correctness and clarity over optimization
- No external dependencies beyond standard JavaScript

## Current Challenges

### 02-add-up-the-numbers-from-a-single-number.js
**Topic**: Summation patterns  
**Function**: `addUp(num)` - Sum all numbers from 1 to `num`  
**Concepts**: Loops, arithmetic progression  
**Examples**: `addUp(4) → 10`, `addUp(13) → 91`

### 05-find-the-smallest-and-biggest-numbers.js
**Topic**: Array min/max operations  
**Function**: `minMax(arr)` - Return [min, max] from array  
**Concepts**: Array manipulation, reduce method, comparisons  
**Examples**: `minMax([1, 2, 3, 4, 5]) → [1, 5]`, `minMax([1]) → [1, 1]`

## Relationship to Parent Project

This directory is part of a larger multi-difficulty repository:
- `/very-easy/` - Basic returns, arithmetic, simple access patterns
- `/easy/` - Slightly more complex logic and aggregation (this directory)
- `/medium/` - Control flow, data shaping, careful requirements reading
- `/hard/` - Multi-step puzzles and complex constraints

## Important Notes

- **Personal Practice Only**: This is a personal workspace, not a collaborative project
- **No Open Source**: No contributions or pull requests are solicited
- **Edabit Alignment**: Challenges align with Edabit-style exercises but are independent solutions
- **Learning Focus**: Emphasis on skill development and pattern recognition

## File Conventions for Future Work

When adding new challenges to this directory:
1. **Number files sequentially** following the existing pattern
2. **Include complete problem statement** in comments at the top
3. **Provide working solution** with appropriate JavaScript style
4. **Add console.log tests** for verification (optional but recommended)
5. **Follow naming convention**: `NN-descriptive-title.js`