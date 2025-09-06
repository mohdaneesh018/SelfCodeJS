LocalStorage → data tab tak save rahega jab tak manually remove/clear na karo (browser close hone ke baad bhi).
SessionStorage → data sirf tab tak rahega jab tak tab/window open hai. Window close hote hi clear ho jata hai.


// Practice Questions
// Easy Level

Qs. 1. LocalStorage me ek "theme" key add karo jisme value "dark" ho. Fir usko console pe print karo.
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));


Qs. 2.  SessionStorage me ek "cartItems" key add karo jisme value "5" ho. Fir us value ko console pe show kro.
sessionStorage.setItem("cartItem", 5);
console.log(sessionStorage.getItem("cartItem"));





// Medium Level

Qs. 3. LocalStorage me ek student ka object store karna hai:
{name: "Aneesh", age: 20, course: "CSE"}
Tumhe JSON.stringify use karke save karna hoga aur JSON.parse se wapas print karna hoga.

let student = {
    name: "Aneesh",
    age: 20,
    course: "CSE"
};

localStorage.setItem("student", JSON.stringify(student));

let studentData = localStorage.getItem("student");
console.log(studentData, "as string");

let parseData = JSON.parse(studentData);
console.log(parseData);

console.log(parseData.name);
console.log(parseData.age);
console.log(parseData.course);







Qs. 4. SessionStorage me ek array store karo:
["Hindi", "English", "Math"];
Array ko bhi stringify karke save karo aur parse karke firse console pe dikhao.

let arr = ["Hindi", "English", "Math"];

sessionStorage.setItem("arr", JSON.stringify(arr));

let arrData = sessionStorage.getItem("arr");
console.log(arrData, "as string");

let arrParseData = JSON.parse(arrData);
console.log(arrParseData, "as object");

console.log(arrParseData[0]);
console.log(arrParseData[1]);
console.log(arrParseData[2]);





// Hard Level (Logic building)

Qs. 5. Tumhe ek function banana hai saveUserData(name, city, age) jo localStorage me user ka data save kare (object ke form me).
Fir ek alag function getUserData() banao jo data ko wapas le aur console pe print kare.

function saveUserData(name, city, age) {
    let user = { name, city, age };
    localStorage.setItem("saveUserData", JSON.stringify(user));
}
function getUserData() {
    let data = localStorage.getItem("saveUserData");
    if (data) {
        let parseData = JSON.parse(data);
        console.log(parseData, "as object of function");
        console.log(parseData.name);
        console.log(parseData.city);
        console.log(parseData.age);
        return parseData;
    } else {
        console.log("No user Data found");
        return null;
    }
}
saveUserData("Rahul", "Sikar", 45);
getUserData();

// OR

function saveUserData(name, city, age) {
    let user = { name, city, age };
    localStorage.setItem("saveUserData", JSON.stringify(user));
}
function getUserData() {
    let data = localStorage.getItem("saveUserData");
    let parseData = JSON.parse(data); // direct parse
    console.log(parseData, "as object of function");
    console.log(parseData.name);
    console.log(parseData.city);
    console.log(parseData.age);
    return parseData;
}
saveUserData("Rahul", "Sikar", 45);
getUserData();






Qs. 6. Ek function sessionCounter() banao jo sessionStorage me ek "count" key rakhe.
Har bar page refresh hone par usme +1 add ho.
Example: First refresh → 1, second refresh → 2, and so on.

function sessionCounter() {
    // Step 1: sessionStorage me "count" already hai kya?
    let counter = sessionStorage.getItem("count");

    if (counter) {
        // Step 2: Agar hai, to parse karke number me badlo aur +1 karo
        let parseDataSession = JSON.parse(counter);
        parseDataSession++;
        sessionStorage.setItem("count", JSON.stringify(parseDataSession));
        console.log(parseDataSession, "as count if condition");
        return parseDataSession;
    } else {
        // Step 3: Agar nahi hai, to 1 se start karo
        sessionStorage.setItem("count", 1);
        console.log(1, "as count else condition");
        return 1;
    }
}
sessionCounter();