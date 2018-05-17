# Homework: Jurassic Park

### Learning Objectives

- Be able to use the fundamental JavaScript language features and data types
- Be able to create an application using multiple interacting objects

## Brief

John Hammond has tasked you with creating an app to help him manage his theme park. He needs to be able to track and manage information about the various dinosaurs in his park and the number of visitors that they will attract.

Use the start point provided, which contains the tested `Dinosaur` model and the uncompleted tests for the MVP `Park` model. (You will need to write your own tests for the extension tasks.)

**Hint:** Remember to remove the `x` from the pending tests (`xit()`) to run them.

### MVP

A dinosaur must have:

- A species
- A diet (e.g. carnivore, herbivore or omnivore)
- An average number of visitors attracted per day

A park must have:

- A name
- A ticket price
- A collection of dinosaurs

A park must be able to:

- Add a dinosaur to its collection of dinosaurs
- Remove a dinosaur from its collection of dinosaurs
- Find all dinosaurs of a particular species
- Remove all dinosaurs of a particular species
- Find the dinosaur that attracts the most visitors

### Extensions

A park must be able to:

- Calculate the total number of visitors per day
- Calculate the total number of visitors per year
- Calculate the total revenue from ticket sales for one year
- Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type  
Example: `{ 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }`

### Considerations

Remember to use the appropriate `assert` method for the data types you are comparing in your tests.
