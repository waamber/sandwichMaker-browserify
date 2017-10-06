"use strict";
let veggiePrices = {};

const addVeggie = (selectedVeggie) => {
  console.log(veggiePrices[selectedVeggie]);
  return veggiePrices[selectedVeggie];
};

const veggieLoad = function () {
  veggiePrices = JSON.parse(this.responseText);
  return veggiePrices;
};

const loadError = () => {
  console.log("error");
};

const veggieLoader = new XMLHttpRequest();
veggieLoader.addEventListener('error', loadError);
veggieLoader.addEventListener('load', veggieLoad);
veggieLoader.open('GET', '../data/veggies.json');
veggieLoader.send();

module.exports = { addVeggie, veggiePrices, veggieLoader, loadError };