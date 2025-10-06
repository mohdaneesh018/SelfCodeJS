Practice Qs. 
1. Conditional + Loops

Q1.Ek program banao jo ek number leta hai aur check karta hai ki wo prime number hai ya nahi.

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(5));
console.log(isPrime(6));







Q2.Ek program banao jo 1 se 100 tak ke numbers print kare, lekin multiples of 3 ke liye "Fizz", multiples of 5 ke liye "Buzz" aur jo dono ka multiple ho uske liye "FizzBuzz" print kare. (Hard, logic building ke liye best)

function multiplesNumber() {
    for (let i = 1; i <= 100; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
multiplesNumber();







2. Arrays

Q3.Ek array diya h →[1, 2, 3, 4, 5, 6].Ek naya array banao jisme sirf even numbers ka square ho. (Use loop ya map + filter dono try karna).

let arr = [1, 2, 3, 4, 5, 6]
function evenNumber(arr) {
    let newArr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 == 0) {
            let square = arr[i] * arr[i];
            newArr.push(square);
        }
    }
    return newArr;
}
console.log(evenNumber(arr));


Qs.

let array = [11, 12, 13, 14, 15, 16];
let newArr = array
    .filter((num) => num % 2 == 0)
    .map(num => num * num);
console.log(newArr);







Q4.Ek function banao jo ek array me se unique values return kare.Example: [1, 2, 2, 3, 4, 4, 5] →[1, 2, 3, 4, 5].

function uniqueValue(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(uniqueValue([1, 2, 2, 3, 4, 4, 5]));






3. Objects + Destructuring

Q5.Ek object h:
let student = { name: "Aneesh", age: 20, marks: { math: 90, english: 80, science: 85 } }
Destructuring use karke math aur english ke marks ko variable me store karo aur unka average nikal kar print karo.

let student = {
    name: "Aneesh",
    age: 20,
    marks: {
        math: 90,
        english: 80,
        science: 85
    }
}

const { math, english } = student.marks;
let sum = english + math;
let average = (sum / 2);
console.log(average);







4. Callback Function

Q6.Ek function calculator(a, b, operation) banao jo callback operation accept kare.
Agar operation addition ka ho to sum kare.
Agar subtraction ka ho to difference kare.
Test karo callback ke saath.

function calculator(a, b, operation) {
    return operation(a, b)
}
function addition(x, y) {
    return x + y;
}
function subtraction(m, n) {
    return m - n;
}
console.log("Addition", calculator(50, 40, addition));
console.log("subtraction", calculator(50, 40, subtraction));







5. Promise

Q7.Ek function banao jo ek random number(1 - 10) generate kare aur usse ek promise return kare:
Agar number > 5 hai to resolve karo "Success: number is big"
Agar number ≤ 5 hai to reject karo "Failed: number is small".
    Use.then aur.catch ke saath test karo.

// let num = 8;
let num = 1;
function randomNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 5) {
            resolve("Success: number is big");
        } else if (num <= 5) {
            reject("Failed: number is small");
        }
    })
}
randomNumber(num)
    .then((response) => {
        console.log(response, "response");
    })
    .catch((error) => {
        console.log(error, "error");
    })