// ✅ 2D Array Questions(5)
// 1. Transpose of a Matrix
// Description: Convert rows to columns and vice versa.
//     Input:
// [
//     [1, 2]
//     [3, 4],
//     [5, 6]
// ]
// Output:
// [
//     [1, 3, 5],
//     [2, 4, 6]
// ]

// let nums =
//     [
//         [1, 2],
//         [3, 4],
//         [5, 6]
//     ]
// function transposeMatrix(arr) {
//     let result = [];
//     for (let i = 0; i < arr[0].length; i++) {
//         let row = [];
//         for (let j = 0; j < arr.length; j++) {
//             row.push(arr[j][i]);
//         }
//         result.push(row);
//     }
//     return result;
// }
// console.log(transposeMatrix(nums));






// 2. Diagonal Sum of Square Matrix
// Description: Find the sum of both main diagonals.
//     Input:
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// Output: 25(1 + 5 + 9 + 3 + 5 + 7 – 5(counted twice))

// let nums = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// function isDiagonal(nums) {
//     let sum = 0;
//     let n = nums.length;

//     for (let i = 0; i < n; i++) {
//         sum += nums[i][i];

//         if (i !== n - i - 1) {
//             sum += nums[i][n - i - 1];
//         }
//     }
//     return sum;
// }

// console.log("Diagonal Sum:", isDiagonal(nums));





// 3. Spiral Print of Matrix
// Description: Print elements in spiral order.
//     Input:
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// let nums = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// function isSpiralMatrix(nums) {
//     const result = [];
//     let left = 0;
//     let right = nums[0].length - 1;
//     let top = 0;
//     let bottom = nums.length - 1;

//     while (left <= right && top <= bottom) {

//         // left --> right
//         for (let i = left; i <= right; i++) {
//             result.push(nums[top][i]);
//         }
//         top++;

//         // top --> bottom 
//         for (let i = top; i <= bottom; i++) {
//             result.push(nums[i][right]);
//         }
//         right--;

//         // right --> left
//         if (top <= bottom) {
//             for (let i = right; i >= left; i--) {
//                 result.push(nums[bottom][i]);
//             }
//             bottom--;
//         }

//         // bottom --> top
//         if (left <= right) {
//             for (let i = bottom; i >= top; i--) {
//                 result.push(nums[i][left]);
//             }
//             left++;
//         }
//         console.log(top, "top", bottom, "bottom", right, "right", left, "left");
//     }
//     return result;
// }

// console.log(isSpiralMatrix(nums));