// 1. Check if a number is even or odd:-

// let num = 8;
let num = 15;
if (num % 2 == 0) {
    console.log("Number is Even");
} else {
    console.log("Number is Odd");
}






// 2. Check if a person is eligible for driving (age ≥ 18):-

let age = 24;
if (age >= 18) {
    console.log("Eligible for Driving");
} else {
    console.log("You are not eligible for driving");
}






// 3. Find the greatest among three numbers:-

let a = 10;
let b = 25;
let c = 8;
if (a >= b && a >= c) {
    console.log("A is Greater than b and c");
} else if (b >= a && b >= c) {
    console.log("B is Greater than c and a");
} else if (c >= a && c >= b) {
    console.log("C is greater than a and b");
}  






// 4. Check if a number is positive, negative or zero:-
let x = -40;
if (x > 0) {
    console.log("Number is Positive");
} else if (x < 0) {
    console.log("Number is Negative");
} else {
    console.log("Number is Zero");
}






// 5. Take a score and print grade
// 90+ → Grade A
// 75–89 → Grade B
// 60–74 → Grade C
// < 60 → Fail

let marks = 86;
if (marks >= 90) {
    console.log("Grade is: A");
} else if (marks >= 75 && marks <= 89) {
    console.log("Grade is: B");
} else if (marks >= 60 && marks <= 74) {
    console.log("Grade is: C");
} else {
    console.log("Fail");
}