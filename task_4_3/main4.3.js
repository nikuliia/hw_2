"use strict"

// age
let age = prompt('Please, enter your age:')

if (age && !isNaN(Number(age))) {
    age = Number(age);
    const currentYear = new Date().getFullYear();
    const yearOfBirth = currentYear - age;
    alert(`You were born in ${yearOfBirth}.`);
} else {
    alert("Please, enter a valid age.");
}

// city
let city = prompt('Please, enter your city name?')
let message

switch (city) {
    case 'Kyiv':
        message = 'You live in the capital of Ukraine';
        break;
    case 'London':
        message = 'You live in the capital of UK';
        break;
    case 'Washington':
        message = 'You live in the capital of USA';
        break;
    default:
        message = `You live in ${city}`;
}
alert(message);


// sport
let sport = prompt(`What's your favourite sport?`)
let message2

switch (sport) {
    case 'tennis':
        message2 = 'Want to play like Djokovich?'
        break;
    case 'football':
        message2 = 'Want to play like Ronaldo?'
        break;
    case 'box':
        message2 = 'Want to play like Usik?'
        break;
    default:
        message2 = `That's a good one!`
}

alert(message2)
