# Closures

## Learning Objectives

- Understand what closures are in JavaScript
- Be able to use closures to encapsulate data

## Closures  

Closures are an interesting concept in JavaScript that don't exist in any of the other languages that we've learned so far.

If we define a function within another function, the inner function will have access to local variables defined within the enclosing function. A closure occurs when we export the inner function (using the `return` keyword) from its original context within the outer function and the exported function remembers the variables that it had access to.

We can use this to allow a function to access and modify variables, but prevent them from being exposed to the outside world. We're going to write a function that increments a counter, but keeps the counter hidden away, safe from modification.

Let's create a working directory and a file to work in...

```bash
// Terminal

mkdir closures
cd closures
touch closures.js
```

Now let's create a method and define a local variable called `counter` that has an initial value of 0 inside it...

```js
// closures.js

var setupAddFunction = function () {
    var counter = 0;
}
```

We have a variable called `counter` with a value of 0 that is available to us within the `setupAddFunction` function. Based on our existing knowledge of scope in JavaScript, we know that if we were to define another function within `setupAddFunction` the local variable `counter` would also be available to that function. Let's see that in action...

```js
var setupAddFunction = function () {
    var counter = 0;
    
    return function () { // NEW
        counter++;
        console.log(counter);
    }
}
```

We're returning a function from `setupAddFunction`, so let's call it, stuff its return value into a variable called `add` and take a look at the value of `add` in Terminal. This is the function that we actually want to use.

```js
var add = setupAddFunction();
console.log('The value of add is:', add);
```

When we log out the value of `add`, we can see that it doesn't contain the definition off `counter`, but it will still be able to reference it. Functions remember the scope that they were created in and are able to refer back to it later. This allows us to hide variables away in functions so that they can't be modified from the outside.

```js
add();
add();
add();
```

The `add` function remembers the value of `counter` between runs and is able to modify it without exposing it to the outside world. It's encapsulated in its own little world where nobody can get at it or modify its value. Perfect.

Let's look at how we could make this code a little bit more dynamic by adding a parameter to our `setupAddFunction`...

```js
var setupAddFunction = function (modifier) { // UPDATED
    var counter = 0;
    
    return function () { 
        counter += modifier; // UPDATED
        console.log(counter);
    }
}

var addFive = setupAddFunction(5); // UPDATED

addFive();
addFive();
addFive();
```

Parameters are just like local variables inside a function, so our exported inner function has access to this too. Now we could create multiple `add` functions with their own modifiers!

```js
var addTen = setupAddFunction(10);

addTen();
addTen();
addTen();

```

### Task:

Closures are a nice way to encapsulate data. Let's create an encapsulated array of messages, allowing the user to add new messages, but not allowing them to modify the array in any other way.

Using the following start point...

```js
var addMessage = setupConversation();

addMessage("I've got something very important to tell you that must never be forgotten");
addMessage("Oh yeah?");
addMessage("Oh, no. Wait... It's fine.");
```

- Create a `setupConversation` function that contains an array local variable within it, which will hold our messages.
- Have `setupConversation` return a function that allows us to add a new message to the array.
- Make your exported function also iterate over the array and `console.log()` each message after the new message has been added.

### Solution:

```js
var setupConversation = function () {
	var conversation = [];
	
	return function (newMessage) {
		conversation.push(newMessage);
		
		conversation.forEach(function (message) {
			console.log(message);
		});

		console.log("\n");
	}
}
```