const NumberFormView = require('./views/number_form_view');
const NumberFactView = require('./views/number_fact_view.js');
const NumberFact = require('./models/number_fact.js');

document.addEventListener('DOMContentLoaded', () => {
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

  const factContainer = document.querySelector('#number-fact');
  const numberFactView = new NumberFactView(factContainer);
  numberFactView.bindEvents();

  const numberFact = new NumberFact();
  numberFact.bindEvents();
});
