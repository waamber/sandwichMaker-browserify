"use strict";

const breadPrices = {
  "White": 0.55,
  "Wheat": 0.99,
  "Rye": 0.75,
  "Croissant": 1.00,
  "Gluten-Free Flatbread": 1.00,
  "Lettuce Wrap": 1.00
};

const addBread = (selectedBread) => {
  return breadPrices[selectedBread];
};


module.exports = { addBread };


