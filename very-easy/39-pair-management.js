// Question 39

// Pair Management

// Given two arguments, return an array which contains these two arguments.

// Examples

// makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]
// makePair(512124, 215) ➞ [512124, 215]

// Notes

// N/A

// Code

// function makePair(num1, num2) {

// }

// Solution

// Method 01: Function declaration (function)

function makePair(num1, num2) {
  return [num1, num2];
}

// Method 02: Arrow Function (=>)

const makePair = (num1, num2) => [num1, num2];

// Verification

console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));
