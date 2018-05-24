/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MenuView = __webpack_require__(/*! ./views/menu_view.js */ \"./src/views/menu_view.js\");\nconst ContinentView = __webpack_require__(/*! ./views/continent_view.js */ \"./src/views/continent_view.js\");\nconst Continents = __webpack_require__(/*! ./models/continents.js */ \"./src/models/continents.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const menuContainer = document.querySelector('ul#menu');\n  const menuView = new MenuView(menuContainer);\n  menuView.bindEvents();\n\n  const continentContainer = document.querySelector('#continent');\n\n  const continentView = new ContinentView(continentContainer);\n  continentView.bindEvents();\n\n  const continents = new Continents();\n  continents.bindEvents();\n  continents.getData();\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n}\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url;\n}\n\nRequestHelper.prototype.get = function (onComplete) {\n  const xhr = new XMLHttpRequest();\n  xhr.open('GET', this.url);\n  xhr.addEventListener('load', function() {\n    if (this.status !== 200) {\n      return;\n    }\n\n    const data = JSON.parse(this.responseText);\n    onComplete(data);\n  });\n  xhr.send();\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/continents.js":
/*!**********************************!*\
  !*** ./src/models/continents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst Continents = function () {\n  this.continents = [];\n};\n\nContinents.prototype.bindEvents = function () {\n  PubSub.subscribe('MenuView:selected', (evt) => {\n    const selectedIndex = evt.detail;\n    PubSub.publish('Continents:continent-ready', this.continents[selectedIndex]);\n  });\n};\n\nContinents.prototype.getData = function () {\n  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');\n  requestHelper.get((data) => this.handleDataReady(data));\n};\n\nContinents.prototype.handleDataReady = function (countries) {\n  const continentNames = this.getContinentNames(countries);\n  this.modelContinents(countries, continentNames);\n  PubSub.publish('Continents:continent-names-ready', continentNames);\n};\n\nContinents.prototype.getContinentNames = function (countries) {\n  return countries\n    .map(country => country.region)\n    .filter((region, index, regions) => regions.indexOf(region) === index);\n};\n\nContinents.prototype.modelContinents = function (countries, continentNames) {\n  this.continents = continentNames.map((continentName) => {\n    return {\n      name: continentName,\n      countries: this.countriesByContinent(countries, continentName)\n    };\n  });\n};\n\nContinents.prototype.countriesByContinent = function (countries, continent) {\n  return countries.filter(country => country.region === continent);\n};\n\nmodule.exports = Continents;\n\n\n//# sourceURL=webpack:///./src/models/continents.js?");

/***/ }),

/***/ "./src/views/continent_view.js":
/*!*************************************!*\
  !*** ./src/views/continent_view.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst CountryView = __webpack_require__(/*! ./country_view.js */ \"./src/views/country_view.js\");\n\nconst ContinentView = function (container, continent) {\n  this.container = container;\n  this.continent = continent;\n};\n\nContinentView.prototype.bindEvents = function () {\n  PubSub.subscribe('Continents:continent-ready', (evt) => {\n    this.continent = evt.detail;\n    this.render();\n  });\n};\n\nContinentView.prototype.render = function () {\n  this.clearContainer();\n\n  const name = this.addName();\n  this.container.appendChild(name);\n\n  const countriesContainer = this.createCountriesContainer();\n  this.renderCountries(countriesContainer);\n  this.container.appendChild(countriesContainer);\n};\n\nContinentView.prototype.addName = function () {\n  const name = document.createElement('h2');\n  name.classList.add('continent-name');\n  name.textContent = this.continent.name;\n  return name;\n};\n\nContinentView.prototype.createCountriesContainer = function () {\n  const countriesContainer = document.createElement('div');\n  countriesContainer.id = 'countries';\n  return countriesContainer;\n};\n\nContinentView.prototype.renderCountries = function (container) {\n  this.continent.countries.forEach((country) => {\n    const countryView = new CountryView(container);\n    countryView.render(country);\n  });\n};\n\nContinentView.prototype.clearContainer = function () {\n  this.container.innerHTML = '';\n};\n\n\nmodule.exports = ContinentView;\n\n\n//# sourceURL=webpack:///./src/views/continent_view.js?");

/***/ }),

/***/ "./src/views/country_view.js":
/*!***********************************!*\
  !*** ./src/views/country_view.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const LanguageListView = __webpack_require__(/*! ./language_list_view.js */ \"./src/views/language_list_view.js\");\n\nconst CountryView = function (continentContainer) {\n  this.continentContainer = continentContainer;\n};\n\nCountryView.prototype.render = function (country) {\n  const countryContainer = this.createCountryContainer();\n\n  const nameElement = this.createName(country);\n  countryContainer.appendChild(nameElement);\n\n  const languages = country.languages;\n  const languageListView = new LanguageListView(countryContainer);\n  languageListView.render(languages);\n\n  this.continentContainer.appendChild(countryContainer);\n};\n\nCountryView.prototype.createCountryContainer = function () {\n  const countryContainer = document.createElement('div');\n  countryContainer.classList.add('country');\n  return countryContainer;\n};\n\nCountryView.prototype.createName = function (country) {\n  const countryName = document.createElement('h4');\n  countryName.classList.add('country-name');\n  countryName.textContent = country.name;\n  return countryName;\n};\n\nmodule.exports = CountryView;\n\n\n//# sourceURL=webpack:///./src/views/country_view.js?");

/***/ }),

/***/ "./src/views/language_list_view.js":
/*!*****************************************!*\
  !*** ./src/views/language_list_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const LanguageListView = function (countryContainer) {\n  this.countryContainer = countryContainer;\n};\n\nLanguageListView.prototype.render = function (languages) {\n  const languageList = this.createLanguageList();\n\n  languages.forEach((language) => {\n    const languageListItem = this.createLanguageListItem(language);\n    languageList.appendChild(languageListItem);\n  })\n\n  this.countryContainer.appendChild(languageList);\n};\n\nLanguageListView.prototype.createLanguageList = function () {\n  const languageList = document.createElement('ul');\n  languageList.classList.add('languages');\n  return languageList;\n};\n\nLanguageListView.prototype.createLanguageListItem = function (language) {\n  const listItem = document.createElement('li');\n  listItem.classList.add('language')\n  listItem.textContent = language.name;\n  return listItem;\n};\n\nmodule.exports = LanguageListView;\n\n\n//# sourceURL=webpack:///./src/views/language_list_view.js?");

/***/ }),

/***/ "./src/views/menu_view.js":
/*!********************************!*\
  !*** ./src/views/menu_view.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst MenuView = function (element) {\n  this.element = element;\n};\n\nMenuView.prototype.bindEvents = function () {\n  PubSub.subscribe('Continents:continent-names-ready', (evt) => {\n    this.render(evt.detail);\n  });\n};\n\nMenuView.prototype.render = function (continents) {\n  continents.forEach((continent, index) => {\n    const menuItem = this.createItem(continent, index);\n    this.element.appendChild(menuItem);\n  });\n};\n\nMenuView.prototype.createItem = function (continent, id) {\n  const menuItem = document.createElement('li');\n  menuItem.classList.add('menu-item');\n  menuItem.textContent = this.validateContinent(continent);\n  menuItem.id = id;\n\n  menuItem.addEventListener('click', (evt) => {\n    PubSub.publish('MenuView:selected', evt.target.id)\n  });\n\n  return menuItem;\n};\n\nMenuView.prototype.validateContinent = function (continent) {\n  return continent || 'Other';\n};\n\nmodule.exports = MenuView;\n\n\n//# sourceURL=webpack:///./src/views/menu_view.js?");

/***/ })

/******/ });