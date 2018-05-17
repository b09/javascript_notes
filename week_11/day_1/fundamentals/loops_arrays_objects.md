# Loops, Arrays & Objects

## Learning Objectives
- Be able to create, access and modify arrays
- Be able to use common array methods: `pop`, `push`, `shift`, `unshift` and `splice`
- Be able to create, access and modify objects
- Know that object keys are strings, and values can be any type, including other objects
- Be able to write `for` loops
- Know when to use `for...of` and when to use `for...in` loops

## Intro

We often want to store data in collections, or data structures, in order to make the data easier to work with or understand.

Some of the most commonly used collections are:

- arrays, an ordered structure, useful for storing a list of similar information
- a key-value pair structure, for storing different, labeled, pieces of related information

In JavaScript, _all_ objects inherently store their data in a key-value pair structure. So these are simply called objects.

Once we have some data stored in a collection, we are able to iterate through it using a loop. JavaScript has `for` statements, which allow us to create loops, and also supports other styles of [loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Arrays

Arrays are ordered, and accessed with an integer index, the first element in an array being at index 0.

Let's see this in action.

```zsh
touch loops_arrays_objects.js
```

We can create an array with the array literal square bracket notation. (`[]`)

```js
var sports = [];
```

To put data in our array as we create it, we list the values separated by commas. (`,`)

```js
var sports = ['football', 'tennis', 'rugby']; // UPDATED
```

To get the first element we pass the index `0` to the array using square brackets again. We can access the other elements with their respective index numbers.

```js
var firstSport = sports[0];
console.log( sports[0] );
// -> football

var secondSport = sports[1];
console.log( sports[1] );
// -> tennis
```

### Array Methods

We can add a new element to the end of our array with the `push` method.

```js
sports.push('curling');
console.log( sports );

// -> [ 'football', 'tennis', 'curling' ]
```

Let's add a few more.

```js
sports.push('snooker');
sports.push('darts');
console.log( sports );

// -> [ 'football', 'tennis', 'rugby', 'curling', 'snooker', 'darts' ]
```

> Instructor Note: Ask the class...

Let's say we've lost track of how many things we've added to the array. How can we access the last element, without knowing which index it's at?

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

### Iterating Over Arrays

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

## Objects

Javascript's objects store data in key-value pairs. We can create one with the object literal notation, `{}`.

```js
var movie = {};
console.log(movie);
// -> {}
```

Our object is currently empty, it has no key-value pairs in it. We can add key-value pairs to our object literal as we define it. A key separated from its associated value by a colon (`:`), and each key-value pair is separated from the next by a comma (`,`). As _all_ keys are `string`s, we don't need to wrap them in quotes. (`'` / `"`)

```js
var movie = { // UPDATED
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

// -> It's a Wonderful Life
```

Let's add an array of some of the cast to our movie. We can add new properties using the same dot notation. This time assigning _to_ the property rather than _from_ it.

```js
movie.cast = ['James Stewart', 'Donna Reed'];
console.log(movie);

// -> {
// ->   title: 'It\'s a Wonderful Life',
// ->   year: 1946,
// ->   language: 'French',
// ->   cast: ['James Stewart', 'Donna Reed'],
// -> }
```

This looks exactly the same when modifying an existing property. Let's change the language to `'English'`.

```js
movie.language = 'English';
console.log(movie);

// -> {
// ->   title: 'It\'s a Wonderful Life',
// ->   year: 1946,
// ->   language: 'English',
// ->   cast: ['James Stewart', 'Donna Reed'],
// -> }
```

As an alternative to dot notation (`.`) we can use square bracket notation (`[]`). We do this providing a string, the property name,  between square brackets.

```js
movie['language'] = 'French';
console.log(movie);

// -> {
// ->   title: 'It\'s a Wonderful Life',
// ->   year: 1946,
// ->   language: 'French',
// ->   cast: ['James Stewart', 'Donna Reed']
// -> }
```

This is a bit more typing than the dot notation, but is necessary in some cases. Dot notation won't work when using a property name that contains special characters such a hyphens (`-`) or colons (`:`) etc.

```js
movie.subtitle-language = 'German';

// -> ReferenceError: Invalid left-hand side in assignment
```

```js
movie['subtitle-language'] = 'German'; // UPDATED
console.log(movie);

// -> {
// ->   title: 'It\'s a Wonderful Life',
// ->   year: 1946,
// ->   language: 'French',
// ->   cast: ['James Stewart', 'Donna Reed'],
// ->   subtitle-language: 'German',
// ->   ratings: { critic: 94, audience: 95 }
// -> }
```

However, most of the time we'll use camelCase instead of kebab-case. You may need to use the square bracket notation when dealing with JavaScript objects from an outside data source that uses special characters in their property names.

Another use case for square bracket notation is when you need to dynamically access properties using a variable. This allows us to write DRY, reusable code.

```js
var propertyToAccess = 'subtitle-language'; // NEW
movie[propertyToAccess] = 'German'; // UPDATED
console.log(movie);

// -> {
// ->   title: 'It\'s a Wonderful Life',
// ->   year: 1946,
// ->   language: 'French',
// ->   cast: ['James Stewart', 'Donna Reed'],
// ->   subtitle-language: 'German',
// ->   ratings: { critic: 94, audience: 95 }
// -> }
```

### Nested Objects

Our movie object now our `rating`, which we keep modifying, and also a `critic-rating`. We could structure this information better by storing it in another object. We've seen that the values of our object's properties can be strings, numbers, even arrays, and they can be regular JavaScript objects as well.

```js
movie.ratings = {
  critic: 94,
  audience: 95
};
console.log(movie);

// -> {
// ->   title: 'It\'s a Wonderful Life',
// ->   year: 1946,
// ->   language: 'French',
// ->   cast: ['James Stewart', 'Donna Reed'],
// ->   subtitle-language: 'German',
// ->   ratings: { critic: 94, audience: 95 }
// -> }
```

### Iterating Over Objects

As with arrays, a common task with a collection of data if iterating through all the pieces of data within it, one at a time. We can do this with the `for...in` statement. `for...in` gives us each key in the object in turn. We can then use the key to access the value.

```js
for (var key in movie) {
  var value = movie[key];
  console.log(`The ${key} is ${value}`);

  // -> The title is It's a Wonderful life
  // -> The year is 1946
  // -> The language is French
  // -> The cast is James Stewart,Donna Reed
  // -> The subtitle-language is German
  // -> The ratings is [object Object]
}
```

We could also achieve this same functionality with a plain `for` loop. If we had an array of the object's keys, we could iterate through that array. Lucky for us, JavaScript has an `Object.keys` function that does just that.

```js
var keys = Object.keys(movie);

for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  var value = movie[key];
  console.log(`The ${key} is ${value}`);

  // -> The title is It's a Wonderful life
  // -> The year is 1946
  // -> The language is French
  // -> The cast is James Stewart, Donna Reed
  // -> The subtitle-language is German
  // -> The ratings is [object Object]
}
```

### Task: 20 Minutes

1. Make a new file. - array_of_movies.js
2. Copy in the start code below
3. Loop through the array of movies and make each movie's title all capital letters (Hint: [Documentation for String's `toUpperCase` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase))
4. Loop through the array and find the movie with the title Citizen Kane. `console.log` its year of release
5. Loop through them again, using a different type of loop, and `console.log` the movie's `audience` `rating`

Extensions

- Loop through the array, and for each movie object:
  1. Iterate through it's `ratings` object and `console.log` each individual rating
  2. Calculate the average of the ratings, and `console.log` the average

<details>
<summary>Start code / sample data</summary>

```js
var movies = [
  {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    director: 'Frank Capra',
    cast: [
      'James Stewart',
      'Donna Reed'
    ],
    ratings: {
      critic: 94,
      audience: 95
    }
  },
  {
    title: 'Black Panther',
    year: 2018,
    director: 'Ryan Coogler',
    cast: [
      'Chadwick Boseman',
      'Michael B. Jordan'
    ],
    ratings: {
      critic: 97,
      audience: 77
    }
  },
  {
    title: 'Star Wars: The Last Jedi',
    year: 2017,
    director: 'Rian Johnson',
    cast: [
      'Mark Hamill',
      'Carrie Fisher'
    ],
    ratings: {
      critic: 91,
      audience: 48
    }
  },
  {
    title: 'Citizen Kane',
    year: 1941,
    director: 'Orson Welles',
    cast: [
      'Joseph Cotten',
      'Dorothy Comingore'
    ],
    ratings: {
      critic: 100,
      audience: 90
    }
  },
];
```
</details>
</br>

<details>
<summary>Example solution</summary>

```js
// loop through the array of movies and make each movie's title all capital letters 

for (var movie of movies) {
  var title = movie.title;
  var capsTitle = title.toUpperCase();
  movie.title = capsTitle;
}
console.log(movies);

// Loop through the array and find the movie with the title Citizen Kane.

for (movie of movies){
  if ( movie.title.toUpperCase() === 'Citizen Kane'.toUpperCase() ){
    console.log("Year of release for Citizen Kane:", movie.year);
  }
}

// Loop through them again, using a different type of loop, and console.log the movie's audience rating

for (var i = 0; i < movies.length; i++) {
  var movie = movies[i];
  var audienceRating = movie.ratings.audience;
  console.log(audienceRating);
}

// Iterate through it's ratings object and console.log each individual rating

for (var movie of movies) {
  var ratings = movie.ratings;

  for (var ratingType in ratings) {
    var score = ratings[ratingType];
    console.log(ratingType, 'rating is', score);
  }
  
  // Calculate the average of the ratings, and console.log the average
  
  var averageRating = (ratings.audience + ratings.critic) / 2
  console.log('average rating is', averageRating)
}
```
</details>
</br>

## Recap

What do the array methods `pop`, `push`, `shift`, `unshift` and `splice` do?

<details>
<summary>Answer</summary>
* `pop()` - Remove the last item from the end of the array
* `push(newItem)` - Add a new item to the end of the array
* `shift()` - Remove the first item from the start of the array
* `unshift(newItem)` - Add a new item to the start of the array
* `splice(startIndex, numberToRemove)` - Remove item(s) from a given index position in the array
</details>
</br>

What types can objects' keys and values be?

<details>
<summary>Answer</summary>
* keys are always strings
* values can be any type, string, number, array, object etc.
</details>
</br>

When might we want to use the "long form", basic `for` loop? (`for (var i = 0; i < array.length; i++){}`)

<details>
<summary>Answer</summary>
When we want more flexibility and complete control in terms of how the loop runs. For example, to iterate over only every second item by increasing the index counter by 2 each iteration rather than 1:

```js
var array = ['first', 'second', 'third', 'fourth', 'fifth'];

for (var i = 0; i < array.length; i+= 2) {
  var currentItem = array[i];
  console.log(currentItem);

  // -> first
  // -> third
  // -> fifth
}
```

</details>
</br>

Which data structure do we iterate over with `for...of` loops?

<details>
<summary>Answer</summary>
Arrays
</details>
</br>

Which data structure do we iterate over with `for...in` loops?

<details>
<summary>Answer</summary>
Objects
</details>
</br>

## Conclusion

Objects and Arrays help us to organise and work with the data in our applications more efficiently. We can iterate over objects with the for...in loop and arrays with the for...of loop. If we want total control and extra flexibility, we can do all of the looping manually with a for loop. Loops help us avoid repeated code.
