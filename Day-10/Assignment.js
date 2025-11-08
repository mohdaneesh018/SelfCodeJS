// 1. Find the second highest number in an array without sorting it.
//     Input: [10, 5, 20, 8, 15]
// Output: 15

// let i = [10, 5, 20, 8, 15];
// let max = 0;
// let secondMax = 0;
// for (let j = 0; j < i.length; j++) {
//     if (i[j] > max) {
//         secondMax = max;
//         max = i[j];
//     } else if (i[j] > secondMax && i[j] < max) {
//         secondMax = i[j];
//     }
// }
// console.log("Second Highest:", secondMax);





// 2. Character frequency counter from a string.
//     Input: "apple"
// Output: { a: 1, p: 2, l: 1, e: 1 }

// let str = "apple";
// let frequency = {};
// for (let i = 0; i < str.length; i++) {
//     if (frequency[str[i]]) {
//         frequency[str[i]]++;
//     } else {
//         frequency[str[i]] = 1;
//     }
// }
// console.log("Character Frequency:", frequency);







// 3. Reverse only words in an array of strings.
//     Input: ["hello", "world"]
// Output: ["olleh", "dlrow"]

// let a = ["hello", "world"];
// let reversed = a.map((word) => word.split("").reverse().join(""));
// console.log(reversed);






// 4. Check even or odd using map.
//     Input: [1, 2, 3, 4]
// Output: ["odd", "even", "odd", "even"]

// let arr = [1, 2, 3, 4];
// let newArr = arr.map((num) => {
//     if (num % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// });
// console.log(newArr);






// 5. Flatten a nested array(1 level deep).
//     Input: [1, 2, [3, 4], 5]
// Output: [1, 2, 3, 4, 5]

// let i = [1, 2, [3, 4], 5];
// let j = i.flat();
// console.log(j);





// 6. Print all prime numbers between 10 and 50.
// Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

// let primes = [];
// let isPrime = true;
// for (let i = 10; i <= 50; i++) {
//     if (i < 2) {
//         isPrime = false;
//     }
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         primes.push(i);
//     }
// }
// console.log(primes);








// 7. Filter names that start with vowels.
//     Input: ["Alice", "Bob", "Eve", "Uma", "Charlie"]
// Output: ["Alice", "Eve", "Uma"]

// let i = ["Alice", "Bob", "Eve", "Uma", "Charlie"];
// let vowels = ["A", "E", "I", "O", "U"];
// let j = i.filter((str) => vowels.includes(str[0]));
// console.log(j);





// 8. Rotate array by one to the right.
//     Input: [1, 2, 3, 4]
// Output: [4, 1, 2, 3]

// let i = [1, 2, 3, 4];
// let last = i.pop();
// i.unshift(last);
// console.log(i);






// 9. Check if all array elements are greater than 10.
// Input: [12, 15, 22]
// Output: true

// let i = [12, 15, 22];
// let j = i.every((num) => num > 10);
// console.log(j);





// 10. Filter numbers divisible by 3 and 5.
// Input: [10, 15, 30, 20, 45]
// Output: [15, 30, 45]

// let arr = [10, 15, 30, 20, 45];
// let newArr = arr.filter((num) => {
//     if ((num % 3 == 0) && (num % 5 == 0)) {
//         return true;
//     }
// });
// console.log(newArr);






// 11. Fibonacci sequence up to 15 terms.
//     Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

// let a = 0;
// let b = 1;
// let sum = 0;
// for (let i = 0; i < 15; i++) {
//     console.log(a);
//     sum = a + b;
//     a = b;
//     b = sum;
// }






// 12. Count occurrences of a value in array.
//     Input: [1, 2, 1, 3, 1, 4], Element: 1
// Output: 3

// let arr = [1, 2, 1, 3, 1, 4];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 1) {
//         count++;
//     } else {
//         count
//     }
// }
// console.log(count);






// 13. Sum of even numbers using reduce.
//     Input: [1, 2, 3, 4, 5, 6]
// Output: 12

// let i = [1, 2, 3, 4, 5, 6];
// let sum = i.reduce((acc, curr) => {
//     if (curr % 2 === 0) {
//         return acc + curr;
//     }
//     return acc; //  
// }, 0);
// console.log(sum);







// 14..Check if string is palindrome.
//     Input: "madam"
// Output: true

// let str = "madam";
// let isPalindrome = true;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//         isPalindrome = false;
//         break;
//     }
// }
// console.log(isPalindrome);







// 15. Return grade based on marks using switch.
//     Input: Marks: 85
// Output: B

// let marks = 85;
// switch (true) {
//     case (marks >= 90):
//         console.log("Grade is: A");
//         break;
//     case (marks >= 80):
//         console.log("Grade is: B");
//         break;
//     case (marks >= 70):
//         console.log("Grade is: C");
//         break;
//     default:
//         console.log("Grade is: D");
//         break;
// }





// 17. Remove duplicates from array without Set.
//     Input: [1, 2, 2, 3, 4, 1]
// Output: [1, 2, 3, 4]

// let arr = [1, 2, 2, 3, 4, 1];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     let currentElement = arr[i];
//     if (newArr.includes(currentElement) === false) {
//         newArr.push(currentElement);
//     }
// }
// console.log(newArr);






// 18. 8. Slice first 3 elements of array.
//     Input: [10, 20, 30, 40, 50]
// Output: [10, 20, 30]

// let a = [10, 20, 30, 40, 50];
// let b = a.slice(0, 3);
// console.log(b);







// 19. Find intersection of two arrays.
//     Input: [1, 2, 3] and[2, 3, 4]
// Output: [2, 3]

// let i = [1, 2, 3];
// let j = [2, 3, 4];
// let output = [];
// for (let x = 0; x < i.length; x++) {
//     for (let y = 0; y < j.length; y++) {
//         if (i[x] == j[y]) {
//             output.push(i[x]);
//         }
//     }
// }
// console.log(output);






// 20. Reverse array using while loop(in -place).
//     Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]
// let arr = [1, 2, 3, 4];

// let newArr = [];
// let i = arr.length - 1;
// while (i >= 0) {
//     newArr.push(arr[i]);
//     i--;
// }
// console.log(newArr);







// 21. Check if all elements in an array are positive(use flag variable).
//     Input: [1, 4, 6, 9]
// Output: true
// Use a flag set to true, and turn it false if a negative number is found in loop.

// let arr = [1, 4, 6, 9];
// let flag = true;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         flag = false;
//         break;
//     }
// }
// console.log(flag);







// 22. Check if a string has both uppercase and lowercase letters.
//     Input: "HelloWorld"
// Output: true
// Use two flags: hasUpper and hasLower

// let str = "HelloWorld";
// let hasUpper = false;
// let hasLower = false;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") {
//         hasUpper = true;
//     }
//     if (str[i] >= "a" && str[i] <= "z") {
//         hasLower = true;
//     }
// }
// let output = hasUpper && hasLower;
// console.log(output);





// 23. Determine if a number is prime using flag inside loop.
//     Input: 13
// Output: true
// Set flag to false if any divisor is found in loop.

// let i = 13;
// let flag = true;
// for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//         flag = false;
//         break;
//     }
// }
// console.log(flag);







// 24.  Check if an array is sorted in ascending order using flag.
//     Input: [2, 5, 8, 9]
// Output: true
// Set flag false if any element is greater than next.

// let arr = [2, 5, 8, 9];
// let flag = true;
// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//         flag = false;
//         break;
//     }
// }
// console.log(flag);







// 25. Check if a word has repeating characters using flag.
//     Input: "coding"
// Output: false
// Use a flag and object / map to track character repetition.

// let str = "coding";
// let flag = false;
// let charMap = {};
// for (let ch of str) {
//     if (charMap[ch]) {
//         flag = true;
//         break;
//     } else {
//         charMap[ch] = true;
//     }
// }
// console.log(flag);