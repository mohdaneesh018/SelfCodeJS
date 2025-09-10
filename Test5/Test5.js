✅ 2D Array Questions (5)
1. Transpose of a Matrix
Description: Convert rows to columns and vice versa.
Input:
[
 [1, 2]
 [3, 4],
 [5, 6]
]
Output:
[
 [1, 3, 5],
 [2, 4, 6]
]

let nums =
    [
        [1, 2],
        [3, 4],
        [5, 6]
    ]
function transposeMatrix(arr) {
    let result = [];

    for (let i = 0; i < arr[0].length; i++) {
        let row = [];
        for (let j = 0; j < arr.length; j++) {
            row.push(arr[j][i]);
        }
        result.push(row);
    }
    return result;
}
console.log(transposeMatrix(nums));






2. Diagonal Sum of Square Matrix
Description: Find the sum of both main diagonals.
Input:
[
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
]
Output: 25 (1+5+9 + 3+5+7 – 5 (counted twice))

let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function isDiagonal(nums) {
    let sum = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        sum += nums[i][i];

        if (i !== n - i - 1) {
            sum += nums[i][n - i - 1];
        }
    }
    return sum;
}

 console.log("Diagonal Sum:", isDiagonal(nums));