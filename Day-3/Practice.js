Nested-Loop

Qs. Print this pattern:

let n = 3;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= 3; j++) {
        res += "* ";
    }
     console.log(res);
}



Qs. Print a table from 1 to 5:

for(let i = 1; i <= 10; i++){
    let res = "";
    for(let j = 1; j <= 5; j++){
        res += (`${j} * ${i} = ${j * i}`) + " " + " " + " " + " " + " ";    
    }
    console.log(res);
}




Qs. Print number square:

let n = 3;
for(let i = 1; i <= n; i++){
    let res = "";
    for(let j = 1; j <= 3; j++){
        res += j + " ";
    }
    console.log(res);
}



Qs. Triangle number pattern:

let n = 4;
for(let i = 1; i <= n; i++){
    let res = "";
    for(let j = 1; j <= i; j++){
        res += j + " ";
    }
    console.log(res);
}




Qs. Pattern:

let n = 4;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let spaces = 1; spaces <= n - i; spaces++) {
        res += " ";
    }
    for (let star = 1; star <= (2 * n) - 1; star++) {
        res += "*";
    }
    console.log(res);
}





Qs. Print Pyramid Pattern

let n = 4;
for(let i = 1; i <= n; i++){
    let res = "";
    for(let spaces = 1; spaces <= n-i; spaces++){
        res += " ";
    }
    for(let star = 1; star <= i; star++){
        res += "* ";
    }
    console.log(res);
}




Qs. Use nested loop to print this triangle of *

let n = 4;
for(let i = 1; i <= n; i++){
    let res = "";
    for(let j = 1; j <= i; j++){
        res += "* ";
    }
    console.log(res);
}





Qs. Number pyramid — use numbers in both increasing and decreasing order.

let n = 4;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let spaces = 1; spaces <= n - i; spaces++) {
        res += " ";
    }
    for (let num = 1; num <= i; num++) {
        res += num;
    }

    for (let num = i - 1; num >= 1; num--) {
        res += num;
    }
    console.log(res);
}





Qs. Diamond star pattern — repeat what we just learned.

let n = 4;

// Upper Part
for(let i = 1; i <= n; i++){
    let res = "";
    for(let spaces = 1; spaces <= (n - i); spaces++){
        res += " ";
    }
    for(let star = 1; star <= (2 * i) - 1; star++){
        res += "*";
    }
    console.log(res);
}

// Lower Part
for(let i = 1; i <= (n-1); i++){
    let res = "";
    for(let spaces = 1; spaces <= i; spaces++){
        res += " ";
    }
    for(let star = 1; star <= 2 * (n-i) - 1; star++){
        res += "*";
    }
    console.log(res);
}




Qs. Continuous numbers in triangle pattern.
let n = 4;
let count = 1;
for(let i = 1; i <= n; i++){
    let res = "";
    for(let j = 1; j <= i; j++){
        res += count;
        count++;
    }
    console.log(res);
}





Qs. Number pyramid with increasing-decreasing pattern.

let n = 3;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let spaces = 1; spaces <= n - i; spaces++) {
        res += " ";
    }
    let num = i;
    for (let j = 1; j <= i; j++) {
        res += num;
        num++;
    }
    num -=2
    for(let j = 1; j < i; j++){
        res += num;
        num--;
    }
    console.log(res);
}