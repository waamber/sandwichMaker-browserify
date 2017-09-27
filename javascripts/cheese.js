"use strict";

const cheesePrices = {
  "Cheddar": 0.55,
  "Swiss": 0.55,
  "Pepperjack": 0.75,
  "Gouda": 0.75,
  "Extra Cheese": 0.75,
  "No Cheese": 0
};

const addCheese = (selectedCheese) => {
  return cheesePrices[selectedCheese];
};

module.exports = { addCheese };