// Diamond Pattern

// Qs.
// let n = 4;
// // upper part
// for (let i = 1; i <= n; i++) {
//     let res = "";
//     for (let spaces = 1; spaces <= (n - i); spaces++) {
//         res += " "
//     }
//     for (let star = 1; star <= (2 * i) - 1; star++) {
//         res += "*"
//     }
//     console.log(res);
// }

// // lower part
// for(let i = 1; i <= n - 1; i++) {
//     let res = "";
//     for(let spaces = 1; spaces <= i; spaces++) {
//         res += " ";
//     }
//     for(let star = 1; star <= 2 * (n - i) - 1; star++) {
//         res += "*";
//     }
//     console.log(res);
// }





// Qs.
// let num = 7;
// for(let i = 1; i <= 10; i++) {
//     console.log(`${num} * ${i} = ${num * i}`)
// }




// Qs using while
// let i = 1;
// while(i <= 10) {
//     console.log(i);
//     i++;
// }




// Qs. do-while
// let i = 1;
// do{
//     console.log(i);
//     i++;
// }while (i <= 20);



// Qs.
// let sum = 0;
// let i = 1;
// do {
//     sum += i;
//     i++;
// } while(i <= 7)
//     console.log(sum);





// let n = 3;
// for(let i = 1; i <= n; i++){
//     let res = "";
//     for(let j = 1; j <= n; j++){
//         res += j + " ";
//     }
//     console.log(res);
// }






// let year = 1997;
// if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//     console.log("Year leap");
// } else {
//     console.log("not leap");
// }





// 2. Inheritance
// Definition => It allows one class to inherit properties and method from another class

// class User {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     greetUser() {
//         console.log(`Hello ${this.name} ${this.surname}`);
//     }
// }

// class Student extends User {
//     greetStudent() {
//         console.log(`Good morning! ${this.name} ${this.surname} from extends USer`);
//     }
// }

// const myUser = new User("Rohit", "Sharma");
// myUser.greetUser();

// const myStudent = new Student("Virat", "Kohli");
// myStudent.greetStudent();


// 2D Array
//  Qs. 1
// let nums = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
// ];

// function spiralArray(nums) {

//     let result = [];
//     let left = 0;
//     let right = nums[0].length - 1;
//     let top = 0;
//     let bottom = nums.length - 1;

//     while (left <= right && top <= bottom) {
//         // left => right
//         for (let i = left; i <= right; i++) {
//             result.push(nums[top][i]);
//         }
//         top++;

//         // top => bottom
//         for (let i = top; i <= bottom; i++) {
//             result.push(nums[i][right]);
//         }
//         right--;

//         // right => left
//         if (top <= bottom) {
//             for (let i = right; i >= left; i--) {
//                 result.push(nums[bottom][i]);
//             }
//             bottom--;
//         }


//         // bottom => top
//         if (left <= right) {
//             for (let i = bottom; i >= top; i--) {
//                 result.push(nums[i][left]);
//             }
//             left++;
//         }
//         console.log(top, "top", bottom, "bottom", left, "left", right, "right");
//     }
//     return result;
// }

// console.log(spiralArray(nums));





// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// let n = matrix.length;
// let result = [];

// // Step 1: First row
// for (let i = 0; i < n; i++) {
//   result.push(matrix[0][i]);
// }

// // Step 2: Diagonal (exclude first & last element)
// for (let i = 1; i < n - 1; i++) {
//   result.push(matrix[i][n - 1 - i]);
// }

// // Step 3: Last row
// for (let i = 0; i < n; i++) {
//   result.push(matrix[n - 1][i]);
// }

// console.log("Z-Type Traversal:", result.join(" "));               //Z-Type Traversal: 1 2 3 5 7 8 9









// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// let n = matrix.length;
// let result = [];

// // Step 1: First column
// for (let i = 0; i < n; i++) {
//   result.push(matrix[i][0]);
// }

// // Step 2: Diagonal (exclude first & last element)
// for (let i = n - 2; i > 0; i--) {
//   result.push(matrix[i][n - 1 - i]);
// }

// // Step 3: Last column
// for (let i = 0; i < n; i++) {
//   result.push(matrix[i][n - 1]);
// }

// console.log("N-Type Traversal:", result.join(" "));           //N-Type Traversal: 1 4 7 5 3 6 9






// let nums = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// let result = [];
// function transpose(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums[i].length; j++) {
//             result.push(nums[j][i]);
//         }
//     }
//     return result;
// }
// console.log(transpose(nums));





// let nums = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// function isDiagonal(nums) {
//     let n = nums.length;
//     let sum = 0;

//     for (let i = 0; i < n; i++) {
//         sum += nums[i][i];

//         if (i !== n - i - 1) {              // 25
//             sum += nums[i][n - i - 1];
//         }
//     }
//     return sum;
// }
// console.log(isDiagonal(nums));   





// binary search
// let nums = [10, 20, 30, 40, 50, 60];
// let target = 98;

// function binarySearch(nums) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         let middleIndex = Math.floor((left + right) / 2);
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
// console.log(binarySearch(nums));





// Output →[4, 9]

// let arr = [4, 5, 9, 4, 9, 2]
// let freq = {}
// let result = [];

// function findDuplicates(arr) {
//     for (let num of arr) {
//         freq[num] = (freq[num] || 0) + 1;
//     }

//     for (let key in freq) {
//         if (freq[key] > 1) {
//             result.push(Number(key));
//         }
//     }
//     return result;
// }
// console.log(findDuplicates(arr));






// const arr = [4, 3, 2, 4, 1, 3, 5, 2];
// let duplicates = [];

// function isDuplicates(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j <arr.length; j++) {
//             if(arr[i] === arr[j]){
//                 if(!duplicates.includes(arr[i])) {
//                     duplicates.push(arr[i]);
//                 }
//             }
//         } 
//     }
//     return duplicates;
// }
// console.log(isDuplicates(arr));






// const arr = [4, 3, 2, 4, 1, 3, 5, 2];
// let unique = [];

// function isArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!unique.includes(arr[i])) {
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// console.log(isArr(arr));


// let nums = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//         [nums[i][j], nums[j][i]] = [nums[j][i], nums[i][j]];
//     }
// }
// for (let i = 0; i < nums.length; i++) {
//     nums[i].reverse();
// }
// console.log(nums);     // [[7, 4, 1], [8, 5, 2], [9, 6, 3]]




// 
// let nums = [100, 2, 3, 2, 4, 5, 100, 3, 4, 6, 100, 2, 100];

// function numCount(nums) {
//     var pairs = {}
//     for(let i = 0; i < nums.length; i++) {
//         if(pairs[nums[i]]) {
//             pairs[nums[i]]++;
//         } else {
//             pairs[nums[i]] = 1;
//         }
//     }

//     let max = 0;
//     let value = null;
//     for(let key in pairs) {
//         if(pairs[key] > max) {
//             max = pairs[key];
//             value = key;
//             console.log(max, "max", value, "value");
//         }
//     }
//     return value;
// }
// console.log(numCount(nums));