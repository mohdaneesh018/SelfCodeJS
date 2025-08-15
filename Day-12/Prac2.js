3️⃣ Objects 

1. Ek object laptop banao jisme brand, model, price ho. price change karo aur object print karo.
const laptop = {
    model: "Lenovo",
    brand: "Graphics Card",
    price: 20000
}
console.log(laptop.price);

laptop.price = 30000;
console.log(laptop);








2. Ek object student banao jisme name, marks (array), aur ek method getAverage() ho jo average marks return kare.
const student = {
    name: "Aneesh",
    marks: [20, 45, 32, 12],

    getAverage: function() {
        let sum = 0; 
        for(let i = 0; i < this.marks.length; i++){
        let average = sum / 3;
            sum += this.marks[i]; 
        }
        return sum / this.marks.length;
    }
};
    console.log(student.getAverage());






3. Ek array of objects users banao jisme 3 log ho aur unke name aur age ho. Sirf unka naam print karo jinki age 18 se zyada hai.
const obj = [
    { name: "Rahul", age: 15 },
    { name: "Virat", age: 40 },
    { name: "Rohit", age: 45 },
];
for (let i = 0; i < obj.length; i++) {
    if (obj[i].age > 18) {
        console.log(obj[i].name);
    }
}







4. Ek object shop banao jisme products ek array of objects ho (name, price). Ek method getTotal() banao jo total price return kare.
const products = [
    {name: "Bottle", price: 100},
    {name: "Tiffin", price: 200},
    {name: "Mixxer", price: 500}
]
function getTotal() {
    let sum = 0;
    for(let i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    return sum;
}
console.log(getTotal());







4️⃣ Loops with Arrays & Objects 

5. Ek array colors ke saare elements for...of loop se print karo.
let colors = ["red", "green", "blue", "yellow"];
for (let element of colors) {
    console.log(element);
}
    





6. Ek object person ke saare keys aur values for...in loop se print karo.
let object = {
    name: "Rahul",
    age: 29,
    city: "Mumbai"
} 
for(let key in object){
    console.log(key, ":", object[key]);
}






7. Ek array of numbers me se sirf even numbers print karo.
let arr = [2, 4, 5, 7, 10];  
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    }
}

OR

let arr = [2, 4, 5, 7, 10];  
for (let num of arr) {
    if (num % 2 === 0) {
        console.log(num);
    }
}





8. Ek array of objects employees banao jisme name aur salary ho. Sirf unka naam print karo jinki salary 50000 se zyada hai.
let obj = [
    {name: "Saif", salary: 60000},
    {name: "Sayyaf", salary: 70000},
    {name: "Kaif", salary: 30000}
]
for(let i = 0; i < obj.length; i++){
    if(obj[i].salary > 50000){
        console.log(obj[i].name);
    }
}