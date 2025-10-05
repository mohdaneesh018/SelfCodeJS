Nested-Loop

let n = 2;
for(let i=1; i <= n; i++){
    for(let j = 1; j <= 3; j++){
        console.log(`i = ${i}, j = ${j}`);
    }
}



Diamond-Pattern
Qs.

let n = 4;

// Upper Part
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

// Lower Part
for (let i = 1; i <= n - 1; i++) {
    let res = "";
    for (let spaces = 1; spaces <= i; spaces++) {
        res += " ";
    }
    for (let star = 1; star <= 2 * (n - i) - 1; star++) {
        res += "*";
    }
    console.log(res);
}