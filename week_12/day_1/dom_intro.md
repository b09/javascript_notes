# The Document Object Model

**Lesson Duration: 45 minutes**

## Learning Objectives
- Know what the DOM is
- Understand what the DOM allows us to do
- Understand the `window` and `document` objects
- Understand the purpose of Chrome Dev Tools Console
- Be able to use Chrome Dev Tools Elements to investigate the current state of the DOM
- Be able to use Chrome Dev Tools Network to view assets being loaded by a webpage
- Be able to use Chrome Dev Tools Debugger to step through running code

## Intro

So far, we've spent a bit of time looking at JavaScript as a language. We've learned that the basics of variables, functions, and classes are much like other programming languages.

In today's world, you'll find JavaScript used _everywhere_ - to write desktop and mobile applications, to automate behaviours in applications such as Adobe PhotoShop or Google Sheets, on servers, in hardware, and even to give instructions to robots!

In this lesson, though, we're going to start looking at one context where JavaScript is used extensively, the environment for which it was written: the web browser.

But if JavaScript is just a programming language like any other, how can we use it to interact with something like a web page? To answer this question, we need to learn about something called the _Document Object Model_, or DOM.

## About the DOM

The DOM can be described as being an object-orientated interface that lets you interact with web apps. It is - at its most basic - a big object that contains a representation of all of the elements that make up a web page.

When the browser receives some HTML in response to an HTTP request, it parses the HTML into the DOM - this is the browser's representation of the HTML that has been written.

The DOM is what the browser uses to display the HTML elements of each web page. If we change the DOM - by interacting with it using JavaScript - then we can change what is displayed to the user!

### Paired discussion (5 minutes)

We can use the DOM to create dynamic web applications that look and feel like native software applications, for example, Gmail and Trello.

Gmail allows a user to select an email from the list, which changes its row colour and displays a number of additional menu options. Apart from listening for the user's interaction, what other operations might we need to do to create these changes to the DOM?

<details>
	<summary>Possible Answers</summary>
- Update the CSS for the row
- Insert new elements onto the page
- Attach event listeners to these new elements
</details>

## Investigating the DOM

We can see from a web app like Gmail, or Trello, that the DOM can be dynamically updated - to add or remove HTML elements, for example.

Once those elements have been changed dynamically, we can't rely on the HTML we see in `view source` reflecting the current state of the DOM. They have become out of sync. So how can we view the current state of the DOM?

Most web browsers come with a built-in DOM viewer, and it's very likely that you've used it already! We're going to take a closer look at Google Chrome's devtools.

Let's open up [BBC News](http://bbc.co.uk/news) and check it out.

In order to open up the devtools, we can either right click on the page and choose `Inspect`, or we can use the keyboard shortcut `⌘ + Shift + C`.

![Devtools](./images/inspector.png)

You might have thought that you were looking at some HTML here, but we're actually looking at a representation of the DOM. And because we're looking at the DOM, we can make changes to it!

> Instructor note: Change one of the headlines to demonstrate that when the DOM is changed, it changes what the user sees.

This is a neat party trick, but usually we'd interact with the DOM programmatically, using JavaScript.

This will be our main focus for today - learning some of the ways in which we can use the DOM to change what the user sees.

> Instructor note: Hand out the start point

### window and document

Let's take a look at the block of code below.

```js
// ./public/app.js

document.addEventListener("DOMContentLoaded", function() {
	// ...
});
```

We're calling a function called `addEventListener` on a `document` object. You'll also see a `window` object quite frequently. What are they? What's the difference?

The `window` object represents the browser's window. It contains many methods that allow us to inspect (and to some extent control) its physical properties - such as its height, width, and location.

It also contains a very important property called the `document` - `window.document`.

When we do the following in the browser's console, it returns true:

```js
window.document === document
```

This shows us that we're looking at the same object. Similarly, when we use `console.log`, we're actually using `window.console.log`! The `window` object is known as the _global_ object - it is the main scope in which your code runs.

When the web browser receives some HTML, it uses it to construct the `document` object. This object is a tree-like structure, which contains representations of the different parts of the web page.

We can interact with this object using the properties and methods that it supplies. This interface - these properties and methods - are the DOM; the Document Object Model.

If we want to dynamically update the page in some way, our scripts need to wait until the `document` object is available; we can't interact with it straight away.

When the `document`'s `DOMContentLoaded` event fires, we can be guaranteed to have access to the DOM. At this point, the DOM is ready to be manipulated.

## Advanced Devtools

Before we get to know the DOM properly, we should take a little bit of time to familiarise ourselves with some of the more advanced features of the development tools that are built in to our web browser. Doing so will make life much, much easier for us!

Let's start by taking a look at the browser's `console`.

### Task: Exploring the Console (5 minutes)

Go into `app.js` and uncomment each console method one at a time. Refresh your page, and note the differences between each type of message.

```js
// ./public/app.js

document.addEventListener("DOMContentLoaded", function() {
	console.log("Hello World!", "This is a console.log!");
	// console.warn("This is a console.warn!");
	// console.error("This is a console.error!");
	// console.trace("This is a console.trace!");
});
```

> Instructor note: Ask the class:
Why might we need these different console methods?

<details>
<summary>Possible answers:</summary>
- `log`, `warn` and `error` allow us to express to our colleagues that what they're doing might be causing a problem - or provide them with information as the situation demands
- `trace` allows us to see, at a glance, where information is coming from within our programme
</details>

<br>

Notice that we can pass more than one argument to each function; the console will concatenate them into a single string for us, with a space in-between. This can be useful - it means we can do something like this:

```js
// ./public/app.js

document.addEventListener("DOMContentLoaded", function() {
	// ...
	const answer = 1 + 1;
	console.log("The answer is ", answer);
});
```

We can also format arrays and objects nicely, using `console.table()`.

```js
// ./public/app.js

document.addEventListener("DOMContentLoaded", function() {
	// ...
	const fruits = ["apple", "orange", "banana"];
	console.table(fruits);

	const person = {
		name: "Jane",
		age: 40
	};
	console.table(person);
});
```

While logging information can be useful, it is often preferable to be able to step through our code line-by-line, checking the state of the programme along the way.

### Breakpoints

We can also use our developer tools as a debugger, just as we've done in other programming languages.

Let's say that we have some complex logic we want to step through:

```js
// ./public/app.js

document.addEventListener("DOMContentLoaded", function(){
	// ...
	var number1 = 5;
	number1 += 10;
	const number2 = 20 + number1;
	const number3 = number2 / 10;
});
```

We can step through this program line by line, by using the `debugger;` statement.

```js
// ./public/app.js

document.addEventListener("DOMContentLoaded", function(){
	// ...
	debugger; // Added
	var number1 = 5;
	number1 += 10;
	const number2 = 20 + number1;
	const number3 = number2 / 10;
});
```

Now, when the program executes, we should see the browser window appear to "freeze" when it hits the `debugger;` line.

![Breakpoints](./images/breakpoints.png)

We can use the arrows to step through our code line by line. Notice that the values of the variables in the "scope" pane change as we step through. We can also execute code in the console, and when we do, we'll have access to the same variables that we would have at that point in our program.

### DOM Breakpoints

Soon, we're going to look at the DOM - and that means that we'll be dynamically updating the user interface from within our code.

Sometimes, it can be hard to tell _what_ is modifying the DOM - especially as our programs grow in size. We can set "DOM breakpoints" to give us more information about why the DOM is changing.

Let's set a DOM breakpoint by right-clicking the `<body>` tag within our devtools. Next, we're going to select "Break on..." > "Attribute Modifications".

Now, we're going to add the following code to our JavaScript file. This should add a new class to the `<body>` tag after three seconds:

```js
// ./app.js

document.addEventListener("DOMContentLoaded", function() {
	// ...
	setTimeout(function(){
		document.body.classList.add("lightblue");
	}, 3000);
});
```

When this code is about to execute, the breakpoint kicks in, allowing us to tell what's going on inside our programs. We can also break when the element's children would be added, changed, or removed ("subtree modification"), or when the element itself would be removed ("node removal").

To remove a DOM breakpoint, just right-click on the same element, and remove the breakpoint you set.

### Network Tab

Finally, let's look at another developer tool that can be useful when we're debugging problems - the network tab.

The network tab displays information about all of the resources that our page needs to display itself. For example, we can see information about all the individual requests and responses for our images, CSS, and JavaScript files, among others.

We can also see the same information about our main document, via the `doc` tab.

We can filter the type of request by clicking on the relevant tab or typing in the "filter" field.

This tab can be really helpful to diagnose whether files are loading or not. For example, if you aren't seeing any styles applied, you can check to make sure that the response code for your stylesheet is `200`, as it should be.

If there is a problem with one of your files, it should be highlighted in red.

Notice that we can click on any individual request to get more information about it, or the related response.

### Further Resources

- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [The `window` object](https://developer.mozilla.org/en-US/docs/Web/API/Window)
- [Documentation for the console](https://developer.mozilla.org/en-US/docs/Web/API/Console)
- [Chrome Devtools Overview](https://developer.chrome.com/devtools)
- [Video: debugging using devtools](https://developers.google.com/web/tools/chrome-devtools/javascript/)

### Conclusion

We now know that the DOM is a representation of a web page's HTML elements that is rendered by the browser. We have also seen how we can manipulate the DOM using JavaScript to update what the user sees, creating dynamic web applications.

We have also learnt a number of debugging tools including:

- the console, with its various methods that we can use to output values for debugging
- the network tab,  where we can view more information about requests and loaded files
- Chrome Dev Tools, which give us a range of debugging tools, such as breakpoints
