Split Method Syntax
string.split(separator, limit);




Qs.

let str = "apple, banana, grapes";
let newArr = str.split(",");
console.log(newArr);



Join Method Syntax
array.join(separator);





Qs.

let fruits = ["apple", "banana", "grapes"];
let newFruits = fruits.join(" - ");
console.log(newFruits);






Entries Method Syntax
array.entries();



Qs.

let fruits = ["apple", "banana", "orange"];
let iterator = fruits.entries();
for (let [index, value] of iterator) {
    console.log(index, value);
} 