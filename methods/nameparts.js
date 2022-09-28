"use strict";

/* const person = "Albus Percival Wulfric Brian Dumbledore";

let firstName = person.substring(0, person.indexOf(" "));

let middleName = person.substring(person.indexOf(" ") + 1, person.lastIndexOf(" ") + 1);

let lastName = person.substring(person.lastIndexOf(" ") + 1);

console.log(`${person}`);

console.log(`${firstName}`);
console.log(`${middleName}`);
console.log(`${lastName}`); */

//CAPITALIZATION FUNCTIONS

function getNameParts(fullname) {
  let firstName = fullname.substring(0, fullname.indexOf(" "));

  let middleName = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" ") + 1);

  let lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);

  console.log(`${firstName}`);
  console.log(`${middleName}`);
  console.log(`${lastName}`);
}

getNameParts(`Anna Barella Banna Alonso`);
