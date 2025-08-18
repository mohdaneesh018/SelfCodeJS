// 1. 1. Reverse an array
// Reverse the elements of an array manually (without using .reverse()).
// Input 1: [1, 2, 3]
// Output 1: [3, 2, 1]
// Input 2: [10, 20, 30]
// Output 2: [30, 20, 10]

// // let arr = [1, 2, 3]; 
// let arr = [10, 20, 30];
// let result = [];

// function reverseArray(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result.push(arr[i])
//     }
//     return result;
// }
// console.log(reverseArray(arr));





// 2. Find second largest number in an array
// Return the second largest unique number from an array.
// Input 1: [10, 5, 20, 8]
// Output 1: 10
// Input 2: [1, 2, 2, 3]
// Output 2: 2

// let arr = [10, 5, 20, 8];
// let arr = [1, 2, 2, 3];
// let max = 0;
// let secMax = 0;

// function secondLargest(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             secMax = max;
//             max = arr[i];
//         } else if ((arr[i] > secMax) && (arr[i] > max)) {
//             secMax = arr[i];
//         }
//     }
//     return secMax;
// }
// console.log(secondLargest(arr));






// 3. Remove duplicates from array
// Return a new array with all duplicates removed (no Set).
// Input 1: [1, 2, 2, 3]
// Output 1: [1, 2, 3]
// Input 2: [5, 5, 5, 1]
// Output 2: [5, 1]

// // let arr = [1, 2, 2, 3];
// let arr = [5, 5, 5, 1];
// let result = [];

// function removeDuplicates(arr) {
//     for(let i = 0; i < arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(removeDuplicates(arr));





// 4. Check if two arrays are equal
// Compare if two arrays have same elements in same order.
// Input 1: [1, 2, 3], [1, 2, 3]
// Output 1: true
// Input 2: [1, 2], [2, 1]
// Output 2: false


// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// let arr1 = [1, 2];
// let arr2 = [2, 1];
// let isCheck = false

// function arrayAreEqual(arr1, arr2) {
//     for(let i = 0; i < arr1.length; i++){
//         if(arr1[i] != arr2[i]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(arrayAreEqual(arr1, arr2));






// 5. . Rotate array k times to the right
// Rotate array elements k times to the right.
// Input 1: [1, 2, 3, 4], k = 2
// Output 1: [3, 4, 1, 2]
// Input 2: [10, 20, 30], k = 1
// Output 2: [30, 10, 20]

// let arr = [1, 2, 3, 4];
// let k = 2;