const PubSub = require('../helpers/pub_sub.js');
const CountryView = require('./country_view.js');

const ContinentView = function (container, continent) {
  this.container = container;
  this.continent = continent;
};

ContinentView.prototype.bindEvents = function () {
  PubSub.subscribe('Continents:continent-ready', (evt) => {
    this.continent = evt.detail;
    this.render();
  });
};

ContinentView.prototype.render = function () {
  this.clearContainer();

  const name = this.addName();
  this.container.appendChild(name);

  const countriesContainer = this.createCountriesContainer();
  this.renderCountries(countriesContainer);
  this.container.appendChild(countriesContainer);
};

ContinentView.prototype.addName = function () {
  const name = document.createElement('h2');
  name.classList.add('continent-name');
  name.textContent = this.continent.name;
  return name;
};

ContinentView.prototype.createCountriesContainer = function () {
  const countriesContainer = document.createElement('div');
  countriesContainer.id = 'countries';
  return countriesContainer;
};

ContinentView.prototype.renderCountries = function (container) {
  this.continent.countries.forEach((country) => {
    const countryView = new CountryView(container);
    countryView.render(country);
  });
};

ContinentView.prototype.clearContainer = function () {
  this.container.innerHTML = '';
};


module.exports = ContinentView;
