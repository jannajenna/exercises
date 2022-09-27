const studentURL = "https://petlatkea.dk/2021/hogwarts/students.json";
const familiesURL = "https://petlatkea.dk/2021/hogwarts/families.json";

/* const studentURL = "cars.json";
const familiesURL = "users.json"; */

let studentJSON;
let familiesJson;

let comparison;

let view;

async function start() {
  view = document.querySelector("#view");

  initView();

  await loadFamilyJSON();
  //await loadStudentJSON();

  //prepareData();
}

function initView() {
  view.textContent = "Loading";
}

async function loadStudentJSON() {
  const resp = await fetch(studentURL);
  const data = await resp.json();
  console.log("student data loaded");
  studentJSON = data;
  //prepareData(); --> if here okay
}

async function loadFamilyJSON() {
  const resp = await fetch(familiesURL);
  const data = await resp.json();
  console.log("family data loaded");
  familiesJson = data;

  await loadStudentJSON();

  prepareData();
  //if here gives error if await loadStudemtJSon is inside start()
}

function prepareData() {
  console.log("6");
  if (studentJSON.lenght > familiesJson.length) {
    comparison = "There are more students than families";
  } else {
    comparison = "There are less students than families";
  }

  useData();
}

function useData() {
  console.log("7");
  view.textContent = comparison;
}

document.addEventListener("DOMContentLoaded", start);

/* start(); */
