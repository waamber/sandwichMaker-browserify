"use strict";
let breadPrices = [];

const addBread = (selectedBread) => {
  return breadPrices[selectedBread];
};

const loadBread = function () {
  breadPrices = JSON.parse(this.responseText);
  return breadPrices;
};

const loadError = () => {
  console.log("error");
};

const breadLoader = new XMLHttpRequest();
breadLoader.addEventListener('error', loadError);
breadLoader.addEventListener('load', loadBread);
breadLoader.open('GET', '../data/breads.json');
breadLoader.send();

module.exports = { addBread, breadPrices, breadLoader, loadError };


