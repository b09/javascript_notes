const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentFamilyInfoView = require('./views/instrument_family_info_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const familyView = new InstrumentFamilyInfoView();
  familyView.setUpListenerForSelectedObject();

  const selectView = new SelectView();
  selectView.setUpReceiveData();
  selectView.setUpListenerForUserChoice();

  const instrumentFamiliesModel = new InstrumentFamilies();
  instrumentFamiliesModel.setUpListenerForUserChoice();
  instrumentFamiliesModel.sendOutData();

});
