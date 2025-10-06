Using this Keyword

Qs.

const data = {
    name: "Aneesh",
    age: 21,
    greeting: function() {
        console.log("name", this.name);
        console.log("age", this.age)
    }
} 
console.log(data.greeting(), "data.greeting()");





Combination of this keyword + new + constructor function

Qs.

function admission(name, surname, email, number) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.number = number;
}

const user1 = new admission("Virat", "Kohli", "virat@gmail.com", "12345");
// console.log(user1);
console.log(user1.name);
console.log(user1.surname);
console.log(user1.email);
console.log(user1.number);

const user2 = new admission("Rohit", "Sharma", "rohit@gmail.com", "67890");
// console.log(user2);
console.log(user2.name);
console.log(user2.surname);
console.log(user2.email);
console.log(user2.number);






Using Class

Qs.

class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    teach(){
        console.log(this.name, "teaches", this.subject);
    }
}
const teacher1 = new Teacher("Sagar", "HTML"); 
console.log(teacher1, "teacher1");
console.log("name", teacher1.name);
console.log("subject", teacher1.subject);
console.log("teach", teacher1.teach());


const teacher2 = new Teacher("Rohit", "Math");
console.log(teacher2, "teacher2");
console.log("name", teacher2.name);
console.log("subject", teacher2.subject);
console.log("teach", teacher2.teach());





try, catch, finally

Qs.

try {
    const num = 10;
    num = 20;              // const is re-assign then error is print
    let output = num / 0;
    console.log(output, "result");
} catch (error) {
    console.log("error in catch", error);
} finally {
    console.log("Finally loading will stop")
}





Async Await

Qs.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Products");
            reject("Furniture");
        }, 5000);
    })
}

// without async await
// function data() {
//     try {
//         const result = fetchData();
//         console.log(result, "result");
//     } catch (error) {
//         console.log("error", error);
//     }
// }


// using async await
async function data() {
    try {
        const result = await fetchData();
        console.log(result, "result");
    } catch (error) {
        console.log("error", error);
    }
}
data();