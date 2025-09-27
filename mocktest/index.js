Write a function to return all elements of a given 2D matrix in spiral order.

Example:
Input →

[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]


Output →

[1, 2, 3, 6, 9, 8, 7, 4, 5]

let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const result = [];

let left = 0;
let right = nums[0].length - 1;
let top = 0;
let bottom = nums.length - 1;


function twodArray(nums) {
    while (left <= right && top <= bottom) {
        // left -> right
        for (let i = left; i <= right; i++) {
            // console.log(nums[top][i]);
            result.push(nums[top][i]);
        }
        top++;

        // top -> bottom
        for (let i = top; i <= bottom; i++) {
            // console.log(nums[i][right]);
            result.push(nums[i][right]);
        }
        right--;

        // right -> left
        for (let i = right; i >= left; i--) {
            // console.log(nums[bottom][i]);
            result.push(nums[bottom][i]);
        }
        bottom--;

        // bottom -> top
        for (let i = bottom; i >= top; i--) {
            // console.log(nums[i][left]);
            result.push(nums[i][left]);
        }
        left++;
    }
    return result;
}
console.log(twodArray(nums));





using Binary Search

let arr = [10, 20, 30, 40, 50, 60, 70];
let target = 10;

let left = 0;
let right = arr.length - 1;

function usingBinarySearch(arr) {
    while (left <= right) {
        let middleIndex = Math.round((left + right) / 2);
        let middleElement = arr[middleIndex];

        if (target == middleElement) {
            return middleIndex;
        } else if (target > middleElement) {
            left = middleIndex + 1;
        } else if (target < middleElement) {
            right = middleIndex - 1;
        }
    }
    return 0;
}
console.log(usingBinarySearch(arr));