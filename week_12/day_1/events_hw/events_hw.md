# Events HW

### Learning Objectives

- Be able to use a variety of event listener types
- Be able to access values from form inputs when on submit
- Be able to attach events to a variety of DOM elements
- Be able to read and write to the DOM

## Brief

Your task is to create a Reading List app that allow a user to submit items they intend to read later and view them on the page.

### MVP

The app should have a form that allows users to submit reading list items. The form should have the following fields:

1. Title - text input
2. Author - text input
3. Category (e.g. book, article, blog post) - radio input
4. Genre and/or Topic - select

For information about using radio inputs:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)

Once the user has submitted the form, the reading list item's details should be displayed below and the form's fields should reset to empty.

**Hint: Research `form.reset()`**

### Planning

1. Create the HTML in index.html
2. Create the JavaScript file, app.js
3. Add a `script` tag to index.html to load the javascript
4. Add behaviour to the DOM elements' events

### Extensions

1. Add validation to prevent the user submitting the form if the Title or Author fields are left blank. This can be done by adding the `required` attribute in the form fields in the html, but should also be done in the JavaScript to prevent anyone bypassing the HTML validation by editing the form in the browser devtools.
2. Add flexbox layout to the reading list so that items are displayed in a responsive grid. This will require researching how to add a class to a DOM element using JavaScript.
