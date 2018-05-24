const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilyInfoView = function () {

}

InstrumentFamilyInfoView.prototype.setUpListenerForSelectedObject = function () {
  PubSub.subscribe('InstrumentFamilies:send-family', (event) => {
    const familyObject = event.detail;
    this.displayObject(familyObject)
  })
};

InstrumentFamilyInfoView.prototype.displayObject = function (object) {
  const infoContainer = document.querySelector('#family-info');

  const paragraph = document.createElement('p');
  paragraph.textContent = object.name;

  infoContainer.appendChild(paragraph);
};

module.exports = InstrumentFamilyInfoView;
