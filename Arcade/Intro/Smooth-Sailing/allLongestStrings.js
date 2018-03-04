// Given an array of strings, return another array containing all of its longest strings.

//     Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] array.string inputArray

// A non - empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
//     1 ≤ inputArray[i].length ≤ 10.

//     [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.

function allLongestStrings(arr) {
    let newArr = [];
    let temp;
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            if (arr[j + 1].length < arr[j].length) { var t = arr[j + 1]; arr[j + 1] = arr[j]; arr[j] = t; }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == arr[arr.length - 1].length) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}