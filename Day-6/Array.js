Qs.

let allUsersAge = [20, 21, 22, 23, "ABC"];
let allUsersAge = [1, 2, 3, 4, 5, 6];

console.log(allUsersAge, "allUSersAge");

console.log(allUsersAge[0], "allUsersAge[0]");
console.log(allUsersAge[1], "allUsersAge[1]");
console.log(allUsersAge[2], "allUsersAge[2]");
console.log(allUsersAge[3], "allUsersAge[3]");

console.log(allUsersAge.length);
console.log(allUsersAge.length - 1);
console.log((allUsersAge.length - 1) / 2);

Math.round
Math.floor
Math.ceil

console.log(2.2)
console.log(Math.round(2.2));    // o/p = 2
console.log(Math.round(2.5));    // o/p = 3
console.log(Math.round(2.8));    // o/p = 3
console.log(Math.floor(2.2));    // o/p = 2
console.log(Math.floor(2.5));    // o/p = 2
console.log(Math.floor(2.9));    // o/p = 2
console.log(Math.ceil(2.1));     // o/p = 3    
console.log(Math.ceil(2.5));     // o/p = 3
console.log(Math.ceil(2.8));     // o/p = 3

console.log(allUsersAge[Math.round((allUsersAge.length - 1) / 2)]);





Method: -
.push method
    .pop method
        .unshift method
            .shift method
                .at method
                    .concat method
                        .indexof method
                            .slice method
                                .splice method
                                    .sort method
                                        .toReversed method
                                            .tostring method





Qs.

let num = [10, 20, 30, 40, 50];
num.push(786);
num.push(888);

num.pop();
num.pop();

num.unshift(1000);
num.unshift(2000);

num.shift();
num.shift();

console.log(num, "num");
console.log(num.length);







Qs.

let num = [22, 45, 67, 89];
console.log(num.at(3));
console.log(num.at(-2));







Qs.

let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(a.concat(b));
console.log(b.concat(a));






Qs.

let arr = [12, 24, 36, 48, 60];
console.log(arr.indexOf(48));
console.log(arr.indexOf(24));






Qs.

let arr = [12, 24, 36, 48, 60, 72, 84, 96];
console.log(arr.slice(3));
console.log(arr.slice(5));
console.log(arr.slice(3, 6));               // 6 diya h to -1 tk jayega means 6 diya h to 5 tk jayega 
console.log(arr.slice(3, 5));               // 5 diya h to 4 tk jayega
console.log(arr.slice(5, -2));
console.log(arr.slice(3, -2));
console.log(arr.slice(2, -1));







Qs.

let arr = ["Sunday", "Tuesday", "Thursday", "Saturday"];
console.log(index, remove, element)
let newArr = arr.splice(1, 0, "Monday");
console.log("Deleted Items:", newArr);   // []
console.log("Modified Array:", arr);     // ["Sunday", "Monday", "Tuesday", "Thursday", "Saturday"]








Qs.

let arr = ["Sunday", "Tuesday", "Thursday", "Saturday"];
let newArr = arr.splice(1, 0, "Monday");
let newArr = arr.splice(2, 3, "Friday");
let newArr = arr.splice(0, 1, "Monday");
let newArr = arr.splice(2, 2, "Aneesh");
console.log(arr);


Qs.

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]






Qs.

// let arr = [23, 12, 45, 1557, 28, 18];
let arr = ["Jan", "Feb", "March", "Dec"];
console.log(arr.sort());









Qs.

let arr = [1, 2, "Abcd", true];
console.log(arr.toString());








Qs.

let a = [23, 45, 67];
let a = ["Jan", "Feb", "March", "Dec"];
console.log(a.toReversed());