"use strict";

console.log("hello");

/* Dumbledore */

const name = "Albus Percival Wulfric Brian Dumbledore";
const total = name.length;
const letter2 = name[2];
const letter6 = name[6];
const albus = name.substring(0, 5);
const dumbledore = name.substring(29);
const wulfric = name.substring(15, 22);
const wulfric2 = name.substring(14, 23);
const ian = name.substring(25, 28);
const bus = name.substring(2, 5);
const firstD = name.indexOf("d");
const vowelE = name.lastIndexOf("e");

console.log(`Total number of characters is: ${total}`);
console.log(`The second letter of ${name} is ${letter2} and the sixth is ${letter6} `);
console.log(`This is _${albus}_`);
console.log(`This is _${dumbledore}_`);
console.log(`This is _${wulfric}_`);
console.log(`This is _${wulfric2}_`);
console.log(`This is _${ian}_`);
console.log(`This is _${bus}_`);
console.log(`This is _${firstD}`);
console.log(`This is _${vowelE}_`);

/* spaces */
/* const str1 = "  There is     space here \n ";
const str2 = str1.trim();

console.log(str2);
console.log(`_${str2}_`); */

/* substring */
/* const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, 6);

console.log(`First name is:_${firstName}_`); */
