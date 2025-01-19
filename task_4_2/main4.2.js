"use strict"

let threeDigitNumber = prompt('123');
const arr = Array.from(String(threeDigitNumber), Number);
console.log(arr);

const sameItems = arr.every((item) => item === arr[0]);
console.log(sameItems ? 'true' : 'false');
