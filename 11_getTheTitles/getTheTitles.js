const getTheTitles = function(array) {
  const titlesArray = [];

  array.forEach(book => {
    titlesArray.push(book.title);
  });
  return titlesArray
};

// Do not edit below this line
module.exports = getTheTitles;
