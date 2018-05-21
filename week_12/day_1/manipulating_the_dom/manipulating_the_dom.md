# Manipulating the DOM

**Learning objectives: 60 minutes**

### Learning Objectives

- Be able to query the DOM
- Be able to modify existing DOM elements
- Be able to create DOM elements
- Be able to insert elements into the DOM

## Intro

Now that we have learned what the DOM is, let's begin to look at how we can use it. In this lesson we will learn how to target elements on a web page, how to modify them dynamically and how to create and append new elements to a page.

We'll be able to modify the information that is displayed on the page in real time. This will allow us to create web apps that provide a much greater level of interactivity for the user.

## Before We Get Started

> Instructor note: hand out start code and give the students a few minutes to read over it.

### Task: (5 minutes)

Look at the start code and make a list of the elements in the index.html and their attributes.

<details>
<summary>Solution</summary>

 - An `<h1>` with  the id `"header"`
 - A `<div>` with the class `"container"`
 - A series of `<img>` tags

</details>

<br>

We can access these elements using JavaScript and affect them in real-time, allowing us to create much more dynamic and interactive web pages.

## Querying the DOM

We'll begin by learning how to access DOM elements. There are a few different ways that we can do this.

The `document` object offers a set of methods that we can use to access any DOM element using its id, class or tag name. We can call these methods, passing them a query string, and the document will give us back an object representing the element on our page.

### `getElementByID`

Our heading has an id. Let's use that id to target the element on our page and then use `log` to display it in the console.

```js
document.addEventListener('DOMContentLoaded', function () {
  const heading = document.getElementById('heading'); // NEW
  console.log(heading); // NEW
  // -> <h1 id="heading">My Pets</h1>
});
```

It looks like the `document` has given us back an HTML element, but it's really a JavaScript object. We can use `console.dir` to see a more accurate representation of this object in our console.

```js
document.addEventListener('DOMContentLoaded', function () {
  const heading = document.getElementById('heading');
  console.dir(heading); // MODIFIED
  // -> h1#heading
});
```

We can then expand this object in the console to see all of the properties and methods that it has. Some of these will be incredibly useful later on, allowing us to modify the way that this element is displayed by the browser.

### `getElementsByClassName`

Unlike ids, which should be unique, a CSS class can appear many times in an HTML document. The `document` provides a method that we can use to target all elements with a specific class. This will give us back an array-like object containing all of the elements with the specified class. This array-like object can be accessed by index, just like a standard JavaScript array, although it doesn't have any of the `Array.prototype` methods available to it, such as `map`, `reduce` and `filter`.

```js
document.addEventListener('DOMContentLoaded', function () {
  const heading = document.getElementById('heading');
  console.dir(heading);

  const container = document.getElementsByClass('container'); // NEW
  console.dir(container); // NEW
  // -> HTMLCollection(1)
});
```

If we expand the `HTMLCollection` we can see the elements inside. In this case we only have one element: the div that contains our images.

### `getElementsByTagName`

Like classes, there are likely to be multiple instances of an HTML tag in an HTML document. The `document` object also provides a method that we can use to target elements using their tag name. Like `getElementsByClass` it returns an `HTMLCollection` of all of the elements of the specified tag type.

```js
document.addEventListener('DOMContentLoaded', function () {
  // ...

  const images = document.getElementsByTagName('img'); // NEW
  console.dir(images); // NEW
  // -> HTMLCollection(15)
});
```

If we expand the `HTMLCollection` we can see that it contains all of the `<img>` elements on our page.

The methods that we just looked at are still fairly widely used. You'll often see them used in example code that you may come across online, so it's good to be able to recognise them and remember what they do. There are, however, a couple of newer methods that simplify the process of targetting DOM elements. There is one method for targeting single elements, and one for targeting multiple elements.

### `querySelector`

We can target a single element by querying its id, class or tag using `querySelector`. `querySelector` will return the first element on the page matching the specified query. This is typically used for targeting an element based on its id as those should be unique.

As `querySelector` can be used with ids, classes or tags we have to add additional information to the query string that we pass to it.

`querySelector` is based on the CSS selectors:

- An id selector is prefixed with a `#`, e.g. `'#heading'`
- A class selector is prefixed with a `.`, e.g. `'.container'`
- A tag selector has no prefix, e.g. `'img'`

```js
document.addEventListener('DOMContentLoaded', function () {
  // const heading = document.getElementById('heading'); // MODIFIED
  const heading = document.querySelector('#heading'); // NEW
  console.dir(heading);
  // -> h1#heading

  // ...
});
```

### `querySelectorAll`

If we want to get back a collection of multiple elements then we can use `querySelectorAll`. Like `querySelector`, this method accepts a CSS selector, but it will always return a collection of all of the elements that match our query.

```js
document.addEventListener('DOMContentLoaded', function () {
  // ...

  // const containers = document.getElementsByClassName('container'); // MODIFIED
  const containers = document.querySelectorAll('.container'); // NEW
  console.dir(containers);

  // const images = document.getElementsByTagName('img'); // MODIFIED
  const images = document.querySelectorAll('img'); // NEW
  console.dir(images);
});
```

It's fine to use any of the above methods if you have a preference, but you should try to be comfortable with all of them. You may encounter all of them when reading other people's code.

## Manipulating DOM Elements

Now that we can access DOM elements let's learn how to manipulate them. The ability to do this is what makes JavaScript essential in modern web development.

First, we'll learn how we can dynamically change the text displayed in the heading.

### `textContent`

If we expand the `h1#heading` object that we're outputting to the console we can see that it has a lot of properties and methods. The one that we're interested in right now is `textContent`. Notice that the value of this property is the text that is displayed in the heading as a string. We can reassign the value of this property to change the text that will be displayed on our page.

Let's imagine that we have received an object representing the current user from our database and we want to greet them in our heading.

```js
document.addEventListener('DOMContentLoaded', function () {
  const user = { name: 'Jane' } // <- YOUR NAME HERE // NEW

  const heading = document.getElementById('heading');
  heading.textContent = `Welcome to My Pets Web Page, ${ user.name }!`; // NEW

  // ...
});
```

That's pretty cool, but this isn't anything that couldn't be done via server-side rendering. We could just as easily use a templating engine to construct HTML to this effect before sending it to the client.

Let's imagine that an image has been clicked, therefore we want to mark it as 'selected' and style it differently. First, we'll need to target an `<img>` element that we want to select.

### Task: (5 minutes)

Use any method of your choosing to target your favourite image and use `dir` to output it to the console.

<details>
<summary>Example solution</summary>

```js
document.addEventListener('DOMContentLoaded', function () {
  // ...

  const favouriteImage = document.querySelectorAll('img')[7]; // NEW
  console.dir(favouriteImage); // NEW
});
```
</details>

If we expand the `img` object in the console we can see that it has a `style` property, which contains all of the CSS styles of the element. We could modify these directly using JavaScript, but it's better practice to keep all of our styling in our CSS. If our styling was split between our CSS and our JavaScript, how would we know which file to open if we wanted to make changes?

We can dynamically add and remove CSS classes from elements and describe how elements should be styled based on their classes in our CSS files.

```js
document.addEventListener('DOMContentLoaded', function () {
  // ...

  const favouriteImage = document.querySelectorAll('img')[7];
  favouriteImage.classList.add('selected'); // NEW
});
```

Now one of our images is styled differently! Once we learn about events we'll be able to do this in real time without having to refresh the page. This is impossible without JavaScript.

## Creating DOM Elements

Next, let's imagine that we're pulling the images on our page from a database. We need to be able to dynamically display any number of images on the page, depending on the number of images that happen to be stored in our database.

Just as we're able to target images that already exist on the page and access JavaScript objects describing the way in which they're displayed, we can also create these objects and attach them to the `document`.

There are four things that we have to do when creating DOM elements programatically:

1. Create a DOM element
2. Prepare the element (add `textContent` or add to the elements `classList`)
3. Access an element that already exists in the DOM
4. Attach our new element to the existing element

The `document` gives us a method, `createElement`, to which we pass a string representing the type of HTML element that we would like to create. In this case, we would like to create `<img>` tags, so we'll use the string `'img'`. Any type of HTML element can be created in this way.

```js
document.addEventListener('DOMContentLoaded', function () {
  // ...

  const img = document.createElement('img'); // NEW
});
```

If we look at the `<img>` elements in our HTML file, we can see that we're using the `src` attribute to reference the image that we would like to display. Similarly, we can use JavaScript to set the `src` property of our newly created `img` object.

```js
document.addEventListener('DOMContentLoaded', function () {
  // ...

  const img = document.createElement('img');
  img.src = 'images/IMG1.JPG'; // NEW
});
```

Thus far we have created an image object and referenced an image file, but if we refresh the web page in our browser you'll notice that our image is not displaying. That's because we haven't yet completed the final step. We need to attach our image element to the `document`. In this case we would like to attach our image to the `<div>` with the class `'container'`.

First we'll need to target the container element that we would like to attach our image to, then we can use its `appendChild` method to attach the image to it as a child.

```js
document.addEventListener('DOMContentLoaded', function () {
  // ...

  const img = document.createElement('img');
  img.src = 'images/IMG1.JPG';
  const container = document.querySelector('.container'); // NEW
  container.appendChild(img); // NEW
});
```

Great. We could now repeat this code multiple times to display multiple images, but our code wouldn't be very DRY as a result. This makes this code snippet an ideal candidate for extraction.

### Task: (30 minutes)

It's time to clean up our code. Begin by extracting the process of creating an `img` element into its own function. Once you have done that use a `for` statement to create an `img` for each of the images in our images directory.

1. Declare a function called `createImage`. It should have two parameters:
	- the `src` value for the image
	- the `container` that we want to append the image to.
2. Extract our `img` creation code into your `createImage` function.
3. Using a `for` statement, invoke `createImage` 15 times; once for each of our images.

## Recap

How can we target an element by its id?

<details>
<summary>Answer</summary>

```js
document.querySelector('#element-id');
document.getElementById('element-id');
```
</details>
<br>

Which property might we set to change the text displayed in an element?

<details>
<summary>Answer</summary>

`textContent`
</details>
<br>

Which four things do we have to do in order to create a DOM element programatically?

<details>
<summary>Answer</summary>

1. Create a DOM element
2. Prepare the element (add `textContent` or add to the elements `classList`)
3. Access an element that already exists in the DOM
4. Attach our new element to the existing element
</details>
<br>

How could we create a `<p>` element?

<details>
<summary>Answer</summary>

```js
document.createElement('p');
```
</details>
<br>

Which method might we use to attach an element to another as a child?

<details>
<summary>Answer</summary>

`parent.appendChild(child)`
</details>

## Conclusion

Now that we're able to target, modify create elements DOM elements we're well on our way to creating dynamic and interactive web apps. The next step now is to learn about events and how we can do these things based on actions that the user has performed.
