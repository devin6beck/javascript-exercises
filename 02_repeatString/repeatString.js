const repeatString = function(string, num) {
  if (num < 0) {
    return "ERROR";
  }

  let stringToBeReturned = "";
  for (i = 0; i < num; i++) {
    stringToBeReturned += string;
  }
  return stringToBeReturned;
};

// Do not edit below this line
module.exports = repeatString;
