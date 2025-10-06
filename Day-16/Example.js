Qs.Find value to greatest times: -

    let num = [23, 34, 56, 76, 87, 23, 43, 23, 56, 45, 23];
let pairs = {};

function maxNumCount(num) {
    for (let i = 0; i < num.length; i++) {
        if (pairs[num[i]]) {
            pairs[num[i]]++;
        } else {
            pairs[num[i]] = 1;
        }
        // console.log(pairs, "pairs")
    }

    let max = 0;
    let value = null;
    for (let key in pairs) {
        if (pairs[key] > max) {
            value = key;
            max = pairs[key];
            console.log(max, value, "max", "value")
        }
    }
    return value;
}
console.log(maxNumCount(num));




1. Ternery Operator: - used in both JS and HTML & it' s short version in conditional statement
syntax => (condition ? "true" : "false")

Qs.

// let age = 21;
let age = 13;
const canVote = (age >= 18 ? "Yes can Vote." : "No can't Vote.");
console.log(canVote);




2. Template Literels: -
    syntax => ` Text ${variable name} Text `;

Qs.

let name = "Aneesh";
let userName = "Ashrafi";
const greetingMessage= `Hello ${ name } ${ userName }, Welcome to institute.`;
console.log(greetingMessage);





3. De-structuring

Qs.

let userAge = [11, 22, 33];
// console.log(userAge[1]);
const [a, b, c] = userAge;     // Array type of De-structuring
console.log(a, b, c, "a, b, c");


Qs.

let userData = { name: "Rohit", surName: "Sharma", age: 28 };
// console.log(userData.name);
const {name, surName, age} = userData;       // Object type of De-structuring
console.log(name, surName, age, "name, surname, age");





4. Callback function

Qs.

function greet(name, callback) {
    console.log("Welcome ", name);
    callback();
}

function afterGreetingUserAskPermission() {
    console.log("Public Place")
}
greet("Aneesh", afterGreetingUserAskPermission);


Qs.

// let age = 10;
let age = 20;
function canVote(age, yesFunction, noFunction) {
    if (age >= 18) {
        yesFunction();
    } else {
        noFunction();
    }
}

const successMsg = () => {
    console.log("You can Vote.");
}

const failorMsg = () => {
    console.log("You can't Vote.")
}
canVote(age, successMsg, failorMsg);





5. Promise
(resolve, reject)
(.then, .catch)


Qs.

// let age = 34;
let age = 14;
const canVote = ((age) => {
    return new Promise((resolve, reject) => {
                     // new => new object create
                     // constructor function - class -> Promise((resolve, reject) => {})
        if (age >= 18) {
            resolve("you can Vote.");
        } else {
            reject("You can't Vote.");
        }
    });
});
canVote(age)
    .then((response) => {
        console.log(response, "response");
    })
    .catch((error) => {
        console.log(error, "error");
    })