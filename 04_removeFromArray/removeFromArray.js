const removeFromArray = function(...args) {
  // The first of the args will be the array so we pull it out here.
  const array = args[0]; 

  const newArray = [];

  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
