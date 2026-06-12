// Question 41

// Is the String Empty?

// Create a function that returns true if a string is empty and false otherwise.

// Examples

// isEmpty("") ➞ true
// isEmpty(" ") ➞ false
// isEmpty("a") ➞ false

// Notes

// A string containing only whitespaces " " does not count as empty.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// Code

// function isEmpty(s) {

// }

// Solutions

// Method 01: Function declaration (function)

function isEmpty(s) {
  if (!s) {
    return true;
  } else {
    return false;
  }
}

// Method 02: Arrow Function (=>)

const isEmpty = (s) => (!s ? true : false);

// Verification

console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("a"));
