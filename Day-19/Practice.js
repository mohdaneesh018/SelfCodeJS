1. Binary Search

Q1.Ek sorted array diya hai[5, 10, 15, 20, 25, 30, 35]
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






Q2.Ek function likho searchInsert(nums, target) jo sorted array me target ka index return kare.Agar target na mile to us 
position ka index return kare jaha usko insert karna chahiye.
    Example: nums = [10, 20, 30, 40], target = 25 → output 2.

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

Q3.Output predict karo(Event Loop concept check karne ke liye):
console.log("A");                                                       // → Pehle run hoga, output: A

setTimeout(() => console.log("B"), 0);                                  // → Ye Macrotask queue me chale jayega. Abhi run nahi hoga, event loop ke baad.

Promise.resolve().then(() => console.log("C"));                         // → Ye ek Microtask hai, ye synchronous code ke baad turant chalega (Macrotask se pehle).

console.log("D");                                                       //  → Ye normal code hai, isliye turant chalega, output: D                          // output ==> A-> D-> C-> B





Q4.Ek code likho jisme do setTimeout ho alag delay ke sath aur ek Promise ho, aur explain karo ki output kis order me aayega.

    setTimeout(() => {
        console.log("Aneesh")
    }, 5000);

Promise.resolve().then(() => console.log("Rohit"));

setTimeout(() => {
    console.log("Virat");
}, 4000);                                            // Rohit-> Virat-> Aneesh






3. Constructor + Prototype

Q5.Ek constructor function Student(name, marks) banao.
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






4. Class

Q6.Ek class Product banao jisme name, price, discount ho.
Method getFinalPrice() likho jo discount ke baad ka price return kare.
Do alag products ke object banao aur final price print karo.

class Product {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }

    getFinalPrice() {
        this.price = this.price - this.discount;
        return ("After discount price is:", this.price);
    }
}

const obj1 = new Product("Sahid", 50000, 5000);
const obj2 = new Product("Imran", 80000, 3000);

console.log(`Final Price is ${obj1.name} :`, obj1.getFinalPrice());
console.log(`Final Price is ${obj2.name} :`, obj2.getFinalPrice());





5. Async / Await + Promise

Q7.Ek function fetchData() banao jo 2 second ke baad "Data Loaded" return kare.
Fir ek async function banao jo await fetchData() kare aur result print kare.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);
    })
}
async function data() {
    try {
        const result = await fetchData();
        console.log(result, "result");
    } catch (error) {
        console.log("error message", error);
    }
}
data();






Q8.Ek function checkNumber(num) banao jo promise return kare.
Agar number even hai to "Even number" resolve kare
Agar odd hai to "Odd number" reject kare
Isse async / await aur try/catch use karke handle karo

function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve("Number is Even");
        } else {
            reject("Number is Odd");
        }
    })
}
async function data() {
    try {
        // const result = await checkNumber(11);
        const result = await checkNumber(12);
        console.log(result, "result");
    } catch (error) {
        console.log("Error message:", error);
    } finally {
        console.log("Result Created.");
    }
}
data();