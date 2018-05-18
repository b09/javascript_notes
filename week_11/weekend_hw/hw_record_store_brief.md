# Homework: Record Store & Record Collector

### Learning Objectives

- Be able to create and unit test models
- Be able to pass callback to the built in Array enumeration methods
- Be able to select the appropriate Array enumeration method

## Brief

Your task is to model the interaction between a record store and a record collector to enable them to buy and sell records from one another. You should include a transaction class that is responsible for handling the exchange of records. The store and collector should also have functionality that allows them to search and organise their records.

You have been given the tested Record model. You need to TDD the remaining models using Mocha.

### MVP

A record collector:

- should start with no funds
- should be able to add funds
- should be able to remove funds
- should start with an empty collection of records
- should be able to add a record to it's collection
- should be able to find a record by title
- should be able to remove a record from it's collection
- should be able to buy a record if it has enough funds
- should be able to sell a record if it has the record

A record store:

- should have a name
- should start with no funds
- should be able to add funds
- should start with an empty collection of records
- should be able to add a record to its stock
- should be able to remove a record from its stock
- should be able to sell a record if it has the record

A transaction:

- should have a buyer
- should have a seller
- should be able handle an exchange of a record when the seller has the record and the buyer has enough funds

### Extensions

A record collector:

- should be able to sort its collection by artist name

A record store:

- should be able to find all records which match a given genre
- should be able to find all records which match a given title
- should be able to find all records which match a given artist
- should be able to find all records which match on multiple attributes

Note: For this extension your method should take in a query object and find any record that matches on all of the properties of the query object. For example, if the method is passed the following object:

```js
{ genre: 'Rock' }
```

it would return an array of all the records with the genre 'rock'. And if it is passed the following object:

```js
{ title: 'Thriller', artist: 'Michael Jackson' }
```

it would return an array containing one record: Michael Jackson's, 'Thriller'.

## Considerations

Use the MDN docs to help you use the Array enumeration methods. The key pieces of information you might look for are:

- the return value of the enumeration method. This will help you determine if its the appropriate enumeration method for the task.
- what arguments the enumeration method will pass your callback (and therefore what parameters you need to give your callback).
- what the enumeration method requires your callback to return.

Create helper methods to keep your methods small and readable, and remember to test each of your methods. To do this you will need to write additional tests to the ones listed in the brief.

For more robust testing, test negative test cases, as well as the positive.
