# Project Documentation - Hard JavaScript Challenges

## Project Overview

This directory contains **hard-difficulty JavaScript programming challenges** from Edabit-style practice problems. This is a focused workspace for solving complex JavaScript problems that typically require multi-step logic, advanced string/number manipulation, or careful constraint handling.

The project is part of a larger collection organized by difficulty levels (very-easy, easy, medium, hard) and serves as a personal practice space for reinforcing JavaScript fundamentals and problem-solving skills.

## Project Type

**Code Project** - JavaScript function implementation challenges
- **Language**: JavaScript (ES6+)
- **Runtime**: Node.js (no additional packages required)
- **Format**: Individual challenge files with problem descriptions and solutions
- **Testing**: Local execution with `node` command and console.log verification

## Building and Running

### Prerequisites
- **Node.js** (LTS recommended) - No additional npm packages required

### Running Challenges
```bash
# Navigate to the hard directory
cd /path/to/edabit-javascript-challenges/hard

# Run a specific challenge
node 01-seven-boom!.js
```

Each challenge file includes `console.log` statements that demonstrate the solution with sample inputs and outputs.

### Development Workflow
1. Read the problem description (provided as comments at the top of each file)
2. Implement the solution in the designated function
3. Run the file to verify output matches expected results
4. Test edge cases and additional scenarios as needed

## Current Challenge Inventory

| File | Topic | Description |
|------|-------|-------------|
| `01-seven-boom!.js` | String/Digit Puzzle | Detect if number 7 appears in any element of an array, returning "Boom!" if found, otherwise "there is no 7 in the array" |

### Challenge Details: Seven Boom!
- **Problem Type**: Array and string manipulation
- **Key Concepts**: Number-to-string conversion, string searching, conditional logic
- **Difficulty**: Hard (requires understanding digit representation within numbers)

## Development Conventions

### File Structure
- **Problem Description**: Always at the top in `//` comments for valid JavaScript syntax
- **Solution Implementation**: Below the problem description, typically as a function
- **Testing**: `console.log` statements at the bottom for local verification
- **Naming**: Files follow `01-challenge-name.js` pattern for easy sorting

### Code Style
- **Functions**: Use appropriate function type (declaration, arrow function, or expression) based on the problem
- **Variables**: Descriptive naming with clear scope
- **Comments**: Minimal, focusing on complex logic rather than basic operations
- **Output**: Return values as specified in the problem, with console.log for local testing

### Testing Approach
- Each file includes test cases with `console.log` output
- Solutions should handle edge cases mentioned in problem descriptions
- No automated testing framework - manual verification via execution

## Relationship to Edabit

Challenge descriptions are aligned with Edabit-style problems but maintained independently:
- **Purpose**: Personal skill development and practice
- **Affiliation**: Not affiliated with or endorsed by Edabit
- **Usage**: Problem text may be reused respectfully following intellectual property guidelines

## Directory Structure

This hard directory is part of a larger project structure:
```
edabit-javascript-challenges/
├── very-easy/    # Basic returns, arithmetic, simple bugs
├── easy/        # Logic, aggregation, comparisons  
├── medium/      # Control flow, data shaping
├── hard/        # Complex puzzles, multi-step solutions
└── expert/      # Most challenging problems
```

## Author

**Sheikh Mohammad**
- GitHub: [sheikh-mohammad](https://github.com/sheikh-mohammad/edabit-javascript-challenges)

## License

Personal practice repository. All rights reserved. Not for open source contribution or collaborative development.