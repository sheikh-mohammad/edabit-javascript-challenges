// null, undefined, 0, "", false, NaN

var arr = [1, 2, "Hello", true, "Bye", false, null, 3, undefined, true, 7, 8, "", "What?", " ", NaN, "..", true, 0, 0, false];
var falsyValues = [];

for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
        falsyValues.push(arr[i]);
    }
}

console.log(falsyValues);