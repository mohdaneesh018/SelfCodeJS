// // Filter Method =>

// // Kaam: Har element par condition check karta hai aur sirf wahi elements return karta hai jo condition pass karte hain.
// // Use: Jab tumhe array me se sirf specific items rakhne hain (filter karna ho).




// // Syntax of filter method
// // array.filter((element, index, array) => {
// //     // element = current element ka value
// //     // index   = current element ka index
// //     // array   = original array ka reference
// //     // return  = true/false (true wale elements new array me aate hain)
// // });








// // Qs. Array [1, 2, 3, 4, 5] se sirf even numbers return karo.
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.filter((num) =>
//     (num % 2 == 0)
// );
// console.log(newArr);






// // Qs. Array ["dog", "cat", "elephant", "rat"] se sirf wo words return karo jinki length > 3 ho.
// let word = ["dog", "cat", "elephant", "rat"];
// let newArr = word.filter((word) => (word.length > 3)
// );
// console.log(newArr);






// // Qs. Array [50, 60, 30, 20, 90] me se sirf wo numbers return karo jo 50 ya usse zyada ho.
// let num = [50, 60, 30, 20, 90];
// let newNum = num.filter((number) => number >= 50);
// console.log(newNum);






// // Qs. Ek array ["apple", "mango", "banana", "avocado"] me se sirf wo fruits return karo jo "a" se start hote hain.
// let arr = ["apple", "mango", "banana", "avocado"];
// let newArr = arr.filter((word) => word[0] == "a");
// console.log(newArr);






// // Qs. Ek array of students:
// // [
// //   { name: "Aman", marks: 80 },
// //   { name: "Ravi", marks: 45 },
// //   { name: "Sita", marks: 60 }
// // ]
// // Sirf un students ka array return karo jinke marks >= 60.
// let arr = 
// [
//   { name: "Aman", marks: 80 },
//   { name: "Ravi", marks: 45 },
//   { name: "Sita", marks: 60 }
// ]
// let newArr = arr.filter((data) => data.marks >= 60);
// console.log(newArr);