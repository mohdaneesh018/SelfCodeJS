Qs.
let arr = [12, 23, 45, 34, 56, 98, 78];
let matchFlag = false;
let target = 95;

for (let i = arr.length - 1; i >= 0; i--) {
    if (target == arr[i]) {
        console.log(i);
        matchFlag = true;
        break;
    }
}
if (matchFlag == false) {
    console.log("Not found");
}







// Reduce Method Syntax
// array.reduce((accumulator, currentValue) => { ... }, initialValue);

Qs.
let num = [10, 20, 30, 40, 50, 60];
let initialValue = 0;
let result = num.reduce((acc, curr)  => acc + curr, initialValue);
console.log(result);









// Every Method Syntax                     // used as same and operator (&&)
// array.every((element) => condition);


Qs.
let num = [20, 30, 21, 23, 45];
let newNum = num.every((n) => n > 10);
console.log(newNum);







// Some Method Syntax                     // used as same or operator (||)
// array.some((element) => condition);


Qs.
let num = [20, 30, 21, 23, 45];
let newNum = num.some((n) => n > 46);
console.log(newNum);