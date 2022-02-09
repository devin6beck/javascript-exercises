const palindromes = function (string) {
  // make regular expression to help remove all non Alpha or Numeric charaters
  const regex = /[^A-Za-z0-9]/g;
  const stringAlphaNumericNoSpaces = string.toLowerCase().replace(regex, "");
  const reverseString = stringAlphaNumericNoSpaces.split("").reverse().join("");
  return reverseString === stringAlphaNumericNoSpaces;
};

  // Below is how I did it the first time:
  // const palindromes = function (string) {
  //   const regex = /[^A-Za-z0-9]/g;

  //   // This will remove all the non-alphanumeric characters from the string and 
  //   // replaces it with an empty string. Then remove the spaces.
  //   const stringAlphaNumericNoSpaces = string
  //                                       .replace(regex, "")
  //                                       .split(" ")
  //                                       .join("");

  //   // create a variable that points to a blank string
  //   let reverseStringNoSpaces = "";

  //   // reverse the string with a for loop
  //   for (let i = stringAlphaNumericNoSpaces.length - 1; i >= 0; i--) {
  //     reverseStringNoSpaces += stringAlphaNumericNoSpaces[i];
  //   }

  //   return stringAlphaNumericNoSpaces.toLowerCase() === reverseStringNoSpaces
  //                                                             .toLowerCase()
  //                                                             .split(" ")
  //                                                             .join("")
    
  // }

// Do not edit below this line
module.exports = palindromes;
