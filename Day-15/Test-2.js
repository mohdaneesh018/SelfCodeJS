1. Reverse an array
Reverse the elements of an array manually (without using .reverse()).
Input 1: [1, 2, 3]
Output 1: [3, 2, 1]
Input 2: [10, 20, 30]
Output 2: [30, 20, 10]

// let arr = [1, 2, 3]; 
let arr = [10, 20, 30];
let result = [];

function reverseArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result;
}
console.log(reverseArray(arr));





2. Find second largest number in an array
Return the second largest unique number from an array.
Input 1: [10, 5, 20, 8]
Output 1: 10
Input 2: [1, 2, 2, 3]
Output 2: 2

let arr = [10, 5, 20, 8];
let arr = [1, 2, 2, 3];
let max = 0;
let secMax = 0;

function secondLargest(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secMax = max;
            max = arr[i];
        } else if ((arr[i] > secMax) && (arr[i] > max)) {
            secMax = arr[i];
        }
    }
    return secMax;
}
console.log(secondLargest(arr));






3. Remove duplicates from array
Return a new array with all duplicates removed (no Set).
Input 1: [1, 2, 2, 3]
Output 1: [1, 2, 3]
Input 2: [5, 5, 5, 1]
Output 2: [5, 1]

// let arr = [1, 2, 2, 3];
let arr = [5, 5, 5, 1];
let result = [];

function removeDuplicates(arr) {
    for(let i = 0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicates(arr));





4. Check if two arrays are equal
Compare if two arrays have same elements in same order.
Input 1: [1, 2, 3], [1, 2, 3]
Output 1: true
Input 2: [1, 2], [2, 1]
Output 2: false


let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr1 = [1, 2];
let arr2 = [2, 1];
function arrayAreEqual(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] != arr2[i]){
            return false;
        }
    }
    return true;
}
console.log(arrayAreEqual(arr1, arr2));






5. . Rotate array k times to the right
Rotate array elements k times to the right.
Input 1: [1, 2, 3, 4], k = 2
Output 1: [3, 4, 1, 2]
Input 2: [10, 20, 30], k = 1
Output 2: [30, 10, 20]

// let arr = [1, 2, 3, 4];
// let k = 2;
let arr = [10, 20, 30];
let k = 1;
function rotateK(arr) {
    for (let x = 0; x < k; x++) {
        let lastElement = arr[arr.length - 1];
        for (let i = arr.length - 1; i >= 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = lastElement;
    }
    return arr;
}
console.log(rotateK(arr));






6. Count vowels in a string
Count number of vowels (a, e, i, o, u) in a given string.
Input 1: "hello"
Output 1: 2
Input 2: "JAVASCRIPT"
Output 2: 3

// let str = "hello";
let str = "JAVASCRIPT";  
let count = 0;
let vowels = ["a", "e", "i", "o", "u"];
function countVowels(str) {
    let string = str.toLowerCase();
    for (let i = 0; i <= str.length; i++) {
        if (vowels.includes(string[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels(str));






7. Print triangle pattern using loops
Write a loop to print * pattern based on number of rows.
Input 1: 3
Output 1: *
          * *
          * * *
Input 2: 2
Output 2: *
          * *

// let n = 3;
let n = 5;
function printPattern(n) {
    let res = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            res += "* ";
        }
        res += "\n";
    }
    return res;
}
console.log(printPattern(n));






8. Factorial using recursion
Calculate factorial of a number using recursion.
Input 1: 5
Output 1: 120
Input 2: 3
Output 2: 6

function factorial(n) {
    if(n === 0 || n === 1){
        return 1;
    } 
    return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(3));

OR

function factorial(n) {
    let result = 1;
    for(let i = 2; i <= n; i++){           // i = 1 se  hi kr skte h 
        result = result * i;
    }
    return result;
}
console.log(factorial(4));
console.log(factorial(0));






9. Check if number is prime
Return true if number is prime (only divisible by 1 and itself).
Input 1: 7
Output 1: true
Input 2: 9
Output 2: false

function numberPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(numberPrime(7));
console.log(numberPrime(9)); 






10. Find Fibonacci number at Nth position
Return the Nth Fibonacci number (0-indexed).
Input 1: 5
Output 1: 5
Input 2: 6
Output 2: 8

function fibonacciNum(n) {
    let num1 = 0;
    let num2 = 1;
    let num3;

    if (n === 0) return 0;
    if (n === 1) return 1;
    
    for (let i = 2; i <= n; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num3;
}
console.log(fibonacciNum(5));     // 5
console.log(fibonacciNum(6));     // 8





11. Count frequency of array elements
Return an object with count of each element in array.
Input 1: [1, 2, 2, 3]
Output 1: {1:1, 2:2, 3:1}
Input 2: [4, 4, 4]
Output 2: {4:3}

// let arr = [1, 2, 2, 3];
let arr = [4, 4, 4];
let obj = {}
function countFrequency(arr) {
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
}
console.log(countFrequency(arr));







12. Invert object (key value)
Swap keys and values in an object.
Input 1: {a:1, b:2}
Output 1: {1:'a', 2:'b'}
Input 2: {x:'y', z:'w'}
Output 2: {'y':'x', 'w':'z'}

// let obj = {a:1, b:2};
let obj =  {x:'y', z:'w'};
function invertObj(obj) {
    let result = {};
    for(let key in obj){
        let values = obj[key];
        result[values] = key;
    }
    return result;
}
console.log(invertObj(obj));





13. Merge two objects
Combine two objects into one.
Input 1: {a:1}, {b:2}
Output 1: {a:1, b:2}
Input 2: {x:10}, {x:20, y:30}
Output 2: {x:20, y:30}

let obj1 = { a: 1 };
let obj2 = { b: 2 };

function mergeObject(obj1, obj2) {
    return {...obj1, ...obj2};
}
console.log(mergeObject(obj1, obj2));

let obj1 = { x: 10 };
let obj2 = { x: 20, y: 30 };
let result = {};

function mergeObject(obj1, obj2) {
    for (let key in obj1) {
        result[key] = obj1[key];
    }
    for (let key in obj2) {
        result[key] = obj2[key];
    }
    return result;
}
console.log(mergeObject(obj1, obj2));






14. Find key with highest value in object
Return the key which has the highest numeric value.
Input 1: {a: 1, b: 5, c: 3}
Output 1: "b"
Input 2: {x: 100, y: 99}
Output 2: "x"

let obj = { a: 1, b: 5, c: 3 };
let maxValue = 0;

function highestValue(obj) {
    for (let key in obj) {

    }
    return value;
}
console.log(highestValue(obj));