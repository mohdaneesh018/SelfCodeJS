console.log("Hello");



console.log(1, "Local Storage");
// LOCAL STORAGE ==> isme ek br key or value add krdiya phr wo whi rhega jab tk apn khud usko n htade tb tk or browser bnd krne k bd
// phr se start krenge to local storage k andr item rhenge age isko comment krdenge tb bhi ye wahi rhega jab tk isko waha se remove 
// n krenge ya phr removeitem n krenge tb tk 


localStorage.setItem("name", "Aneesh");
localStorage.setItem("city", "Jaipur");               // isse item means key or value set hote h local storage k andr


console.log(localStorage.getItem("name"), "name");
console.log(localStorage.getItem("city"), "city");            // ye console m dikhata h 


localStorage.removeItem("city");                     // isse item remove hota h 


localStorage.setItem("standard", 9);                   // isse phr se add hue


// localStorage.clear();                              // isse local storage pura clear hojata h 






console.log(2, "Session Storage");
// Session Storage => isme ek br key or value add krdiya phr wo whi rhega jab tk apn khud usko n htade tb tk or browser bnd krne k bd
// lekin window jese bnd krenge session storage khali hojayega wo automatic delete hojayenge halanki local storage m wo rhenge


    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("isLoggedOut", false);


    console.log(sessionStorage.getItem("isLoggedOut"), "isLoggedOut");


    sessionStorage.removeItem("isLoggedOut");


    sessionStorage.setItem("isLoggedBreak", "Break");


    // sessionStorage.clear(); 