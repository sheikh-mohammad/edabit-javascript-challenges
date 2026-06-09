// Question 37

// Let's Fuel Up!

// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

// Examples

// calculateFuel(15) ➞ 150
// calculateFuel(23.5) ➞ 235
// calculateFuel(3) ➞ 100

// Notes

// Distance will be a number greater than zero.
// Return 100 if the calculated fuel turns out to be less than 100.

// Code

// function calculateFuel(n) {

// }

// Solution

// Method 01: Function declaration (function)

function calculateFuel(n) {
  let fuel = n * 10;
  if (fuel < 100) {
    return 100;
  } else {
    return fuel;
  }
}

// Method 02: Arrow Function (=>)

const calculateFuel = (n) => {
  let fuel = n * 10;
  return fuel < 100 ? 100 : fuel;
};

// Verification

console.log(calculateFuel(15));
console.log(calculateFuel(23.5));
console.log(calculateFuel(3));
