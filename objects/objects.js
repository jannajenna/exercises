"use strict";

const student1 = {
  firstName: "Harry",
  lastName: "POtter",
};

/* THEY ARE THE SAME */
/* const student2 = student1; */

/* if (student1 === student2) {
  console.log("They are the same!");
} else {
  console.log("They are not ...");
}
 */

/* if (student1 == student2) {
  console.log("They are the same!");
} else {
  console.log("They are not ...");
} */

/* THEY ARE NOT THE SAME */

const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};

student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

if (student1 === student2) {
  console.log("They are the same!");
} else {
  console.log("They are not ...");
}
