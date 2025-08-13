Function Practice Qs. With Return Value (Advanced) 

1. Ek function findMax(a, b, c) banao jo teen numbers me se maximum number return kare.
function findMax(a, b, c) {
    return Math.max(a, b, c);
}
console.log(findMax(2, 5, 4));

OR 

function findMax(a, b, c){
    if((a >= b) && (a >= c)){
        return a;
    } else if((b >= c) && (b >= a)){
        return b;
    } else {
        return c;
    }
}
console.log(findMax(10, 50, 20));






2. Ek function countVowels(str) banao jo ek string me kitne vowels hain, count karke return kare.
function countVowels(str){
    let count = 0;
    str = str.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < str.length; i++){
         if (vowels.includes(str[i])){
            count++;
        }
    }
    return count;
} 
console.log(countVowels("apple"));






3. Ek function reverseString(str) banao jo string ko reverse karke return kare.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("apple"));






4. Ek function checkElementInArray(arr, element) banao jo check kare ki element array me hai ya nahi.
function checkElementInArray(arr, element) {
    return arr.includes(element);
}
console.log(checkElementInArray(["apple", "banana", "mango"], "banana")); 
console.log(checkElementInArray(["apple", "banana", "mango"], "grapes")); 






5. Ek function getPositiveNumbers(arr) banao jo sirf positive numbers return kare.
function getPositiveNumbers(arr) {
    let positiveArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positiveArr.push(arr[i]);
        }   
    }
    return positiveArr;
}
console.log(getPositiveNumbers([22, 44, 56, -78]));

OR

function getPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}
console.log(getPositiveNumbers([22, 44, 56, -78])); // [22, 44, 56]








Function Practice Qs. With Real-life Function Use Case (Logic Practice)  

6. Ek function calculateBill(amount, taxRate) banao jo bill ka total calculate kare including tax.
function calculateBill(amount, taxRate) {
    return amount + (amount * taxRate / 100);
}
console.log(calculateBill(1000, 18)); 








7. Ek function filterByLength(arr, minLength) banao jo sirf un strings ko return kare jinki length minLength se zyada ho.
function filterByLength(arr, minLength) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > minLength) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(filterByLength(["apple", "Mango", "Pineapple", "Banana"], 2));

OR

function filterByLength(arr, minLength) { 
    return arr.filter(item => item.length > minLength); 
}
console.log(filterByLength(["apple", "Mango", "Pineapple", "Banana"], 2));








8. Ek function isPalindrome(str) banao jo check kare ki string palindrome hai ya nahi.
function isPalindrome(str) {
    str = str.toLowerCase();
    let reversed = str.split("").reverse().join("");
    return str == reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("apple"));










9. Ek function countWords(sentence) banao jo sentence me total words count kare.
function countWords(sentence) {
    return sentence.trim().split(/\s+/).length;                           //  trim() → extra spaces remove karta hai 
}                                                                         //  /\s+/ → multiple spaces ko ek hi space maan leta hai
console.log(countWords("Hello world this is JavaScript")); 
















10. Ek function removeDuplicates(arr) banao jo array me se duplicate values remove karke return kare.


only sorted array duplicate working
function removeDuplicates(arr) {
    let newArr = [];
    let index = 0;
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] != arr[i - 1]) {
            newArr[index] = arr[i - 1];
            index++;
        }
    }
    return newArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 7, 7])); 


OR

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 4, 78, 23, 78, 23, 1, 9])); 


OR
function removeDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeDuplicates([99, 28, 99, 28, 45]));