Practice Qs.

1. Ek function banao jo ek array lega aur batayega kaunsa element sabse zyada baar aaya aur kitni baar aaya.

function maxFrequency(arr) {
    let pairs = {}
    for (let i = 0; i < arr.length; i++) {
        if (pairs[arr[i]]) {
            pairs[arr[i]]++;
        } else {
            pairs[arr[i]] = 1;
        }
    }

    let maxNum = 0;
    let value = null;
    for (let key in pairs) {
        if (pairs[key] > maxNum) {
            value = key;
            maxNum = pairs[key];
            // console.log(maxNum, value, "Output");    
        }
    }
    console.log(value, "appeared", maxNum, "Times");
}
maxFrequency([2, 3, 2, 5, 3, 2]);






2. setTimeout use karke ek function banao jo 2 second ke baad array ke har element ko double karke print kare.

function doubleValue(arr) {
    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i] * 2);
        }
    }, 2000)
}
doubleValue([1, 2, 3]);






3. Ek counter banao jo 1 se start hoke 10 tak print kare, har 1 sec baad.Jab 10 ho jaye to clearInterval use karke stop karna hai.

let counter = 1;
const result = setInterval(() => {
    console.log(counter);
    if (counter == 10) {
        clearInterval(result);
    } else {
        counter++;
    }
}, 1000);







4. Using(JSON.stringify + JSON.parse + Object Concept)

let student = { name: "Aneesh", age: 20, course: "BTech" };
Isko JSON.stringify karke print karo.
Fir usko JSON.parse karke wapas JS object banao.
Fir us object me ek naya property city: "Fatehpur" add karke print karo.

let student = { name: "Aneesh", age: 20, course: "BTech" };

const stringifyData = JSON.stringify(student);
console.log(stringifyData);

const parseData = JSON.parse(stringifyData);
parseData.city = "Fatehpur";

console.log(parseData);





5. Ek function likho jo ek students ka array lega(array ke andar objects).Example:

let students = [
    { name: "A", marks: 85 },
    { name: "B", marks: 92 },
    { name: "C", marks: 70 },
    { name: "D", marks: 92 }
];
Kaunse student ke marks sabse zyada hain(agar do ke equal hain to dono ka naam print karo).
Us result ko JSON.stringify karke print karo.
3 sec ke baad output print ho using setTimeout.

    let students = [
        { name: "A", marks: 85 },
        { name: "B", marks: 92 },
        { name: "C", marks: 70 },
        { name: "D", marks: 92 }
    ];
function topStudent(students) {
    let maxMarks = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks > maxMarks) {
            maxMarks = students[i].marks;
        }
    }

    let toppers = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks === maxMarks) {
            toppers.push(students[i].name);
        }
    }

    setTimeout(() => {
        let result = {
            toppers: toppers,
            maxMarks: maxMarks
        };
        console.log(JSON.stringify(result));
    }, 3000);
}
topStudent(students);