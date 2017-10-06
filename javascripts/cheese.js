"use strict";
let cheesePrices = {};

const addCheese = (selectedCheese) => {
  return cheesePrices[selectedCheese];
};

const loadCheese = function () {
  cheesePrices = JSON.parse(this.responseText);
  return cheesePrices;
};

const loadError = () => {
  console.log("error");
};

const cheeseLoader = new XMLHttpRequest();
cheeseLoader.addEventListener('error', loadError);
cheeseLoader.addEventListener('load', loadCheese);
cheeseLoader.open('GET', '../data/cheese.json');
cheeseLoader.send();

module.exports = { addCheese, cheeseLoader, cheesePrices, loadError };