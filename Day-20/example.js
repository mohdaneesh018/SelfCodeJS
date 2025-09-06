console.log("Hello");

console.log(1, "Local Storage");
// LOCAL STORAGE ==> isme ek br key or value add krdiya phr wo whi rhega jab tk apn khud usko n htade tb tk or browser bnd krne k bd
// phr se start krenge to local storage k andr item rhenge age isko comment krdenge tb bhi ye wahi rhega jab tk isko waha se remove 
// n krenge ya phr removeitem n krenge tb tk data tab tak save rahega jab tak manually remove/clear na karo (browser close hone ke baad bhi).


localStorage.setItem("name", "Aneesh");
localStorage.setItem("city", "Jaipur");               // isse item means key or value set hote h local storage k andr


console.log(localStorage.getItem("name"), "name");
console.log(localStorage.getItem("city"), "city");            // ye console m dikhata h 


localStorage.removeItem("city");                     // isse item remove hota h 


localStorage.setItem("standard", 9);                   // isse phr se add hue


// localStorage.clear();                              // isse local storage pura clear hojata h 


// Local Storage json.stringify with example
// Qs. 1

let user = {
    name: "Aneesh",
    age: 20,
    city: "Mumbai"
};

// Step 2: Object ko stringify karke LocalStorage me save karo
localStorage.setItem("userData", JSON.stringify(user));

// Step 3: Storage se wapas data lo
let storedData = localStorage.getItem("userData");
console.log(storedData, "as string");

// Step 4: Parse karke object banao
let parsedData = JSON.parse(storedData);
console.log(parsedData, "as object");

console.log(parsedData.name);
console.log(parsedData.age);
console.log(parsedData.city);




// Qs. 2
let skills = ["HTML", "CSS", "JavaScript"];

localStorage.setItem("language", JSON.stringify(skills));

let skillsData = localStorage.getItem("language");
console.log(skillsData, "as string");

let parsedskillsData = JSON.parse(skillsData);
console.log(parsedskillsData, "as array");

console.log(parsedskillsData[0]);
console.log(parsedskillsData[1]);
console.log(parsedskillsData[2]);






console.log(2, "Session Storage");
// Session Storage => isme ek br key or value add krdiya phr wo whi rhega jab tk apn khud usko n htade tb tk or browser bnd krne k bd
// lekin window jese bnd krenge session storage khali hojayega wo automatic delete hojayenge halanki local storage m wo rhenge
// data sirf tab tak rahega jab tak tab/window open hai. Window close hote hi clear ho jata hai.

sessionStorage.setItem("isLoggedIn", true);
sessionStorage.setItem("isLoggedOut", false);


console.log(sessionStorage.getItem("isLoggedOut"), "isLoggedOut");


sessionStorage.removeItem("isLoggedOut");


sessionStorage.setItem("isLoggedBreak", "Break");


// sessionStorage.clear(); 


// Session Storage json.stringify with example
// Qs. 1

let courses = ["React", "Node", "MongoDB"];

// Step 1: Save array in Session Storage
sessionStorage.setItem("coursesLanguage", JSON.stringify(courses));

// Step 2: Get array from Session Storage
let coursesDefine = sessionStorage.getItem("coursesLanguage");
console.log(coursesDefine, "as string");

// Step 3: Parse string back into array
let coursesParseData = JSON.parse(coursesDefine);
console.log(coursesParseData, "as array");

// Step 4: Access values
console.log(coursesParseData[0]);
console.log(coursesParseData[1]);
console.log(coursesParseData[2]);





// Qs. 2
let student = {
    name: "Mohit",
    age: 35
};

sessionStorage.setItem("student", JSON.stringify(student));

let studentData = sessionStorage.getItem("student");
console.log(studentData, "as string");

let stuParseData = JSON.parse(studentData);
console.log(stuParseData, "as object");

console.log(stuParseData.name);
console.log(stuParseData.age);