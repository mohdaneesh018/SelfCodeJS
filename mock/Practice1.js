Qs. Ek array k andr jo key sabse jyada baar aayi h uska count print kro
let numbers = [100, 2, 3, 2, 4, 5, 100, 3, 4, 6, 100, 2, 100];

function countDigit(nums) {
    let pairs = {};
    for (let i = 0; i <= nums.length - 1; i++) {
        if (pairs[nums[i]]) {
            pairs[nums[i]]++;
        } else {
            pairs[nums[i]] = 1;
        }
    }
    console.log(pairs, "pairs");

    let max = 0;
    let value = null;
    for (let key in pairs) {
        if (pairs[key] > max) {
            max = pairs[key];
            value = key;
        }
        console.log(max, "max", value, "value");
    }
    return value;
}

console.log(countDigit([100, 2, 3, 2, 4, 5, 100, 3, 4, 6, 100, 2, 100]));





Qs. Using Binary Search

let nums = [10, 20, 30, 40, 50, 60, 70, 80];
let target = 60;

function usedBinary(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middleIndex = Math.round((left + right) / 2);
        let middleElement = nums[middleIndex];

        if (target == middleElement) {
            return middleIndex;
        } else if (target > middleElement) {
            left = middleIndex + 1;
        } else {
            right = middleIndex - 1;
        }
    }
    return middleIndex;
}

console.log(usedBinary(nums, target));







2D-Array Print Spiral
let nums = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

function printSpiral(nums) {
    const result = [];
    let left = 0;
    let right = nums[0].length - 1;
    let top = 0;
    let bottom = nums.length - 1;

    while (left <= right && top <= bottom) {
        // left => right
        for (let i = left; i <= right; i++) {
            // console.log(nums[top][i]);
            result.push(nums[top][i]);
        }
        top++;

        // top => bottom
        for (let i = top; i <= bottom; i++) {
            // console.log(nums[i][right]);
            result.push(nums[i][right]);
        }
        right--;

        // right => left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                // console.log(nums[bottom][i]);
                result.push(nums[bottom][i]);
            }
            bottom--;
        }


        // bottom => top
        for (let i = bottom; i >= top; i--) {
            // console.log(nums[i][left]);
            result.push(nums[i][left]);
        }
        left++;
    }
    return result;
}

console.log(printSpiral(nums));






Qs. Diagonal Sum nikalo (primary + secondary diagonal)  [output => 1 + 5 + 9   3 + 5 + 7 = 30]
let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function sumDiagonal(arr) {
    let n = arr.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i][i];

        if (i !== n + i - 1) {
            sum += arr[i][n - i - 1];
        }
    }
    return sum;
}

console.log(sumDiagonal(nums));





Qs. 3. LocalStorage me ek student ka object store karna hai:
{name: "Aneesh", age: 20, course: "CSE"}
Tumhe JSON.stringify use karke save karna hoga aur JSON.parse se wapas print karna hoga.

let student = {
    name: "Aneesh",
    age: 20,
    course: "CSE"
};

localStorage.setItem("student", JSON.stringify(student));

let studentData = localStorage.getItem("student");
console.log(studentData, "studentData");


let parsedData = JSON.parse(studentData);
console.log(parsedData, "parseData");






Qs.
let n = 4;

for (let i = 1; i <= n; i++) {
    let res = "";
    for (let spaces = 1; spaces <= n - i; spaces++) {
        res += " ";
    }
    for (let star = 1; star <= (2 * i) - 1; star++) {
        res += "*";
    }
    console.log(res);
}

for (let i = 1; i <= n - 1; i++) {
    let res = "";
    for (let spaces = 1; spaces <= i; spaces++) {
        res += " ";
    }
    for (let star = 1; star <= 2 * (n - i) - 1; star++) {
        res += "*"
    }
    console.log(res);
}






Qs. 8. Use switch-case to perform basic arithmetic operations (+, -, *, /) based on the
// operator input.
let a = 6;
let b = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        console.log(a / b);
        break;
    case "%":
        console.log(a % b);
        break;
    default:
        break;
}





Qs.
let fact = 1;
let num = 5;
while(num >= 1) {
    fact = fact * num;
    num--
}
console.log(fact);





Qs.
let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);






// Qs. 8. Write a program using a loop and switch to print:
// ○ "Fizz" if the number is divisible by 3
// ○ "Buzz" if divisible by 5
// ○ "FizzBuzz" if divisible by both
// ○ Else print the number
// (From 1 to 50)
for (let i = 1; i <= 50; i++) {   
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    switch (output) {
        case "Fizz":
            console.log("Fizz");
            break;
        case "Buzz":
            console.log("Buzz");
            break;
        case "FizzBuzz":
            console.log("FizzBuzz");
            break;
        default:
            console.log(i);
    }
}







Qs. fibonacci 
let a = 0;
let b = 1;
let sum = 0;
let i = 0;
while (i < 10) {
    console.log(a)
    sum = a + b;
    a = b;
    b = sum;
    i++;
}






// Qs. 10. Using a for loop, print the square of numbers from 1 to 10 and categorize them using
// if:
// ● Less than 20: “Small”
// ● Between 20–50: “Medium”
// ● More than 50: “Large”

for (let i = 1; i <= 10; i++) {
    let square = i * i;
    if (square < 20) {
        console.log(`${square} - Small`);
    } else if (square >= 20 && square <= 50) {
        console.log(`${square} - Medium`);
    } else {
        console.log(`${square} - Large`);
    }
}



Qs.
let num = [22, 45, 67, 89];
console.log(num.at(3));
console.log(num.at(-2));



Qs.
let arr = [12, 24, 36, 48, 60];
console.log(arr.indexOf(48));
console.log(arr.indexOf(24));





Qs.
let arr = [12, 24, 36, 48, 60, 72, 84, 96];
console.log(arr.slice(3)); 
console.log(arr.slice(5)); 
console.log(arr.slice(3, 6)); 
console.log(arr.slice(3, -2)); 





 Qs.
let num = [1, 2, 3];
let output = [];
for(let i = 0; i < num.length; i++){
    output.push(num[i] * 10);
}
console.log(output, "Output"); 





Qs.
let arr = [12, 23, 45, 34, 56, 98, 78];
let target = 45;
for (let i = arr.length - 1; i >= 0; i--) {
    if (target == arr[i]) {
        console.log(i);
        break;
    }
}




 Qs. using filter
let stu = [2, 3, 4, 5, 6, 9];
let newStu = stu.filter((i)=> i % 2 == 0);
console.log(newStu);





Qs. Ek array [10, 20, 30, 40, 50] ka total sum find karo forEach ka use karke (sum variable bana ke update karte jao).
let arr = [10, 20, 30, 40, 50];
let sum = 0; 
arr.forEach((currentNumber) => {    
    sum += currentNumber;
})
console.log(sum);




Qs.Ek array me employees ke naam ["Aman", "Ravi"] ke saath " - ID: 101", " - ID: 102" jod ke naya array return karo (index ka use karke ID add karo).
let arr = ["Aman", "Ravi"];
let newArr = arr.map((name, index) => name + " - ID: " + (101 + index));
console.log(newArr); 

Qs. Ek array of numbers [5, 10, 15, 20] ka har element ka square aur cube dono ek saath object ke form me return karo, jaise:
// [
  { number: 5, square: 25, cube: 125 },
  { number: 10, square: 100, cube: 1000 }
]
let num = [5, 10, 15, 20];
let newNum = num.map(n => ({ 
    number: n, 
    square: n * n, 
    cube: n * n * n 
}));
console.log(newNum);






 Qs. Check karo ki saare numbers even hain.
let arr = [2, 4, 6, 8];
let newArr = arr.every((n) => n % 2 == 0);
console.log(newArr);






Qs.
let fruits = ["apple", "banana", "orange"];
let iterator = fruits.entries();
for (let [index, value] of iterator) {
    console.log(index, value);
} 





Qs.
let a = "Hello World";
let b = a.split(" ");
console.log(b);






Qs.
let arr = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9, 10, 11, 12],
  [13,14, 15, 16]
];

function printZ(arr) {
  let n = arr.length;

  // 🔹 top row
  for (let j = 0; j < n; j++) {
    console.log(arr[0][j]);
  }

  // 🔹 diagonal
  for (let i = 1; i < n - 1; i++) {
    console.log(arr[i][n - 1 - i]);
  }

  // 🔹 bottom row
  for (let j = 0; j < n; j++) {
    console.log(arr[n - 1][j]);
  }
}
printZ(arr);






function printN(arr) {
  let n = arr.length;

  // 🔹 left column
  for (let i = 0; i < n; i++) {
    console.log(arr[i][0]);
  }

  // 🔹 diagonal
  for (let i = 1; i < n - 1; i++) {
    console.log(arr[n - 1 - i][i]);
  }

  // 🔹 right column
  for (let i = 0; i < n; i++) {
    console.log(arr[i][n - 1]);
  }
}
printN(arr);






Qs.
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


// Qs.
let age = 34;
const canVote = ((age) => {
    return new Promise((resolve, reject) => {
        if(age >= 18) {
            resolve("you can vote");
        } else {
            reject("you can't vote.");
        }
    })
});
canVote(age)
    .then((response) => {
        console.log(response, "response");
    })
    .catch((error) => {
        console.log(error, "error");
    })