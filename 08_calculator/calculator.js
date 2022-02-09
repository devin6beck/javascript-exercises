const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  let totalSum = 0;
	array.forEach(number => totalSum += number);
  return totalSum;
};


//find better way to do this
const multiply = function(array) {
  let total = 1;
	array.forEach(number => total = total * number);
  return total;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(num) {
  let result = num;
  if (num === 0 || num === 1) {
    return 1;
  }
	while (num > 1) {
    num--;
    result = result * num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
