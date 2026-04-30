// Question 01:

// Seven Boom!

// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// Examples

// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.

const sevenBoom = arr => {
    let isSevenFound = false;

    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toString();
    }

    console.log(arr);
    console.log(typeof arr[0])

    for(let i = 0; i < arr.length; i++) {
        if (arr[i].includes("7")) {
            isSevenFound = true;
            break;
        }
    }

    if (!isSevenFound) {
        return "there is no 7 in the array";
    } else {
        return "Boom!"
    }
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));