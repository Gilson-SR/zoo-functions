const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// index 1,2,4
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

function isManager(id) {
  const verify = managers.find((managersId) => managersId === id);
  return verify === id;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const managedPeopleId = employees.filter((managedPeople) =>
      managedPeople.managers.some((idManaged) => idManaged === managerId));

    const namesManagedPeople = managedPeopleId.map((arrayNames) =>
      `${arrayNames.firstName} ${arrayNames.lastName}`);

    return namesManagedPeople;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83');

module.exports = { isManager, getRelatedEmployees };
