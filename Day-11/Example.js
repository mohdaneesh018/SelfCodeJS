// Function 

// Qs. Addition of two variables without Parameter.
// let a = 10;
// let b = 20;

// function AddTwoVariable() {
//     console.log(a + b);
// }
// AddTwoVariable();





// Qs. Addition of two variables with Parameters.
// let a = 10;
// let b = 20;
// function addVar(num1, num2) {
//     console.log(num1 + num2);
// }
// addVar(a, b);
// addVar(40, 50);






// Qs. 
// function numVariable(a, b) {
//     console.log(a + b, "hi");
//     return a + b;
// }
// numVariable(240, 100);
// const output = numVariable(40, 50);
// console.log(output, "output");






// Qs.
let folders = ["Day-1", "Day-2", "Day-3", "Day-4", "Day-5"];
let userTyped = "Day-4";

function getFolder(data) {
    console.log(data, "data");
    let filteredData = data.filter((ele) => ele == userTyped);
    return filteredData;
}
const getTyped = getFolder(folders);
console.log(getTyped);