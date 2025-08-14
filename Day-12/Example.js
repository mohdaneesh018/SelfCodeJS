Function Declaration

function greet() {
    console.log("Hello");
}
greet();




Function Expression
const greeting = function() {
    console.log("AWDIZ");
}
greeting();






Qs. 
function greeting(num1 = 32, num2 = 23) {
    return num1 + num2;
}
console.log(greeting(3, 6));
console.log(greeting());






Qs. 
function sikar(name = "Mohit") {
    console.log("Hi", name);
}
sikar();
sikar("Virat");






Qs. using Arrow Function
const addition = (num1, num2) => {
    return num1 + num2;
}
console.log(addition(2, 4));



Qs. single parameter
const add = num1 => {
    return num1 + num1;
}
console.log(add(4)); 





Qs.
let a = 25;
function greet() {
    let a = 10;
    console.log(a);
}
console.log(a);
greet();






Object => Object is an collection of key and values
Qs.
var info = {
    name: "Aneesh",
    age: 20,
    Course: {name: "Mern Stack", batchstrength: 20}
};
console.log(info.name);                  // Aneesh
console.log(info.Course);                // {name: "Mern Stack", batchstrength: 20}
console.log(info.Course.name);           // Mern Stack
console.log(info["name"]);               // Aneesh

info.name = "Mahendra Singh"; 
info["age"] = 35;

console.log(info.name);                     // Mahendra Singh
console.log(info.age);                      // 35

info.surname = "Dhoni"
console.log(info.surname);                  // Dhoni
console.log(info);                         

delete info.Course;
delete info.surname;

console.log(info);







Qs.
const data = {
    name: "Virat",
    age: 25,
    location: "India"
};
for(let key in data) { 
    console.log(key, "key", data[key]);
}