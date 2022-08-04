const { hours, species } = require('../data/zoo_data');

const week = Object.keys(hours);

function infoOpening() {
  const openingHours = week.reduce((acc, curr) => {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: species.filter((element) =>
        element.availability.includes(curr)).map((arraySpecie) => arraySpecie.name),
    };
    return acc;
  }, {});
  openingHours.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return openingHours;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return infoOpening();
  }

  const sameNameVerify = species.some((specie) => specie.name === scheduleTarget);
  if (!sameNameVerify && !week.includes(scheduleTarget)) {
    return infoOpening();
  }
  if (week.includes(scheduleTarget)) {
    return { [scheduleTarget]: infoOpening()[scheduleTarget] };
  }
  return species.find((weekDay) => weekDay.name === scheduleTarget).availability;
}

module.exports = getSchedule;
