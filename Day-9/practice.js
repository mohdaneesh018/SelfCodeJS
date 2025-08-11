//1. Split Method

Qs. "Hello World" ko space ke hisab se array me badlo.
let a = "Hello World";
let b = a.split(" ");
console.log(b);





Qs. "a-b-c-d" ko - ke basis pe tod ke array banao.
let a = "a-b-c-d";
let b = a.split("-");
console.log(b);






Qs. "Javascript is fun" ko har word alag karo.
let i = "Javascript is fun";
let j = i.split(" ");
console.log(j); 




Qs. "12345" ko har digit alag karo.
let i = "12345";
let j = i.split("");
console.log(j);






Qs. Ek string "apple orange banana" ko tod kar array banao, aur pehla word print karo.
let i = "apple orange banana"; 
let j = i.split(" ");
console.log(j[0]); 








// 2. Join Method

Qs. ["red", "green", "blue"] ko ek string me comma ke saath join karo.
let i = ["red", "green", "blue"];
let j = i.join(", ");
console.log(j);







Qs. ["HTML", "CSS", "JS"] ko " | " separator ke saath join karo.
let i = ["HTML", "CSS", "JS"];
let j = i.join(" | ");
console.log(j);






Qs. [1, 2, 3, 4] ko space ke saath join karo.
let i = [1, 2, 3, 4];
let j = i.join(" ");
console.log(j);






Qs. ["apple", "mango"] ko bina separator join karo.
let i = ["apple", "mango"];
let j = i.join("");
console.log(j);






Qs. Split & Join ka use karke "my name is Aneesh" ko har word uppercase karke join karo.
let i = "my name is Aneesh";
let j = i.split(" ").map((word) => word.toUpperCase()).join(" "); 
console.log(j);
