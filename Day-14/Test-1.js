// 1. Count Even and Odd Numbers
//    Write a function that takes an array of numbers and returns how many are even and how many are odd.
//    Input 1: [2, 3, 4, 5]
//    Output 1: { even: 2, odd: 2 }
//    Input 2: [11, 14, 16, 17, 19]
//    Output 2: { even: 2, odd: 3 }

// // let arr = [2, 3, 4, 5];
// let arr = [11, 14, 16, 17, 19];
// let even = 0;
// let odd = 0;
// function countEvenOdd(arr) {
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         even++;
//     } else {
//         odd++;
//     }

// }
// return { even, odd }
// }
// console.log(countEvenOdd(arr));










// 2. Grade Distribution
//    Given an array of marks, return how many students scored in grade ranges: A (90+), B (80-89), C (70-79),
//    D (60-69), F (<60).
//    Input 1: [95, 82, 67, 50]
//    Output 1: { A: 1, B: 1, C: 0, D: 1, F: 1 }
//    Input 2: [91, 59, 76, 88]
//    Output 2: { A: 1, B: 1, C: 1, D: 0, F: 1 }

// let arr = [95, 82, 67, 50];
// let count = 0;

// function arrayMarks(arr) {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 90) {
//             console.log("A :", count);
//         } else if((arr[i] > 80) && (arr[i] < 89)){
//             console.log("B :", count);
//         }
//     }
// }
// arrayMarks(arr);







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
//     return item > 50
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

// let arr = [1, 2, 3, 4];
// let arr = [10, 11, 12, 13]
// arr.splice(2, 1);
// console.log(arr);   

//  OR

// let arr = [1, 2, 3, 4];
// arr.splice(3, 0, 40); 
// console.log(arr);