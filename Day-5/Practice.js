// Do-while loop

// Qs.

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);







// Q4.Find the sum of digits of a number using do -while.

// let sum = 0;
// let i = 1;
// do {
//     sum += i;
//     i++;
// } while (i <= 5)
// console.log(sum);






// Qs.

// let i = 1;
// let count = 0;
// do {
//     if (i % 2 == 0) {
//         count++;
//     }
//     i++;
// } while (i <= 100);

// console.log(count);







// Qs.

// let num = 8;
// let i = 1;
// do {
//     let j = (`${num} * ${i} = ${num * i}`);
//     console.log(j);
//     i++;
// } while (i <= 10);







// break Statement: - Stop execution of loop

// Qs.

// let i = 1;
// for (i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i >= 5) {
//         break;
//     }
// }







// Q2.Keep asking the user for numbers, break the loop if the number is negative.

// let num = -5;
// for (let i = 1; i <= 10; i++) {
//     if (num > 0) {
//         console.log("Number is Positive");
//     } else if (num < 0) {
//         console.log("Number is Negative");
//         break;
//     } else {
//         console.log("Number is zero");
//     }
// }








// Q3.Print first 10 natural numbers, but stop if the number is divisible by both 3 and 5.

// for (let i = 1; i <= 15; i++) {
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         break;
//     }
//     console.log(i);
// }






// Qs.

// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         if (count >= 20) {
//             break;
//         }
//         count++;
//     }
// }
// console.log(count);







// Continue Statement: - skip single iteration of loop

// Qs.

//     for(let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }







// Q1.Print numbers from 1 to 20, skip numbers divisible by 3 using continue.

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 == 0) {
//         continue;
//     }
//     console.log(i);
// }







// Q3.Loop 1 to 30 and print only odd numbers using continue.

// for (let i = 1; i <= 30; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }







// Q5.Loop from 1 to 50, skip numbers ending with digit 7.

// for (let i = 1; i <= 50; i++) {
//     // if((i == 7) || (i == 17) || (i == 27) ||(i ==37) || (i ==47)){
//     if (i % 10 == 7) {
//         continue;
//     }
//     console.log(i);
// }