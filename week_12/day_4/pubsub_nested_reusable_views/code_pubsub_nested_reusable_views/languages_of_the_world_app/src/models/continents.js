const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Continents = function () {
  this.continents = [];
};

Continents.prototype.bindEvents = function () {
  PubSub.subscribe('MenuView:selected', (evt) => {
    const selectedIndex = evt.detail;
    PubSub.publish('Continents:continent-ready', this.continents[selectedIndex]);
  });
};

Continents.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  requestHelper.get((data) => this.handleDataReady(data));
};

Continents.prototype.handleDataReady = function (countries) {
  const continentNames = this.getContinentNames(countries);
  this.modelContinents(countries, continentNames);
  PubSub.publish('Continents:continent-names-ready', continentNames);
};

Continents.prototype.getContinentNames = function (countries) {
  return countries
    .map(country => country.region)
    .filter((region, index, regions) => regions.indexOf(region) === index);
};

Continents.prototype.modelContinents = function (countries, continentNames) {
  this.continents = continentNames.map((continentName) => {
    return {
      name: continentName,
      countries: this.countriesByContinent(countries, continentName)
    };
  });
};

Continents.prototype.countriesByContinent = function (countries, continent) {
  return countries.filter(country => country.region === continent);
};

module.exports = Continents;
