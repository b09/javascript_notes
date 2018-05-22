document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const valuesToValidate = [event.target.title.value, event.target.author.value]
  if (areAnyValuesEmpty(valuesToValidate)) return;

  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);

  event.target.reset();
}

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('reading-list-item');

  const title = buildElement('h2', form.title.value);
  readingListItem.appendChild(title);
  const author = buildElement('h3', form.author.value);
  readingListItem.appendChild(author);
  const value = buildElement('p', form.category.value);
  readingListItem.appendChild(value);
  const genre = buildElement('p', form.genre.value);
  readingListItem.appendChild(genre);

  return readingListItem;
}

const areAnyValuesEmpty = function (values) {
  return values.some((value) => value === '');
}

const buildElement = function (tag, value) {
  const element = document.createElement(tag);
  element.textContent = value;
  return element;
}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';
}
