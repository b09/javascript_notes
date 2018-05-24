const NumberFormView = require('./views/number_form_view');
const NumberData = require('./models/number_data.js');
const Success = require('./views/success.js');

document.addEventListener('DOMContentLoaded', () => {
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

  const success = new Success();
  success.setUpListenerForFact();

  const numberData = new NumberData();
  numberData.setUpNumberListener();
});
