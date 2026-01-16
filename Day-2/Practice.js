// 1. Print numbers from 1 to 10:-

// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }




// 2. Print even numbers from 1 to 20:-

// for (i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// OR

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }





// 3. Find the sum of first 5 natural numbers:-

// let sum = 0;
// for (i = 1; i <= 5; i++) {
//     sum += i;
// }
// console.log("Total sum is:", sum);




// 4. Print table of 7:-

// let num = 7;
// for (i = 1; i <= 10; i++) {
//     console.log(i * num);
// }




// 5. Print numbers from 10 to 1 (reverse):-

// for (i = 10; i >= 1; i--) {
//     console.log(i);
// }









// Using While Loop

// 1. Print even numbers from 1 to 20 using while:-

// let i = 1;
// while (i <= 20) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// }




// 2. Print numbers from 10 to 1 (reverse):- 

// let i = 10;
// while(i >= 1){
//     console.log(i);
//     i--;
// }




// 3. Print the table of 9 using while:-

// let nums = 9;
// let j = 1;
// while(j <= 10){
//     console.log(`${j} * ${nums} = ${j * nums}`);
//     j++;
// }




// 4. Find the sum of first 10 natural numbers using while:-

// let sum = 0;
// let x = 1;
// while(x <= 10){
//     sum += x;
//     x++;
// }
// console.log("Total sum is:", sum);





// 5. Print only odd numbers from 1 to 15:-

// let i = 1;
// while (i <= 15) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
//     i++;
// }







// Do-while Loop

// 1. Print numbers from 1 to 10 using do...while:-

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10)




// 2. Print table of 6 using do...while:-

// let i = 1;
// let num = 6;
// do {
//     console.log(`${num} * ${i} = ${num * i}`);
//     i++;
// } while (i <= 10)






// 3. Find the sum of first 7 natural numbers using do...while:-

// let sum = 0;
// let i = 1;
// do {
//     sum += i;
//     i++;
// } while (i <= 7)
// console.log("Total sum is:", sum);





// 4. Print only odd numbers from 1 to 15 using do...while:-

// let i = 1;
// do {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
//     i++;
// } while (i <= 15)





// 5. Print numbers from 10 to 1 (reverse) using do...while:-

// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while ( i >= 1)






// 6. Print even numbers from 2 to 20:

// let i = 2;
// do {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// } while (i <= 20);





// 7. Find sum of first 5 odd numbers (1+3+5+7+9):-

// let sum = 0;
// let i = 1;
// let count = 0;
// do {
//     if (i % 2 == 1) {
//         sum += i;
//         count++;
//     }
//     i++;
// } while (count < 5)
// console.log("Total sum is:", sum);