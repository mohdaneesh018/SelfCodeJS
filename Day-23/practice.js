Practice Questions
Concept: Closure me inner function ko outer function ke lexical scope ka access hota hai. 

Qs. 1 Ek closure banao jo ek counter banaye aur usme reset functionality bhi ho.

function outerClosure() {
    let counter = 0;

    function increament() {
        counter++;
        console.log(counter);
    }

    function decreament() {
        counter--;
        console.log(counter);
    }

    function reset() {
        counter = 0;
        console.log(0, "(Counter reset)");
    }

    return { increament, reset, decreament };
}
const count = outerClosure();
count.increament();
count.increament();
count.increament();
count.increament();
count.decreament();
count.reset();
count.increament();






Qs. 2 Ek closure banao jo user ka naam save kare aur baar-baar call karne pe greeting print kare.

function userName(name) {
    function greeting() {
        console.log(`Hello ${name} welcome back!`);
    }
    return greeting;
}
const output = userName("Aneesh");
output();
output();




Inheritance Question
Concept: Child class parent class ke properties/methods inherit karti hai.

Qs. 1 Ek Person class banao jisme name ho aur ek Employee class jo Person ko extend kare aur salary print kare.

class Person {
    constructor(name) {
        this.name = name;
    }
    greetPerson() {
        console.log(`${this.name}`)
    }
}

class Employee extends Person {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }

    greetEmployee() {
        console.log(`${this.name} paid ${this.salary} in your account.`)
    }
}

const myPerson = new Person("Rohit");
myPerson.greetPerson();

const myEmployee = new Employee("Rahul", 40000);
myEmployee.greetEmployee();





Qs. 2
Ek Shape class banao jisme getArea() method ho. Fir Rectangle aur Circle class banakar unme apna-apna area calculate karna ho.

class Shape {
    getArea() {
        console.log("Area formula not defined.");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();                    // Parent class k constructor ko call krne k liye
        super.getArea();            // parent class k method ko call krne k liye
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// const rect = new Rectangle(4, 6);
const rect = new Rectangle(2, 5);
console.log(`Rectangle Area`, rect.getArea());

// const cir = new Circle(3);
const cir = new Circle(5);
console.log(`Area f Circle`, cir.getArea());





2D Array Questions
Concept: 2D array traversal, spiral, diagonal, transpose etc.


Qs.1 2D-array ke sabhi elements row wise print karo.    [output => 1, 2, 3, 4, 5, 6, 7, 8, 9]
let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let result = [];

function singleRows(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            result.push(nums[i][j]);
        }
    }
    return result;
}
console.log(singleRows(nums));




Qs. 2 2D-Array ka Transpose nikalo               [output => 1, 4, 7, 2, 5, 8, 3, 6, 9]
let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
let result = [];

function transposeArr(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            result.push(nums[j][i]);
        }
    }
    return result;
}
console.log( transposeArr(nums));







Qs. 3 Diagonal Sum nikalo (primary + secondary diagonal)  [output => 1 + 5 + 9   3 + 5 + 7 = 30]
let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function diagonalSum(matrix) {
    let n = matrix.length;
    let sum = 0;

    for (let i = 0; i < n; i++) { 
        sum += matrix[i][i];
 
        if (i !== n + i - 1) {   
            sum += matrix[i][n - i - 1];
        }
    }
    return sum;
}

console.log("Diagonal Sum:", diagonalSum(nums)); 