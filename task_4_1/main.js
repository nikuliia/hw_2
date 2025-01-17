"use strict"

let yourName = prompt("Please enter your name:")

if (yourName && isNaN(Number(yourName.trim())) && yourName.trim().length >= 2) {
    alert(`Hello, ${yourName}! How are you?`)
} else {
    alert(`Please, enter a valid name.`)
}
