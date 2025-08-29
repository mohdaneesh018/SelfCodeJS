1. Binary Search

Q1. Ek sorted array diya hai [5, 10, 15, 20, 25, 30, 35]
Binary Search use karke check karo ki 25 kis index par hai. (Easy)

let nums = [5, 10, 15, 20, 25, 30, 35];
let target = 25;
function sortedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let midIndex = Math.round((left + right) / 2);
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
console.log(sortedArray(nums, target));






Q2. Ek function likho searchInsert(nums, target) jo sorted array me target ka index return kare. Agar target na mile to us 
position ka index return kare jaha usko insert karna chahiye.
Example: nums = [10,20,30,40], target = 25 → output 2.

let nums = [10, 20, 30, 40];
let target = 25;
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let midIndex = Math.round((left + right) / 2);
        let midElement = nums[midIndex];

        if (target == midElement) {
            return midIndex;
        } else if (target > midElement) {
            left = midIndex + 1;
        } else {
            right = midIndex - 1;
        }
    }
    return left;
}
console.log(searchInsert(nums, target));






2. Event Loop

Q3. Output predict karo (Event Loop concept check karne ke liye):
console.log("A");                                                       // → Pehle run hoga, output: A

setTimeout(() => console.log("B"), 0);                                  // → Ye Macrotask queue me chale jayega. Abhi run nahi hoga, event loop ke baad.

Promise.resolve().then(() => console.log("C"));                         // → Ye ek Microtask hai, ye synchronous code ke baad turant chalega (Macrotask se pehle).

console.log("D");                                                       //  → Ye normal code hai, isliye turant chalega, output: D                          // output ==> A-> D-> C-> B





Q4. Ek code likho jisme do setTimeout ho alag delay ke sath aur ek Promise ho, aur explain karo ki output kis order me aayega.
setTimeout(() => {
    console.log("Aneesh")
}, 5000);

Promise.resolve().then(() => console.log("Rohit"));

setTimeout(() => {
    console.log("Virat");
}, 4000);                                            // Rohit-> Virat-> Aneesh






3. Constructor + Prototype

Q5. Ek constructor function Student(name, marks) banao.
Ek prototype method getResult() likho jo marks >= 33 ho to "Pass" aur otherwise "Fail" return kare.
Do students ke object banao aur result print karo.

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.getResult = function () {
    if (this.marks >= 33) {
        return "Pass";
    } else {
        return "Fail";
    }
}


const stu1 = new Student("Uvesh", 46);
// console.log(stu1);
console.log(stu1.name, stu1.getResult());

const stu2 = new Student("Afzal", 32);
// console.log(stu2);
console.log(stu2.marks, stu2.getResult());