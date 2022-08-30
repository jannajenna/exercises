"use strict";

const person = "Albus Percival Wulfric Brian Dumbledore";

let firstName = person.substring(0, person.indexOf(" "));

let middleName = person.substring(person.indexOf(" ") + 1, person.lastIndexOf(" ") + 1);

let lastName = person.substring(person.lastIndexOf(" ") + 1);

console.log(`${person}`);

console.log(`${firstName}`);
console.log(`${middleName}`);
console.log(`${lastName}`);
