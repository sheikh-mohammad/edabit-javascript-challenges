// Question 36

// Two Makes Ten

// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// Examples

// makesTen(9, 10) ➞ true
// makesTen(9, 9) ➞ false
// makesTen(1, 9) ➞ true

// Notes

// Don't forget to return the result.

// function makesTen(a, b) {

// }

// Solutions

// Method 1: Function declaration (function)

function makesTen(a, b) {
  if (a === 10 || b === 10) {
    return true;
  } else if (a + b === 10) {
    return true;
  } else {
    return false;
  }
}

// Method 2: Arrow Function (=>)

const makesTen = (a, b) =>
  a === 10 || b === 10 ? true : a + b === 10 ? true : false;

console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(9, 1));
