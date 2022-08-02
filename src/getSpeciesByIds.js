const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((idSpecies) => ids.find((acessId) => idSpecies.id === acessId));
}

module.exports = getSpeciesByIds;
