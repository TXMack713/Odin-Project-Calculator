let num1 = '',
  num2 = '',
  total = 0,
  operator = '',
  displayHolder = [];

// Get all the button elements to add event listeners
const display = document.getElementById('display');
if (displayHolder.length === 0) {
  display.textContent = 0;
} else {
  display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
}

const sliderBar = document.getElementById('sliderBar');

const themeSelector = document.getElementById('themeSelector');

themeSelector.addEventListener('click', moveThemeButton);

function moveThemeButton() {
  console.log(sliderBar.className);
  if (sliderBar.className === 'sliderStart') {
    sliderBar.classList.remove('sliderStart');
    sliderBar.classList.add('sliderCenter');
    setTheme2();
    // alert(sliderBar.classList);
  } else if (sliderBar.className === 'sliderCenter') {
    sliderBar.classList.remove('sliderCenter');
    sliderBar.classList.add('sliderEnd');
    setTheme3();
    // alert(sliderBar.classList);
  } else if (sliderBar.className === 'sliderEnd') {
    sliderBar.classList.remove('sliderEnd');
    sliderBar.classList.add('sliderStart');
    setTheme1();
    // alert(sliderBar.classList);
  }
}

function setTheme1() {
  const root = document.querySelector(':root');
  root.classList.remove('theme3');
  root.classList.add('theme1');
}

function setTheme2() {
  const root = document.querySelector(':root');
  root.classList.remove('theme1');
  root.classList.add('theme2');
}

function setTheme3() {
  const root = document.querySelector(':root');
  root.classList.remove('theme2');
  root.classList.add('theme3');
}

const del = document.getElementById('del');

del.addEventListener('click', () => {
  displayHolder.pop();
  display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
  if (displayHolder.length === 0) {
    display.textContent = 0;
  }
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
  num1 = '';
  num2 = '';
  total = 0;
  operator = '';
  displayHolder = [];
  if (displayHolder.length === 0) {
    display.textContent = 0;
  }
});

function operate(operator, num1, num2) {
  let number1 = parseFloat(num1);
  let number2 = parseFloat(num2);

  switch (operator) {
    case '+':
      total = add(number1, number2);
      display.textContent = total.toLocaleString();
      break;
    case '-':
      total = subtract(number1, number2);
      display.textContent = total.toLocaleString();
      break;
    case '*':
      total = multiply(number1, number2);
      display.textContent = total.toLocaleString();
      break;
    case '/':
      total = divide(number1, number2);
      display.textContent = total.toLocaleString();
      break;
  }
}

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}

let previousOperand = '';
function storeValuesAndOperate(operand) {
  if (displayHolder.length === 0 && num1 === '') {
    num1 = '';
  } else if (displayHolder.length !== 0 && num1 === '') {
    num1 = parseFloat(displayHolder.join(''));
    // operator = operand;
  } else if (displayHolder.length !== 0 && num1 !== '' && num2 === '') {
    num2 = parseFloat(displayHolder.join(''));
    operate(operand, num1, num2);
  } else if (displayHolder.length !== 0 && num1 !== '' && num2 !== '') {
    if (previousOperand === '' || previousOperand !== operand) {
      num2 = parseFloat(displayHolder.join(''));
      operate(previousOperand, num1, num2);
    } else {
      num2 = parseFloat(displayHolder.join(''));
      operate(operand, total, num2);
    }
  }
  previousOperand = operand;
  displayHolder = [];
}

const plus = document.getElementById('plus');
plus.addEventListener('click', () => {
  operator = '+';
  storeValuesAndOperate('+');
});

const minus = document.getElementById('minus');
minus.addEventListener('click', () => {
  operator = '-';
  storeValuesAndOperate('-');
});

const star = document.getElementById('star');
star.addEventListener('click', () => {
  operator = '*';
  storeValuesAndOperate('*');
});

const slash = document.getElementById('slash');
slash.addEventListener('click', () => {
  operator = '/';
  storeValuesAndOperate('/');
});

const enter = document.getElementById('enter');
enter.addEventListener('click', () => {
  if (num1 !== '' && num2 !== '' && operator !== '') {
    num1 = total;
    num2 = parseFloat(displayHolder.join(''));
    operate(operator, num1, num2);
  } else if (num1 !== '' && num2 === '' && operator !== '') {
    num2 = parseFloat(displayHolder.join(''));
    operate(operator, num1, num2);
  }
  displayHolder = [];
});

const nine = document.getElementById('nine');
nine.addEventListener('click', () => {
  displayHolder.push(9);
  display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
});

const eight = document.getElementById('eight');
eight.addEventListener('click', () => {
  displayHolder.push(8);
  display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
});

const seven = document.getElementById('seven');
seven.addEventListener('click', () => {
  displayHolder.push(7);
  display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
});

const six = document.getElementById('six');
six.addEventListener('click', () => {
  displayHolder.push(6);
  display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
});

const five = document.getElementById('five');
five.addEventListener('click', () => {
  displayHolder.push(5);
  display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
});

const four = document.getElementById('four');
four.addEventListener('click', () => {
  displayHolder.push(4);
  display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
});

const three = document.getElementById('three');
three.addEventListener('click', () => {
  displayHolder.push(3);
  display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
});

const two = document.getElementById('two');
two.addEventListener('click', () => {
  displayHolder.push(2);
  display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
});

const one = document.getElementById('one');
one.addEventListener('click', () => {
  displayHolder.push(1);
  display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
});

const zero = document.getElementById('zero');
zero.addEventListener('click', () => {
  if (displayHolder.length === 0) {
    display.textContent = 0;
  } else if (displayHolder.length > 0) {
    let zeroCounter = 0;
    for (let i = 0; i < displayHolder.length; i++) {
      if (displayHolder[i] === 0) {
        ++zeroCounter;
      }
    }
    if (zeroCounter !== displayHolder.length) {
      displayHolder.push(0);
      display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
    } else {
      display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
    }
  }
});

const period = document.getElementById('period');
period.addEventListener('click', () => {
  if (!displayHolder.includes('.')) {
    displayHolder.push('.');
  }
  if (displayHolder.length === 1) {
    display.textContent = displayHolder.join('');
  } else {
    display.textContent = parseFloat(displayHolder.join('')).toLocaleString();
  }
});
