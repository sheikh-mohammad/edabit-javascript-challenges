// Question 21:

// Buggy Code (Part 7)

// Mubashir wants to swap two given numbers!

// It is not returning the right values. Can you help him fix it?

// a = 100
// b = 200
// a, b = swap(a, b)
// print(a, b) // Should print out "200, 100", but the function prints out "100, 100"

// Examples

// swap(100, 200) ➞ [200, 100]
// swap(44, 33) ➞ [33, 44]
// swap(21, 12) ➞ [12, 21]

// Notes

// N/A

// function swap(a, b) {
// 	b = a
// 	a = b
// 	return [a, b]
// }

function swap(a, b) {
  let temp;
  temp = a;
  a = b;
  b = temp;
  return [a, b];
}

let a = 100;
let b = 200;
[a, b] = swap(a, b);
console.log(a, b); // Should print out "200, 100", but the function prints out "100, 100"

console.log(swap(100, 200));
console.log(swap(44, 33));
console.log(swap(21, 12));
