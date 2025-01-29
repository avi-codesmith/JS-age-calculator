"use strict";

const input = document.querySelector(".input");
const button = document.querySelector(".btn");
const para = document.querySelector(".para");
const reset = document.querySelector(".icon");

button.addEventListener("click", () => {
  const selectedDate = input.value;

  if (!selectedDate) {
    para.innerHTML = "❗ Please select a valid date.";
    para.style.color = "red";
    return;
  }

  const year = parseInt(selectedDate.split("-")[0]);
  const currentYear = new Date().getFullYear();
  const finalAge = currentYear - year;

  if (year < 1900 || year > currentYear) {
    para.innerHTML = `❗Please select DOB between year 1900 and ${currentYear}.`;
    para.style.color = "red";
  } else if (year == currentYear) {
    para.innerHTML = `🟠 You are born in this year ${currentYear}!`;
    para.style.color = "#fd7e14";
  } else if (year > 1900 || year < currentYear) {
    para.innerHTML = `✅ Your age is <b>${finalAge}</b> years old.`;
    para.style.color = "#333";
  }
});

reset.addEventListener("click", () => {
  para.style.color = "#333";
  para.innerHTML = `Your age is ___ year old.`;
  input.value = "";
});
