Function Practice Qs. Without Parameters:

1. Ek function sayHello banao jo sirf "Hello World" print kare.
function sayHello() {
    console.log("Hello World");
}
sayHello();





2. Ek function squareNumber banao jo ek number ka square print kare. Number ko function ke andar hi define karo.
function squareNumber() {
let a = 5;
    console.log(a * a);
}
squareNumber();





3. Ek function convertToHours banao jo minutes ko hours me convert karke print kare. (Example: 120 → 2 hours)
function convertToHours() {
    let min = 240;
    console.log(min / 60, "hours");
} 
convertToHours();





4. Ek function printArray banao jo ek array ke saare elements print kare. Array ko function ke andar hi define karo.
function printArray() {
    let arr = ["Sunday", "Monday", "Tuesday", "Wednesday"];
    console.log(arr);
}
printArray();






5. Ek function multiplyFixedNumbers banao jo do fixed numbers ko multiply kare aur result print kare.
function multiplyFixedNumbers() {
let num1 = 3;
let num2 = 4;
    console.log(num1 * num2);
}
multiplyFixedNumbers();







Function Practice Qs. With Parameters:  


6. Ek function multiplyNumbers(num1, num2) banao jo do numbers ka multiplication kare.
function multiplyNumbers(num1, num2){
    console.log(num1 * num2);
}
multiplyNumbers(4, 6);







7. Ek function greetUser(name) banao jo user ka naam lekar "Hello, <name>" print kare.
function greetUser(name){
    console.log("Hello", name);
}
greetUser("Aneesh");







8. Ek function calculateArea(length, width) banao jo rectangle ka area return kare.
function calculateArea(length, width) { 
    return length * width; 
}
const output = calculateArea(10, 20);
console.log("Area of Rectangle:", output);





9. Ek function isEven(number) banao jo check kare ki number even hai ya odd, aur result return kare.
function isEven(number) {
    return number % 2 == 0;
}
const output = isEven(6);
console.log(output);







10. Ek function sumArray(arr) banao jo array ke saare numbers ka sum return kare.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
        return sum;
}
const output = sumArray([1, 2, 3, 4]);
console.log(output);