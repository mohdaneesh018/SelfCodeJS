// Practice Questions

// 1. Ek function banao sayHello jo ek naam lega parameter ke roop me aur "Hello <name>" print karega.Agar naam nahi diya gaya toh default "Guest" use ho.
// function sayHello(name = "Guest") {
//     console.log("Hello", name);
// }
// sayHello("Aneesh");                       // Hello Aneesh
// sayHello();                               // Hello Guest







// 2. Ek arrow function square banao jo ek number lega aur uska square return kare.

// const square = (num) => {
//     return num * num;
// }
// console.log(square(5));





// 3. Ek function calculate banao jo 3 parameters lega: num1, num2, operator(string: "+", "-", "*", "/").Operator ke hisaab se calculation kare aur result return kare.

// function calculate(num1, num2, operator) {
//     if (operator == "+") {
//         return num1 + num2;
//     } else if (operator == "-") {
//         return num1 - num2;
//     } else if (operator == "*") {
//         return num1 * num2;
//     } else if (operator == "/") {
//         return num1 / num2;
//     } else {
//         return "Invalid Operator";
//     }
// }
// console.log(calculate(30, 15, "+"));
// console.log(calculate(30, 15, "-"));
// console.log(calculate(30, 15, "*"));
// console.log(calculate(30, 15, "/"));
// console.log(calculate(30, 15, "%"));






// 4. Ek arrow function isEven banao jo ek number lega aur return karega true agar even hai, warna false

// const isEven = (n) => n % 2 == 0;
// console.log(isEven(9));

// OR

// const isEven = (n) => {
//     return n % 2 == 0;
// }
// console.log(isEven(10));






// 5. Ek function countVowels banao jo ek string lega aur usme kitne vowels(a, e, i, o, u) hain wo return kare.

// function countVowels(str) {
//     let count = 0;
//     let vowels = ["a", "e", "i", "o", "u"]
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("apple"));
// console.log(countVowels("watermelon"));