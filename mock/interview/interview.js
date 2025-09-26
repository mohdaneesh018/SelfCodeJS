// QS.

// let numbers = [100, 2, 3, 2, 4, 5, 100, 3, 4, 6, 100, 2, 100];
// function numCount(num) {
//     var pairs = {}
//     for (let i = 0; i < numbers.length; i++) {
//         if (pairs[numbers[i]]) {
//             pairs[numbers[i]]++;
//         } else {
//             pairs[numbers[i]] = 1;
//         }
//     }

//     let max = 0;
//     let value = null;
//     for (let key in pairs) {
//         if (pairs[key] > max) {
//             max = pairs[key];
//             value = key;
//             console.log(max, "max", value, "value");
//         }
//     }
//     return value;
// }

// console.log(numCount(numbers));






// Using Binary Search

// let nums = [10, 20, 30, 40, 50, 60, 70, 80];
// let target = 40;

// function BinarySearch(nums) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         let middleIndex = Math.round((left + right) / 2);
//         let middleElement = nums[middleIndex];

//         if (target == middleElement) {
//             return middleIndex;
//         } else if (target > middleElement) {
//             left = middleIndex + 1;
//         } else {
//             right = middleIndex - 1;
//         }
//     }
//     return -1;
// }
// console.log(BinarySearch(nums));






// Qs.
let nums = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
const result = [];

function twoDimensional(nums) {
    let left = 0;
    let right = nums[0].length - 1;
    let top = 0;
    let bottom = nums.length - 1;

    while (left <= right && top <= bottom) {
        // 
        for (let i = left; i <= right; i++) { 
            result.push(nums[top][i]);
        }
        top++;

        // 
        for (let i = top; i <= bottom; i++) { 
            result.push(nums[i][right]);
        }
        right--;

        // 
        if (top <= bottom) {
            for (let i = right; i >= left; i--) { 
                result.push(nums[bottom][i]);
            }
            bottom--;
        }

        // 
        if (left <= right) {
            for (let i = bottom; i >= top; i--) { 
                result.push(nums[i][left]);
            }
            left++;
        }
        console.log(top, "top", bottom, "bottom", right, "right", left, "left");
    }
    return result;
}
console.log(twoDimensional(nums));