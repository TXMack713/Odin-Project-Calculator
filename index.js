let num1 = "",
  num2 = "",
displayHolder = [];



// Get all the button elements to add event listeners
const display = document.getElementById("display");
if (displayHolder.length == 0) {
  display.textContent = 0;
} else {
  display.textContent = displayHolder.join("");
}

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
  const root = document.querySelector(":root");
  root.classList.remove("theme3");
  root.classList.add("theme1");
}

function setTheme2() {
  const root = document.querySelector(":root");
  root.classList.remove("theme1");
  root.classList.add("theme2");
}

function setTheme3() {
  const root = document.querySelector(":root");
  root.classList.remove("theme2");
  root.classList.add("theme3");
}

const del = document.getElementById("del");

del.addEventListener("click", () => {
  displayHolder.pop();
  display.textContent = displayHolder.join("");
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  displayHolder = [];
  if (displayHolder.length == 0) {
    display.textContent = 0;
  }
});

function operate(operator,num1, num2) {
  let number1 = 0, number2 = 0;
  if (num1.contains(".")) {
    number1 = parseFloat(num1);
  } else {
    number1 = parseInt(num1);
  }

  if (num2.contains(".")) {
    number2 = parseFloat(num2);
  } else {
    number2 = parseInt(num2);
  }

  return operator(number1,number2);
}

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

const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
  if(displayHolder.length == 0) {
    num1 = 0;
  } else {
    num1 = displayHolder.join("");
    displayHolder = [];
  }
  operate(add(), num1, num2);
});

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
  if(displayHolder.length == 0) {
    num1 = 0;
  } else {
    num1 = displayHolder.join("");
    displayHolder = [];
  }
});

const star = document.getElementById("star");
star.addEventListener("click", () => {
  if(displayHolder.length == 0) {
    num1 = 0;
  } else {
    num1 = displayHolder.join("");
    displayHolder = [];
  }
});

const slash = document.getElementById("slash");
slash.addEventListener("click", () => {
  if(displayHolder.length == 0) {
    num1 = 0;
  } else {
    num1 = displayHolder.join("");
    displayHolder = [];
  }
});


const enter = document.getElementById("enter");
enter.addEventListener("click", () => {
  num2 = displayHolder.join("");
});

const nine = document.getElementById("nine");
nine.addEventListener("click", () => {
  displayHolder.push(9);
  display.textContent = displayHolder.join("");
});

const eight = document.getElementById("eight");
eight.addEventListener("click", () => {
  displayHolder.push(8);
  display.textContent = displayHolder.join("");
});

const seven = document.getElementById("seven");
seven.addEventListener("click", () => {
  displayHolder.push(7);
  display.textContent = displayHolder.join("");
});

const six = document.getElementById("six");
six.addEventListener("click", () => {
  displayHolder.push(6);
  display.textContent = displayHolder.join("");
});

const five = document.getElementById("five");
five.addEventListener("click", () => {
  displayHolder.push(5);
  display.textContent = displayHolder.join("");
});

const four = document.getElementById("four");
four.addEventListener("click", () => {
  displayHolder.push(4);
  display.textContent = displayHolder.join("");
});

const three = document.getElementById("three");
three.addEventListener("click", () => {
  displayHolder.push(3);
  display.textContent = displayHolder.join("");
});

const two = document.getElementById("two");
two.addEventListener("click", () => {
  displayHolder.push(2);
  display.textContent = displayHolder.join("");
});

const one = document.getElementById("one");
one.addEventListener("click", () => {
  displayHolder.push(1);
  display.textContent = displayHolder.join("");
});

const zero = document.getElementById("zero");
zero.addEventListener("click", () => {

    if(displayHolder.length == 0) {
      display.textContent = 0;
    } else if(displayHolder.length > 0) {
      let zeroCounter = 0;
      for(let i = 0; i < displayHolder.length; i++) {
        if(displayHolder[i] == 0) {
          ++zeroCounter;
        }
      }
      if (zeroCounter != displayHolder.length) {
        displayHolder.push(0);
        display.textContent = displayHolder.join("");
      } else {
        display.textContent = displayHolder.join("");
      }
  }

});

const period = document.getElementById("period");
period.addEventListener("click", () => {
  if (!displayHolder.includes(".")) {
    displayHolder.push(".");
  }
  display.textContent = displayHolder.join("");
});
