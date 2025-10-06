$ $ $ $ $ $
$ $ $ $ $ $
$ $ $ $ $ $
$ $ $ $ $ $
$ $ $ $ $ $
$ $ $ $ $ $

let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= 6; j++) {
        res += "$ ";
    }
    console.log(res);
}







*
* *
* * *
* * * *
* * * * *

let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= i; j++) {
        res += "* ";
    }
    console.log(res);
}







1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= i; j++) {
        res += j + " ";
    }
    console.log(res);
}






Print table of 5;

let n = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}






2
2 4
2 4 6
2 4 6 8
2 4 6 8 10

let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= i; j++) {
        res += (2 * j) + " ";
    }
    console.log(res);
}