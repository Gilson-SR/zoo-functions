const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const week = Object.keys(hours)



function getSchedule(scheduleTarget) {
  // seu código aqui
}

function infoOpening() {
  const openingHours = week.reduce((acc, curr) => {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: species.filter((element) => element.availability.includes(curr)).map((arraySpecie) => arraySpecie.name),
    };
    return acc;
  }, {});
  
}

module.exports = getSchedule;
