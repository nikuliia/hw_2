"use strict"

let yourName = prompt("Please enter your name:")

if (yourName && isNaN(Number(yourName)) && yourName.trim().length >= 2) {
    alert(`Hello, ${yourName.trim()}! How are you?`)
} else {
    alert(`Please, enter a valid name.`)
}



// let user = null;
// let defaultUser = { name: 'Гість' };
//
// let currentUser = user ?? defaultUser;
//
// console.log(currentUser);
//
// let age = 18;
//
// if (age < 18) {
//     console.log("Ви надто молоді для голосування.");
// } else if (age >= 18 && age < 35) {
//     console.log("Ви можете голосувати, але ще не можете балотуватися.");
// } else {
//     console.log("Ви можете голосувати та балотуватися.");
// }