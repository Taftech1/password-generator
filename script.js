"use strict";
//// SELECTING THE ELEMENTS
let rangevalue = document.querySelector(".range-value");
let rangeSlider = document.querySelector("#passwordLength");
let passwordOutput = document.querySelector(".password");
let checkBox1 = document.querySelector(".check-1");
let checkBox2 = document.querySelector(".check-2");
let checkBox3 = document.querySelector(".check-3");
let checkBox4 = document.querySelector(".check-4");
let btn = document.querySelector(".btn-generator");
let checkBoxes = document.querySelectorAll(".checkedtrue");
let copyicon = document.querySelector(".fa-copy");
let themes = document.querySelectorAll(".theme-item");
let strenghBarsTxt = document.querySelector(".Strengh-bars");
let strenghBars1 = document.querySelector(".s-bar-1");
let strenghBars2 = document.querySelector(".s-bar-2");
let strenghBars3 = document.querySelector(".s-bar-3");
let strenghBars4 = document.querySelector(".s-bar-4");
let clipboardPass = document.querySelector(".clip-pass");
let clipboardContainer = document.querySelector(".clippad-notice");

///THEMES ELEMENT
let theme1 = document.querySelector(".tm-1");
let theme2 = document.querySelector(".tm-2");
let theme3 = document.querySelector(".tm-3");
let theme4 = document.querySelector(".tm-4");
let mainColor = document.querySelector(".main");
let genColor = document.querySelector(".password-generated");
let bodyColor = document.querySelector("body");
// PASS VARIABE
let passwordLenght = rangeSlider.value;
let number = "0123456789";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwsyz";
let symbols = "!@~#$%^[{]}+*(;:_?/.+-'`)";
let password = "";
// let character = upperCase + number + lowerCase + symbols;
let checkBoxesCounter;

passwordOutput.textContent = "Password Output....?";
rangevalue.textContent = rangeSlider.value;
rangeSlider.oninput = function () {
  rangevalue.textContent = rangeSlider.value;
};

//  CheckBox click counter  using FOR EACH AND EVENT
// checkBoxes.forEach((click) => {

// checkBoxes.forEach(function (click) {
//   checkBoxesCounter = 0;
//   const counter = function () {
//     if (click.checked === true && click.checked.length >= 2) {
//       checkBoxesCounter++;
//     } else {
//       checkBoxesCounter--;
//     }
//     return checkBoxesCounter;
//   };
//   click.addEventListener("click", function () {
//     console.log(counter());
//   });
// });
//  checkBoxesCounter = counter();

//  console.log(checkBoxesCounter);

// for (const click of checkBoxes) {
//   checkBoxesCounter = 0;
//   click.addEventListener("click", function () {
//     if (click.checked === true) {
//       checkBoxesCounter++;
//       // console.log(checkBoxesCounter);
//     } else {
//       checkBoxesCounter--;
//       // console.log(checkBoxesCounter);
//     }
//     console.log(checkBoxesCounter);
//     // return checkBoxesCounter;
//   });
// }

//console.log(checkBoxesCounter);

function generatePassword() {
  password = "";
  passwordLenght = rangeSlider.value;
  let upperCharater = checkBox1.checked === true ? upperCase : "";
  let lowerCharater = checkBox2.checked === true ? lowerCase : "";
  let numberCharater = checkBox3.checked === true ? number : "";
  let sysbolsCharater = checkBox4.checked === true ? symbols : "";
  let allCharacter =
    upperCharater + lowerCharater + numberCharater + sysbolsCharater;
  console.log(allCharacter)
  for (let i = 0; i <= passwordLenght; i++) {
    let randomNumber = Math.floor(Math.random() * allCharacter.length - 1);

    password += allCharacter.substring(randomNumber, randomNumber + 1);
    passwordOutput.textContent = password;
     console.log(allCharacter, password);
  }
}

// Implementing the Strength Information
function weakStrength() {
  // strenghBarsTxt.textContent = "WEAK";
  strenghBars1.style.backgroundColor = "red";
  strenghBars1.style.border = "1px solid red";
  strenghBars2.style.backgroundColor = "transparent";
  strenghBars2.style.border = "1px solid rgb(170, 170, 170)";
  strenghBars3.style.backgroundColor = "transparent";
  strenghBars3.style.border = "1px solid rgb(170, 170, 170)";
  strenghBars4.style.backgroundColor = "transparent";
  strenghBars4.style.border = "1px solid rgb(170, 170, 170)";
}
function medimumStrength() {
  // strenghBarsTxt.textContent = "MEDIUM";
  strenghBars1.style.backgroundColor = "gold";
  strenghBars1.style.border = "1px solid goldenrod";
  strenghBars2.style.backgroundColor = "gold";
  strenghBars2.style.border = "1px solid goldenrod";
  strenghBars3.style.backgroundColor = "transparent";
  strenghBars3.style.border = "1px solid rgb(170, 170, 170)";
  strenghBars4.style.backgroundColor = "transparent";
  strenghBars4.style.border = "1px solid rgb(170, 170, 170)";
}
function strongStrength() {
  //strenghBarsTxt.textContent = "STRONG";
  strenghBars1.style.backgroundColor = "green";
  strenghBars1.style.border = "1px solid rgb(5, 77, 5)";
  strenghBars2.style.backgroundColor = "green";
  strenghBars2.style.border = "1px solid rgb(5, 77, 5)";
  strenghBars3.style.backgroundColor = "green";
  strenghBars3.style.border = "1px solid rgb(5, 77, 5)";
  strenghBars4.style.backgroundColor = "transparent";
  strenghBars4.style.border = "1px solid rgb(170, 170, 170)";
}

btn.addEventListener("click", function () {
  generatePassword();
  passwordOutput.style.color = "inherit";
  if (
    rangeSlider.value <= 10 &&
    password !== "" &&
    passwordOutput.innerHTML === password
  ) {
    strenghBarsTxt.textContent = "WEAK";
    weakStrength();
  } else if (
    rangeSlider.value >= 10 &&
    rangeSlider.value <= 16 &&
    password !== "" &&
    passwordOutput.innerHTML === password
  ) {
    medimumStrength();
    strenghBarsTxt.textContent = "MEDIUM";
  } else if (
    rangeSlider.value >= 16 &&
    rangeSlider.value <= 23 &&
    password !== "" &&
    passwordOutput.innerHTML === password
  ) {
    strongStrength();
    strenghBarsTxt.textContent = "STRONG";
  } else if (
    rangeSlider.value >= 23 &&
    password !== "" &&
    passwordOutput.innerHTML === password
  ) {
    strongStrength();
    strenghBars4.style.backgroundColor = "green";
    strenghBars4.style.border = "1px solid rgb(5, 77, 5)";
    strenghBarsTxt.textContent = "VERY STRONG";
  } else if (password === "") {
    passwordOutput.textContent = "Password Output....?";
  }
});

copyicon.addEventListener("click", function () {
  if (passwordOutput.innerHTML === password && password !== "") {
    navigator.clipboard.writeText(passwordOutput.innerHTML);
    clipboardPass.textContent = password;
    clipboardContainer.classList.remove("hide");
    clipboardContainer.classList.add("active");
    setTimeout(function () {
      clipboardContainer.classList.remove("active");
      clipboardContainer.classList.add("hide");
    }, 3500);
  }
  else {
    copyicon.removeEventListener();
  }
});

//THEMES CHANGER
// themes.forEach((themeItem) => {
//   console.log(themeItem);

// });

///MANUAL THEME
// main , password-generated, boby
theme1.addEventListener("click", function () {
  bodyColor.style.backgroundColor = "rgb(1, 9, 24)";
  mainColor.style.backgroundColor = "rgb(18, 18, 35)";
  genColor.style.backgroundColor = "rgb(18, 18, 35)";
  theme1.style.animation = "themeSpiner 2s ease-in-out";
  setTimeout(function () {
    theme1.style.animation = "none";
  }, 500);
});
theme2.addEventListener("click", function () {
  bodyColor.style.backgroundColor = "rgb(0, 33, 89)";
  mainColor.style.backgroundColor = "rgb(2, 28, 144)";
  genColor.style.backgroundColor = "rgb(2, 28, 144)";
  theme2.style.animation = "themeSpiner 2s ease-in-out";
  setTimeout(function () {
    theme2.style.animation = "none";
  }, 500);
});

theme3.addEventListener("click", function () {
  bodyColor.style.backgroundColor = "rgb(65, 20, 46)";
  mainColor.style.backgroundColor = "rgb(185, 65, 135)";
  genColor.style.backgroundColor = "rgb(185, 65, 135)";
  theme3.style.animation = "themeSpiner 2s ease-in-out";
  setTimeout(function () {
    theme3.style.animation = "none";
  }, 500);
});
theme4.addEventListener("click", function () {
  bodyColor.style.backgroundColor = "rgb(10, 25, 2)";
  mainColor.style.backgroundColor = "rgb(81, 141, 46)";
  genColor.style.backgroundColor = "rgb(81, 141, 46)";
  theme4.style.animation = "themeSpiner 2s ease-in-out";
  setTimeout(function () {
    theme4.style.animation = "none";
  }, 500);
});
