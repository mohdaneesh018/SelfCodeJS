1. Write a function that takes an array of integers and returns a new array containing only the elements that appear more than once.

Example:
Input →[4, 5, 9, 4, 9, 2]
Output →[4, 9]

let arr = [4, 5, 9, 4, 9, 2];
let freq = {};
let result = [];

function findDuplicates(arr) {
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let key in freq) {
        if (freq[key] > 1) {
            result.push(Number(key));
        }
    }
    return result;
}
console.log(findDuplicates(arr));






2. Write a function to rotate a 2D matrix(n x n) by 90 degrees clockwise.

Example:
Input →
[[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

Output →
[[7, 4, 1],
[8, 5, 2],
[9, 6, 3]]

let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function rotateD(nums) {
    for (let i = 0; i <= nums.length - 1; i++) {
        for (let j = 0; j < i; j++) {
            let temp = nums[i][j];
            nums[i][j] = nums[j][i];
            nums[j][i] = temp;
        }
    }
    // console.log(nums);

    for (let i = 0; i < nums.length; i++) {
        nums[i].reverse();
    }
    return nums;
}
console.log(rotateD(nums));






3. Binary Search Problem
Implement binary search to find the index of a given number in a sorted array.If not found, return -1.

Example:
Input →[2, 5, 7, 10, 14, 20], target = 10
Output → 3

let arr = [2, 5, 7, 10, 14, 20];
let target = 10;

let left = 0;
let right = arr.length - 1;

function isBinary(arr) {
    while (left <= right) {
        let middleIndex = Math.round((left + right) / 2);
        let middleElement = arr[middleIndex];

        if (target == middleElement) {
            return middleIndex;
        } else if (target > middleElement) {
            left = middleIndex + 1;
        } else {
            right = middleIndex - 1;
        }
    }
    return -1;
}
console.log(isBinary(arr));





4.Subarray Problem
Write a function to find the maximum sum of any contiguous subarray of size k.

Example:
Input →[2, 1, 5, 1, 3, 2], k = 3
Output → 9(5 + 1 + 3)

let arr = [2, 1, 5, 1, 3, 2];
let k = 3;

function maxsumFind(arr, k) {
    let maxSum = 0;

    for (let i = 0; i <= arr.length - k; i++) {
        let currentSum = 0;

        for (let j = i; j < (i + k); j++) {
            currentSum += arr[j];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}
console.log(maxsumFind(arr, k));