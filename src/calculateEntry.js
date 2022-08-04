const { prices } = require('../data/zoo_data');

function countEntrants(entrants) { // resposavel por calcular quantidade de visitantes por faixa etária
  const numberOfChildren = entrants.filter((child) => child.age < 18).length;
  const numberOfAdults = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;
  const numberOfSeniors = entrants.filter((senior) => senior.age >= 50).length;

  return { child: numberOfChildren, adult: numberOfAdults, senior: numberOfSeniors };
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
