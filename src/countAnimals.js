const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// let [lions, tigre, urso, pinguim, lontras, sapos, cobras, elefantes, girafas] = species;

function countAnimals(animal) {
  if (!animal) {
    const objAnimals = {};
    data.species.forEach((animals) => {
      objAnimals[animals.name] = animals.residents.length;
    });
    return objAnimals;
  }
  if (animal.sex) {
    const specieSex = species.find((element) => element.name === animal.specie);
    return specieSex.residents.filter((arrayElement) => arrayElement.sex === animal.sex).length;
  }
  return species.find((element) => element.name === animal.specie).residents.length;
}
countAnimals({ specie: 'lions' });

module.exports = countAnimals;
