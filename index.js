const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (entry) {
  let total = 0;
  if (entry.length == 0 || entry == "") {
    return 0;
  } else if (entry.length == 1) {
    total = entry * 1;
    return total;
  } else if (entry.length >= 2) {
    total = 0;
    // let array = Array.from(entry);
    for (let item of entry) {
      console.log("summing");
      console.log(item);
      total += item;
      console.log("summing total");
      console.log(total);
    }
    return total;
  }
};

const multiply = function (nums) {
  let total = 1;
  // let array = Array.from(nums);
  for (let num of nums) {
    console.log("multiplying");
    console.log(num);
    total *= num;
    console.log("multiplication total");
    console.log(total);
  }
  return total;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let total = 1;
  if (num < 0) {
    return "ERROR";
  } else if (num == 0) {
    return 1;
  } else if (num > 0) {
    for (let i = 1; i <= num; i++) {
      total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
