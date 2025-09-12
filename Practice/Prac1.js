// Question 1. Print all numbers from 1 to 20 that are divisible by 3.

// function numPrint() {
//     for (let i = 1; i <= 20; i++) {
//         if (i % 3 == 0) {
//             console.log(i);
//         }
//     }
// }
// numPrint();






// Question 2. Create a pattern with 5 rows like this:
// *****
// ****
// ***
// **
// *

// let n = 5;
// function printstar(n) {
//     for (let i = n; i >= 1; i--) {
//         let res = "";
//         for (let j = 1; j <= i; j++) {
//             res += "*";
//         }
//         console.log(res);
//     }
//     return;
// }
// printstar(n);







// Question 3. Print all numbers from 1 to 50 that are divisible by 5. 

// function allNum() {
//     for (let i = 1; i <= 50; i++) {
//         if (i % 5 == 0) {
//             console.log(i);
//         }
//     }
//     return;
// }
// allNum();






// Question 4. Create a pattern with 4 rows like this:
// * 
// * * 
// * * * 
// * * * * 

let n = 4;
function printPattern(n) {
    for(let i = 1; i <= n; i++) {
        let res = '';
        for(let j = 1; j <= i; j++) {
            res += "* ";
        }
        console.log(res);
    }
    return;
}
printPattern(n);