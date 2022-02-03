const sumAll = function(integer1, integer2) {
  // check to see if any of the arguments are negative or NOT a number. If so then retrun "ERROR".
  if (integer1 < 0 || integer2 < 0 || !Number.isFinite(integer1) || !Number.isFinite(integer2)) {
    return "ERROR";
  }

  let sum = 0;
  if (integer1 >= integer2) {
    for (i = integer2; i <= integer1; i++) {
      sum += i;
    }
    return sum;
  }

  else if (integer2 >= integer1) {
    for (i = integer1; i <= integer2; i++) {
      sum += i;
    }
    return sum;
  }

};

// Do not edit below this line
module.exports = sumAll;
