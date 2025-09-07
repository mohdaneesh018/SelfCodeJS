// Closure
// Inheritance
// 2D - Array


// 1. Closure

function outerFunc() {              // isme innerfunction ko outerfunction ke scope ka access hota h jisko lexical environment kahte h  
    let counter = 0;
    function innerFunc() {
        counter++;
        console.log(counter);
    }
    return innerFunc;
}
const count = outerFunc();
count();                        // yaha pr us function ko call krte h tb bhi usko state ka access mil jata h ye hota h Closure
count();
count();




// 2. Inheritance
// Definition => It allows one class to inherit properties and method from another class

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    greetUser() {
        console.log(`Hello ${this.name} ${this.surname}`);
    }
}

class Student extends User {
    greetStudent() {
        console.log(`Good morning! ${this.name} ${this.surname} from extends USer`);
    }
}

const myUser = new User("Rohit", "Sharma");
myUser.greetUser();

const myStudent = new Student("Suresh", "Raina");
myStudent.greetStudent();





// 3. 2D - Array


// Qs.print Spiral given 2d - Array
// Qs. 1
let nums = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

// Qs. 2
// let nums = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// Qs. 3
// let nums = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ]

// Qs. 4
// let nums = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12],
// ];

function twoDArray(nums) {

    const result = [];
    let left = 0;
    let right = nums[0].length - 1;
    let top = 0;
    let bottom = nums.length - 1;

    while (left <= right && top <= bottom) {

        // left -> right
        for (let i = left; i <= right; i++) {
            console.log(nums[top][i], "left -> right");
            result.push(nums[top][i]);
        }
        top++;

        // top -> bottom
        for (let i = top; i <= bottom; i++) {
            console.log(nums[i][right], "top -> bottom");
            result.push(nums[i][right]);
        }
        right--;

        // right -> left
        if (top <= bottom) {
            // console.log(top, "top", bottom, "bottom");
            for (let i = right; i >= left; i--) {
                console.log(nums[bottom][i], "right -> left");
                result.push(nums[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            // bottom -> top
            for (let i = bottom; i >= top; i--) {
                console.log(nums[i][left], "bottom -> top");
                result.push(nums[i][left]);
            }
            left++;
        }
        console.log(top, "top", bottom, "bottom", right, "right", left, "left");
    }
    return result;
}

console.log(twoDArray(nums));