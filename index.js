/** @format */

let homeCount = 0;
let awayCount = 0;
let home = document.getElementById("count-home");
let away = document.getElementById("count-away");

function PlusOne() {
  homeCount += 1;
  home.textContent = homeCount;
}

function plusTwo() {
  homeCount += 2;
  home.textContent = homeCount;
}

function plusThree() {
  homeCount += 3;
  home.textContent = homeCount;
}

function PlusOneAway() {
  awayCount += 1;
  away.textContent = awayCount;
}

function plusTwoAway() {
  awayCount += 2;
  away.textContent = awayCount;
}

function plusThreeAway() {
  awayCount += 3000;
  away.textContent = awayCount;
}

function newGame() {
  awayCount = 0;
  homeCount = 0;
  away.textContent = awayCount;
  home.textContent = homeCount;
}
