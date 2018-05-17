# JavaScript Fundamentals


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

# Functions
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

# Loops, Arrays & Objects

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

# Variable Scope


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

# Constructor Functions & Prototype Objects
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


# Test-Driven Development Using Assert and Mocha

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

Now we're ready to start writing some basic tests.


Now that we have access to the `assert` module, we can use any of the methods that come with it. We can use the `equal()` method to check if two values are the same, just like you might have done when unit testing in other languages.

```js
assert.equal(true, true);
```

We can then run our tests in the same way that we would run any other .js file.

```sh
node play.js
```

Notice that we don't get any feedback at all. Node will only tell us if our tests are failing. Let's break our test and see what happens.

```js
assert.equal(true, false);
```

```sh
node play.js

# -> AssertionError [ERR_ASSERTION]: true == false
```

>Note: Assert will only show us one failing test at a time. Comment out any failing tests before moving on

This is better than nothing but it isn't very descriptive or expressive.

Another potential issue that we could encounter when using  `equal()` is that, as we can see from the above AssertionError, it uses JavaScript's abstract equality operator (`==`).

If the two parameters are of different types then JavaScript will first try to find a common type for them before determining whether or not they are equal.

The following test will convert the string `'1'` to a numerical value before performing a strict comparison on them, deciding that they are equal and passing.

```js
assert.equal(1, '1');
```

Just like using the abstract equality operator (`==`) elsewhere in our code this can lead to unexpected behaviours, such as the following test passing.

```js
assert.equal([], ![]);
```

We should be as specific as possible when testing therefore avoid using `equal()`.

#### `assert.strictEqual()`

Assert gives us another method, `strictEqual()`, which uses JavaScripts strict equality operator (`===`). As a general rule of thumb we should use that instead of `equal()` so that we can be certain that our tests are passing or failing for the right reasons.

The following test will fail.

```js
assert.strictEqual(1, '1');
```

```sh
node play.js

# -> AssertionError [ERR_ASSERTION]: 1 === '1'
```

The two values are not strictly the same so this is typically the desired behaviour of our tests.

There is one more thing that we need to know when writing our assertions with Assert: when comparing objects using `equal()` or `strictEqual()` JavaScript will check if they are the same object.

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

Assert gives us another set of methods; `deepEqual()`  and `deepStrictEqual()`. These methods look at the values contained within the object and use those to determine if the objects are equal, rather than checking if the object are the same object.

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


Now that we've seen how some of the methods that we can get from Assert work, let's create a model, employing TDD, and look at how we can use Mocha to better organise and run our tests.

Before we do, it's worth mentioning that Mocha supports a number of different syntaxes. The type we're going to use is _Behaviour Driven Development_, or BDD.

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


# Callback Functions & Enumeration
<details>

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
</details>
