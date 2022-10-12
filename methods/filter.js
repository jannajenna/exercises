"use strict";

const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Mia",
    type: "cat",
  },
  {
    name: "leeloo",
    type: "dog",
  },
  {
    name: "Scooby",
    type: "dog",
  },
];

/* function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
} */

function all (animal){
  return true;
}

function none (animal){
  return false;
}

animals.filter(all);
animals.filter(none);

console.log(animals)