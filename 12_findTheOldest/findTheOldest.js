const currentYear = new Date().getFullYear;

const findTheOldest = function(array) {
  let oldestPerson = array[0];
  let oldestAge = findAge(array[0]);

  for (let i = 1; i < array.length; i++) {
    if (oldestAge < findAge(array[i])) {
      oldestAge = findAge(array[i]);
      oldestPerson = array[i];
    }
  }
  return oldestPerson
};

function findAge(person) {
  if (person.yearOfDeath) {
    return person.yearOfDeath - person.yearOfBirth;
  }
  return currentYear - person.yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;
