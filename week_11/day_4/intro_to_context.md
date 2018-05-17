# Introduction to Context and `this`

### Learning Objectives

- Know how using the different function types affects their context

## Introduction

We have used the `this` keyword in constructor functions to assign properties to the instance of the object. We have also used it to access an object's properties inside its methods. In both cases `this` refers to the object and allows us to access its properties and methods from inside itself.

In JavaScript, however, `this` inside a function body doesn't always refer to the object where the function is defined. Sometimes it refers to the object that it is being executed by. This is determined by the function type being used, which means we can choose the context `this` refers to. This makes JavsScript very flexible.

## Function Types and Context

### Arrow Function Expressions

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

### `function` Expressions

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

## Context in Prototype Methods

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

## Context in Callbacks

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

### Why is This Useful?

In this case we would use an arrow function expression to define the callback, but there may be other occasions when we want to make use of the execution context. JavaScript allows us to do either, using the different types of functions.

## Conclusion

In JavaScript, context (accessed by the `this` keyword) refers to an object. Inside a function body, which object it refers to depends on the type of function being used.

This makes JavaScript a highly flexible language, but we need to use the appropriate function type based on the context that we want a function to have.
