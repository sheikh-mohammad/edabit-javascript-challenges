// Question 38

// Buggy Code (Part 2)

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples

// maxNum(3, 7) ➞ 7
// maxNum(-1, 0) ➞ 0
// maxNum(1000, 400) ➞ 1000

// Notes

// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.

// Code

// function maxNum(n1;n2) {
// 	if (n1>n2) {
// 	  return n2
// 	}
//   else if {
// 	return n1
//   }
// }

// Solution

// Method 01: Function declaration (function)

function maxNum(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n1 < n2) {
    return n2;
  }
}

// Method 02: Arrow Function (=>)

const maxNum = (n1, n2) => (n1 > n2 ? n1 : n2);

// Verification

console.log(maxNum(3, 7));
console.log(maxNum(-1, 0));
console.log(maxNum(1000, 400));
