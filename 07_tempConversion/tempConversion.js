const ftoc = function(temp) {
  let answer = (temp - 32) * (5/9);
  return Math.round(answer * 10) / 10;
};

const ctof = function(temp) {
  let answer = (temp * (9/5) + 32);
  return Math.round(answer * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
