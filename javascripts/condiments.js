"use strict";

const condimentPrice = {
  "Mustard": 0.05,
  "Ketchup": 0.05,
  "Vinegar and Oil": 0.75,
  "Sriracha": 0.10,
  "Miracle Whip": 0.10,
  "No Condiments": 0
};

const addCondiment = (selectedCondiment) => {
  return condimentPrice[selectedCondiment];
};

module.exports = { addCondiment };