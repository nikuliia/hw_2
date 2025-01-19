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
        alert("Not a number. Please, reload page and try again!")
        return
    }

    const numbers = value.split('')
    const unique = new Set(numbers)

    const isAllEqual = unique.size === 1,
        isSomeEqual = unique.size === 2

    if (isAllEqual) {
        alert("All numbers is equals.")
    }

    if (isSomeEqual) {
        alert("Some numbers is equals.")
    }
}