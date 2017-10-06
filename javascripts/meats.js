"use strict";
let meatPrices = [];

const addMeat = (selectedMeat) => {
  return meatPrices[selectedMeat];
};

const loadMeat = function (selectedMeat) {
  meatPrices = JSON.parse(this.responseText);
  return meatPrices[selectedMeat];
};

const loadError = () => {
  console.log("error");
};

const meatLoader = new XMLHttpRequest();
meatLoader.addEventListener('error', loadError);
meatLoader.addEventListener('load', loadMeat);
meatLoader.open('GET', '../data/meats.json');
meatLoader.send();

module.exports = { addMeat, loadError, loadMeat, meatLoader };





