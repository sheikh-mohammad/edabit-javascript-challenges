// Question 01:

// How Much is True?

// Create a function which returns the number of true values there are in an array.

// Examples

// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

// Notes

// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

const countTrue = (arr) => {
  let trueCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      trueCount++;
    }
  }
  return trueCount;
};

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
