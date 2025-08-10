// Every Method Syntax                     // used as same and operator (&&)
// array.every((element) => condition);





// Qs. Check karo ki array ke saare numbers positive hain.
let arr = [2, 3, 4, 5]
let newArr = arr.every((n) => n > 0);
console.log(newArr);








// Qs. Check karo ki saare strings ka length at least 3 hai.
let arr = ["apple", "banana", "grapes", "mango"];
let newArr = arr.every((str) => str.length > 3);
console.log(newArr);





// Qs. Check karo ki saare students ke marks 40 se upar hain.
let arr =
    [
        { name: "Aman", marks: 80 },
        { name: "Ravi", marks: 55 },
        { name: "Sita", marks: 60 }
    ]

let largest = arr.every((n) => n.marks > 40);
console.log(largest);







// Qs. Check karo ki saare numbers even hain.
let arr = [2, 4, 6, 8];
let newArr = arr.every((n) => n % 2 == 0);
console.log(newArr);






// Qs. Check karo ki saare users ka role "admin" hai. Example: [{role: "admin"}, {role: "admin"}] → true
let arr = [{ role: "admin" }, { role: "admin" }];
let newArr = arr.every((n) => n.role == "admin");
console.log(newArr);