let num1 = [],
  num2 = [];

// function operate(num1, num2)

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Get all the button elements to add event listeners
const display = document.getElementById("display");
if (num1 == "") {
  display.textContent = 0;
}
// display.textContent = num1;

const sliderBar = document.getElementById("sliderBar");

const themeSelector = document.getElementById("themeSelector");

themeSelector.addEventListener("click", moveThemeButton);

function moveThemeButton() {
  console.log(sliderBar.className);
  if (sliderBar.className == "sliderStart") {
    sliderBar.classList.remove("sliderStart");
    sliderBar.classList.add("sliderCenter");
    setTheme2();
    // alert(sliderBar.classList);
  } else if (sliderBar.className == "sliderCenter") {
    sliderBar.classList.remove("sliderCenter");
    sliderBar.classList.add("sliderEnd");
    setTheme3();
    // alert(sliderBar.classList);
  } else if (sliderBar.className == "sliderEnd") {
    sliderBar.classList.remove("sliderEnd");
    sliderBar.classList.add("sliderStart");
    setTheme1();
    // alert(sliderBar.classList);
  }
}

function setTheme1() {
  const body = document.getElementsByTagName("body");
  body.style.backgroundColor = "hsl(222,26%,31%)";
  body.style.color = "hsl(0,0%,100%)";

  const sliderBar = document.getElementById("sliderBar");
  sliderBar.style.backgroundColor = "hsl(223,31%,20%)";

  const display = document.getElementById("display");
  display.style.backgroundColor = "hsl(224,36%,15%)";
  display.style.color = "hsl(0,0%,100%)";

  const calculator = document.getElementById("calculator");
  calculator.style.backgroundColor = "hsl(223,31%,20%)";

  const calcKey = document.getElementsByClassName("calcKey");
  calcKey.style.backgroundColor = "hsl(0,0%,100%)";
  calcKey.style.color = "hsl(221,14%,31%)";
  calcKey.style.boxShadow = "0rem 0.125rem hsl(28, 16%, 65%)";

  const reset = document.getElementById("reset");
  reset.style.backgroundColor = "hsl(225,21%,49%)";
  reset.style.color = "hsl(0,0%,100%)";
  reset.style.boxShadow = "0rem 0.125rem hsl(224, 28%, 35%)";

  const del = document.getElementById("del");
  del.style.backgroundColor = "hsl(225,21%,49%)";
  del.style.color = "hsl(0,0%,100%)";
  del.style.boxShadow = "0rem 0.125rem hsl(224, 28%, 35%)";

  const enter = document.getElementById("enter");
  enter.style.backgroundColor = "hsl(6,63%,50%)";
  enter.style.color = "hsl(0,0%,100%)";
  enter.style.boxShadow = "0rem 0.125rem hsl(6, 70%, 34%)";
}

function setTheme2() {
  // resume here
  const body = document.getElementsByTagName("body");
  body.style.backgroundColor = "hsl(0,0%,90%)";
  body.style.color = "hsl(0,0%,100%)";

  const sliderBar = document.getElementById("sliderBar");
  sliderBar.style.backgroundColor = "hsl(0,5%,81%)";

  const display = document.getElementById("display");
  display.style.backgroundColor = "hsl(224,36%,15%)";
  display.style.color = "hsl(0,0%,93%)";

  const calculator = document.getElementById("calculator");
  calculator.style.backgroundColor = "hsl(0,5%,81%)";

  const calcKey = document.getElementsByClassName("calcKey");
  calcKey.style.backgroundColor = "hsl(185,42%,37%)";
  calcKey.style.color = "hsl(221,14%,31%)";
  calcKey.style.boxShadow = "0rem 0.125rem hsl(28, 16%, 65%)";

  const reset = document.getElementById("reset");
  reset.style.backgroundColor = "hsl(225,21%,49%)";
  reset.style.color = "hsl(0,0%,100%)";
  reset.style.boxShadow = "0rem 0.125rem hsl(224, 28%, 35%)";

  const del = document.getElementById("del");
  del.style.backgroundColor = "hsl(225,21%,49%)";
  del.style.color = "hsl(0,0%,100%)";
  del.style.boxShadow = "0rem 0.125rem hsl(224, 28%, 35%)";

  const enter = document.getElementById("enter");
  enter.style.backgroundColor = "hsl(6,63%,50%)";
  enter.style.color = "hsl(0,0%,100%)";
  enter.style.boxShadow = "0rem 0.125rem hsl(6, 70%, 34%)";
}

function setTheme3() {
  // finish theme 2
  const body = document.getElementsByTagName("body");
  body.style.backgroundColor = "hsl(0,0%,90%)";
  body.style.color = "hsl(0,0%,100%)";

  const sliderBar = document.getElementById("sliderBar");
  sliderBar.style.backgroundColor = "hsl(0,5%,81%)";

  const display = document.getElementById("display");
  display.style.backgroundColor = "hsl(224,36%,15%)";
  display.style.color = "hsl(0,0%,93%)";

  const calculator = document.getElementById("calculator");
  calculator.style.backgroundColor = "hsl(0,5%,81%)";

  const calcKey = document.getElementsByClassName("calcKey");
  calcKey.style.backgroundColor = "hsl(185,42%,37%)";
  calcKey.style.color = "hsl(221,14%,31%)";
  calcKey.style.boxShadow = "0rem 0.125rem hsl(28, 16%, 65%)";

  const reset = document.getElementById("reset");
  reset.style.backgroundColor = "hsl(225,21%,49%)";
  reset.style.color = "hsl(0,0%,100%)";
  reset.style.boxShadow = "0rem 0.125rem hsl(224, 28%, 35%)";

  const del = document.getElementById("del");
  del.style.backgroundColor = "hsl(225,21%,49%)";
  del.style.color = "hsl(0,0%,100%)";
  del.style.boxShadow = "0rem 0.125rem hsl(224, 28%, 35%)";

  const enter = document.getElementById("enter");
  enter.style.backgroundColor = "hsl(6,63%,50%)";
  enter.style.color = "hsl(0,0%,100%)";
  enter.style.boxShadow = "0rem 0.125rem hsl(6, 70%, 34%)";
}

const del = document.getElementById("del");

// del.addEventListener("click", () => {
//   display.innerHTML =
// });

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  num1 = [];
  if (num1 == "") {
    display.textContent = 0;
  }
});

const enter = document.getElementById("enter");

const plus = document.getElementById("plus");

const minus = document.getElementById("minus");

const star = document.getElementById("star");

const slash = document.getElementById("slash");

const nine = document.getElementById("nine");
nine.addEventListener("click", () => {
  num1.push(9);
  display.textContent = num1.join("");
});

const eight = document.getElementById("eight");
eight.addEventListener("click", () => {
  num1.push(8);
  display.textContent = num1.join("");
});

const seven = document.getElementById("seven");
seven.addEventListener("click", () => {
  num1.push(7);
  display.textContent = num1.join("");
});

const six = document.getElementById("six");
six.addEventListener("click", () => {
  num1.push(6);
  display.textContent = num1.join("");
});

const five = document.getElementById("five");
five.addEventListener("click", () => {
  num1.push(5);
  display.textContent = num1.join("");
});

const four = document.getElementById("four");
four.addEventListener("click", () => {
  num1.push(4);
  display.textContent = num1.join("");
});

const three = document.getElementById("three");
three.addEventListener("click", () => {
  num1.push(3);
  display.textContent = num1.join("");
});

const two = document.getElementById("two");
two.addEventListener("click", () => {
  num1.push(2);
  display.textContent = num1.join("");
});

const one = document.getElementById("one");
one.addEventListener("click", () => {
  num1.push(1);
  display.textContent = num1.join("");
});

const zero = document.getElementById("zero");
zero.addEventListener("click", () => {
  num1.push(0);
  display.textContent = num1.join("");
});

const period = document.getElementById("period");
period.addEventListener("click", () => {
  if (!num1.includes(".")) {
    num1.push(".");
  }
  display.textContent = num1.join("");
});
