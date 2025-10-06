Practice Qs.

Qs. 1: Find the First Non - Repeating Element in an Array
Input: [4, 5, 1, 2, 0, 4, 1, 0]
Output: 5
Use an object to store frequency, then return the first element with frequency 1

function firstNonRepeating(arr) {
    let frequency = {}
    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]]++;
        } else {
            frequency[arr[i]] = 1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]] === 1) {
            return arr[i];
        }
    }
    return;
}
console.log(firstNonRepeating([4, 5, 1, 2, 0, 4, 1, 0]));





Qs. 3: Merge Two Arrays and Remove Duplicates
Input: [1, 2, 3], [2, 3, 4]
Output: [1, 2, 3, 4]
Use Set or object keys for uniqueness

function mergeArray(arr1, arr2) {
        let newArr = [...new Set([...arr1, ...arr2])];
        return newArr;
    }
console.log(mergeArray([1, 2, 3], [2, 3, 4]));





Qs. 4: Convert an Array of Objects into a Single Object
let arr = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
Output: { 1: "A", 2: "B" }
Use a loop or reduce() to convert array into object with id as key

function arrayofObject(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        result[obj.id] = obj.name;
    }
    return result;
}
console.log(arrayofObject([{ id: 1, name: "A" }, { id: 2, name: "B" }]));







Qs. 5: Find Missing Number in Sorted Array(Binary Search)
Input: [1, 2, 3, 5, 6]
Output: 4
Use binary approach to find the missing number
let nums = [1, 2, 3, 5, 6];

function missingNumber(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let midElement = Math.floor((left + right) / 2);

        if (nums[midElement] === midElement + 1) {
            left = midElement + 1;
        } else {
            right = midElement - 1;
        }
    }
    return (left + 1);
}
console.log(missingNumber(nums));






Qs. 7: Convert Object to Array of Key - Value Pairs
let obj = { a: 1, b: 2 }
Output: [["a", 1], ["b", 2]]
Use Object.entries()

function objtoArray(obj) {
    let newArr = Object.entries(obj);
    return newArr;
}
console.log(objtoArray({ a: 1, b: 2 }));






Qs. 9: Binary Search in Sorted Array
Input: [1, 3, 5, 7, 9], Target = 5
Output: 2(Index of 5)
Implement binary search manually

let nums = [1, 3, 5, 7, 9];
let target = 5
function binarySearch(nums) {
    for (let i = 0; i < nums.length; i++) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let midIndex = Math.floor((left + right) / 2);
            let midElement = nums[midIndex];

            if (target == midElement) {
                return midIndex;
            } else if (target > midElement) {
                left = midIndex + 1;
            } else {
                right = midIndex - 1;
            }
        }
    }
}
console.log(binarySearch(nums));







Qs. 10: Group Elements by Frequency
Input: [1, 1, 2, 3, 3, 3]
Output:
{ "1": 2, "2": 1, "3": 3 }
Use object to group and count occurrences

function elementFrequency(arr) {
    let frequency = {}
    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]]++;
        } else {
            frequency[arr[i]] = 1;
        }
    }
    return frequency;
}
console.log(elementFrequency([1, 1, 2, 3, 3, 3]));