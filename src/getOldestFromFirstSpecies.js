const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecieId = employees.find((element) => element.id === id).responsibleFor[0];
  const specieObj = species.find((specie) => specie.id === firstSpecieId).residents;
  return Object.values(specieObj.sort((a, b) => a.age - b.age)[specieObj.length - 1]);
}

module.exports = getOldestFromFirstSpecies;