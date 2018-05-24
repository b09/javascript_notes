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

eval("const InstrumentFamilies = __webpack_require__(/*! ./models/instrument_families.js */ \"./src/models/instrument_families.js\");\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./src/views/select_view.js\");\nconst InstrumentFamilyView = __webpack_require__(/*! ./views/instrument_family_view.js */ \"./src/views/instrument_family_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const selectElement = document.querySelector('select#instrument-families');\n  const familyDropdown = new SelectView(selectElement);\n  familyDropdown.bindEvents();\n\n  const familyContainer = document.querySelector('div#instrument-family');\n  const instrumentFamilyView = new InstrumentFamilyView(familyContainer);\n  instrumentFamilyView.bindEvents();\n\n  const instrumentFamilies = new InstrumentFamilies();\n  instrumentFamilies.bindEvents();\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    var event = new CustomEvent(channel, {\n      detail: payload\n  });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/models/instrument_families.js":
/*!*******************************************!*\
  !*** ./src/models/instrument_families.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst InstrumentFamilies = function () {\n  this.instrumentFamilies = [\n    {\n      name: 'Brass',\n      description: 'A brass instrument is a musical instrument that produces sound by sympathetic vibration of air in a tubular resonator in sympathy with the vibration of the player\\'s lips',\n      instruments: ['trumpet', 'trombone', 'horn', 'tuba', 'bugle']\n    },\n    {\n      name: 'Strings',\n      description: 'String instruments, stringed instruments, or chordophones are musical instruments that produce sound from vibrating strings when the performer plays or sounds the strings in some manner.',\n      instruments: ['violin', 'double bass', 'guitar', 'sitar', 'hurdy-gurdy']\n    },\n    {\n      name: 'Wind',\n      description: 'A wind instrument is a musical instrument that contains some type of resonator (usually a tube), in which a column of air is set into vibration by the player blowing into (or over) a mouthpiece set at or near the end of the resonator.',\n      instruments: ['flute', 'clarinet', 'bassoon', 'bagpipes', 'oboe']\n    },\n    {\n      name: 'Percussion',\n      description: 'A percussion instrument is a musical instrument that is sounded by being struck or scraped by a beater (including attached or enclosed beaters or rattles); struck, scraped or rubbed by hand; or struck against another similar instrument.',\n      instruments: ['timpani', 'snare drum', 'bass drum', 'cymbals', 'triangle', 'tambourine']\n    },\n    {\n      name: 'Keyboard',\n      description: 'A keyboard instrument is a musical instrument played using a keyboard, a row of levers which are pressed by the fingers.',\n      instruments: ['piano', 'organ', 'electronic keyboard', 'synthesizer']\n    }\n  ];\n};\n\nInstrumentFamilies.prototype.bindEvents = function () {\n  PubSub.publish('InstrumentFamilies:data-ready', this.instrumentFamilies);\n\n  PubSub.subscribe('SelectView:change', (evt) => {\n    const selectedIndex = evt.detail;\n    this.publishFamilyDetail(selectedIndex);\n  });\n};\n\nInstrumentFamilies.prototype.publishFamilyDetail = function (familyIndex) {\n  const selectedFamily = this.instrumentFamilies[familyIndex];\n  PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)\n};\n\nmodule.exports = InstrumentFamilies;\n\n\n//# sourceURL=webpack:///./src/models/instrument_families.js?");

/***/ }),

/***/ "./src/views/instrument_family_view.js":
/*!*********************************************!*\
  !*** ./src/views/instrument_family_view.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst InstrumentFamilyView = function (container) {\n  this.container = container;\n};\n\nInstrumentFamilyView.prototype.bindEvents = function () {\n  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {\n    const instrumentFamily = evt.detail;\n    this.render(instrumentFamily);\n  });\n};\n\nInstrumentFamilyView.prototype.render = function (family) {\n  this.container.innerHTML = '';\n\n  const familyName = this.createElement('h2', family.name);\n  this.container.appendChild(familyName);\n\n  const familyDescription = this.createElement('p', family.description);\n  this.container.appendChild(familyDescription);\n\n  const instrumentListTitle = this.createElement('h3', 'Instruments include:');\n  this.container.appendChild(instrumentListTitle);\n\n  const instrumentList = this.createInstrumentList(family.instruments);\n  this.container.appendChild(instrumentList);\n};\n\nInstrumentFamilyView.prototype.createElement = function (elementType, text) {\n  const element = document.createElement(elementType);\n  element.textContent = text;\n  return element;\n};\n\nInstrumentFamilyView.prototype.createInstrumentList = function (instruments) {\n  const list = document.createElement('ul');\n\n  instruments.forEach((instrument) => {\n    const listItem = document.createElement('li');\n    listItem.textContent = instrument;\n    list.appendChild(listItem);\n  });\n\n  return list;\n};\n\nmodule.exports = InstrumentFamilyView;\n\n\n//# sourceURL=webpack:///./src/views/instrument_family_view.js?");

/***/ }),

/***/ "./src/views/select_view.js":
/*!**********************************!*\
  !*** ./src/views/select_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst SelectView = function (element) {\n  this.element = element;\n};\n\nSelectView.prototype.bindEvents = function () {\n  PubSub.subscribe('InstrumentFamilies:data-ready', (evt) => {\n    const allInstrumentFamilies = evt.detail;\n    this.populate(allInstrumentFamilies);\n  });\n\n  this.element.addEventListener('change', (evt) => {\n    const selectedIndex = evt.target.value;\n    PubSub.publish('SelectView:change', selectedIndex);\n  });\n};\n\nSelectView.prototype.populate = function (instrumentFamilyData) {\n  instrumentFamilyData.forEach((familiy, index) => {\n    const option = document.createElement('option');\n    option.textContent = familiy.name;\n    option.value = index;\n    this.element.appendChild(option);\n  });\n};\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./src/views/select_view.js?");

/***/ })

/******/ });