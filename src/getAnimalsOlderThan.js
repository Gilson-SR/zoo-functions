const { species } = require('../data/zoo_data');

// let [lions, tigre, urso, pinguim, lontras, sapos, cobras, elefantes, girafas] = species;

function getAnimalsOlderThan(animal, age) {
  const objAnimals = species.find((element) => element.name === animal);
  const arrayResidents = objAnimals.residents.every((element) => element.age >= age);
  return arrayResidents;
}

module.exports = getAnimalsOlderThan;
