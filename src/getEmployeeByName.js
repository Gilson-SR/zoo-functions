const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const collaborators = employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);

  return collaborators;
}

getEmployeeByName();

module.exports = getEmployeeByName;
