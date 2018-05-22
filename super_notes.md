## JavaScript Fundamentals


<details>
<details>
<summary>
Variables
</summary>

#### Variables

JavaScript, like other programming languages, allows us to declare variables and assign values to them, so that we can reference them later.

We declare variables using the keyword `var`:

```js
var name = "Mickey";
```

Notice that we end each line with a semicolon to tell the JavaScript runtime that it has reached the end of our statement.

JavaScript has a feature called automatic semicolon insertion which means that semicolons are optional for the most part. We will be writing our semicolons manually for the duration of this course however, as it's important to know where they do and don't belong.
</details>
<details>
<summary>
Dynamic Typing
</summary>

#### Dynamic Typing

Dynamically typed languages type check at run time, in contrast to statically typed languages which type check at compile time. Type checking is the verification of a value's type, so that the environment can determine which operations are safe or unsafe. For example, whether or not it is safe to call a particular method on it.

> Instructor note: Ask the class...

Knowing that JavaScript is dynamically typed, what would we expect to happen if we reassign the value of the following variable `greeting` to be a number?

<details>
<br>

<summary>
Answer
</summary>

The JavaScript runtime will decide which type to use when the code runs. So while the value of `greeting` is initially a string, it can be reassigned to be a number.

```js
var greeting = "hello";
greeting = 5;
console.log(greeting);
// -> 5
```

</details>
<br>
</details>

### Data Types

check the data type of a value using the `typeof` operator

<details>
<summary>
Number
</summary>

#### Number


Number is the only numerical data type in JavaScript. It does not differentiate between whole and decimal numbers.


The standard arithmetic operators are available to us:

- Addition `+`
- Subtraction `-`
- Multiplication `*`
- Division `/`
- Exponentiation `**`
- Remainder `%`
</details>
<details>
<summary>
String
</summary>

Strings can be declared with:

- double quotation marks (`"`)
- single quotation marks (`'`)
- backticks (`` ` ``)

We can also use the `String()` function to convert non-string values to strings.

```js
String(5);
// -> '5'
```

We can use the `+` operator to concatenate strings.


Using backticks to declare a string allows us to use string interpolation.

```js
var name = "Donald";
`Hello, ${name}`;
// -> 'Hello, Donald'
```

</details>
<details>
<summary>
Null
</summary>

#### Null

The `null` value is used when a value is deliberately absent. A database might return `null` if you are trying to fetch a record that doesn't exist or you might return `null` from a search function when it finds no matches.
</details>
<details>
<summary>
Undefined
</summary>

#### Undefined
Undefined is the default value and type of declared variables where no value has been assigned.

```js
var myVariable;

myVariable;
// -> undefined

typeof myVariable;
// -> 'undefined'
```

`undefined` is different from `ReferenceError`, which is the error we get when trying to use a variable that hasn't been declared.

```js
bananas;
// -> ReferenceError: bananas is not defined
```

`NaN` is Not-A-Number. It is of type of number but has no numerical value. We get `NaN` when we perform some illegal mathematical operations. A numerical value `+ undefined` is probably the most common operation that results in `NaN`. This might happen if you try to access a value that you believe is a number but is actually `undefined`.

```js
undefined + 1;
// -> NaN
```
</details>
<details>
<summary>
Boolean
</summary>

#### Boolean

A `Boolean` has one of two values, either true or false. Like in other languages the key role of the `Boolean` values is for control flow.

</details>
<details>
<summary>
Symbol
</summary>

#### Symbol

In newer versions of JavaScript, we have a new type of primitive: `Symbol`. They are not widely used yet, and you will see them far less frequently than the other types of primitive we have looked at.

They function quite differently from symbols that you might have seen in other languages. In JavaScript, they are primarily used to create unique keys within key-value pairs.
</details>

### Control Flow

<details>
<summary>
Conditionals
</summary>

#### Conditionals

As with other programming languages, JavaScript allows us to write conditionals. This is the syntax for the `if` statement:

```js

if (first expression) {
  statement to run if first expression evaluated as true
}
else if (second expression) {
  statement to run if second expression evaluated as true
}
else {
  statement to run if all other expressions evaluated as false
}



if (1 > 0) {
  var message = "1 is greater than 0";
}
else if (1 == 0) {
  var message = "1 is equal to 0";
}
else {
  var message = "1 is not greater than 0";
}
```

We can output the value of message using `console.log()`

```js
// ...

console.log("message", message) // NEW
```

> It's good practice to pass a string label to `console.log()` as the first argument to more easily identify the output.

We can run the file using Node.

```sh
node control_flow.js
```

</details>
<details>
<summary>
Short-circuiting
</summary>

#### Short-circuiting

JavaScript employs short-circuiting. This means that in the above `if` statement, as the first condition is satisfied, the `else if` and `else` conditions and associated code blocks are never executed.

</details>
<details>
<summary>
Truthy and Falsy Values
</summary>

#### Truthy and Falsy Values

While we know that the boolean values are true or false, we often want to evaluate a non-boolean value as true or false when working with control flow. For example, as an `if` statement expects a boolean value as its condition, whatever you pass to it will be coerced to either `true` or `false`. `null` is a falsy value so will be coerced to `false`.

```js
// control_flow.js

if (null) {
  console.log('This will never happen.');
}
```

When we are learning a language we need to know which expressions and non-boolean values evaluate as `true` and which evaluate as `false`. The result of these evaluations are called the 'truthy' and 'falsy' values and are different for different languages.

</details>



### Equality

<details>
<summary>
Strict Equality (`===`)
</summary>

#### Strict Equality (`===`)

The triple equals (strict equality) operator compares for equality by checking if both the type and value are the same.
</details>
<details>
<summary>
Loose Equality (`==`)
</summary>

#### Loose Equality (`==`)

The double equals (abstract or loose equality) operator compares for equality *after* having coerced the values to a common type. This is a product of JavaScript being a weakly typed language, as previously discussed.

Because loose equality can cause unexpected behaviour, unless you have a good reason, it is good practice to use the triple equals (`===`), which only evaluates to true if both the value and the type match.
</details>
<details>
<summary>
Logical Operators
</summary>

#### Logical Operators

We can use the logical operators 'and' (`&&`) and 'or' (`||`) to make logic expressions.

```js
(1+1 === 2) && (1+1 === 4); // -> false
(1+1 === 2) || (1+1 === 4); // -> true
```
We can also use `!` for "not".

```js
!true;
// -> false
```

Short-circuiting also applied to the logical operators. This means that if the first expression in an `&&` statement evaluates to false, JavaScript does not bother evaluating the second expression, because the statement will evaluate to false regardless.

Similarly, if the first expression in an `||` statement is true, JavaScript does not bother evaluating the second expression, because the statement will evaluate to true regardless.
</details>
<br>
<br>
<br>

</details>

## Functions
<details>
<details>
<summary>
Named Function Declarations
</summary>

### Named Function Declarations

To declare the function we use the `function` keyword followed by a name for the function and brackets (`()`). Then braces are used to define the function body. To return a value from our function we use the `return` keyword.

```js
function sayHello() {
  return 'Hello World!';
}
```

We make the code inside the function run by referring to it by it's name and using brackets `()` to invoke / call it: `sayHello()`.

```js
function sayHello() {
  return 'Hello World!';
}
console.log('sayHello message:', sayHello());
// -> sayHello message: Hello World!
```
</details>
<details>
<summary>
Arguments and Parameters
</summary>

### Arguments and Parameters

To use the argument inside our function we need to declare a parameter.

```js
function sayHello(name) { // MODIFIED
  return `Hello ${name}!`; // MODIFIED
}

console.log('sayHello message:', sayHello('Danielle'));
// -> sayHello message: Hello Danielle!
```


#### Default Parameters

```js
function sayHello(name = 'World') { // MODIFIED
  return `Hello ${name}!`;
}

console.log('sayHello with no arguments:', sayHello());
// -> sayHello with no arguments: Hello World!
```

We can add more parameters by listing them between the brackets `()`, separated by commas `,`.

```js
function sayHello(greeting, name = 'World') { // MODIFIED
  return `${greeting} ${name}!`;
}
console.log('sayHello message:', sayHello('Hi', 'Danielle')); // MODIFIED
// -> sayHello message: Hi Danielle!
```
Note: We have put the default parameter second, so that if only one argument is passed, the argument will be treated as `greeting`, and `World!` with be used as the value for `name`.

#### Hoisting

A slightly strange feature of the named `function` declaration is that the `function` declaration is "hoisted". This means that when the JavaScript interpreter parses the code, and just before it actually runs, it essentially moves the function declaration to the top of the file. This means that we can use our function before it is declared.

```js
console.log('sayHello message:', sayHello('Danielle', 'Hi')); // MODIFIED
// -> sayHello message: Hi Danielle!

function sayHello(name = 'World', greeting) { // MODIFIED
  return `${greeting} ${name}!`;
}
```
</details>
<details>
<summary>
Anonymous Function Expressions
</summary>

### Anonymous Function Expressions


 Functions are first-class objects. This means, like numbers, strings, arrays or objects, we can store functions in variables, put them in arrays or objects. We can also call methods on functions, pass functions into functions as arguments and even `return` a function from another function.

```js
var add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log('1 + 3 with add:', add(1, 3));
// -> 1 + 3 with add: 4
```

Since we can store function objects in variables, we can refer to them later by the name of the variable, so in this case, the function name is optional. This is called an "anonymous" function expression.

</details>
<details>
<summary>
Arrow Functions
</summary>

### Arrow Functions


```js
var multiply = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
}
console.log('multiply 2 by 5:', multiply(2, 5));
// -> multiply 2 by 5: 10
```

This time the `function` keyword is dropped and an arrow function has a "fat arrow" (`=>`). This forms an anonymous function expression: `() => {}`. Arrow functions are _always_ anonymous, they cannot be named. If we want to refer to them later they must be assigned into a variable.

#### Implicit Return

When our arrow function's body only contains a single expression, we can write it on one line and omit the `return` keyword and the braces. The function will implicitly return the expression the arrow is pointing to.

```js
var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber; // MODIFIED
console.log('multiply 2 by 5:', multiply(2, 5));
```

`multiply`'s body only has one expression, `firstNumber * secondNumber`, which is evaluated and returned implicitly. This makes writing simple function very concise.

</details>
<br>
<br>
</details>

## Loops, Arrays & Objects

In JavaScript, _all_ objects inherently store their data in a key-value pair structure. So these are simply called objects.
<details>
<summary>
Arrays
</summary>

### Array


```js
var sports = [];
```

To put data in our array as we create it, we list the values separated by commas. (`,`)

```js
var sports = ['football', 'tennis', 'rugby']; // UPDATED
```

#### Array Methods

We can add a new element to the end of our array with the `push` method.

```js
sports.push('curling');
console.log( sports );

// -> [ 'football', 'tennis', 'curling' ]
```

We can get the current number of elements with the `length` property, subtract one, and get the index of the last element.

```js
var lastSport = sports[sports.length - 1];
console.log(lastSport);

// -> darts
```

Let's get rid of that last item, with the `pop` method.

```js
sports.pop();
console.log(sports);

// -> [ 'football', 'tennis', 'rugby', 'curling', 'snooker' ]
```

`pop` also returns the removed item

```js
console.log(sports.pop()); // UPDATED
// -> darts

console.log(sports);
// -> [ 'football', 'tennis', 'rugby', 'curling', 'snooker' ]
```

`pop` and `push` operate on the end of the array. We can do the same to the start of the array using `shift` and `unshift` respectively.

Add an item to the start with `unshift`.

```js
sports.unshift('basketball');
console.log(sports);

// -> [ 'basketball', 'football', 'tennis', 'rugby', 'curling', 'snooker' ]
```

Remove the first item with `shift`. (also returns the removed item to us)

```js
console.log(sports.shift());
// -> basketball

console.log(sports);
// -> [ 'football', 'tennis', 'rugby', 'curling', 'snooker' ]
```

These methods are useful, but they only let us modify the beginning or end of the array. What about when if we want to remove something from the middle of the array? Let's remove `'curling'` using the [`splice` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) we're going to need to use it's index position. We pass splice the index position to start removing items at, and as the second argument, the number of items to remove. It returns an array of all of the items it removed, and modifies the original array we called it on.

```js
console.log(sports.splice(3, 1));
// -> [ 'curling' ]

console.log(sports);
// -> [ 'football', 'tennis', 'rugby', 'snooker' ]
```

#### Iterating Over Arrays

When we have an array, and want to do the same thing with each value in the array, we can use a `for` loop. To loop through an array we can use the `for...of` statement. This probably looks similar to `for` loops you might have seen in other languages.

```js
for (var currentSport of sports) {
  var bigSport = currentSport.toUpperCase();
  console.log( bigSport );

  // -> FOOTBALL
  // -> TENNIS
  // -> RUGBY
  // -> SNOOKER
}
```

JavaScript also supports the "long-form" `for` loop syntax. It allows us to run a counter for the index ourselves, and access the array's elements manually using that index. This gives us complete control. We can achieve the same behaviour as the `for...of` loop above like so.

```js
for (var i = 0; i < sports.length; i++) {
  var currentSport = sports[i];
  var bigSport = currentSport.toUpperCase();
  console.log( bigSport );

  // -> FOOTBALL
  // -> TENNIS
  // -> RUGBY
  // -> SNOOKER
}
```

It can be quite a confusing syntax when you first see it. After the `for` we have three separate statements, separated by semi-colons. (`;`)

```js
for (initialiseCounter; condition; incrementCounter) {

}
```

The `initialiseCounter` section runs once, before we begin looping. Here we tend to declare and set and initial value of some kind of counter variable.

The `condition` is checked before every iteration of the loop. If it's `true`, we loop again, if it's `false`, we stop looping and continue the program after the closing brace. (`}`)

The `incrementCounter` section is run after each iteration of the loop. Here we usually want to change our counter variable in some way so that after the appropriate number of iterations, the `condition` is `false` and the loop can end.

You might not have seen the `i++` syntax in the `incrementCounter` section of this `for` statement. `++` is essentially a shorthand for `i += 1`, as incrementing a number by `1` is so common, (for example, in most `for` loops) there's a special operator to do just that. `i += 1` is just a shorthand for `i = i + 1`.

So why bother with this more complicated syntax if we're just doing the same thing as `for...of` does?

This syntax is much more flexible, we can do almost anything with it. We could increment the index by 2 each iteration, skipping out every second element. Or we start our counter at the last index, decrement our index counter rather than incrementing, and iterate over the array backwards.

```js
for (var i = sports.length - 1; i >= 0; i--) {
  var currentSport = sports[i];
  var bigSport = currentSport.toUpperCase();
  console.log( bigSport );

  // -> FOOTBALL
  // -> TENNIS
  // -> RUGBY
  // -> SNOOKER
}
```
</details>
<details>
<summary>
Objects
</summary>

### Objects

<details>
<summary>
Basics
</summary>


Javascript's objects store data in key-value pairs. We can create one with the object literal notation, `{}`.

```js
var movie = {};
console.log(movie);
// -> {}
```

We can add key-value pairs, a key separated from its associated value by a colon (`:`), and each key-value pair is separated from the next by a comma (`,`). As _all_ keys are `string`s, we don't need to wrap them in quotes. (`'` / `"`)

```js
var movie = {
  title: 'It\'s a Wonderful Life',
  year: 1946,
  language: 'Spanish'
};

console.log(movie);

// -> {
// ->   title: 'It\'s a Wonderful Life',
// ->   year: 1946,
// ->   language: 'French',
// -> }
```

We can access a value by using the dot notation (`.`).

```js
var title = movie.title;
console.log(title);

-> `It's a Wonderful Life`
```

Let's add an array of some of the cast to our movie. We can add new properties using the same dot notation. This time assigning _to_ the property rather than _from_ it.

```js
movie.cast = ['James Stewart', 'Donna Reed'];
console.log(movie);

-> {
->   title: 'It\'s a Wonderful Life',
->   year: 1946,
->   language: 'French',
->   cast: ['James Stewart', 'Donna Reed'],
-> }
```

Let's change the language to `'English'`.

```js
movie.language = 'English';
console.log(movie);

-> {
->   title: 'It\'s a Wonderful Life',
->   year: 1946,
->   language: 'English',
->   cast: ['James Stewart', 'Donna Reed'],
-> }
```

As an alternative to dot notation (`.`) we can use square bracket notation (`[]`).

```js
movie['language'] = 'French';
console.log(movie);

-> {
->   title: 'It\'s a Wonderful Life',
->   year: 1946,
->   language: 'French',
->   cast: ['James Stewart', 'Donna Reed']
-> }
```

Bit more typing but is necessary in some cases. Dot notation won't work when using a property name that contains special characters such a hyphens (`-`) or colons (`:`) etc.

```js
movie.subtitle-language = 'German';

-> ReferenceError: Invalid left-hand side in assignment
```

```js
movie['subtitle-language'] = 'German'; // UPDATED
console.log(movie);

-> {
->   title: 'It\'s a Wonderful Life',
->   year: 1946,
->   language: 'French',
->   cast: ['James Stewart', 'Donna Reed'],
->   subtitle-language: 'German',
->   ratings: { critic: 94, audience: 95 }
-> }
```

Another use case for square bracket notation is when you need to dynamically access properties using a variable. This allows us to write DRY, reusable code.

```js
var propertyToAccess = 'subtitle-language'; // NEW
movie[propertyToAccess] = 'German'; // UPDATED
console.log(movie);

-> {
->   title: 'It\'s a Wonderful Life',
->   year: 1946,
->   language: 'French',
->   cast: ['James Stewart', 'Donna Reed'],
->   subtitle-language: 'German',
->   ratings: { critic: 94, audience: 95 }
-> }
```
</details>
<details>
<summary>
Nested Objects
</summary>


#### Nested Objects

Our movie object now our `rating`, which we keep modifying, and also a `critic-rating`. We could structure this information better by storing it in another object. We've seen that the values of our object's properties can be strings, numbers, even arrays, and they can be regular JavaScript objects as well.

```js
movie.ratings = {
  critic: 94,
  audience: 95
};
console.log(movie);

-> {
->   title: 'It\'s a Wonderful Life',
->   year: 1946,
->   language: 'French',
->   cast: ['James Stewart', 'Donna Reed'],
->   subtitle-language: 'German',
->   ratings: { critic: 94, audience: 95 }
-> }
```
</details>
<details>
<summary>
Iterating Over Objects
</summary>

#### Iterating Over Objects

A common task with a collection of data is iterating. We can do this with the `for...in` which gives us each key in the object in turn. We can then use the key to access the value.

```js
for (var key in movie) {
  var value = movie[key];
  console.log(`The ${key} is ${value}`);

  -> `The title is It's a Wonderful life`
  -> The year is 1946
  -> The language is French
  -> The cast is James Stewart,Donna Reed
  -> The subtitle-language is German
  -> The ratings is [object Object]
}
```

We could also do this with a `for` loop. If we had an array of the object's keys, we could iterate through that array. JavaScript has an `Object.keys` function that does that.

```js
var keys = Object.keys(movie);

for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  var value = movie[key];
  console.log(`The ${key} is ${value}`);

  -> `The title is It's a Wonderful life`
  -> The year is 1946
  -> The language is French
  -> The cast is James Stewart, Donna Reed
  -> The subtitle-language is German
  -> The ratings is [object Object]
}
```
</details>
</details>

## Variable Scope


<details>
<summary>
Function Scope with `var`
</summary>

### Function Scope with `var`

The `var` keyword declares a variable in the current function's scope, is only defined within that function, and can't be seen outside it.

```js
var secretsFunction = function () {
  var pinCode = [0, 0, 0, 0];
  console.log('pinCode inside secretsFunction:', pinCode);
  // -> pinCode inside secretsFunction: [ 0, 0, 0, 0 ]
}
secretsFunction();
console.log('pinCode outside secretsFunction:', pinCode);
// -> ReferenceError: pinCode is not defined
```

This means that our variables aren't all in the same global scope. When working globally scoped variables, we can end up with variable name clashes. `var` saves us from this.

#### Lexical Scope

Lexical scope: functions capture the variables from the parent scope in which they are defined. We can access variables inside the function that are declared outside the function.

```js
var name = 'Jill'; // NEW
var secretsFunction = function () {
  var pinCode = [0, 0, 0, 0];
  console.log('name inside secretsFunction:', name); // MODIFIED
  // -> name inside secretsFunction: Jill
}
secretsFunction();
console.log('name outside secretsFunction:', name); // MODIFIED
// -> name outside secretsFunction: Jill
```
</details>
<details>
<summary>
Block Scope with `let`
</summary>

### Block Scope with `let`

 We want a variable scoped only to the `for` loop's block `{}`. We want block scope, and to get it, we can use the `let` keyword.

```js
var filterNames = function (names, letter) {
  var filteredNames = [];
  for (let name of names) { // MODIFIED
    if (name[0] === letter) {
      filteredNames.push(name);
    }
  }
  console.log('name after loop:', name);
  // -> ReferenceError: name is not defined
  return filteredNames
}
```

Variables declared with `let` are "block scoped" sothey don't exist outside the block `{}`. Like function scopes, any further, nested blocks within a certain block scope will be able to access the `let` declared variable. Anything outside the block (again, in a similar way to how function scopes work) won't be able to access variable within the block where the `let` variable is declared.

Many people argue that you should never use `var`. Using `let` you can still create variables that are scoped to a whole function, by declaring them at the "top level" of the function, outside any other blocks. This can often signal your intentions for the variable better than using `var` and its unusual function scoping behaviour.

Instead of using `var` like this:

```js
let isItFive = function (number) {
  if (number === 5) {
    var result = true;
  }
  else {
    var result = false;
  }
  return result;
}
```

We would use `let` like this:


```js
let isItFive = function (number) {
  let result;
  if (number === 5) {
    result = true;
  }
  else {
    result = false;
  }
  return result;
}
```
</details>
<details>
<summary>
Constants with `const`
</summary>

### Constants with `const`

Sometimes we don't ever intend for a variable to change so we can use `const`. The scope of `const` variables is block scoped just like `let`.

```js
let calculateEnergy = function (mass) {
  const speedOfLight = 299792458;
  return mass * speedOfLight ** 2;
}
let energyOfMe = calculateEnergy(75);
console.log('energyOfMe (if I had a mass of 75kg)', energyOfMe);
// -> energyOfMe (if I had a mass of 75kg) 6740663840526132000
```

The speed of light is a constant, we don't want to be changing it during our function. The `const` keyword will help us out by throwing an error if we try to reassign to that variable. If we set it to `0`, set it to itself multiplied by 2, or even if we increment it by `1` with the `++` operator it will give the error, `TypeError: Assignment to constant variable.`.

```js
let calculateEnergy = function (mass) {
  const speedOfLight = 299792458;
  speedOfLight++ // NEW
  // -> TypeError: Assignment to constant variable.
  return mass * speedOfLight ** 2;
}
let energyOfMe = calculateEnergy(75);
console.log('energyOfMe (if I had a mass of 75kg)', energyOfMe);
```

We have to remove any code which reassigns the value of `speedOfLight` in order to make our code run at all.

```js
  // speedOfLight++ // MODIFIED
```

There are a couple more variables in this code that we never want to reassign. What happens if we allow our function assignment by reassigned?

```js
let calculateEnergy = function (mass) {
  const speedOfLight = 299792458;
  // speedOfLight++
  return mass * speedOfLight ** 2;
}
calculateEnergy = () => 0
let energyOfMe = calculateEnergy(75);
console.log('energyOfMe (if I had a mass of 75kg)', energyOfMe);
// -> energyOfMe (if I had a mass of 75kg) 0
```

We probably shouldn't allow our function to be reassigned now that we can prevent it. The same is true of the `energyOfMe` variable, why would we want to let it change? We get the result of the function, and all we do with it is `log` it out, we don't want it to change.

```js
const calculateEnergy = function (mass) { // MODIFIED
  const speedOfLight = 299792458;
  // speedOfLight++
  return mass * speedOfLight ** 2;
}
// calculateEnergy = () => 0 // MODIFIED
const energyOfMe = calculateEnergy(75); // MODIFIED
console.log('energyOfMe (if I had a mass of 75kg)', energyOfMe);
```

`const` isn't going to let us make this mistake. Generally, using `const` as much as possible makes our code more robust and less prone to another developer (or ourselves) accidentally changing something that shouldn't be changed.

However, `const` has its limitations. It _only_ prevents us from reassigning to the constant variable. It won't stop us modifying any mutable objects that are declared with `const`.

```js
const song = {
  title: 'Raspberry Beret',
  artist: 'Prince'
};
console.log('song before mutation', song);
song.title = 'When Doves Cry';
console.log('song after mutation', song);

const songs = [
  song,
  'Happy Birthday',
  'Hey Jude'
];
console.log('songs array before mutation', songs);
songs[1] = 'Call Me Maybe';
songs.pop();
console.log('songs array after mutation', songs);
```

`const` still prevents us accidentally reassigning the variable to a totally new object, so we still want to use it for mutable objects as well as [immutable](https://en.wikipedia.org/wiki/Immutable_object) values like `number`s and `string`s.
</details>
<details>
<summary>
Global Scope
</summary>

### Global Scope

If we don't use one of the key words (`var`, `let` or `const`) when declaring a variable, it will be in global scope, and available everywhere.

```js
const helloWorld = function () {
  result = "Hello World!";
}

console.log(result);
// -> "Hello World!"
```

Polluting the global scope in this way is bad practice. We always want to use a key word when declaring a variable.
</details>

## Constructor Functions & Prototype Objects
<details>
<details>
<summary>
"Classes" in JavaScript
</summary>

### "Classes" in JavaScript

Strictly speaking there is no class construct in JavaScript, although we can achieve something very similar using the constructor function pattern.

Constructor functions might look and behave slightly differently to a traditional class, but they allow us to achieve the same goal: creating objects.
</details>
<details>
<summary>
Constructor Function Notation
</summary>

### Constructor Function Notation

Let's imagine that we want to create a `Person` object to model Shaggy. We can use a constructor function to achieve this in the same way that we might use a class in another language:

```bash
touch person.js
```

```js
// person.js

const Person = function () {

}

const shaggy = Person();
console.log('shaggy:', shaggy);
// -> shaggy: undefined
```

> The correct naming convention for constructor functions is PascalCase / UpperCamelCase.

A constructor function is just like any other function. Seeing as we are not returning anything from our function, the return value of the `Person` function will be `undefined`. As a result the value of `shaggy` is `undefined`.
</details>
<details>
<summary>
The 'new' Operator
</summary>

### The `new` Operator

If we add a `new` operator before our function call, its behaviour changes. Instead of returning `undefined`, it will return an empty `Person` object.

```js
const Person = function () {

}

const shaggy = new Person(); // MODIFIED
console.log('shaggy:', shaggy);
// -> shaggy: Person {}
```

`shaggy` knows that it was created using the `Person` constructor.

> Instructor note: Ask the students not to code along here

If we were to manually return an object from the function, then we would get back a plain object instead. It wouldn't know that it was created using the `Person` constructor.

```js
const Person = function () {
  return { name: 'Shaggy Rogers' }; // NEW
}

const shaggy = new Person();
console.log('shaggy:', shaggy);
// -> shaggy: { name: 'Shaggy Rogers' }
```

The `new` operator is now ignored and the value of `shaggy` is the plain object that we returned. It doesn't even know that it was created via the `Person` constructor function.

This isn't what we want...

The key thing to remember is that we never explicitly return anything from a constructor function because it prevents the `new` operator from working properly.
</details>
<details>
<summary>
Adding Properties to Objects
</summary>

### Adding Properties to Objects

We can give objects properties (also known as attributes) to store information about them (their state). Let's give our person a name property with a `String` value.

To do this we will need to access and modify the `Person` object as it's being constructed. How can we do that?

In JavaScript there is a special keyword that we can use to refer to the object that we're currently creating from inside our constructor function: `this`.

```js
const Person = function () {
  console.log('this:', this); // MODIFIED
  // -> this: Person {}
}

const shaggy = new Person();
console.log('shaggy:', shaggy);
// -> shaggy: Person {}
```

They're the same object! `this` refers to whichever `Person` we're creating at the time.

#### Task: (10 minutes)

- Add a name property with the value `'Shaggy Rogers'` to the object that is returned from our constructor
- `console.log` only `shaggy`'s name property instead of the entire object

<details>
<summary>Example solution</summary>

```js
const Person = function () {
  this.name = 'Shaggy Rogers'; // MODIFIED
}

const shaggy = new Person();
console.log('name:', shaggy.name); // MODIFIED
// -> name: Shaggy Rogers
```

</details>

<br>

Notice that we're able to access `shaggy`'s name property directly. There are no access modifiers in JavaScript. There are ways to encapsulate data, effectively mimicking the `private` access modifier that you may have encountered when working with other languages, but this is a fairly advanced topic in JavaScript.

If a property should share the same initial value across all instances, we can hard code the value in the constructor as we did here with `name`.

People have different names, so in this case we should pass the value in to our constructor function as an argument to make our code more versatile or dynamic:

```js
const Person = function (name) { // MODIFIED
  this.name = name; // MODIFIED
}

const shaggy = new Person('Shaggy Rogers'); // MODIFIED
```

Now we can pass in a name when we create a `Person` object and as a result different people can have different names.
</details>
<details>
<summary>
Adding Methods to Objects
</summary>

### Adding Methods To Objects

Due to the fact that functions are objects that can be stored in variables in JavaScript, we can attach methods to our objects in exactly the same way that we attach properties.

To do this we can use the `this` keyword, give our method a name and then assign an anonymous function as it's value. We can then access the method using the dot (`.`) notation, just like we would if we were accessing a property, and invoke the method by adding brackets (`()`) for our argument list.

```js
const Person = function (name) {
  this.name = name;

  this.greet = function () { // NEW
    console.log(`Hi! My name is ${ this.name }`);
  }
}

const shaggy = new Person('Shaggy Rogers');
shaggy.greet(); // NEW
// -> Hi! My name is Shaggy Rogers
```

> We can use the `this` keyword to refer to the object that is calling our method too; in this case `shaggy`. This is called the context.

Now our object has some behaviour!

If we create another object using the `Person` constructor, it will also have an identical `greet` function attached to it.

```js
const velma = new Person('Velma Dinkley');
velma.greet();
// -> Hi! My name is Velma Dinkley
```

We can also access the method on this new object, which is awesome, but there's a better way to do this. We are essentially creating multiple identical copies of the `greet` method and attaching one to every instance.

```js
console.log('shaggy:', shaggy);
console.log('velma:', velma);

// -> shaggy: { name: 'Shaggy Rogers', greet: [Function] }
// -> velma: { name: 'Velma Dinkley', greet: [Function] }
```

> Instructor note: Ask the class...

Can you think of any disadvantages of storing the same method on multiple objects?

<details>
<summary>Answer</summary>

- Multiple versions of the exact same function object stored in memory

</details>
</details>
<details>
<summary>
Prototypes
</summary>

### Prototypes

Instead of adding methods in our constructor function, we can add our methods to the constructor's prototype object.

#### What is a Prototype Object?

Before we learn about prototype objects in JavaScript, let's think about what the word prototype means in English.

The Oxford English Dictionary defines a prototype as:

*"A first or preliminary version of a device or vehicle from which other forms are developed."*

In JavaScript a prototype object acts as a central store of information which all objects created via a particular constructor function can access.

#### How do we do this?

When we create objects using a constructor function with the `new` operator, the constructor's prototype object is assigned to it. Prototype objects are just objects with key-value pairs, like any other in JavaScript.

Let's access the `Person` object `prototype` and add a greet method to it.

```js
const Person = function (name) {
  this.name = name;
}

Person.prototype.greet = function () { // NEW
  console.log(`Hi! My name is ${ this.name }`);
}
```

We created a new key, `greet`, within the `Person` constructors prototype object and assigned a function as its value.

This method will now be stored only on the shared prototype object, instead of each `Person` instance.

```js
const shaggy = new Person('Shaggy Rogers');
shaggy.greet();
// -> Hi! My Name is Shaggy Rogers

const velma = new Person('Velma Dinkley');
velma.greet();
// -> Hi! My Name is Velma Dinkley

console.log('shaggy:', shaggy);
console.log('velma:', velma);
// -> shaggy: { name: 'Shaggy Rogers' }
// -> velma: { name: 'Velma Dinkley' }
```

Notice that the `greet` function is no longer attached to each object, but they still have access to the method.

We can see these object's prototypes using `Object.getPrototypeOf`.

```js
console.log("shaggy's prototype:", Object.getPrototypeOf(shaggy));
console.log("velma's prototype:", Object.getPrototypeOf(velma));
```

#### How does this work?

If we try to call a method on an object, JavaScript first will check if the method exists on the object itself. If it doesn't find it then it will check the object's prototype.

Therefore when we call `greet()` on `shaggy`, JavaScript will first look for that method on `shaggy`. It won't find it there so JavaScript will check the `Person` prototype and find it there. If the method was not found on the prototype object then JavaScript would conclude that `shaggy.greet` is not a function.

![prototypal inheritance](./images/prototypal_inheritance.png)

*Calling a Method That is Defined on a Prototype Object*

> It is possible to create a prototypal inheritance chain but, like multiple inheritance in other languages, it is usually best to avoid it.

#### Why do we do this?

Storing methods on a prototype, instead of the objects themselves, is more memory efficient. When we do this only one copy of each method exists in memory. If we were to store a copy of every method on every object that we created, then we would be using additional memory to store multiple copies of the exact same function.

#### Task: (15 minutes)

1. Create a new file - pet.js
2. Create a Pet constructor
3. Assign values to the following properties in your Pet constructor via parameters:
	- name
	- species
4. Add an eat method to your `Pet`'s prototype. This method should accept a `food` parameter and output a string containing the `name` property and the `food` that was eaten. For example: `'Scooby Doo ate a Scooby Snack'`.

<details>
<summary>Example solution</summary>

```bash
touch pet.js
```

```js
// pet.js

const Pet = function (name, species) {
  this.name = name;
  this.species = species;
}

Pet.prototype.eat = function (food) {
  console.log(`${ this.name } ate a ${ food }`);
}

const scooby = new Pet('Scooby Doo', 'Dog');
scooby.eat('Scooby Snack');
```

</details>
</details>
<details>
<summary>
Requiring and Exporting Modules
</summary>

### Requiring and Exporting Modules

This is great so far. We can do just about anything that we could do with a class in another language. Now only one thing remains...

Let's get our objects speaking to each other!

> Note: Remove everything apart from the constructor functions and prototype methods from each file

First we'll create another file:

```bash
touch app.js
```

This will be the entry point into our application where we will create objects using our constructors.

To do that we will need to `require` the constructors from the other files:

```js
// app.js

const Pet = require('./pet.js');
const Person = require('./person.js');
```

> The .js file extensions are optional when using `require`.

We're using UpperCamelCase for `Person` and `Pet` here because we're importing the constructor functions and storing them in variables.

Now that we have imported our constructors, let's create an instance of `Pet` and `Person` and access their methods:

```js
// app.js

const scooby = new Pet('Scooby Doo', 'Dog');
scooby.eat('Scooby Snack');

const shaggy = new Person('Shaggy Rogers');
shaggy.greet();
```

We aren't done just yet. If we run app.js now we should hit an error.

```bash
node app.js
# -> TypeError: Pet is not a constructor
```

`Pet` is not a constructor. We didn't tell JavaScript what we would like to export from each file, so we just got back empty objects.

Let's tell JavaScript which objects we actually want to export from each file:

```js
// person.js

module.exports = Person;
```

```js
// pet.js

module.exports = Pet;
```

In this case we want to export our constructor functions.

We can think of `require` as a function that looks at whichever file we tell it to and gives us back the value of `module.exports` for that file.

#### Task: (15 minutes)

- Assign a pet property in the `Person` constructor via a parameter
- Add a `feedPet` method to `Person.prototype` which:
	- Accepts a `food` parameter
	- Outputs a string containing the person and pet's names and the food. For example: `'Shaggy Rogers fed Scooby Doo a Scooby Snack'`
	- Invokes the pet's `eat` method and passes the `food` to it

<details>
<summary>Example solution</summary>

```js
// person.js

const Person = function (name, pet) { // UPDATED
  this.name = name;
  this.pet = pet; // NEW
}

Person.prototype.greet = function () {
  console.log(`Hi! My name is ${ this.name }`);
}

Person.prototype.feedPet = function (food) { // NEW
  const message = `${ this.name } fed ${ this.pet.name } a ${ food }`;
  console.log(message);
  this.pet.eat(food);
}
```

```js
// app.js

const scooby = new Pet('Scooby Doo', 'Dog');
const shaggy = new Person('Shaggy Rogers', scooby); // UPDATED

shaggy.greet();
shaggy.feedPet('Scooby Snack');
// -> Hi! My name is Shaggy Rogers
// -> Shaggy Rogers fed Scooby Doo a Scooby Snack
// -> Scooby Doo ate a Scooby Snack
```

</details>
</details>
</details>


## Test-Driven Development Using Assert and Mocha

<details>
<summary>
Writing Tests with Assert
</summary>

### Writing Tests with Assert


Node ships with the `assert` module out of the box, but if we want to use it then we have to `require` it.

```js
// play.js

const assert = require('assert');
```

Now we're ready to start writing tests.
With the `assert` module, we can use any of its methods. The `equal()` method checks if two values are the same.

```js
assert.equal(true, true);
```

We can then run our tests in the same way that we would run any other .js file.

```sh
node play.js
```

We don't get feedback. Node only tells us if our tests fail. Let's break our test.

```js
assert.equal(true, false);
```

```sh
node play.js

# -> AssertionError [ERR_ASSERTION]: true == false
```

>Note: Assert will only show us one failing test at a time. Comment out any failing tests before moving on

Better than nothing but not very descriptive.

Another potential issue that we could encounter when using  `equal()` is that it uses JavaScript's abstract equality operator (`==`).

If the two parameters are of different types then JavaScript will first try to find a common type for them before determining whether or not they are equal.

The following test will convert the string `'1'` to a numerical value before performing a strict comparison on them, deciding that they are equal and passing.

```js
assert.equal(1, '1');
```

Just like using the abstract equality operator (`==`) elsewhere in our code this can lead to unexpected behaviours, such as the following test passing.

```js
assert.equal([], ![]);
```

We should be as specific as possible therefore avoid using `equal()`.

#### `assert.strictEqual()`

Another method, `strictEqual()`, uses JavaScripts strict equality operator (`===`), which should be used instead of `equal()` so that we can be certain that our tests are passing or failing for the right reasons.

The following test will fail.

```js
assert.strictEqual(1, '1');
```

```sh
node play.js

# -> AssertionError [ERR_ASSERTION]: 1 === '1'
```

The two values are not strictly the same so this is typically the desired behaviour of our tests.

Another point to remember is when comparing objects using `equal()` or `strictEqual()` JavaScript will check if they are the same object.

The following test will fail as a result of this.

```js
assert.strictEqual([1, 2, 3], [1, 2, 3]);
```

The arrays look the same but they aren't physically the same array.

The following test, however, will pass because both variables refer to the exact same array.

```js
const firstArray = [1, 2, 3];
const secondArray = firstArray;
assert.equal(firstArray, secondArray);
```

#### `assert.deepEqual()` and `assert.deepStrictEqual()`

The methods `deepEqual()` and `deepStrictEqual()` look at the values contained within the object and use those to determine if the objects are equal, rather than checking if the object are the same object.

The following test will pass because even though the first and second parameters are not the same array they contain values which are equal.

```js
assert.deepEqual([1, 2, 3], [1, 2, 3]);
```

Similarly to `equal()`, `deepEqual()` uses JavaScript's abstract equality operator (`==`). We can mix `String`s and `Number`s and the test will still pass.

```js
assert.deepEqual([1, 2, 3], ['1', '2', '3']);
```

We can use `deepStrictEqual()`, which uses JavaScript's strict equality operator (`===`) to avoid this behaviour. The following test will fail because the contents of the array are not strictly the same values.

```js
assert.deepStrictEqual([1, 2, 3], ['1', '2', '3']);
```

```sh
npm test

# -> AssertionError [ERR_ASSERTION]: [ 1, 2, 3 ] deepStrictEqual [ '1', '2', '3' ]
```

Third-party assertion libraries are available if you need something more fully featured but Assert should be able to take care of all of our needs for the time being.
</details>
<details>
<summary>
Mocha
</summary>

### Mocha


Mocha supports a number of different syntaxes. The type we're going to use is _Behaviour Driven Development_, or BDD.

BDD is an extension of TDD which attempts to focus on the user, and the product. Tests written in a BDD style will follow the format "It should...", and they should tie in closely to the user stories that you or your UX colleagues should have written.

> (As a... I want to... So that...)

The first thing that we'll need to do is create some files to work in. We're going to model a taxi, so we'll need a file for our `Taxi` model and corresponding spec file. We typically create a specs folder to keep our tests organised separately from our models and name our test files the same as our models with a \_spec suffix. For example, the test file for our taxi model will be called taxi_spec.js.

```sh
touch taxi.js
mkdir specs
touch specs/taxi_spec.js
```

We're going to be using Mocha to write and run our tests, so we have to install it using npm.

We'll use Mocha during development but our tests aren't necessary to actually run our application, so we'll save Mocha as a dev dependency.

If someone was to then clone our project with the intention of running it without modifying the code, they could use `npm install --production` to avoid installing our dev dependencies.

```sh
npm init
npm install --save-dev mocha
```

We have a test file and we've installed Mocha, so now we have everything that we need. How do we run our tests?

We want to use Mocha to run all of the files in our specs folder.

```sh
mocha specs

# -> zsh: command not found: mocha
```

We installed Mocha as a dependency of our project, but our Terminal has no idea what Mocha is.

There are a few ways that we could solve this problem: we could install Mocha globally, which would allow us to use this command, but then if another developer were to try to run our code then they would have to install Mocha too. Instead we can use an npm script to tell npm to run our tests with Mocha. We installed Mocha using npm, so npm knows what Mocha is.

We can create npm scripts by adding a name to refer to them by and the command that we want to execute as a key-value pair to the `"scripts"` object in our package.json.

npm expects us to have a `"test"` script, so it provides one by default. We can then update it's value so that it runs our tests for us.

```js
// package.json

"scripts": {
  "test": "mocha specs" // UPDATED
},
```

Now that we've added our npm script we can run it using `npm test` while we're at the same level as our package.json.

```sh
npm test

# -> 0 passing
```

When we run `npm test` npm looks at the scripts that we have defined in our for the key `"test"`, when it finds it executes the string value in Terminal for us; in this case `mocha specs`.

The script runs okay but we have 0 passing tests because we haven't written any tests yet.

If we want to start writing tests then the first thing that we have to do is require Assert and the model that we want to test. We'll be testing our `Taxi` model.

```js
// taxi_spec.js

const assert = require('assert');
const Taxi = require('../taxi.js');
```

#### `describe()`

Before we write our first test let's take a look at one of the organisational functions that Mocha gives us: `describe()`.

Describe can be used to group similar tests. In this case we are going to use `describe()` to label our tests with the name of the relevant model. This will be displayed in the Terminal output when we run our tests. Later on when we have a lot of different models this will make the output of our tests a lot easier to read.

We'll call Mocha's `describe()` function and pass it two arguments:

1. The name of the model that we're testing as a `String`, in this case `'Taxi'`
2. A function which will contain all of the tests associated with the thing that we're describing. This syntax might look a little bit strange right now but we'll learn more about this very soon.

```js
describe('Taxi', function () {

});
```

#### `it()`

Inside of the function that we're passing to `describe()` we can use the `it()` function for each of our test cases.

For the moment, we're just going to pass a single argument to `it()`: a `String` describing the test case.

We're going to add a manufacturer property to our `Taxi` so let's describe our test accordingly.

```js
describe('Taxi', function () {
  it('should have a manufacturer');
});
```

When combined with `it()` our test names should be readable and expressive. For example:

- `it('should have a name')`
- `it('can calculate the number of days until Christmas')`

Ideally, these should come from the user stories that you or your colleagues have written. This will help to keep you focussed on your product, and your MVP.

This also makes the output of our tests meaningful and errors easier to interpret as a result. If we run `npm test` now we can see what our test output will look like.

Notice that this test is listed as being `pending`. Pending tests are just tests that we haven't tackled yet - they're neither passing, nor failing.

It can be quite useful to write a few pending tests at once, so that we can see what we have to do. Let's add another:

```js
describe('Taxi', function () {
  it('should have a manufacturer');
  it('should have a model');
});
```

Now, we should have two pending tests. Let's get started on writing the body of the test.

In order to write the body of the test, we have to do something a bit odd; just as we did with `describe`, we have to pass a function as the second argument to `it()`.

```js
describe('Taxi', function () {
  it('should have a manufacturer', function(){

  });

  it('should have a model');
});
```

This _anonymous_ function will contain the setup for our test, and our `assert`.

#### Arrange-Act-Assert

As with many other testing frameworks we can use the arrange-act-assert pattern here.

1. Arrange: Perform any setup that might be required for the test
2. Act: Perform the action that we want to test
3. Assert: Check that our action had the expected result

```js
it('should have a manufacturer', function () {
  const taxi = new Taxi('Toyota');      // Arrange
  const actual = taxi.manufacturer;     // Act
  assert.strictEqual(actual, 'Toyota'); // Assert
});
```

We've written our test but it should fail because we haven't written the code to make it pass yet. As always we should run our test now so that we can see it fail.

If you've never seen a test fail then you can't be sure that it's a good test.

```sh
npm test

# -> 1 failing
# -> TypeError: Taxi is not a constructor
```

Now we know exactly where to start. Let's create the constructor function for our `Taxi`, making sure not to forget our `module.exports`.

```js
// taxi.js

const Taxi = function (manufacturer) {
  this.manufacturer = manufacturer;
}

module.exports = Taxi;
```

Now we should be able to run our test again and it should pass.

```sh
npm test

# -> 1 passing
```

Next we're going to add a model property to our `Taxi`. Let's write the test first.

```js
// taxi_spec.js

describe('Taxi', function () {
// ...

  it('should have a model', function () { // NEW
    const taxi = new Taxi('Toyota', 'Prius');
    const actual = taxi.model;
    assert.strictEqual(actual, 'Prius')
  });
});
```

Again, we should run our test so that we can see it fail. If it passed already then we would know that we had made a mistake.

```sh
npm test

# -> 1 passing
# -> 1 failing
# -> AssertionError [ERR_ASSERTION]: undefined === 'Prius'
```

`taxi.model` gives us back undefined, not the `String` that we want. That's because we haven't set that property in the constructor yet.

Let's go ahead and add that model property to our `Taxi`.

```js
// taxi.js

const Taxi = function (manufacturer, model) {
  this.manufacturer = manufacturer;
  this.model = model;
}
```

Now we should be able to run our tests again and see them both pass.

```sh
npm test

# -> 2 passing
```

#### `beforeEach()`

So far, so good. There's some repetition in our test cases though. We're creating a new `Taxi` object in each test.

Mocha gives us some handy hooks which we can use to execute code at specific points during testing. In this case we want to create an object before each test, so we can use `beforeEach()`.

```js
// taxi_spec.js

describe('Taxi', function () {
  beforeEach();

  // ...
});
```

In contrast to the Mocha functions that we've used so far `beforeEach()` doesn't require a `String`. We'll just pass it the function that we want to execute before each of our test cases.

```js
let taxi;

beforeEach(function () {
  taxi = new Taxi('Toyota', 'Prius');
});
```

> We have to declare any variables outside of `beforeEach()` to prevent them from being scoped locally to that function.

We can now remove the `Taxi` objects that we created in each test and use the one that we're creating before each test using the `beforeEach()` hook.

```js
it('should have a manufacturer', function () {
  const actual = taxi.manufacturer;
  assert.strictEqual(actual, 'Toyota');
});

it('should have a model', function () {
  const actual = taxi.model;
  assert.strictEqual(actual, 'Prius');
});
```

#### Task: 5 minutes

Add a `driver` property to our taxi. This should be a `String` containing the driver's name.

- Write a test to ensure that our taxi has a driver.
- Add a `driver` property to the taxi.

<details>
<summary>Example solution</summary>

```js
// taxi_spec.js

it('should have a driver', function () {
  const actual = taxi.driver;
  assert.strictEqual(actual, 'Jane');
});
```

```js
// taxi.js

const Taxi = function (manufacturer, model, driver) { // UPDATED
  this.manufacturer = manufacturer;
  this.model = model;
  this.driver = driver; // NEW
}
```

</details>

#### Nested `describe()`s

`describe()`s can be nested within each other. This can be useful for grouping similar tests. We might have several tests cases to test the various outcomes of one piece of functionality, for example.

We're going to add an array of passengers to our `Taxi`, so let's use another `describe()` to group all of our tests relating to passenger functionality together.

```js
// taxi_spec.js

describe('Taxi', function () {
// ...

  describe('passengers', function () {

  });
});
```

We can use then use `it()` for any test cases relating to this functionality, just like we did earlier.

First let's write a test to assert that we initially have an empty array of passengers.

```js
describe('passengers', function () {
  it('should start with an empty array of passengers');
});
```

Remember: if we want to assert that two array objects have the same values then we have to use `assert.deepEqual()`.

```js
describe('passengers', function () {
  it('should start with an empty array of passengers', function () {
    const actual = taxi.passengers;
    assert.deepStrictEqual(actual, []);
  });
});
```

Let's run our test and see it fail.

```sh
npm test

# -> 3 passing
# -> 1 failing
# -> AssertionError [ERR_ASSERTION]: undefined deepEqual []
```

Our test fails because `taxi.passengers` is `undefined` and we want it to be an empty array. That's because we haven't defined it in our constructor.

Let's add that empty array of passengers to our `Taxi` constructor now.

```js
// taxi.js

const Taxi = function (manufacturer, model, driver) {
  // ...
  this.passengers = []; // NEW
}
```

Now our test should pass.

```sh
npm test

# -> 4 passing
```

Next we're going to extend our `Taxi`, adding additional functionality for the passengers array.

#### Task: 20 minutes

Employing TDD, add the following methods to your taxi:

- `numberOfPassengers`
- `addPassenger`
- `removePassengerByName`
- `removeAllPassengers`

A passenger should be represented as a `String` containing the passenger's name.

<details>
<summary>Example Solution</summary>

```js
// taxi_spec.js

it('should be able to return the number of passengers', function () {
  const actual = taxi.numberOfPassengers();
  assert.strictEqual(0, actual);
});

it('should be able to add passengers', function () {
  taxi.addPassenger('Mike');
  const actual = taxi.numberOfPassengers();
  assert.strictEqual(actual, 1);
});

it('should be able to remove a passenger by name', function () {
  taxi.addPassenger('Mike');
  taxi.addPassenger('Lucas');
  taxi.removePassengerByName('Lucas');
  const actual = taxi.numberOfPassengers();
  assert.strictEqual(1, actual);
});

it('should be able to remove all passengers', function () {
  taxi.addPassenger('Mike');
  taxi.addPassenger('Lucas');
  taxi.removeAllPassengers();
  const actual = taxi.numberOfPassengers();
  assert.strictEqual(0, actual);
});
```

```js
// taxi.js

Taxi.prototype.numberOfPassengers = function () {
	return this.passengers.length;
}

Taxi.prototype.addPassenger = function (passenger) {
  this.passengers.push(passenger);
}

Taxi.prototype.removePassengerByName = function (passenger) {
  const indexOfPassenger = this.passengers.indexOf(passenger);
  this.passengers.splice(indexOfPassenger, 1);
}

Taxi.prototype.removeAllPassengers = function () {
  this.passengers.splice(0, this.numberOfPassengers());
}
```

</details>
</details>


## Callback Functions & Enumeration

<details>
<summary>
Introduction
</summary>

### Introduction

A higher order function accepts or returns another function. A callback is a function that is passed to a function as an argument.
JavaScript's built in higher-order functions that handle iterating over arrays; the enumeration methods.
</details>

<details>
<summary>
Higher-order Functions and Callbacks
</summary>

### Higher-order Functions and Callbacks

In JavaScript, functions are first class objects, they can be stored in variables and data structures; and passed as arguments to other functions.

A higher order function is a function that takes a function as an argument or returns a function.

A callback is a function that is passed to another function as an argument.

Before we start writing our own higher-order functions, let's look at using some that are built in JavaScript methods.
</details>

<details>
<summary>
Enumeration Methods
</summary>

### Enumeration Methods

We know we can iterate over an array using a `for of` loop, but there are a number of enumeration methods on the Array prototype that enable us to do the same and some offer us extra functionality. These enumeration methods are higher-order functions; they take in a callback which they invoke for each element of the array.

#### `forEach`

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

#### Using the MDN docs

```js
// ...

numbers.forEach((number, index) => {
  console.log(`This is number ${number} at index position ${index}`);
});
```

#### Task: (5 minutes)

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
<br>

`forEach` doesn't return a value and we can't return anything from the callback that we pass to it. If we try and return from the callback, we are returning into the `forEach` and as `forEach` is implemented in a way that it doesn't do anything with the return value, for have no way of accessing that value. Instead we have to manually handle the value. In this case we have added the modified element into the previously declared empty array. In this way `forEach` is a direct replacement for a `for` loop.
</details>

#### Task: (10 minutes)

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

#### Other enumeration methods (`map`, `filter`, `reduce`)

`map`, `filter` and `reduce` are three commonly used enumeration methods on the Array prototype. They are similar to `forEach`, in that they iterate over the array invoking the callback for each element, passing in the element, but they each have some extra functionality. While we can use `forEach` to achieve the same results, the benefits of using these methods where appropriate include:

- cleaner, more readable and expressive code
- inversion of control - we don't have to worry about the implementation details of how JavaScript `maps`, `filters` or `reduces`

#### Paired discussion (5 minutes)

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

#### Task (15 minutes):

Refactor:

 - `getEvens` to use filter
 - `sumElements` to use reduce

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


#### How are these higher-order functions implemented?

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
</details>

## Introduction to Context and `this`

<details>
<summary>
Introduction
</summary>

### Introduction

We have used the `this` keyword in constructor functions to assign properties to the instance of the object. We have also used it to access an object's properties inside its methods. In both cases `this` refers to the object and allows us to access its properties and methods from inside itself.

In JavaScript, however, `this` inside a function body doesn't always refer to the object where the function is defined. Sometimes it refers to the object that it is being executed by. This is determined by the function type being used, which means we can choose the context `this` refers to. This makes JavsScript very flexible.
</details>
<details>
<summary>
Function Types and Context
</summary>

### Function Types and Context

#### Arrow Function Expressions

**An arrow function expression (`=>`) has definition context.**

`this` always refers to the context in which the function defined. Its context doesn't change.

In the following example, `talk` is an arrow function and so retains its definition context. Therefore it does not have the `person`'s context when being executed on `person` and `this.name` is undefined.

```js
const person = {name: 'Betty'};

const talk = () => {
  console.log(`Hi, I'm ${this.name}`);
}

person.talk = talk;

person.talk();
```

#### `function` Expressions

**A `function` expression has execution context.**

`this` refers to the context in which the function is executed, which means it's context can change.

In the following example the object, `person`, is defined and then a function, `talk`, is defined using the `function` keyword. When `talk` is executed `this.name` is undefined because `talk` does not have `person`'s context.

```js
const person = {name: 'Betty'};

const talk = function () {
  console.log(`Hi, I'm ${this.name}`);
}

talk();
// -> Hi, I'm undefined
```
![`talk` is executed and its `this.name` is undefined](./images/context1.png)

*`talk` is executed and its `this.name` is undefined*

But we can change `talk`'s context. By assigning `talk` to a property on `person`, it is now executed on `person` (`person.talk()`). As a `function` express takes the execution context, `talk` now has the `person`'s context and has access to the `person`'s properties.

```js
const person = {name: 'Betty'};

const talk = function () {
  console.log(`Hi, I'm ${this.name}`);
}

person.talk = talk;

person.talk();
// -> Hi, I'm Betty
```

![`talk` is now executed by `person` (`person.talk()`)](./images/context2.png)

*`talk` is now executed by `person` (`person.talk()`) so its `this.name` has the value `Betty`*
</details>
<details>
<summary>
Context in Protype Methods
</summary>

### Context in Prototype Methods

Let's look at how this affects context when defining methods on an object's prototype.

```sh
atom code/teacher_start.js
```

A `Teacher` has an array of objects, `this.students`. It also has a method called `createStudentNameList` that returns an array of formatted names. `createStudentNameList` is defined with the `function` keyword and so has the context of the object it is executed by: `Teacher`.

```js
Teacher.prototype.createStudentNameList = function () {
  return this.students.map((student) => {
    return `${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`;
  })
}
```

The `this` keyword in `createStudentNameList` refers to the instance of `Teacher` and is used to access its `students` property. If we log `this` in `createStudentNameList` the output is the `Teacher` object.

```js
Teacher.prototype.createStudentNameList = function () {
  console.log(this);
  // --> Teacher { students: [ ... ] }

  // ...
}
```

Just like in the `talk` function example, if we were to use an arrow function to define the prototype methods, the `this` keyword would no longer refer to the instance of `Teacher` within our method.

```js
Teacher.prototype.createStudentNameList = () => {
  console.log(this);
  // --> {}

  // ...
}
```

For this reason we don't use arrow function expressions when adding methods to an object's prototype.
</details>
<details>
<summary>
Context in Callbacks
</summary>

### Context in Callbacks

Knowing the context of different function types enables us to decide which function type to use when defining callbacks.

At the moment we are not concerned about the context of the callback passed to `map` because we don't use the `this` keyword inside it. However, let's say we want to abstract the logic that formats the name in `createStudentNameList` into a separate function, `getStudentPrettyName`.


```sh
atom code/teacher_end.js
```

```js
Teacher.prototype.createStudentNameList = function () {
  return this.students.map((student) => {
    this.getStudentPrettyName(student);
  });
}

Teacher.prototype.getStudentPrettyName = function (student) {
  return `${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`;
}
```

We want the callback that we pass to `map` to have the context of the `Teacher` object, so that we can access the teacher's `getStudentPrettyName` inside it. As we have defined the callback using an arrow function, it retains its definition context, which is the `Teacher` object. When we call `this.getStudentPrettyName` it will look for the method on the `Teacher` prototype.

If we were to use a `function` expression to define the callback, `this` would refer to its execution context.

```js
Teacher.prototype.createStudentNameList = function() {
  return this.students.map(function(student) {
    this.getStudentPrettyName(student)
  });
}
```

So now when we call `teacher.createStudentNameList()` we get a TypeError. The error tells us that, as `this` doesn't refer to the `Teacher` object, it can't find the method `getStudentPrettyName`.

```js
const teacher = new Teacher();
teacher.createStudentNameList()
// -> `TypeError: this.getStudentPrettyName is not a function`
```

#### Why is This Useful?

In this case we would use an arrow function expression to define the callback, but there may be other occasions when we want to make use of the execution context. JavaScript allows us to do either, using the different types of functions.
</details>


## Closures

<details>
<summary>
Closures
</summary>

### Closures  

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

#### Task:

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

#### Solution:

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
</details>

## The Document Object Model
<details>
<summary>
DOM Intro
</summary>

### About the DOM

The DOM can be described as being an object-orientated interface that lets you interact with web apps. It is - at its most basic - a big object that contains a representation of all of the elements that make up a web page.

When the browser receives some HTML in response to an HTTP request, it parses the HTML into the DOM - this is the browser's representation of the HTML that has been written.

The DOM is what the browser uses to display the HTML elements of each web page. If we change the DOM - by interacting with it using JavaScript - then we can change what is displayed to the user!

</details>

<details>
<summary>
Investigating the DOM
</summary>

### Investigating the DOM

We can see from a web app like Gmail, or Trello, that the DOM can be dynamically updated - to add or remove HTML elements, for example.

Once those elements have been changed dynamically, we can't rely on the HTML we see in `view source` reflecting the current state of the DOM. They have become out of sync. So how can we view the current state of the DOM?

Most web browsers come with a built-in DOM viewer, and it's very likely that you've used it already! We're going to take a closer look at Google Chrome's devtools.

Open up [BBC News](http://bbc.co.uk/news) and check it out.

![Devtools](./images/inspector.png)

You might have thought that you were looking at some HTML here, but we're actually looking at a representation of the DOM. And because we're looking at the DOM, we can make changes to it!


#### window and document

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
</details>

<details>
<summary>
Advanced Dev Tools
</summary>

### Advanced Devtools

Before we get to know the DOM, we should take a bit of time to familiarise ourselves with some of the development tools that are in the web browser.

Let's take a look at the browser's `console`.

#### Task: Exploring the Console (5 minutes)

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

#### Breakpoints

We can use our developer tools as a debugger.

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

#### DOM Breakpoints

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

#### Network Tab

The network tab displays information about all of the resources that our page needs to display itself. For example, we can see information about all the individual requests and responses for our images, CSS, and JavaScript files, among others.

We can also see the same information about our main document, via the `doc` tab.

We can filter the type of request by clicking on the relevant tab or typing in the "filter" field.

This tab can be really helpful to diagnose whether files are loading or not. For example, if you aren't seeing any styles applied, you can check to make sure that the response code for your stylesheet is `200`, as it should be.

If there is a problem with one of your files, it should be highlighted in red.

Notice that we can click on any individual request to get more information about it, or the related response.

</details>

## Manipulating the DOM

<details>
<summary>
Querying the DOM
</summary>

### Querying the DOM

There are a few ways that we can access DOM elements.

The `document` object offers a set of methods that we can use to access any DOM element using its id, class or tag name. We can call these methods, passing them a query string, and the document will give us back an object representing the element on our page.

#### `getElementByID`

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

#### `getElementsByClassName`

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

#### `getElementsByTagName`

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

#### `querySelector`

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

#### `querySelectorAll`

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

</details>

<details>
<summary>
Manipulating DOM Elements
</summary>

### Manipulating DOM Elements

Now that we can access DOM elements let's learn how to manipulate them. The ability to do this is what makes JavaScript essential in modern web development.

First, we'll learn how we can dynamically change the text displayed in the heading.

#### `textContent`

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

#### Task: (5 minutes)

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

</details>

<details>
<summary>
Creating DOM Elements
</summary>

### Creating DOM Elements

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

#### Task: (30 minutes)

It's time to clean up our code. Begin by extracting the process of creating an `img` element into its own function. Once you have done that use a `for` statement to create an `img` for each of the images in our images directory.

1. Declare a function called `createImage`. It should have two parameters:
	- the `src` value for the image
	- the `container` that we want to append the image to.
2. Extract our `img` creation code into your `createImage` function.
3. Using a `for` statement, invoke `createImage` 15 times; once for each of our images.


</details>

## Events

<details>
<summary>
Intro To Events
</summary>

### Intro

As a language, JavaScript follows a number of programming styles, or _paradigms_. One these paradigms is known as _event-driven programming_.

Event-driven programming has its roots in the earliest days of graphical user interfaces. We use it to listen for and react to events in our applications. Sometimes these events will be triggered by the system itself (for example, by a temperature sensor, or by a web page loading in the browser), but more commonly, events are triggered by user-input, for example, a button click, a key press, or a form submission.

When an event is triggered, a specific piece of code is executed. When writing JavaScript, we can use the power of callback functions to specify which piece of code is executed when an event is dispatched.

</details>
<details>
<summary>
Adding Callbacks to Events
</summary>

### Adding callbacks to events

In order to react to an event, we need to ask three questions:

1. Which element will be dispatching the event?
2. Which event should we listen for?
3. Which piece of code should run when the event is dispatched?

We've actually already been adding a callback to an event. We do it every time we write:

```js
  document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello World")
  });
```

1. The element that will be dispatching the event is the `document`.
2. The event that is being listened for is `DOMContentLoaded`.
3. The code that will be run when the event is dispatched is the callback containing the `console.log`.

`addEventListener()` is used to add the callback to the event.

We call the same method, `addEventListener()`, on DOM elements to add behaviour to their events. `addEventListener()` takes two arguments: The event as a string and a callback to be invoked when the event is fired.

Other examples include:

- to listen for a select's `change` event, in order to render details about the selected option to the page
- to listen for a form's `submit` event, in order to makes a post request


</details>
<details>
<summary>
Manipulating the DOM with Events
</summary>

### Manipulating the DOM with Events

Looking at the start code, we can see that there are various html elements defined in index.html (a button, an input, a select and a form). At the moment these elements don't do anything when interacted with in the browser. We are going to add event listeners to these elements, so that when a user interacts with them, the page is updated.

If we look at the MDN docs, we can see a list of events and their targets listed down the left-hand side:
[https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

If you click on the `click` event, it tells us the target of this event can be any DOM element, so let's add a behaviour to our button.

#### Buttons

We want the button to listen for a `click` event and update the paragraph below it from being, "That button has not been clicked." to "That button has definitely been clicked."

Let's use the three steps we listed before to plan the event listener:
1. Element - button
2. Event - `click`
3. Callback - responsible for updating the paragraph

We will start by querying the DOM to get the button element. Then we will add the event listener to the button, passing in the event as a string and a callback that we haven't written yet.

```js
// app.js

document.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('#button'); // NEW
  button.addEventListener('click', handleButtonClick); // NEW
});
```

Now let's write the callback `handleButtonClick`, that will be responsible for updating the paragraph text. It will query the DOM for the paragraph element and set it's `textContent`.

```js
// ...

const handleButtonClick = function() { // NEW
  const resultParagraph = document.querySelector('#button-result');
  resultParagraph.textContent = 'That button has definitely been clicked.';
}

```

Refresh the browser and see the paragraph text update when the button is clicked.


#### Text Inputs

We want the input to listen for a [`input`](https://developer.mozilla.org/en-US/docs/Web/Events/input) event and update the paragraph below it from being, "Nothing has been typed yet." to "You typed:" followed by the text that has been typed into the input.

Planning for the event listener:
1. Element - input
2. Event - `input`
3. Callback - responsible for getting the value from the input and updating the paragraph

This will follow the same pattern as handling the button click, but this time we will need to get the value from the input (the text that's been typed) so it can be displayed. Let's start by adding the event listener and passing in a callback that we haven't written yet.

```js
document.addEventListener('DOMContentLoaded', () => {
  // ...

  const textInput = document.querySelector('#input'); // NEW
  textInput.addEventListener('input', handleInput); // NEW
});
```

As before, we can now write the callback `handleInput` that is going to be responsible for getting the value from the input and updating the paragraph text below.

```js
// ...

const handleInput = function() {
  // 1. Get value from Input
  // 2. Update paragraph text
}
```
So how do we get the value back from the input?

#### The Event Object

When we pass a callback to `addEventListener`, `addEventListener` passes an event object to our callback that contains various information about the event that was dispatched. Let's start by `log`ing the `event` and having a look at it.

```js
// ...

const handleInput = function(event) {
  console.log(event);
}
```

Now when we type something into the input in the browser, we see the `event` object in the console. It has a property called `target`, which is the element that dispatched the event (in this case the text input). `target` has a property called `value` which contains what text that has been typed into the input.

#### Task: (5 minutes)

Complete the callback so that it updates the paragraph text to be "You typed:" followed by the text that has been typed.

<details>
<summary>Example Solution</summary>

```js
// ...

const handleInput = function(event) {
  const resultParagraph = document.querySelector('#input-result');
  resultParagraph.textContent = `You typed: ${event.target.value}`;
}
```

</details>


#### Selects  

When an option is selected from the select, we want to update the paragraph below it from being, "No choice has been made." to being "You went with:" followed by the value of the selected option.

Planning for the event listener:
1. Element - select
2. Event - `change`
3. Callback - responsible for getting the value from the select and updating the paragraph

#### Task: (5 minutes)

1. Add an event listener to the select element that listens for the `change` event, passing in the callback `handleSelectChange`, which you haven't written yet.

2. Write the callback `handleSelectChange` so that it updates the paragraph text below the select to be "You went with:" followed by the value of the selected option.

**Hint: `log` the event object to check how to get the value from the select**

<details>
<summary>Example Solution</summary>

```js
document.addEventListener('DOMContentLoaded', () => {
  // ...

  const select = document.querySelector('#select');
  select.addEventListener('change', handleSelectChange);
});

// ...

const handleSelectChange = function(event) {
  const resultParagraph = document.querySelector('#select-result');
  resultParagraph.textContent = `You typed: ${event.target.value}`;
}
```

</details>

#### Forms

When the form is submitted, we want to update the paragraph below it from being, "Who's it going to be?" to being "Your name:" followed by the value of the first and last name inputs.

Planning for the event listener:
1. Element - form
2. Event - `submit`
3. Callback - responsible for getting the values from the form inputs and updating the paragraph

Let's start by adding the event listener to the form element and writing the callback as we have been doing previously. To get input values back from a form, we use the ID of the input. So in this case we will log `event.target.first_name.value` to get the value of the first name.

```js
const form = document.querySelector('#form');
form.addEventListener('submit', handleFormSubmit);

const handleFormSubmit = function(event) {
  console.log(event.target.first_name.value);
}
```

But wait, we have a problem. When we try to submit the form there is nothing displayed in the console. That's because by default a html form, when submitted, sends a post request to the current URL. This means our page has been refreshed and with it, the state of the application has been lost. Because we want to handle our requests with javascript, we are going to prevent this default behaviour by using a method called `preventDefault` on the `event` object.

```js
const form = document.querySelector('#form');
form.addEventListener('submit', handleFormSubmit);

const handleFormSubmit = function(event) {
  event.preventDefault();
  console.log(event.target.first_name.value);
}
```
Great. Now we can see the `event.target.first_name.value` in the console.

#### Task: (5 minutes)

Complete the callback so that it updates the paragraph text below the form to be "Your name:" followed by the first and second names submitted by the form.

<details>
<summary>Example Solution</summary>

```js
const handleFormSubmit = function(event) {
  event.preventDefault();
  const resultParagraph = document.querySelector('#form-result');
  resultParagraph.textContent = `
    Your name:
    ${event.target.first_name.value}
    ${event.target.last_name.value}
  `
}
```

</details>
</details>

<details>
<summary>
A Note on Context
</summary>

### A Note on Context

<details>
<summary>What is the value of `this` inside the callbacks we have written?</summary>

Because we have used `function` expressions to define the callbacks, the `this` refers to the execution context. In this case the object the callback is executed on is the DOM element. So `this` refers to the DOM element that dispatched the event.
<br>
</details>

In the callbacks `event.target` refers to the DOM element that dispatched the event. `this` also refers to the DOM element, so we could replace `event.target` with the `this` keyword when accessing the inputs values.

```js
const handleFormSubmit = function(event) {
  event.preventDefault();
  const resultParagraph = document.querySelector('#form-result');
  resultParagraph.textContent = `
    Your name:
    ${this.first_name.value}
    ${this.last_name.value}
  ` // UPDATED
}
```

If we had used an arrow function expression to define the callbacks, `this` would retain its definition context, and therefore would not refer to the DOM element.

</details>

## Modular Front End

<details>
<summary>
Intro
</summary>

### Intro

An architectural pattern informs our decision making around directory and file structure, and the responsibilities of the application's components.

In this lesson we are going to look at the publish-subscribe pattern (pub/sub).

#### Design Patterns

One popular architectural design pattern we have used previously is Model-View-Controller (MVC). The MVC pattern allowed us to structure our applications and split the responsibilities into the following components:

- Models that are responsible for managing the application data
- Views that are responsible for the user interface
- Controllers that are responsible for defining a set of routes to handle incoming requests, pulling data from models, and passing it to views

![Diagram of MVC pattern](images/mvc.png)

*Diagram of MVC pattern where the controller receives requests via user interaction, handles communication with the model and updates the view*

The MVC pattern is useful when working with the traditional request-response cycle, where user interactions trigger requests to the server via a set of routes.

Dynamic JavaScript applications often only have one route that the browser uses to make an initial request, loading the HTML and other resources including the JavaScript files. The JavaScript is then used to handle the user interaction, dynamically updating what is rendered to the page in real-time. This replaces the traditional request-response cycle.

A JavaScript application with one route that dynamically renders the page's content is called a Single-Page-Application (SPA).
</details>

<details>
<summary>
The Publish-Subscribe Pattern
</summary>

### The Publish-Subscribe Pattern

If we don't have controllers that are responsible for communicating between the views and models, listening for user interactions and responding with the relevant data, how can we prevent our models and views becoming tightly-coupled (where they are dependent on one another)? The publish-subscribe pattern (pub/sub) is a messaging pattern that allows us to publish data from one part of the application and receive it in another.

In order to understand the pub/sub pattern, let's use the analogy of a radio station and a radio. The radio station broadcasts its content on a certain channel. If you want to listen to the content, you tune your radio to that channel. The pub/sub pattern works just like this. Components can subscribe to a channel and wait for content to be published. Other components can then publish to that channel, sending data to the subscribers.

![Diagram of Pub/Sub patter](images/pubsub.png)

*Diagram of Pub/Sub pattern, where views and models communicate by publishing on and subscribing to channels*

The pub/sub pattern lets us write loosely coupled components because models and views publish on and subscribe to channels rather than being dependent on each other to communicate. This helps makes our application extensible and maintainable.

</details>

<details>
<summary>
Custom Events
</summary>

### Custom Events

We want our models and views to be able to publish data on channels to let the rest of the application know that something has happened. How can we do this? We will use [Custom Events](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).

We have already been using events to send messages in our front-end JavaScript apps, but rather than using an element's predefined event (such as button's `click` event, or a form's `submit` event), we are going to create our own events using the web API's `CustomEvent`s to send data from one component to another.

1. Components can subscribe to a channel (listen for a custom event)
2. By subscribing, it waits for content to be published (for the event to be dispatched).
3. Other components can then publish to that channel, sending data to the subscribers (dispatch events with data attached).

#### Creating a Custom Event

> Instructor note: hand out custom_events_start

Run the start point, installing the dependencies and running webpack:

```bash
npm install
npm run build
```
Open index.html in the browser, and check the console for a log confirming the JavaScript has loaded.

Before we create our own `CustomEvent` called `my-custom-event`, let's start by setting up a listener for it. When adding event listeners previously, we considered three pieces of information:

1. The element listening for the event, e.g. a button
2. The event we are listening for, e.g. 'click'
3. The callback function we want to execute once the event is dispatched, e.g. a function that displays some text on the page

We will follow exactly the same pattern when creating custom events:

1. The element listening for the event will be the `document` object.
2. The event we will be listening for is going to be `my-custom-event`. (Because it is a *custom* event, its name is defined by us.)
3. The callback function will be responsible for publishing the data on the custom event, `my-custom-event`.

Let's do that in app.js.

```js
// src/app.js

document.addEventListener("DOMContentLoaded", function(){
  document.addEventListener("my-custom-event", function(event){ // NEW
    console.log('event', event);
  });
});
```

Now that we've set up our event listener, we can create our first custom event (`my-custom-event`) and dispatch it.

```js
// src/app.js

document.addEventListener("DOMContentLoaded", function(){
  document.addEventListener("my-custom-event", function(event){
    console.log('event', event);
  });

  const event = new CustomEvent("my-custom-event"); // NEW
  document.dispatchEvent(event); // NEW
});
```

If you refresh your browser, you will see the event is being logged in the console. Have a look through the structure of the `CustomEvent` object. In particular, notice the `detail` property, which is currently `null`. This is the property on which we will send the data.

#### Adding Data to Our Event

We have created and dispatched a custom event, but we haven't attached any data to it. As we want to use these custom events to pass data around our application, we need to know how to do that next.

Usually we would want to add useful data to be dispatched with the event, such as values from a submitted form or data received from a database. For now, let's add a `"Hello World!"` string. We do this by passing an object as the second argument to the `CustomEvent` constructor. The object must have a `detail` property, and the value will be the data that you want to send.

```js
// src/app.js

document.addEventListener("DOMContentLoaded", function(){
  // ...
  const event = new CustomEvent("my-custom-event", { // MODIFIED
    detail: "Hello World!" // NEW
  });
  document.dispatchEvent(event);
});
```

Now we can access the `event.detail` property inside the event listener to access the data.

```js
// src/app.js

document.addEventListener("DOMContentLoaded", function(){
  document.addEventListener("my-custom-event", function(event){
    console.log('event', event);
    console.log('event.detail', event.detail); // NEW
  });
  // ...
});
```

We can add any JavaScript value we want to the event, including arrays and objects.

```js
// src/app.js

document.addEventListener("DOMContentLoaded", function(){
  // ...
  const event = new CustomEvent("my-custom-event", {
    detail: { // MODIFIED
      name: "Caroline",
      age: 38
    }
  });
  document.dispatchEvent(event);
});
```

#### Refactoring Our Application

As we will be creating custom events and adding listeners every time we want to send data between components, we should abstract this functionality away to a `PubSub` helper object. `PubSub` will be responsible for knowing how to create and dispatch events (publishing) and adding listeners (subscribing). This will help keep our code DRY.

`PubSub` will have two functions:

1. `Publish` will take in:
 - a channel name (the custom event name)
 - a payload (the data we want to send as `event.detail`)
2. `Subscribe` will take in:
 - a channel name (the event name that we're listening for)
 - a callback to execute when the event is dispatched

```bash
mkdir src/helpers
touch src/helpers/pub_sub.js
```

Now, let's set up the structure of the `PubSub` object with these two functions as properties.

```js
// src/helpers/pub_sub.js

const PubSub = {
  publish: function(channel, payload){

  },
  subscribe: function(channel, callback){

  }
}

module.exports = PubSub;
```

Our `publish` method will create and dispatch a custom event.

```js
// src/helpers/pub_sub.js

const PubSub = {
  publish: function(channel, payload){
    const event = new CustomEvent(channel, { // NEW
      detail: payload
    });
    document.dispatchEvent(event); // NEW
  },
  // ...
}

module.exports = PubSub;
```

Our `subscribe` method will set up an event listener.

```js
// src/helpers/pub_sub.js

const PubSub = {
  // ...
  subscribe: function(channel, callback){
    document.addEventListener(channel, callback); // NEW
  }
}

module.exports = PubSub;
```

These methods are reusable across our application. Now when we want to publish or subscribe we can use our `PubSub` object.

```js
// src/app.js

const PubSub = require("./helpers/pub_sub.js") // NEW

document.addEventListener("DOMContentLoaded", function(){
  PubSub.subscribe("my-custom-event", function(event){ // MODIFIED
    console.log('event.detail', event.detail);
  });

  PubSub.publish("my-custom-event", { // MODIFIED
    name: "Caroline",
    age: 38
  });
});
```
</details>

<details>
<summary>
Structuring a Pub/Sub Application
</summary>

### Structuring a Pub/Sub Application

Now that we've done all the groundwork, let's take a look at how we might structure an application to take advantage of the pub/sub pattern.

> Instructor note: Hand out modular_frontend_start

We are going to build an application that displays a list of the world's top ten fastest animals in a select. When a user selects an animal, its species and speed will be displayed.

![Screenshot of Top 10 Fastest Animals app](images/10_fastest_animals.png)

The project has two views and one data model, which will use `PubSub` to pass the required data between themselves.

#### Events and Data Flow

![Diagram of Animals Information app using PubSub](images/pubsub_animals_data_flow_diagram.png)

#### `Animals` - src/models/animals.js

The `Animals` model will be responsible for managing the application's animal data.

Responsibilities:

- Loading the animals data
- Publishing the animals data to the rest of the app.
- Listening for the selected animal's index being published by the `SelectView`
- Finding and publishing information about the selected animal to the rest of the app.

In this example, we are using a hard-coded array of animals as our data source. In a real app, this list might come from a database, or a resource somewhere on the web, such as an API (which we will look at this later in the course).

#### `SelectView` - src/views/select_view.js

`SelectView` will be responsible for the section of the UI that displays the select of animal species.

Responsibilities:

- Listening for the animals data being published by the `Animals` model
- Displaying a select of animals
- Publishing the index of the selected animal when a selection is made.

#### `AnimalInfoView` - src/views/animal_info_view.js

`AnimalInfoView` will be responsible for the section of the UI that displays the details of the selected animal.

Responsibilities:

- Listening for the selected animal data published by the `Animals` model
- Displaying information about the selected animal.

#### app.js

If you have a look at the start code, you will see app.js is already set up to do some of the work for us. It is currently accessing DOM elements and creating the two view components. It is also creating a new `Animals` model component. You will see that each of the components also have a `bindEvents` method that is being called. We will see what these are for shortly.

#### Adding Pub/Sub Events

##### 1. Publishing animals data from `Animals`

Firstly, our `Animals` model needs to publish an event to share the animals data with the rest of the app. We will do this in the `bindEvents` method. `bindEvents` will responsible for setting up the initial publishing of and subscribing to events. It is being called in app.js after an `Animals` object is created.

```js
// src/models/animals.js

Animals.prototype.bindEvents = function(){
  PubSub.publish('Animals:all-animals-ready', this.animals); // NEW

};

```

> Note: When defining the event name, we are using the component name, followed by a description of the event: `"Animals:all-animals-ready"`. This will help us to trace the data flow because it makes explicit where the event is being dispatched from.

##### 2. Receiving animals data in `SelectView`

`SelectView` now needs to subscribe to this event. When it receives the data, it will use it to populate the select using the `populate` method. Again we will do this in a `bindEvents` method, which is responsible for setting up the initial publishing of and subscribing to events.

```js
// src/views/select_view.js

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe("Animals:all-animals-ready", (evt) => { // NEW
    const allAnimals = evt.detail;
    this.populate(allAnimals);
  });
}
```

##### 3. Publishing on selected animal index from `SelectView`

When we refresh the browser we can now see the animals in our select menu, but nothing happens when an animal is selected. Let's add an event listener to the select, so that it can publish the index of the selected animal when a user makes a selection.

```js
// src/views/select_view.js

SelectView.prototype.bindEvents = function(){
  this.element.addEventListener("change", (evt) => { // NEW
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
}
```

##### 4. Receiving selected animal index in `Animals`

We have the selected animals's index, but now we need the relevant animal object, so that we can display its details on the page. The animals data is stored in our `Animals` data model. It is going to be the data model that is responsible for finding and publishing the selected animal object to the rest of the application. In order to do this `Animals` needs to subscribe to the `SelectView:change` event to get the selected animal's index.

In `bindEvents` we will subscribe to the `SelectView:change` event to receiving the selected animal's index.

```js
// src/models/animals.js

Animals.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:change', (evt) => { // NEW
    const selectedIndex = evt.detail;
    this.publishAnimalDetail(selectedIndex);
  });
};
```

##### 5. Publishing selected animal object from `Animals`

The model's `publishAnimalDetail` method is responsible for finding the relevant animal object from the data and publishing it out the the rest of the app.

```js
// src/models/animals.js

Animals.prototype.publishAnimalDetail = function(animalIndex){
  const selectedAnimal = this.animals[animalIndex];
  PubSub.publish('Animals:selected-animal-ready', selectedAnimal) // NEW
};
```

##### 6. Receiving animal object in `AnimalInfoView`

Lastly, the `AnimalInfoView` needs to subscribe to the `Animals:selected-animal-ready` event in order to get receive to the animal object. Once `AnimalInfoView` has the animal object, we call the `render` method to display the selected animal's information in the DOM.

```js
// src/views/animal_info_view.js

AnimalInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Animals:selected-animal-ready', (evt) => { // NEW
    const animal = evt.detail;
    this.render(animal);
  });
};
```

Now when we refresh the page and make a selection from the select, we see the animal's details being displaying.

#### Task: (10 minutes)

Look at the entry point to the application (app.js). Make a note of what it does and in what order, and summarise its responsibility.

<details>
<summary>Answer</summary>

1. Accesses the `<select>` element from the DOM
2. Creates a `SelectView` component
3. Calls the `SelectView`'s `bindEvents` method, which:
  - subscribes to the `'Animals:all-animals-ready'` event
  - adds an event listener to the `<select>` element that publishes the selected animal index on `change`
4. Accesses the `<div>` with the id `animal-info`
5. Creates an `AnimalInfoView` component
6. Calls the `AnimalInfoView`'s `bindEvents` method, which:
  - subscribes to the `'Animals:selected-animal-ready'` event
7. Creates an `Animals` component
8. Calls the `Animals`'s `bindEvents` method, which:
  - publishes the animals data
  - subscribes to the `'SelectView:change'` event

app.js is used to create the components and to initialise the custom events and listeners. This is the application's entry point and is responsible for ensuring the application is ready for the user to interact with it.

<br>
</details>

#### Namespaces

When choosing names for your custom events, you should make sure that there is no possibility of a clash with other components.

We have been following the convention: `ComponentName:event-description`. This has the added benefit of making the data flow explicit, because we can see which component the data is coming from when subscribing.

</details>
