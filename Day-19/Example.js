Using Binary Search

let nums = [10, 20, 30, 40, 50, 60, 70, 80];
let target = 40;

function usingBinary(nums, target) {
    let left = 0;                  // 0 => 3
    let right = nums.length - 1;    // 7 => 3

    while (left <= right) {    //(0<7) => (0<3) => (3 <= 3)
        let middleIndex = Math.round((left + right) / 2);    // 4 => 2 => 3

        let middleElement = nums[middleIndex];    // 50 => 30 => 40

        if (target == middleElement) {            // (40 == 50) => (40 == 30) => (40 == 40)
            return middleIndex;                                                 // code execute return middleindex
        } else if (target > middleElement) {      // (40 > 50) => (40 > 30)
            left = middleIndex + 1;                                // 3 
        } else if (target < middleElement) {       // (40 < 50) => 
            right = middleIndex - 1;              // (4 - 1 = 3)
        }
    }
}

console.log(usingBinary(nums, target));






Event Loop

Call Stack => Web API's => Callback Queue => Event Loop





Qs.
console.log(10);

setTimeout(() => {
    console.log(20);
}, 2000);

setTimeout(() => {
    console.log(30)
}, 5000);

setTimeout(() => {
    console.log(40);
}, 3000);

console.log(50);