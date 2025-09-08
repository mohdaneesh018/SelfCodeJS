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