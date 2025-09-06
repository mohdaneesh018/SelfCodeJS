// Closure
// Inheritance
// 2D-Array


1. Closure

function outerFunc() {              // isme innerfunction ko outerfunction ke scope ka access hota h jisko lexical environment kahte h  
    let counter = 0;
    function innerFunc() {
        counter++;
        console.log(counter);
    }
    return innerFunc;
}
const count = outerFunc();
count();                        // yaha pr us function ko call krte h tb bhi usko state ka access mil jata h ye hota h Closure
count();
count();




2. Inheritance
Definition => It allows one class to inherit properties and method from another class

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    greetUser() {
        console.log(`Hello ${this.name} ${this.surname}`);
    }
}

class Student extends User {
    greetStudent() {
        console.log(`Good morning! ${this.name} ${this.surname} from extends USer`);
    }
}

const myUser = new User("Rohit", "Sharma");
myUser.greetUser();

const myStudent = new Student("Suresh", "Raina");
myStudent.greetStudent();