Some Method Syntax                     // used as same or operator (||)
array.some((element) => condition);




Qs.Check karo ki array me koi number negative hai ya nahi.Example: [1, 2, -3, 4] → true

let arr = [1, 2, -3, 4];
let newArr = arr.some((n) => n < 0);
console.log(newArr);




Qs.Check karo ki koi string ka length 5 se zyada hai ya nahi.Example: ["hi", "hello", "ok"] → true

let arr = ["hi", "hello", "ok"];
let newArr = arr.some((str) => str.length > 5)
console.log(newArr);





Qs.Array of objects me check karo ki koi student fail hua hai(marks < 40).

let arr =
    [
        { name: "Aman", marks: 80 },
        { name: "Ravi", marks: 35 },
        { name: "Sita", marks: 60 }
    ]
let newArr = arr.some((res) => res.marks < 40);
console.log(newArr);






Qs.Check karo ki array me koi number divisible by 7 hai.

let arr = [12, 45, 23, 56, 89];
let newArr = arr.some((div) => div % 7 == 0);
console.log(newArr);







Qs.Check karo ki kisi array me "admin" role ka user hai ya nahi.Example: [{ name: "Ali", role: "user" }, { name: "Zara", role: "admin" }] → true

let arr =
    [
        { name: "Ali", role: "user" },
        { name: "Zara", role: "admin" }
    ]
let newArr = arr.some((check) => check.role == "admin");
console.log(newArr);