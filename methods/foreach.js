"use strict";

const people = ["Harry", "Ron", "Herminone", "Neville"];

function testParms(a, b, c, d) {
  console.log(`a:${a},b:${b},c:${c},d:${d},`);
}

people.forEach(testParms);
