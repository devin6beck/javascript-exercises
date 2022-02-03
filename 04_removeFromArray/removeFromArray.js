const removeFromArray = function(array, itemToRemove) {
  array.splice(array.indexOf(itemToRemove), 1)
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
