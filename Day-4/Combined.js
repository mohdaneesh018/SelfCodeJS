// Qs. 1. Write a program to check if a number is positive, negative, or zero using if-else.

// let num = 42;
// if(num > 0){
//     console.log("Number is Positive");
// } else if(num < 0){
//     console.log("Number is Negative");
// } else {
//     console.log("Number is Zero");
// }





// Qs. 2. Check whether a number is even or odd using if-else.

// let num = 87;
// if(num % 2 == 0){
//     console.log("Number is Even");
// } else {
//     console.log("Number is Odd");
// }






// Qs. 3. Write a program that accepts age as input and prints:
// ○ "Child" if age < 13
// ○ "Teenager" if 13 ≤ age < 20
// ○ "Adult" if 20 ≤ age < 60
// ○ "Senior" if age ≥ 60

// let age = 45;
// if(age <= 13){
//     console.log("Child");
// } else if(age >= 13 && age < 20){
//     console.log("Teenager");
// } else if(age >= 20 && age < 60){
//     console.log("Adult");
// } else {
//     console.log("Senior");
// }





// Qs. Create a program to print the grade of a student using if-else based on marks:
// ○ 90+ => A
// ○ 80–89 => B
// ○ 70–79 => C
// ○ 60–69 => D
// ○ below 60 => F

// let marks = 86;
// if(marks >= 90){
//     console.log("Grade is: A")
// } else if(marks >= 80 && marks <= 89){
//     console.log("Grade is: B")
// } else if(marks >= 70 && marks <= 79){
//     console.log("Grade is: C")
// } else if(marks >= 60 && marks <= 69){
//     console.log("Grade is: D")
// } else {
//     console.log("Fail");
// }





// Qs. 5. Use a switch case to take a number between 1–7 and print the corresponding weekday

// let week = 4;
// switch (week) {
//     case 1: {
//         console.log("Sunday")
//         break;
//     }
//     case 2: {
//         console.log("Monday")
//         break;
//     }
//     case 3: {
//         console.log("Tuesday")
//         break;
//     }
//     case 4: {
//         console.log("Wednesday")
//         break;
//     }
//     case 5: {
//         console.log("Thursday")
//         break;
//     }
//     case 6: {
//         console.log("Friday")
//         break;
//     }
//     case 7: {
//         console.log("Saturday")
//         break;
//     }
//     default: {
//         console.log("Number is does not match")
//         break;
//     }
// }





// Qs. Create a program using switch that takes a character input and prints whether it is a
// vowel (a, e, i, o, u) or consonant

// let vowel = "m";
// switch (vowel) {
//     case "a": {
//         console.log("It's a vowel")
//         break;
//     }
//     case "e": {
//         console.log("It's a vowel")
//         break;
//     }
//     case "i": {
//         console.log("It's a vowel")
//         break;
//     }
//     case "o": {
//         console.log("It's a vowel")
//         break;
//     }
//     case "u": {
//         console.log("It's a vowel")
//         break;
//     }
//     default: {
//         console.log("It's a consonent")
//         break;
//     }
// }







// Qs. 7. Use if-else to check if a year is a leap year or not.

// let year = 1997;
// if( (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
//     console.log("Year is a Leap");
// } else {
//     console.log("Year is not Leap");
// }








// Qs. 8. Use switch-case to perform basic arithmetic operations (+, -, *, /) based on the
// operator input.

// let a = 6; 
// let b = 5;
// let operator = "%";
// switch (operator) {
//     case "+": {
//         console.log(a + b)
//         break;
//     }
//     case "-": {
//         console.log(a - b)
//         break;
//     }
//     case "*": {
//         console.log(a * b)
//         break;
//     }
//     case "/": {
//         console.log(a / b) 
//         break;
//     }
//     case "%": {
//         console.log(a % b)
//         break;
//     }
//     default:{
//         console.log("Invalid Operator");
//         break;
//     }
// }








// Qs. 9. Write a program using if-else to check if a person is eligible to vote (age ≥ 18).

// let age = 34;
// if(age >= 18){
//     console.log("Eligible for Vote");
// } else if(age <= 18){
//     console.log("Not Eligible for Vote");
// } 






// Qs. 10. Using if-else, check if three given sides can form a triangle or not.

// let x = 2;
// let y = 3;
// let z = 4;
// if (((x + y) > z) && ((y + z) > x) && ((z + x) > y)) {
//     console.log("Three sides are triangle");
// } else {
//     console.log("Three sides are not equal");
// }






// 🔁 Part 2: For Loop, While Loop with Conditions (10 Questions)

// Qs. 1. Print all even numbers from 1 to 50 using a for loop and if condition.

// for(let i = 1; i <= 50; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }






// Qs. 2. Using a while loop, print numbers from 10 to 1 in reverse order.

// let i = 10
// while(i >= 1){
//     console.log(i);
//     i--;
// }






// Qs. 3. Write a program that prints the multiplication table of a number (e.g., 7) using a for loop.

// let num = 7;
// let i = 1;
// while(i <= 10){
//     console.log(`${num} * ${i} = ${num * i}`);
//     i++;
// }





// Qs. 4. Using a for loop, print only the odd numbers from 1 to 100

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
//     i++;
// }






// Qs. 5. Create a program to count how many numbers between 1 and 100 are divisible by both 3 and 5 using for and if.

// let count = 0;
// for(let i = 1; i <= 100; i++){
//     if((i % 3 == 0) && (i % 5 == 0)){
//         count++;
//     }
//     i++;
// }
// console.log("Count is:", count);







// Qs. 6. Print the factorial of a number using a while loop.

// let fact = 1;
// let num = 5;
// while(num >= 1){
//     fact = fact * num;
//     num--;
// }
// console.log(fact);







// Qs. 7. Use a for loop to find the sum of all numbers from 1 to 100.

// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     sum += i; 
// }
//    console.log(sum);






// Qs. 8. Write a program using a loop and switch to print:
// ○ "Fizz" if the number is divisible by 3
// ○ "Buzz" if divisible by 5
// ○ "FizzBuzz" if divisible by both
// ○ Else print the number
// (From 1 to 50)

// for (let i = 1; i <= 50; i++) {
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }








// Qs. 9. Print the first 10 Fibonacci numbers using a while loop.
// let a = 0;
// let b = 1;
// let sum = 0;
// let i = 0;
// while(i < 10){
//     console.log(a);
//     sum = a + b;
//     a = b;
//     b = sum;
//     i++;
// } 


// let a = 0;
// let b = 1;
// let sum = 0;
// for(let i = 0; i < 10; i++){
//     console.log(a);
//     sum = a + b;
//     a = b;
//     b = sum;
// } 





// Qs. 10. Using a for loop, print the square of numbers from 1 to 10 and categorize them using
// if:
// ● Less than 20: “Small”
// ● Between 20–50: “Medium”
// ● More than 50: “Large”

// for (let i = 1; i <= 10; i++) {
//     let square = i * i;
//     if (square < 20) {
//         console.log(`${square} - Small`);
//     } else if (square >= 20 && square <= 50) {
//         console.log(`${square} - Medium`);
//     } else {
//         console.log(`${square} - Large`);
//     }
// }