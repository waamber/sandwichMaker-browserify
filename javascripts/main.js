"use strict";

const bread = require('./breads');
const veggies = require('./veggies');
const cheese = require('./cheese');
const condiments = require('./condiments');
const meats = require('./meats');

const meatCheck = document.getElementById("meatForm");
const breadCheck = document.getElementById("breadForm");
const cheeseCheck = document.getElementById("cheeseForm");
const veggieCheck = document.getElementById("veggiesForm");
const condimentCheck = document.getElementById("condimentsForm");
const selectedIngredients = document.getElementById("selectedIngredients");
const buildBtn = document.getElementById("buildBtn");
const sandwichTotal = document.getElementById("sandwichTotal");
let ingredientsArray = [];
let ingredientsTotal = [];

breadCheck.addEventListener("change", function (event) {
  if (event.target.checked === true) {
    let breadPrice = bread.addBread(event.target.value);
    ingredientsArray.push({ name: event.target.value, price: breadPrice });
  } else {
    ingredientsArray.pop(event.target.value);
  }
});

meatCheck.addEventListener("change", function (event) {
  if (event.target.checked === true) {
    let meatPrice = meats.addMeat(event.target.value);
    ingredientsArray.push({ name: event.target.value, price: meatPrice });
  } else {
    ingredientsArray.pop(event.target.value);
  }
});

cheeseCheck.addEventListener("change", function (event) {
  if (event.target.checked === true) {
    let cheesePrice = cheese.addCheese(event.target.value);
    ingredientsArray.push({ name: event.target.value, price: cheesePrice });
  } else {
    ingredientsArray.pop(event.target.value);
  }
});

veggieCheck.addEventListener("change", function (event) {
  if (event.target.checked === true) {
    let veggiePrice = veggies.addVeggie(event.target.value);
    ingredientsArray.push({ name: event.target.value, price: veggiePrice });
  } else {
    ingredientsArray.pop(event.target.value);
  }
});

condimentCheck.addEventListener("change", function (event) {
  if (event.target.checked === true) {
    let condimentPrice = condiments.addCondiment(event.target.value);
    ingredientsArray.push({ name: event.target.value, price: condimentPrice });
  } else {
    ingredientsArray.pop(event.target.value);
  }
});

buildBtn.addEventListener("click", function () {
  for (let key of Object.keys(ingredientsArray)) {
    let ingredient = ingredientsArray[key];
    selectedIngredients.innerHTML += ingredient.name + " ";
  }
  totalPrice();
});

const totalPrice = () => {
  for (let value of Object.values(ingredientsArray)) {
    let prices = ingredientsArray[value];
    let ingredientPrice = value.price;
    ingredientsTotal.push(ingredientPrice);
    var grandTotal = ingredientsTotal.reduce(function (a, b) { return a + b; });
    sandwichTotal.innerHTML = "$ " + grandTotal.toFixed(2);
  }
};

