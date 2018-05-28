const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Consumables = function (category, url) {
  this.category = category;
  this.url = url;
};

Consumables.prototype.bindEvents = function () {
  PubSub.subscribe(`FormView:submit-${this.category}`, (evt) => {
    this.postData(evt.detail);
  });
};

Consumables.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
    .then((consumables) => {
      PubSub.publish(`Consumables:${this.category}-data-loaded`, consumables);
    })
    .catch(console.error);
};

Consumables.prototype.postData = function (formData) {
  const request = new Request(this.url);
  request.post(formData)
    .then((consumables) => {
      PubSub.publish(`Consumables:${this.category}-data-loaded`, consumables);
    });
};

module.exports = Consumables;
