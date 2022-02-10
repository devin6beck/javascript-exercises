const fibonacci = function(num) {
  const fib = [0, 1];

  // retrune "OOPS" if num is negative
  if (num < 0) {
    return "OOPS"
  }

  // figure out the fib sequence up to num
  for (i = 2; i <= num; i ++) {
    fib.push(fib[i - 1] + fib[i - 2])
  }

  return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
