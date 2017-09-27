"use strict";

const meatPrices = {
  "Bacon": 0.75,
  "Turkey": 0.55,
  "Roast Beef": 0.75,
  "Chicken": 0.25,
  "Steak": 0.55,
  "Tuna Salad": 0.55,
  "Extra Meat": 1.25,
  "No Meat": 0
};

const addMeat = (selectedMeat) => {
  return meatPrices[selectedMeat];
};

module.exports = { addMeat };





