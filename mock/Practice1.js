Qs. Ek array k andr jo key sabse jyada baar aayi h uska count print kro
let numbers = [100, 2, 3, 2, 4, 5, 100, 3, 4, 6, 100, 2, 100];

function countDigit(nums) {
    let pairs = {};
    for (let i = 0; i <= nums.length - 1; i++) {
        if (pairs[nums[i]]) {
            pairs[nums[i]]++;
        } else {
            pairs[nums[i]] = 1;
        }
    }
    console.log(pairs, "pairs");

    let max = 0;
    let value = null;
    for (let key in pairs) {
        if (pairs[key] > max) {
            max = pairs[key];
            value = key;
        }
        console.log(max, "max", value, "value");
    }
    return value;
}

console.log(countDigit([100, 2, 3, 2, 4, 5, 100, 3, 4, 6, 100, 2, 100]));





Qs. Using Binary Search

let nums = [10, 20, 30, 40, 50, 60, 70, 80];
let target = 60;

function usedBinary(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middleIndex = Math.round((left + right) / 2);
        let middleElement = nums[middleIndex];

        if (target == middleElement) {
            return middleIndex;
        } else if (target > middleElement) {
            left = middleIndex + 1;
        } else {
            right = middleIndex - 1;
        }
    }
    return middleIndex;
}

console.log(usedBinary(nums, target));







2D-Array Print Spiral
let nums = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

function printSpiral(nums) {
    const result = [];
    let left = 0;
    let right = nums[0].length - 1;
    let top = 0;
    let bottom = nums.length - 1;

    while (left <= right && top <= bottom) {
        // left => right
        for (let i = left; i <= right; i++) {
            // console.log(nums[top][i]);
            result.push(nums[top][i]);
        }
        top++;

        // top => bottom
        for (let i = top; i <= bottom; i++) {
            // console.log(nums[i][right]);
            result.push(nums[i][right]);
        }
        right--;

        // right => left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                // console.log(nums[bottom][i]);
                result.push(nums[bottom][i]);
            }
            bottom--;
        }


        // bottom => top
        for (let i = bottom; i >= top; i--) {
            // console.log(nums[i][left]);
            result.push(nums[i][left]);
        }
        left++;
    }
    return result;
}

console.log(printSpiral(nums));






Qs. Diagonal Sum nikalo (primary + secondary diagonal)  [output => 1 + 5 + 9   3 + 5 + 7 = 30]
let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function sumDiagonal(arr) {
    let n = arr.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i][i];

        if (i !== n + i - 1) {
            sum += arr[i][n - i - 1];
        }
    }
    return sum;
}

console.log(sumDiagonal(nums));





Qs. 3. LocalStorage me ek student ka object store karna hai:
{name: "Aneesh", age: 20, course: "CSE"}
Tumhe JSON.stringify use karke save karna hoga aur JSON.parse se wapas print karna hoga.

let student = {
    name: "Aneesh",
    age: 20,
    course: "CSE"
};

localStorage.setItem("student", JSON.stringify(student));

let studentData = localStorage.getItem("student");
console.log(studentData, "studentData");


let parsedData = JSON.parse(studentData);
console.log(parsedData, "parseData");