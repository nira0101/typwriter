"use strict";
document.addEventListener("DOMContentLoaded", init);

//Opret variabler
let mainText;
let outPutText;
let inputText = document.querySelector(".typewritten");
let i = 1;

let inputText1 = document.querySelector(".typewritten1");
let mainText1;
let ourPutText1;
let j = 1;

function init() {
  console.log("init");

  //get the text from somewhere
  mainText = inputText.textContent;

  //clear the HTML area
  inputText.innerHTML = "";

  mainText1 = inputText1.textContent;

  inputText1.innerHTML = "";

  // start loop
  loop();
}

function loop() {
  console.log("loop");
  //show the N'th letter:
  // - set textContent to substring of 0 to N
  //wait before calling loop() again
  outPutText = mainText.substring(0, i);
  inputText.textContent = outPutText;
  if (i < mainText.length) {
    i++;
    setTimeout(loop, 500);
  }

  ourPutText1 = mainText1.substring(0, j);
  inputText1.textContent = ourPutText1;
  if (j < mainText1.length) {
    j++;
    setTimeout(loop, 1500);
  }
}

function loop1() {}
