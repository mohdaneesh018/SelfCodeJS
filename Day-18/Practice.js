// 1. Practice Qs.This keyword

// Q1.Ek object student banao jisme name aur age ho.Ek method details() likho jo this use karke student ka name aur age print kare.
// (Fir us object ke andar ek nested object bana ke check karo ki this kis context me point karta hai.)

// let student = {
//     name: "Aneesh",
//     age: 21,
//     details: function () {
//         console.log("name", this.name);
//         console.log("age", this.age);

//         let nestedObject = {
//             hobby: "Cricket",
//             show: function () {
//                 console.log("Inner object", this.name, this.age, this.hobby);
//             }
//         }
//         nestedObject.show();

//     }
// }
// student.deatils();





// 2. Constructor function + new

//     Q2.Ek constructor function Car(brand, model, price) banao jo car object create kare.
// Isme ek method add karo getDetails() jo brand aur model return kare.
// Fir do alag cars ke object banao aur unki details print karo.

// function Car(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;

//     this.getDetails = function () {
//         return `${this.brand} ${this.model}`
//     }
// }

// const car1 = new Car("ES6", "2020", "21000");
// console.log(car1.getDetails());

// const car2 = new Car("Tesla", "Model Y", "55000");
// console.log(car2.getDetails());

// const carObj1 = new Car("XYZ", "Model ABC", "10000");
// console.log("brand", carObj1.brand);
// console.log("model", carObj1.model);
// console.log("price", carObj1.price);





// 3. Class

// Q3.Ek class BankAccount banao jisme properties ho: name, balance.
// Method deposit(amount) jo balance badhaye.
// Method withdraw(amount) jo balance kam kare.Agar balance se zyada withdraw ho to "Insufficient Funds" print ho.
// Fir ek object banao aur deposit + withdraw test karo. (Hard – real life example)

// class BankAccount {
//     constructor(name, balance) {
//         this.name = name;
//         this.balance = balance;
//     }

//     deposit() {
//         let amount = 3000;
//         this.balance = this.balance + amount;
//         console.log("Total balance is after deposit:", this.balance);
//     }

//     withdraw() {
//         // let withdrawAmount = 10000;
//         let withdrawAmount = 50000;

//         if (withdrawAmount <= this.balance) {
//             this.balance = this.balance - withdrawAmount;
//             console.log("Total balance is after withdraw:", this.balance);
//         } else {
//             console.log("Insufficient balance");
//         }
//     }
// }

// const bankManager = new BankAccount("Rahul", 45000);
// console.log(bankManager.deposit());
// console.log(bankManager.withdraw());





// 4. try, catch, finally

// Q4.Ek function divide(a, b) banao jo do numbers ka division return kare.Agar b = 0 ho to error throw karo aur catch block me "Division by zero not allowed" print ho.
// (Practice error handling ke liye)

// function divide(a, b) {
//     try {
//         // let calculate = a / b;                      // try ka result chahiyee to ye comment out kro
//         // console.log(calculate, "calculate");

//         if (b == 0) {                                   // error chahiye to ye example
//             throw new Error("Division by zero not allowed");
//         }
//     } catch (error) {
//         console.log(error.message);
//     } finally {
//         console.log("Result is Proved");
//     }
// }

// // divide(10, 5);
// divide(10, 0);




// 5. Promise
// Q5.Ek function checkEven(num) banao jo ek promise return kare:
// Agar number even ho to resolve kare "Even number"
// Agar odd ho to reject kare "Odd number".
//     Fir.then aur.catch use karke test karo. (Easy / Medium)

// function checkEven(num) {
//     return new Promise((resolve, reject) => {
//         if (num % 2 == 0) {
//             resolve("Number is Even");
//         } else {
//             reject("Number is Odd");
//         }
//     });
// }
// // checkEven(6)
// checkEven(7)
//     .then((Response) => {
//         console.log(Response, "response");
//     })
//     .catch((error) => {
//         console.log(error, "error");
//     })




// 6. Async / Await

// Q6.Ek function fetchUserData() banao jo 3 second ke baad "User Data Loaded" return kare(Promise ke through).
// Fir ek async function likho jo is data ko await karke print kare.
// (Ye tumhare async / await understanding strong karega). (Medium)

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("User Data Loaded")
//             // reject("User Data not Loaded")
//         }, 3000)
//     })
// }
// async function data() {
//     try {
//         const result = await fetchUserData()
//         console.log(result, "result");
//     } catch (error) {
//         console.log(error, "error");
//     }
// }
// data();





// 7. Array + OOPs Mix

// Q7.Ek class Library banao jisme ek array ho books ka.
// Method addBook(bookName) jo book add kare.
// Method getBooks() jo sari books return kare.
// Method findBook(name) jo check kare book available hai ya nahi.

// class Library {
//     constructor() {
//         this.books = []
//     }

//     addBook(bookName) {
//         this.books.push(bookName);
//         return (`${bookName} added successfully`);
//     }

//     getBook() {
//         return this.books;
//     }

//     findBook(name) {
//         if (this.books.includes(name)) {
//             console.log(`${name} is available in the library`);
//         } else {
//             console.log(`${name} is not available in the library`);
//         }
//     }
// }

// const libraryMaster = new Library();
// console.log(libraryMaster.addBook("Harry Potter"))
// console.log(libraryMaster.addBook("Half Blood Prince"))

// console.log("All Books:", libraryMaster.getBook());

// console.log(libraryMaster.findBook("Harry Potter"));
// console.log(libraryMaster.findBook("Game of Thrones"));





// Q8.Ek class Playlist banao jisme ek array ho songs ka.

// Method addSong(songName) jo song add kare.
// Method getAllSongs() jo saare songs return kare.
// Method findSong(songName) jo check kare song available hai ya nahi.
//     Extra: Method removeSong(songName) jo song delete kare agar wo array me present ho.

// class Playlist {
//     constructor() {
//         this.songs = []
//     }

//     addSongs(songName) {
//         this.songs.push(songName);
//         return (`${songName} is added`);
//     }

//     getAllSongs() {
//         return this.songs;
//     }

//     findSong(name) {
//         if (this.songs.includes(name)) {
//             console.log(`${name} is available in the Playlist`);
//         } else {
//             console.log(`${name} is not available in the Playlist`);
//         }
//     }

//     removeSong(name) {
//         if (this.songs.includes(name)) {
//             let index = this.songs.indexOf(name);
//             this.songs.splice(index, 1);
//             console.log(`${name} is removed successfully`);
//         } else {
//             console.log(`${name} is not found in the Playlist`);
//         }
//     }
// }

// const Music = new Playlist();

// console.log(Music.addSongs("Tum hi ho"));
// console.log(Music.addSongs("Shakky Shakky"));
// console.log(Music.addSongs("Ranjhaan"));
// console.log(Music.addSongs("Koi Naa"));


// console.log(Music.getAllSongs());


// console.log(Music.findSong("Tum hi ho"));
// console.log(Music.findSong("Calm down"));


// console.log(Music.removeSong("Tum hi ho"));
// console.log(Music.removeSong("Tere Naam"));


// console.log(Music.getAllSongs());