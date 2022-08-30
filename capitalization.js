"use strict";

const person = "pETErRrr";

/* let personUp = person[0].toUpperCase() + person.substring(1).toLowerCase(); */
let personUp = person[0].toUpperCase() + person.slice(1).toLowerCase();

console.log(`${personUp}`);
