const species = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const speciesReference = species.filter((idSpecies) =>
    ids.find((acessId) => idSpecies.id === acessId));

  return speciesReference;
}

module.exports = getSpeciesByIds;
