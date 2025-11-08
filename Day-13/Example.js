// Qs.Ek array k andr jo key sabse jyada baar aayi h uska count print kro

// let numbers = [100, 2, 3, 2, 4, 5, 100, 3, 4, 6, 100, 2, 100];
// function maxNumCount(numbers) {
//     var pairs = {};
//     for (let i = 0; i < numbers.length; i++) {
//         if (pairs[numbers[i]]) {
//             pairs[numbers[i]]++;
//         } else {
//             pairs[numbers[i]] = 1;
//         }
//     }
//     console.log(pairs, "pairs");

//     let max = 0;
//     let value = null;
//     for (let key in pairs) {
//         console.log(key, pairs[key]);
//         if (pairs[key] > max) {
//             value = key;
//             max = pairs[key];
//             console.log(max, "max", value, "value");
//         }
//     }
//     console.log(value);
// }

// maxNumCount(numbers);







// setTimeout( , 1000) code will get execute after passed time

// setInterval( , 1000) code will get execute after every passed time

// clearInterval



// Qs.using setTimeout =>
//     setTimeout(() => {
//         console.log("Hello");
//     }, 5000);




// Callback Function => A function who pass as parameter

// Qs.

// var counter = 1;
// const myId = setInterval(() => {
//     console.log(counter);
//     if (counter == 5) {
//         clearInterval(myId);
//     } else {
//         counter++;
//     }
// }, 2000);








// JS => JavaScript
// JSON => JavaScript Object Notation

// Important =>
//     JS convert to JSON and JSON then after convert to JS

// Means => browser ko JS samjh nahi aata isliye wo stringify ko use me lete hue data ko JSON me convert krta h phr using parse wo wps JS me convert krdeta h

// example => { name: "AWDIZ" } => JS
// { "name": "AWDIz" } => JSON



// Qs.

// var myData = { name: "Awdiz" };
// console.log(myData);                              // output JS me milega


// JS convert => JSON
// var stringifyData = JSON.stringify(myData);              // output JSON me milega phr wps convert to JS
// console.log(stringifyData, "stringifyData");


// JSON convert => JS
// console.log(JSON.parse(stringifyData));             // JSON phir se convert krke deta h JS me