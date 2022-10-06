"use strict";

/* let myName = "Anna";
let lastName = "Banana";

function sayHello(firstName) {
  console.log(`Hello ${lastName} ${firstName}`);
}

sayHello(myName, lastName); */

//RETURN VALUES

/* function greeting(firstName) {
  console.log(`Hello ${firstName}`);
}

const sayHi = greeting;

sayHi("Harry");
greeting("Harry");
 */

//CALLBACK FUNCTIONS

const person3 = {
  firstName: "Harry",
  lasttName: "Potter",
  hired: false,
};

const person4 = {
  firstName: "Fred",
  lasttName: "Weasley",
  hired: false,
};

function hire(person) {
  person.hired = true;
  //console.log(`The person hired is ${person}`);
}

function fire(person) {
  person.hired = false;
  //console.log(`The person fired is ${person}`);
}

function fireOrHire(action, person) {
  action(person);
  console.log(`The person is ${person}`);
}

fireOrHire(hire, person4);
fireOrHire(fire, person3);
