const LanguageListView = function (countryContainer) {
  this.countryContainer = countryContainer;
};

LanguageListView.prototype.render = function (languages) {
  const languageList = this.createLanguageList();

  languages.forEach((language) => {
    const languageListItem = this.createLanguageListItem(language);
    languageList.appendChild(languageListItem);
  })

  this.countryContainer.appendChild(languageList);
};

LanguageListView.prototype.createLanguageList = function () {
  const languageList = document.createElement('ul');
  languageList.classList.add('languages');
  return languageList;
};

LanguageListView.prototype.createLanguageListItem = function (language) {
  const listItem = document.createElement('li');
  listItem.classList.add('language')
  listItem.textContent = language.name;
  return listItem;
};

module.exports = LanguageListView;
