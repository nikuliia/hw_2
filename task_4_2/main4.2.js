"use strict"

run()

function run() {
    const value = prompt("Please, type a number from 100 to 999")
    const number = +value
    if (isNaN(number)) {
        alert("Not a number. Please, reload the page and try again!")
        return
    }

    if (number < 100 || number > 999) {
        alert("Not a number. Please, reload the page and try again!")
        return
    }

    const numbers = value.split('')
    const unique = new Set(numbers)

    const allAreEqual = unique.size === 1,
        someAreEqual = unique.size === 2

    if (allAreEqual) {
        alert("All numbers are equal.")
    }

    if (someAreEqual) {
        alert("Some numbers are equal.")
    }
}
