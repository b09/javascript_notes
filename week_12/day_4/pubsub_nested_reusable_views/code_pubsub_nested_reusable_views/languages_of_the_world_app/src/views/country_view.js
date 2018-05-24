const LanguageListView = require('./language_list_view.js');

const CountryView = function (continentContainer) {
  this.continentContainer = continentContainer;
};

CountryView.prototype.render = function (country) {
  const countryContainer = this.createCountryContainer();

  const nameElement = this.createName(country);
  countryContainer.appendChild(nameElement);

  const languages = country.languages;
  const languageListView = new LanguageListView(countryContainer);
  languageListView.render(languages);

  this.continentContainer.appendChild(countryContainer);
};

CountryView.prototype.createCountryContainer = function () {
  const countryContainer = document.createElement('div');
  countryContainer.classList.add('country');
  return countryContainer;
};

CountryView.prototype.createName = function (country) {
  const countryName = document.createElement('h4');
  countryName.classList.add('country-name');
  countryName.textContent = country.name;
  return countryName;
};

module.exports = CountryView;
