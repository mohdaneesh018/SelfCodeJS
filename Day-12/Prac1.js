Functions(Normal + Default Parameters + Arrow) Practice Qs.

1. Ek function multiply banao jo do numbers lega aur unka multiplication return kare.Agar second number nahi diya gaya toh default 1 ho.

function multiply(num1, num2 = 1) {
    return num1 * num2;
}
console.log(multiply(4, 3));                 // 12
console.log(multiply(4));                    // 4







2. Ek arrow function cube banao jo ek number lega aur uska cube return kare.

const cube = n => {
    return n * n * n;
}
console.log(cube(5));                       // 125






3. Ek function findMax banao jo do numbers lega aur batayega kaunsa bada hai(return kare).

function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(findMax(444, 27));








4. Ek arrow function reverseString banao jo ek string lega aur uska reverse return kare.

const reverseString = str => {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello World"));

OR

const reverseString = str => {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log(reverseString("Hello World"));





5. Ek function isPalindrome banao jo check kare ki string palindrome hai ya nahi. (e.g. "madam" → true)

function isPalindrome(str) {
    str = str.toLowerCase();
    let reversed = str.split("").reverse().join("");
    return str == reversed;
}
console.log(isPalindrome("madam"));














Array Practice Qs.  

6. fruits array me se pehla element remove karo, last me ek fruit add karo.

let arr = ["Apple", "Mango", "Banana"];
let newArr = arr.splice(0, 1);
arr.push("Pineapple");
console.log(arr);





7. sumArray function jo array ke saare elements ka sum return kare.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([10, 20, 30, 40]));








8. marks array me check karo koi marks 35 se kam hai ya nahi(true / false).

function checkMarks(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 35) {
            return true;
        }
    }
    return false;
}
console.log(checkMarks([20, 30, 56, 59]));
console.log(checkMarks([56, 60, 80]));







9. findSecondLargest function jo array ka second largest number return kare.

function findSecondLargest(arr) {
    let max = 0;
    let secondMax = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
console.log(findSecondLargest([10, 20, 24, 97, 95]));







10. removeDuplicates function jo array me se duplicates hata de.

function removeDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeDuplicates([1, 2, 8, 5, 8, 5, 2]));