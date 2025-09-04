1. Print a Pyramid Pattern with Spaces:
Input: 3
Output:
        *
       ***
      *****

    let n = 3;
for (let i = 1; i <= n; i++) {
    var res = "";
    for (let space = 1; space <= (n - i); space++) {
        res += " "
    } for (let star = 1; star <= (2 * i) - 1; star++) {
        res += "*";
    }
    console.log(res);
}







2. Print a Square with Border Only:
Input: 4
Output:
            ****
            *  *
            *  *
            ****

    let n = 4;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            res += "*";
        } else {
            res += " ";
        }
    }
    console.log(res);
}





3. Count Binary Zeros and Ones:
Input: "101010110"
Output: { ones: 5, zeros: 4 }

function binaryZero(str) {
    let ones = 0;
    let zeros = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "1") {
            ones++;
        } else {
            zeros++;
        }
    }
    return { ones, zeros };
}
console.log(binaryZero("101010110"));





4. Group Users by Role(Objects inside Array):
Input: [
    { name: "A", role: "admin" },
    { name: "B", role: "user" },
    { name: "C", role: "admin" },
]
Output:
{
    admin: ["A", "C"],
        user: ["B"]
}

let users = [
    { name: "A", role: "admin" },
    { name: "B", role: "user" },
    { name: "C", role: "admin" },
]

function groupByRole(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        let role = arr[i].role;
        let name = arr[i].name;

        if (!result[role]) {
            result[role] = [];
        } else {
            result[role].push(name);
        }
    }

    return result;
}

console.log(groupByRole(users));
