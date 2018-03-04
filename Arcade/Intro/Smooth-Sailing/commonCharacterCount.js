// Given two strings, find the number of common characters between them.

//     Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

//     Input / Output

//     [execution time limit]4 seconds(js)

//     [input] string s1

// A string consisting of lowercase latin letters a - z.

// Guaranteed constraints:
// 1 ≤ s1.length ≤ 15.

// [input] string s2

// A string consisting of lowercase latin letters a - z.

// Guaranteed constraints:
// 1 ≤ s2.length ≤ 15.

function commonCharacterCount(s1, s2) {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] == s2[j]) {
                count++;
                s2 = s2.substring(1);
                break;
            }
        }
    }
    return count;
}
