let num1 = '',
  num2 = '',
  total = '',
  operator = '',
  displayHolder = [];

// Get all the button elements to add event listeners
const display = document.getElementById('display');
if (displayHolder.length === 0) {
  display.textContent = 0;
} else {
  display.textContent = new Intl.numberFormat.format(
    parseFloat(displayHolder.join(''))
  );
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

const numberFormat = new Intl.NumberFormat('en-US', {
  notation: 'standard',
  maximumFractionDigits: 10,
  maximumSignificantDigits: 12,
});

const numberFormat2 = new Intl.NumberFormat('en-US', {
  notation: 'scientific',
  maximumFractionDigits: 10,
  maximumSignificantDigits: 12,
});

const del = document.getElementById('del');

del.addEventListener('click', () => {
  displayHolder.pop();
  display.textContent = numberFormat.format(parseFloat(displayHolder.join('')));
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
      if (
        (total.toString().includes('0.000') && total < 1) ||
        total.toString().length >= 15
      ) {
        display.textContent = numberFormat2.format(total);
      } else {
        display.textContent = numberFormat.format(total);
      }
      break;
    case '-':
      total = subtract(number1, number2);
      if (
        (total.toString().includes('0.000') && total < 1) ||
        total.toString().length >= 15
      ) {
        display.textContent = numberFormat2.format(total);
      } else {
        display.textContent = numberFormat.format(total);
      }
      break;
    case '*':
      total = multiply(number1, number2);
      if (
        (total.toString().includes('0.000') && total < 1) ||
        total.toString().length >= 15
      ) {
        display.textContent = numberFormat2.format(total);
      } else {
        display.textContent = numberFormat.format(total);
      }
      break;
    case '/':
      total = divide(number1, number2);
      if (
        (total.toString().includes('0.000') && total < 1) ||
        total.toString().length >= 15
      ) {
        display.textContent = numberFormat2.format(total);
      } else {
        display.textContent = numberFormat.format(total);
      }
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
    previousOperand = operand;
  } else if (displayHolder.length !== 0 && num1 !== '' && num2 === '') {
    num2 = parseFloat(displayHolder.join(''));
    operate(previousOperand, num1, num2);
    previousOperand = operand;
  } else if (displayHolder.length !== 0 && num1 !== '' && num2 !== '') {
    if (total !== '') {
      num1 = total;
    }
    num2 = parseFloat(displayHolder.join(''));
    operate(previousOperand, num1, num2);
    previousOperand = operand;
  } else if (displayHolder.length === 0 && total !== '') {
    num1 = total;
    previousOperand = operand;
  }

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
    previousOperand = operator;
  } else if (num1 !== '' && num2 === '' && operator !== '') {
    num2 = parseFloat(displayHolder.join(''));
    operate(operator, num1, num2);
    previousOperand = operator;
  } else if (
    num1 !== '' &&
    num2 !== '' &&
    operator === '' &&
    previousOperand !== ''
  ) {
    operate(previousOperand, total, num2);
  }
  operator = '';
  displayHolder = [];
});

const nine = document.getElementById('nine');
nine.addEventListener('click', () => {
  if (operator === '' && num1 !== '') {
    num1 = '';
    num2 = '';
  }
  displayHolder.push(9);
  if (displayHolder.length > 12) {
    display.textContent = numberFormat2.format(
      parseFloat(displayHolder.join(''))
    );
  } else {
    display.textContent = numberFormat.format(
      parseFloat(displayHolder.join(''))
    );
  }
});

const eight = document.getElementById('eight');
eight.addEventListener('click', () => {
  if (operator === '' && num1 !== '') {
    num1 = '';
    num2 = '';
  }
  displayHolder.push(8);
  if (displayHolder.length > 12) {
    display.textContent = numberFormat2.format(
      parseFloat(displayHolder.join(''))
    );
  } else {
    display.textContent = numberFormat.format(
      parseFloat(displayHolder.join(''))
    );
  }
});

const seven = document.getElementById('seven');
seven.addEventListener('click', () => {
  if (operator === '' && num1 !== '') {
    num1 = '';
    num2 = '';
  }
  displayHolder.push(7);
  if (displayHolder.length > 12) {
    display.textContent = numberFormat2.format(
      parseFloat(displayHolder.join(''))
    );
  } else {
    display.textContent = numberFormat.format(
      parseFloat(displayHolder.join(''))
    );
  }
});

const six = document.getElementById('six');
six.addEventListener('click', () => {
  if (operator === '' && num1 !== '') {
    num1 = '';
    num2 = '';
  }
  displayHolder.push(6);
  if (displayHolder.length > 12) {
    display.textContent = numberFormat2.format(
      parseFloat(displayHolder.join(''))
    );
  } else {
    display.textContent = numberFormat.format(
      parseFloat(displayHolder.join(''))
    );
  }
});

const five = document.getElementById('five');
five.addEventListener('click', () => {
  if (operator === '' && num1 !== '') {
    num1 = '';
    num2 = '';
  }
  displayHolder.push(5);
  if (displayHolder.length > 12) {
    display.textContent = numberFormat2.format(
      parseFloat(displayHolder.join(''))
    );
  } else {
    display.textContent = numberFormat.format(
      parseFloat(displayHolder.join(''))
    );
  }
});

const four = document.getElementById('four');
four.addEventListener('click', () => {
  if (operator === '' && num1 !== '') {
    num1 = '';
    num2 = '';
  }
  displayHolder.push(4);
  if (displayHolder.length > 12) {
    display.textContent = numberFormat2.format(
      parseFloat(displayHolder.join(''))
    );
  } else {
    display.textContent = numberFormat.format(
      parseFloat(displayHolder.join(''))
    );
  }
});

const three = document.getElementById('three');
three.addEventListener('click', () => {
  if (operator === '' && num1 !== '') {
    num1 = '';
    num2 = '';
  }
  displayHolder.push(3);
  if (displayHolder.length > 12) {
    display.textContent = numberFormat2.format(
      parseFloat(displayHolder.join(''))
    );
  } else {
    display.textContent = numberFormat.format(
      parseFloat(displayHolder.join(''))
    );
  }
});

const two = document.getElementById('two');
two.addEventListener('click', () => {
  if (operator === '' && num1 !== '') {
    num1 = '';
    num2 = '';
  }
  displayHolder.push(2);
  if (displayHolder.length > 12) {
    display.textContent = numberFormat2.format(
      parseFloat(displayHolder.join(''))
    );
  } else {
    display.textContent = numberFormat.format(
      parseFloat(displayHolder.join(''))
    );
  }
});

const one = document.getElementById('one');
one.addEventListener('click', () => {
  if (operator === '' && num1 !== '') {
    num1 = '';
    num2 = '';
  }
  displayHolder.push(1);
  if (displayHolder.length > 12) {
    display.textContent = numberFormat2.format(
      parseFloat(displayHolder.join(''))
    );
  } else {
    display.textContent = numberFormat.format(
      parseFloat(displayHolder.join(''))
    );
  }
});

const zero = document.getElementById('zero');
zero.addEventListener('click', () => {
  if (operator === '' && num1 !== '') {
    num1 = '';
    num2 = '';
  }
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
      if (displayHolder.length > 12) {
        display.textContent = numberFormat2.format(
          parseFloat(displayHolder.join(''))
        );
      } else {
        display.textContent = numberFormat.format(
          parseFloat(displayHolder.join(''))
        );
      }
    } else {
      if (displayHolder.length > 12) {
        display.textContent = numberFormat2.format(
          parseFloat(displayHolder.join(''))
        );
      } else {
        display.textContent = numberFormat.format(
          parseFloat(displayHolder.join(''))
        );
      }
    }
  }
});

const period = document.getElementById('period');
period.addEventListener('click', () => {
  if (operator === '' && num1 !== '') {
    num1 = '';
    num2 = '';
  }
  if (!displayHolder.includes('.')) {
    displayHolder.push('.');
  }
  if (displayHolder.length === 1) {
    display.textContent = displayHolder.join('');
  } else {
    display.textContent = numberFormat.format(
      parseFloat(displayHolder.join(''))
    );
  }
});

// For later keyboard implementation
/*
window.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 0:
      if (operator === '' && num1 !== '') {
        num1 = '';
        num2 = '';
      }
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
          if (displayHolder.length > 12) {
            display.textContent = numberFormat2.format(
              parseFloat(displayHolder.join(''))
            );
          } else {
            display.textContent = numberFormat.format(
              parseFloat(displayHolder.join(''))
            );
          }
        } else {
          if (displayHolder.length > 12) {
            display.textContent = numberFormat2.format(
              parseFloat(displayHolder.join(''))
            );
          } else {
            display.textContent = numberFormat.format(
              parseFloat(displayHolder.join(''))
            );
          }
        }
      }
      break;

    case event.key >= 1 && event.key <= 9:
      if (operator === '' && num1 !== '') {
        num1 = '';
        num2 = '';
      }
      displayHolder.push(event.key);
      if (displayHolder.length > 12) {
        display.textContent = numberFormat2.format(
          parseFloat(displayHolder.join(''))
        );
      } else {
        display.textContent = numberFormat.format(
          parseFloat(displayHolder.join(''))
        );
      }
      break;
  }
});
*/
