"use strict";
let condimentPrice = [];

const addCondiment = (selectedCondiment) => {
  return condimentPrice[selectedCondiment];
};

const loadCondiments = function () {
  condimentPrice = JSON.parse(this.responseText);
  return condimentPrice;
};

const loadError = () => {
  console.log("error");
};

const condimentLoader = new XMLHttpRequest();
condimentLoader.addEventListener('error', loadError);
condimentLoader.addEventListener('load', loadCondiments);
condimentLoader.open('GET', '../data/condiments.json');
condimentLoader.send();

module.exports = { addCondiment, loadCondiments, condimentLoader, loadError };