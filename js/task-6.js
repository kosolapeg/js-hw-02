"use strict";

const numberInputRef = document.querySelector(".number-input");
const buttonAddRef = document.querySelector(".add-button");
const buttonSumRef = document.querySelector(".calculate-button");

let input;
const numbers = [];
let total = 0;

buttonAddRef.addEventListener("click", () => {
  numbers.push(Number(numberInputRef.value));
  console.log(numbers);
});

buttonSumRef.addEventListener("click", () => {
  for (let number of numbers) total += number;

  console.log("Total sum is:", total);
});
