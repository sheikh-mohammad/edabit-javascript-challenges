var array = ["apple", "mango", "apple", "banana", "pineapple", "grapes", "apple", "banana", "grapes", "grapes"];
var value = prompt("Enter Value to Count:");
var count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
        count++;
    }
}

console.log(`${value} appears ${count} times in the array.`);