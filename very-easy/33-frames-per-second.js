// Question 33:

// Frames Per Second

// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// Examples

// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000

// Notes

// FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.

// function frames(minutes, fps) {

// }

// Solution:

// Method 1: Arrow Function (=>)

const frames = (minutes, fps) => minutes * 60 * fps;

// Method 2: Function Declaration (function)

function frames(minutes, fps) {
  return minutes * 60 * fps;
}

console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));
