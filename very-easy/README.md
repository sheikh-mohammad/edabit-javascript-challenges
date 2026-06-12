# Very Easy - Project Documentation

## Project Overview

This is a collection of JavaScript solutions for Edabit programming challenges in the "Very Easy" difficulty category. The project consists of 41 individual challenge files, each containing a complete solution to a specific programming problem along with example test cases.

[**Edabit**](https://edabit.com/) is an interactive coding platform that offers programming challenges across various difficulty levels. This collection focuses on foundational JavaScript concepts and problem-solving techniques.

### Key Technologies
- **Language**: JavaScript (ES6+ syntax with arrow functions, const/let declarations)
- **Platform**: Edabit coding challenges
- **Difficulty**: Very Easy (beginner level)

## Project Structure

```
very-easy/
├── 01-how-edabit-works.js      # Introduction to Edabit platform
├── 02-return-the-sum-of-two-numbers.js  # Basic arithmetic operations
├── 03-convert-minutes-into-seconds.js  # Unit conversion functions
├── 04-return-the-next-number-from-the-integer-passed.js  # Increment operations
├── 05-area-of-a-triangle.js    # Mathematical calculations
├── 06-convert-age-into-days.js # Age conversion functions
├── 07-buggy-code-part-1.js     # Debugging exercises
├── 08-return-the-first-element-in-an-array.js  # Array manipulation
├── 09-power-calculator.js      # Mathematical power functions
├── 10-convert-hours-into-seconds.js  # Time conversion functions
├── 11-maximum-edge-of-a-triangle.js  # Geometric calculations
├── 12-return-the-remainder-from-two-numbers.js  # Modulo operations
├── 13-find-the-perimeter-of-a-rectangle.js  # Perimeter calculations
├── 14-return-something-to-me.js  # Basic return statements
├── 15-correct-the-mistakes.js  # Syntax debugging
├── 16-Is-the-number-less-than-or-equal-to-zero.js  # Comparison operations
├── 17-sum-of-polygon-angles.js # Geometric angle calculations
├── 18-basketball-points.js      # Scoring calculations
├── 19-basic-variable-assignment.js  # Variable assignment basics
├── 20-less-than-100.js        # Comparison logic
├── 21-buggy-code-part-5.js     # Loop debugging
├── 22-buggy-code-part-7.js     # Advanced debugging
├── 23-the-farm-problem.js      # Arithmetic operations
├── 24-using-the-"&&"-operator.js # Boolean Problems
├── 25-are-the-numbers-equal.js # comparison problems
├── 26-football-points.js # scoring problems
├── 27-convert-hours-and-minutes-into-seconds.js # time conversion problems
├── 28-fix-the-expression.js # conditional logic problems
├── 29-equality-check.js # comparison problems
├── 30-profitable-gamble.js # comparison problems
├── 31-boolean-to-string-conversion.js # conversion problems
├── 32-using-arrow-functions.js # arrow functions
├── 33-frames-per-second.js # arithmetic problems
├── 34-miserable-parody-of-a-calculator.js # evaluator problems
├── 35-buggy-code-part-4.js # debugging exercises
├── 36-two-makes-ten.js # comparison problems
├── 37-lets-fuel-up.js # arithmatic problems
├── 38-buggy-code-part-2.js # debugging exercises
├── 39-pair-management.js # Return problems
├── 40-compare-strings-by-count-of-characters.js # String comparison problems
├── 41-is-the-string-empty.js # String validation problems
└── README.md                     # This documentation file
```

## Building and Running

### Prerequisites
- Node.js (for running JavaScript files)
- Basic knowledge of JavaScript

### Running Individual Challenges
Each challenge file can be run independently using Node.js:

```bash
node 02-return-the-sum-of-two-numbers.js
node 03-convert-minutes-into-seconds.js
# etc.
```

### Running All Tests
To run all challenge solutions simultaneously:

```bash
# Option 1: Run all files in sequence
for file in *.js; do
    echo "Running $file..."
    node "$file"
    echo ""
done

# Option 2: Use glob pattern (if available)
node *.js
```

## Development Conventions

### File Structure Pattern
Each challenge file follows a consistent structure:

1. **Header Comment**: Contains question number, title, and problem description
2. **Examples Section**: Shows input/output examples with expected results
3. **Notes Section**: Additional hints and constraints
4. **Function Implementation**: The actual JavaScript solution
5. **Test Cases**: Console.log statements demonstrating the solution

### Coding Style
- **Modern JavaScript**: Uses ES6+ syntax (arrow functions, const/let)
- **Descriptive Naming**: Functions and variables use clear, descriptive names
- **One Function Per File**: Each challenge focuses on solving one specific problem
- **Console Testing**: Uses console.log for immediate feedback and testing

### Common Challenge Types
1. **Mathematical Operations**: Basic arithmetic, conversions, geometric calculations
2. **String Manipulation**: Basic string operations and formatting
3. **Array Operations**: Simple array manipulation and access
4. **Conditionals**: Comparison logic and boolean operations
5. **Debugging Exercises**: Fixing syntax and logic errors in provided code

### Learning Progression
The challenges are ordered by increasing complexity, starting with basic concepts (variable assignment, simple arithmetic) and progressing to more complex topics (arrays, loops, debugging). Each challenge builds upon concepts introduced in previous ones.

## Contributing

### Adding New Challenges
When adding new challenge solutions:
1. Follow the existing file naming convention (`XX-challenge-title.js`)
2. Include the complete problem description and examples
3. Provide working test cases using console.log
4. Use consistent formatting and coding style

### Code Quality
- Ensure solutions are efficient and readable
- Include comments for complex logic when necessary
- Test solutions with provided examples before committing
- Follow JavaScript best practices and avoid common pitfalls

## Resources

### Edabit Platform
- Official website: https://edabit.com
- Provides additional challenges and tutorials
- Offers discussion forums for problem-solving help

### JavaScript Learning Resources
- MDN Web Docs: Comprehensive JavaScript reference
- FreeCodeCamp: Interactive JavaScript learning
- JavaScript.info: Modern JavaScript tutorials

## Notes

- This collection focuses on "Very Easy" difficulty challenges suitable for beginners
- Solutions are self-contained and don't require external dependencies
- Each file can be run independently for immediate testing and learning
- The project serves as a practical learning resource for JavaScript fundamentals