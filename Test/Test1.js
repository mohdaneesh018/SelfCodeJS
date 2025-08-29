// 1. Count Even and Odd Numbers
//    Write a function that takes an array of numbers and returns how many are even and how many are odd.
//    Input 1: [2, 3, 4, 5]
//    Output 1: { even: 2, odd: 2 }
//    Input 2: [11, 14, 16, 17, 19]
//    Output 2: { even: 2, odd: 3 }

// let arr = [2, 3, 4, 5];
// let arr = [11, 14, 16, 17, 19];
// let even = 0;
// let odd = 0;
// function countEvenOdd(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             even++;
//         } else {
//             odd++;
//         }

//     }
//     return { even, odd }
// }
// console.log(countEvenOdd(arr));










// 2. Grade Distribution
//    Given an array of marks, return how many students scored in grade ranges: A (90+), B (80-89), C (70-79),
//    D (60-69), F (<60).
//    Input 1: [95, 82, 67, 50]
//    Output 1: { A: 1, B: 1, C: 0, D: 1, F: 1 }
//    Input 2: [91, 59, 76, 88]
//    Output 2: { A: 1, B: 1, C: 1, D: 0, F: 1 }

// // let arr = [95, 82, 67, 50];
// let arr = [91, 59, 76, 88]
// function gradeRange(arr) {
//     let obj = { A: 0, B: 0, C: 0, D: 0, F: 0 };
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 90) {
//             obj.A++;
//         } else if ((arr[i] > 80) && (arr[i] < 89)) {
//             obj.B++;                             // isko apn aese bhi likh skte h obj["B"]++; output same rahega
//         } else if ((arr[i] > 70) && (arr[i] < 79)) {
//             obj.C++;
//         } else if ((arr[i] > 60) && (arr[i] < 69)) {
//             obj.D++;
//         } else {
//             obj.F++;
//         }
//     }
//     return obj;
// }
// console.log(gradeRange(arr));









// 3. All Positive Numbers?
//  Check if all elements in the array are greater than 0 using `every()`.
//  Input 1: [1, 2, 3, 4]
//  Output 1: true
//  Input 2: [-1, 0, 5]
//  Output 2: false

// // let arr = [1, 2, 3, 4];
// let arr = [-1, 0, 5]
// let newArr = arr.every(i => i > 0)
// console.log(newArr);






// 4. Find First Number Greater Than 50
//  Return the first number in the array greater than 50 using find or loop.
//  Input 1: [10, 25, 60, 40]
//  Output 1: 60
//  Input 2: [45, 52, 19]
//  Output 2: 52

// // let arr = [10, 25, 60, 40];
// let arr = [45, 52, 19];
// let newArr = arr.find((item) => {
//     return item > 50;
// });
// console.log(newArr);







// 5. Leap Year Checker
//  Check if a year is a leap year (divisible by 4 but not 100, unless divisible by 400).
//  Input 1: 2024
//  Output 1: true
//  Input 2: 2023
//  Output 2: false

// // let year = 2024;
// let year = 2023;
// function leapChecker(year) {
//     if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
//         return `${year} is a leap year.`
//     }
//     return `${year} is not a leap year.`
// }
// console.log(leapChecker(year));







// 6. Double the Elements
//  Using `map()`, return a new array where every number is multiplied by 2.
//  Input 1: [1, 2, 3]
//  Output 1: [2, 4, 6]
//  Input 2: [5, 10]
//  Output 2: [10, 20]

// // let arr = [1, 2, 3];
// let arr = [5, 10];
// let newArr = arr.map((item) => {
//     return item * 2;
// })
// console.log(newArr);





// 7. Filter Out Even Numbers
//  Return a new array with only the odd numbers using `filter()`.
//  Input 1: [1, 2, 3, 4, 5]
//  Output 1: [1, 3, 5]
//  Input 2: [10, 15, 20, 25]
//  Output 2: [15, 25]

// // let arr = [1, 2, 3, 4, 5];
// let arr = [10, 15, 20, 25]
// let newArr = arr.filter((i) => {
//     return i % 2 == 1;
// });
// console.log(newArr);






// 8. Total Character Count in Strings
//  Return the total number of characters in an array of strings using `reduce()`.
//  Input 1: ['hi', 'world']
//  Output 1: 7
//  Input 2: ['a', 'ab', 'abc']
//  Output 2: 6

// // let arr = ['hi', 'world'];
// let arr = ['a', 'ab', 'abc'];
// let newArr = arr.reduce((acc, str) => {
//     return acc + str.length
// }, 0)
// console.log(newArr);






// 9. Get Last 3 Items
//  Return the last 3 items in the array using `slice()`.
//  Input 1: [1, 2, 3, 4, 5]
//  Output 1: [3, 4, 5]
//  Input 2: [10, 20, 30, 40]
//  Output 2: [20, 30, 40]

// // let arr = [1, 2, 3, 4, 5];
// let arr = [10, 20, 30, 40];
// let newArr = arr.slice(1, arr.length);
// console.log(newArr);

// OR

// let arr = [10, 20, 30, 40, 50, 40, 30, 20, 10];
// let newArr = arr.slice(-3, arr.length);
// console.log(newArr);






// 10. Remove Element at Index 2
//  Use `splice()` to remove the element at index 2.
//  Input 1: [1, 2, 3, 4]
//  Output 1: [1, 2, 4]
//  Input 2: [10, 11, 12, 13]
//  Output 2: [10, 11, 13]

// // let arr = [1, 2, 3, 4];
// let arr = [10, 11, 12, 13]
// arr.splice(2, 1);
// console.log(arr);

//  OR

// let arr = [1, 2, 3, 4];
// arr.splice(3, 0, 40);
// console.log(arr);







// 11. Capitalize First Letter
//  Return a new array where each word starts with an uppercase letter.
//  Input 1: ['hello', 'world']
//  Output 1: ['Hello', 'World']
//  Input 2: ['code', 'test']
//  Output 2: ['Code', 'Test']

// let arr = ['hello', 'world'];
// function firstLetter(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let word = arr[i];
//         let Capitalize = word[0].toUpperCase() + word.slice(1);
//         result.push(Capitalize);
//     }
//     return result;
// }
// console.log(firstLetter(arr));

// OR Second Method

// let arr = ['code', 'test'];
// let newArr = arr.map(word => word[0].toUpperCase() + word.slice(1));
// console.log(newArr);






// 12. Check Divisibility by 5
//  Use `some()` to check if at least one number in the array is divisible by 5.
//  Input 1: [3, 6, 10, 14]
//  Output 1: true
//  Input 2: [2, 4, 6]
//  Output 2: false

// // let arr = [3, 6, 10, 14];
// let arr = [2, 4, 6];
// let newArr = arr.some((num) => {
//     return num % 5 == 0;
// })
// console.log(newArr);







// 13. Find Index of First Negative
//  Return the index of the first negative number, or -1 if none found.
//  Input 1: [1, 2, -3, 4]
//  Output 1: 2
//  Input 2: [5, 7, 8]
//  Output 2: -1

// // let arr = [1, 2, -3, 4];
// let arr = [5, 7, 8];
// function negativeIndex(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(negativeIndex(arr));







// 14. Count Word Frequencies
//  Return an object where the keys are words and values are how many times each appears.
//  Input 1: ['apple', 'banana', 'apple']
//  Output 1: { apple: 2, banana: 1 }
//  Input 2: ['x', 'x', 'y']
//  Output 2: { x: 2, y: 1 }

// // let str = ['apple', 'banana', 'apple'];
// let str = ['x', 'x', 'y'];
// function countFrequency(str) {
//     let obj = {}
//     for (let i = 0; i < str.length; i++) {
//         let word = str[i];
//         if(obj[word]){
//             obj[word]++;
//         } else {
//             obj[word] = 1;
//         }
//     }
//     return obj;
// }
// console.log(countFrequency(str));







// 15. Group Strings by Length
//  Create an object grouping strings based on their length.
//  Input 1: ['hi', 'yes', 'no', 'maybe']
//  Output 1: { 2: ['hi', 'no'], 3: ['yes'], 5: ['maybe'] }
//  Input 2: ['a', 'ab', 'abc']
//  Output 2: { 1: ['a'], 2: ['ab'], 3: ['abc'] }

// // let str = ['hi', 'yes', 'no', 'maybe'];
// let str = ['a', 'ab', 'abc'];
// function strLength(str) {
//     let obj = {};
//     for(let i = 0; i < str.length; i++){
//         let word = str[i];
//         let length = word.length;

//         if(obj[length]){
//             obj[length].push(word);
//         } else {
//             obj[length] = [word];
//         }

//     }
//     return obj;
// }
// console.log(strLength(str));





// 16. Convert Array to Object by ID
//  Convert an array of objects to a single object where keys are IDs and values are names.
//  Input 1: [{id:1, name:'A'}, {id:2, name:'B'}]
//  Output 1: { 1: 'A', 2: 'B' }
//  Input 2: [{id:3, name:'X'}, {id:4, name:'Y'}]
//  Output 2: { 3: 'X', 4: 'Y' }

// // let arr = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
// let arr = [{id:3, name:'X'}, {id:4, name:'Y'}];
// function arraytoObj(arr) {
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i].id] = arr[i].name;
//     }
//     return obj;
// }
// console.log(arraytoObj(arr));







// 17. . Count Data Types
//  Return a count of how many times each data type appears in an array.
//  Input 1: [1, 'hi', true, {}]
//  Output 1: { number: 1, string: 1, boolean: 1, object: 1 }
//  Input 2: ['x', 'y', 5]
//  Output 2: { string: 2, number: 1 }

// // let arr = [1, 'hi', true, {}];
// let arr = ['x', 'y', 5];
// function countDataTypes(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         let type = typeof arr[i];
//         if(obj[type]){
//             obj[type]++;
//         } else {
//             obj[type] = 1;
//         }
//     }
//     return obj;
// }
// console.log(countDataTypes(arr));






// 18. Flatten One-Level Nested Array
//  Flatten a single-level nested array (no recursion).
//  Input 1: [1, [2, 3], 4]
//  Output 1: [1, 2, 3, 4]
//  Input 2: ['a', ['b', 'c']]
//  Output 2: ['a', 'b', 'c']

// // let arr = [1, [2, 3], 4];
// function flatten(arr) {
//     return arr.flat(1);
// }
// console.log(flatten(arr));

// OR

// // let arr = ['a', ['b', 'c']];
// let arr = [1, [2, 3], [4, [5, 6]]];
// let result = [];
// function flatten(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             for (let j = 0; j < arr[i].length; j++) {
//                 if (Array.isArray(arr[i][j])) {
//                     for (let k = 0; k < arr[i][j].length; k++) {
//                         result.push(arr[i][j][k]);
//                     }
//                 } else {
//                     result.push(arr[i][j]);
//                 }
//             }
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(flatten(arr));





// 19. Remove Duplicate Numbers
//  Return a new array without duplicate numbers.
//  Input 1: [1, 2, 2, 3]
//  Output 1: [1, 2, 3]
//  Input 2: [4, 4, 4, 5]
//  Output 2: [4, 5]

// // let arr = [1, 2, 2, 3]
// let arr = [4, 4, 4, 5];
// let result = []
// function removeDuplicateArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(removeDuplicateArr(arr));








// 20.  Find Longest Word
//  Return the longest word from an array of strings.
//  Input 1: ['hi', 'hello', 'goodbye']
//  Output 1: 'goodbye'
//  Input 2: ['short', 'longer', 'lengthiest']
//  Output 2: 'lengthiest'

// // let str = ['hi', 'hello', 'goodbye'];
// let str = ['short', 'longer', 'lengthiest', 'depend'];
// let longestWord = "";
// function longStr(str) {
//     for (let i = 0; i < str.length; i++) {
//         let currentWord = str[i];
//         if (currentWord.length > longestWord.length) {
//             longestWord = currentWord;
//         }
//     }
//     return longestWord;
// }
// console.log(longStr(str));