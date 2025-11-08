// Map method =>

//     Kaam: Har element par function chalata hai aur naya array return karta hai modified values ke saath.
//         Use: Jab tumhe original array ko modify karke ek naya array banana ho.





// Syntax of Map() =>

// array.map((element, index, array) => {
//     element = current element ka value
//     index = current element ka index
//     array = original array ka reference
//     return  = jo naya value tum dena chahte ho(map me return zaroor hota hai)
// });







// Qs.Array[1, 2, 3, 4] ke har element ka double naya array me return karo.

// let arr = [1, 2, 3, 4];
// let newArr = arr.map((num) =>
//     num * 2
// );
// console.log(newArr);






// Qs.Array["apple", "banana", "grapes"] ke sab elements ko uppercase me return karo.

// let arr = ["apple", "banana", "grapes"];
// let fruits = arr.map((f) =>
//     f.toUpperCase()
// );
// console.log(fruits);






// Qs.Array[100, 90, 80, 70] ke har marks ko percentage me convert karo(100 marks ka base leke) aur naya array banao.

// let marks = [100, 90, 80, 70];
// let newMarks = marks.map((percentage) => percentage + "%");
// console.log(newMarks);







// Qs.Ek array me employees ke naam["Aman", "Ravi"] ke saath " - ID: 101", " - ID: 102" jod ke naya array return karo(index ka use karke ID add karo).

// let arr = ["Aman", "Ravi"];
// let newArr = arr.map((name, index) => name + " - ID: " + (101 + index));
// console.log(newArr);









// Qs.Ek array of numbers[5, 10, 15, 20] ka har element ka square aur cube dono ek saath object ke form me return karo, jaise:
// [
//     { number: 5, square: 25, cube: 125 },
//     { number: 10, square: 100, cube: 1000 }
// ]

// let num = [5, 10, 15, 20];
// let newNum = num.map(n => ({
//     number: n,
//     square: n * n,
//     cube: n * n * n
// }));
// console.log(newNum);