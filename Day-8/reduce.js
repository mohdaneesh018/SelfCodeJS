// Reduce Method Syntax
// array.reduce((accumulator, currentValue) => { ... }, initialValue);






// Qs.Ek array ka sum find karo.Example: [2, 4, 6] → 12

// let arr = [2, 4, 6];
// let initialValue = 0;
// let newArr = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(newArr);





// Qs.Array ka product find karo.Example: [2, 3, 4] → 24

// let arr = [2, 3, 4];
// let initialValue = 1;
// let newArr = arr.reduce((acc, curr) => acc * curr, 1);
// console.log(newArr);






// Qs.String array ko ek single string me join karo(without using.join()).Example: ["Hello", "World"] → "Hello World"

// let str = ["Hello", "World"];
// let newStr = str.reduce((acc, curr) => acc + " " + curr);
// console.log(newStr);








// Qs.Largest number find karo Example: [5, 8, 2, 10] → 10

// let arr = [5, 8, 2, 10];
// let newArr = arr.reduce((acc, curr) =>
//     (acc > curr) ? acc : curr
// );
// console.log(newArr);






// Qs.Array of objects ka total marks nikaalo.
// [
//     { name: "Aman", marks: 50 },
//     { name: "Ravi", marks: 70 }
// ] → 120

// let arr =
//     [
//         { name: "Aman", marks: 50 },
//         { name: "Ravi", marks: 70 }
//     ]
// let initialValue = 0;
// let total = arr.reduce((acc, curr) => acc + curr.marks, 0);
// console.log(total);