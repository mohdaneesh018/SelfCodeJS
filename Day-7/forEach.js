forEach method =>

    Kaam: Har element par ek function chalata hai, return nahi karta(naya array nahi banata).
        Use: Mostly tab jab tumhe sirf print, calculation, ya koi side - effect karna ho(database save, variable update, etc.).





Syntax of forEach() =>

array.forEach((element, index, array) => {
    element = current element value
    index = element ka index number
    array = original array
});








Qs.Ek array me students ke naam hai —["Aman", "Ravi", "Sita"] — forEach ka use karke sabke naam console me print karo.

let stu = ["Aman", "Ravi", "Sita"];
stu.forEach((student) =>
    console.log(student)
);







Qs.Ek array of numbers[2, 4, 6] ka square nikalke console me print karo(naya array banane ki jarurat nahi).

let arr = [2, 4, 6];
arr.forEach((num) =>
    console.log(num * num)
);








Qs.Ek array["Virat", "Rohit", "Rahul"] ka har naam ke aage " - Cricket Player" add karke console me print karo.

let arr = ["Virat", "Rohit", "Rahul"];
arr.forEach((add) =>
    console.log(add + " - Cricket Player")
);









Qs.Ek array[100, 200, 300] ke har element me + 50 karke result ko another array me push karo(forEach ka use karke).

let arr = [100, 200, 300];
let result = [];
arr.forEach((num) => {
    result.push(num + 50)
});

console.log(result);








Qs.Ek array[10, 20, 30, 40, 50] ka total sum find karo forEach ka use karke(sum variable bana ke update karte jao).

let arr = [10, 20, 30, 40, 50];
let sum = 0;
arr.forEach((currentNumber) => {
    sum += currentNumber;
})
console.log(sum);