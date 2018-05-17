# Callback Functions & Enumeration

### Learning Objectives
- Understand the implications of functions being first-class objects
- Be able to declare anonymous functions
- Be able to declare arrow functions and use implicit return
- Be able to interrogate documentation
- Be able to pass functions to higher-order functions
- Be able to use built-in Array enumeration methods
- Be able to write a higher-order function

## Introduction

In this lesson we are going to look at the key language features of JavaScript, higher-order functions and callbacks.

A higher order function accepts or returns another function. A callback is a function that is passed to a function as an argument.

Using higher-order functions and callbacks allow us to write more dynamic code and form the foundations of the event-driven programming that we will be doing for the browser later in the course.

Today we are going to be using some of JavaScript's built in higher-order functions that handle iterating over arrays; the enumeration methods.

## Higher-order Functions and Callbacks

We have seen that in JavaScript, functions are first class objects. This means they can be stored in variables and data structures; and passed as arguments to other functions.

A higher order function is a function that takes a function as an argument or returns a function.

A callback is a function that is passed to another function as an argument.

Before we start writing our own higher-order functions, let's look at using some that are built in JavaScript methods.

## Enumeration Methods

We know we can iterate over an array using a `for of` loop, but there are a number of enumeration methods on the Array prototype that enable us to do the same and some offer us extra functionality. These enumeration methods are higher-order functions; they take in a callback which they invoke for each element of the array.

### `forEach`

We have seen that we can loop through an array using the `for of` loop. Let's use it to log out each element of an array.

```sh
touch enumeration.js
```

```js
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(`This is number ${number}`)
}
```

We can achieve exactly the same result using the enumeration method `forEach`. `forEach` is a method on the Array prototype and is a higher-order function, in that it takes in a callback as an argument. For each element in the array it will invoke that callback passing in the element.

```js
// ...

numbers.forEach((number) => {
  console.log(`This is number ${number}`);
})
```

> Instructor note: Compare the `forEach` with an equivalent enumeration method from another language

### Using the MDN docs

Let's look at the documentation for the `forEach` method on the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

In the documentation, any arguments in square brackets are optional.

> Instructor note: Ask the class...

What additional useful argument will `forEach` pass to our callback if we make a parameter for it?

<details>
<summary>Answers:</summary>
The element's index
</details>
<br>

Let's see how we would modify the message to make use of the element's index.

```js
// ...

numbers.forEach((number, index) => {
  console.log(`This is number ${number} at index position ${index}`);
});
```

### Task: (5 minutes)

Write a function called `multiplyByTwo` that uses the `forEach` and:

- takes in a array of numbers as an argument.
- returns a new array with each element of the original array multiplied by two.

**Hint:** If you get stuck, start by writing the function using a `for of` loop, then refactor, replacing the `for` loop with the `forEach`.

<details>
<summary>Example solution:</summary>

```js
const multiplyByTwo = function (numbersArray) {
  const multipliedArray = [];

  numbersArray.forEach((number) => {
    const multiplied = number * 2;
    multipliedArray.push(multiplied);
  });

  return multipliedArray;
}

console.log(multiplyByTwo(numbers))
```
<details>
something does here
</details>

</details>
<br>

> Instructor note: Ask the class...

Looking at the docs again, what is the return value of `forEach`?

<details>
<summary>Answer:</summary>
`undefined`
</details>
<br>

`forEach` doesn't return a value and we can't return anything from the callback that we pass to it. If we try and return from the callback, we are returning into the `forEach` and as `forEach` is implemented in a way that it doesn't do anything with the return value, for have no way of accessing that value. Instead we have to manually handle the value. In this case we have added the modified element into the previously declared empty array. In this way `forEach` is a direct replacement for a `for` loop.

### Task: (10 minutes)

Using the `forEach` enumeration method, complete the following tasks:

1. Write a function called `getEvens` that returns a new array containing all the even numbers from the original array.
2. Write a function called `sumElements` that returns the sum total of all the elements of the original array.


<details>
<summary>Example Solution:</summary>

```js
const getEvens = function (numbersArray) {
  const result = [];

  numbersArray.forEach((number, index) => {
    if (number % 2 === 0) {
      result.push(numbers);
    }
  });

  return result;
}
```

```js
const sumElements = function (numbersArray) {
  let total = 0;

  numbersArray.forEach((number) => {
    total += number;
  })

  return total;
}
```

</details>
<br>

### Other enumeration methods (`map`, `filter`, `reduce`)

`map`, `filter` and `reduce` are three commonly used enumeration methods on the Array prototype. They are similar to `forEach`, in that they iterate over the array invoking the callback for each element, passing in the element, but they each have some extra functionality. While we can use `forEach` to achieve the same results, the benefits of using these methods where appropriate include:

- cleaner, more readable and expressive code
- inversion of control - we don't have to worry about the implementation details of how JavaScript `maps`, `filters` or `reduces`

### Paired discussion (5 minutes)

1. Look at the MDN docs and find out the return value of `map`, `filter` and `reduce` and think of a situation when you might want to use each of them.

2. Using what you found out in question one, decide which of these enumeration methods would be useful for which of our functions, `multipleByTwo`, `getEvens`, `sumElements`.

<details>
<summary>Answers:</summary>

1.	`map` returns a new array of the same length as the original array, but with a transformation made to some or all of the elements.

	`filter` returns a new array containing a subset, or selection, of the original array based on a condition.

	`reduce` returns a single value. Common examples of using `reduce` is for finding the sum total of all the elements in an array, or finding the largest of all the elements. In both cases we _reduce_ the array down to one value.

2.	`multiplyByTwo` - `map`  
	`getEvens` - `filter`  
	`sumElements` - `reduce`

</details>
<br>

Let's refactor `multiplyByTwo` to use `map`.

> Instructor note: Ask the class...

We know that the return value of `map` is a new array. Looking at the MDN docs, what parameter will our callback need, and what does it need to return?

<details>
<summary>Answers:</summary>

It needs a parameter to accept the current element of the array and it must return the value to be added to the new array.

</details>
</br>

```js
const multiplyByTwo = function (numbersArray) {
  const transformedArray = numbersArray.map((number) => {
    return number * 2;
  });

  return transformedArray;
}

console.log(multiplyByTwo(numbers));
```

### Task (15 minutes):

Using the docs refactor:

 - `getEvens` to use filter
 - `sumElements` to use reduce

Make sure you are returning the right value from the callback. You may need to look at the docs to check what this should be for the different enumeration methods.

<details>
<summary>Example Solution</summary>

```js
const getEvens = function (numbersArray){

  const filteredArray = numbersArray.filter((number) => {
    return number % 2 === 0;
  });

  return filteredArray;
}

console.log(getEvens(numbers));
```

```js
const sumElements = function (numbersArray) {
  const total = numbersArray.reduce((runningTotal, number) => {
    return runningTotal + number;
  }, 0)

  return total;
}

console.log(sumElements(numbers))
```

</details>
<br>


### How are these higher-order functions implemented?

We have used some of JavaScript's enumeration methods, which we know are higher-order functions because they take in a callback. Let's have a look at what they are doing with the callback that we pass to them.

If we were writing our own version of `forEach`, it would need to take in two arguments:

1. The array, because we are not writing this on the Array prototype we need to get access to the array by taking it in as argument.
2. The callback that will be invoked to for each element in the array.

Then we will iterate over the array, invoking the callback, passing in the current element on each iteration.

```js
const ourForEach = function (array, callback) {
  for (const element of array) {
    callback(element);
  }
};

const numbers = [1, 2, 3, 4, 5];

ourForEach(numbers, (number) => {
  console.log('the number is:', number);
});
```

## Recap

What is a higher-order function?

<details>
<summary>Answer:</summary>
A function that takes in another function as an argument, or returns a function.
</details>

What is a callback?

<details>
<summary>Answer:</summary>
A function that is passed to another function as an argument
</details>

What are the benefits of using JavaScripts enumeration methods?

<details>
<summary>Answer:</summary>

- cleaner, more readable and expressive code
- inversion of control - we don't have to worry about the implementation details of how JavaScript `maps`, `filters` or `reduces`

</details>

In the MDN docs, what do the square brackets around arguments signify?

<details>
<summary>Answer:</summary>
The arguments are optional
</details>

What happens if you try and return from the callback that you pass to `forEach`?
<details>
<summary>Answer:</summary>
Nothing. You can't access the value.
</details>

## Conclusion

We have written callbacks and passed them to a number of JavaScript enumeration methods, which are higher-order functions.

We started by using `forEach` to iterate over the array, manually creating the value we wanted to return from our function.

After refactoring the code to use `map`, `filter` and `reduce` we acheived the same results, but by using the functionality of these methods we were able to write cleaner more expressive code.
