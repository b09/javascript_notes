# TDD Lab: Superheroes Top Trumps

**Lab Duration: 120 minutes**

### Learning Objectives

- Be able to write unit tests using Assert in combination with Mocha
- Be able to run test files with Mocha using an npm script

## Introduction

In this lab you will be using the testing framework, Mocha, to design, build and test the game logic for a two-player game of Superheroes Top Trumps. The brief is to build a game of Top Trumps with the following game play:

- All the cards are dealt to the players face down.
- For each turn:
  - Each player looks at the top card.
  - The first player chooses the category that they want to play with (e.g. Intelligence or Strength).
  - The players compare their cards' values for the selected category.
  - The player with the highest value gets the two cards.
- Once one player has all the cards, they have won the game.

## Task

### MVP

Your application should have the following classes:

- Game
- Card
- Player

The game should have two players and be able to deal the cards to the players. A player should be able to play the top card in their hand and select a category that they want to play with. The game should be able to calculate the winner of the turn. If result of the turn is a draw, the player who made the category selection wins.

**Note: Do not implement functionality to shuffle the cards.**

Use the following details for your deck of cards:

```
Name: 'Superman'
Intelligence: 6
Strength: 9
Agility: 7

Name: 'Scarlet Witch'
Intelligence: 7
Strength: 10
Agility: 5

Name: 'Black Widow'
Intelligence: 8
Strength: 6
Agility: 9

Name: 'The Flash'
Intelligence: 7
Strength: 4
Agility: 10

Name: 'Wonder Woman'
Intelligence: 8
Strength: 7
Agility: 5

Name: 'Batman'
Intelligence: 10
Strength: 5
Agility: 6
```

### Extensions

1. At the end of a turn, the winning player should receive the two cards from the turn.
2. Whichever player wins the turn, should choose the category on the next turn.
3. When one of the players has all the cards, they should win the game.

## Considerations

What are the responsibilities of each model?
Which type of assert do you need for each test?

## Plan

To setup your project you will need a models folder with a specs folder inside. You will also need to:

- Initialise npm with `npm init`
- Install mocha as a dev dependency with `npm install -D mocha`
- Update the test script in the package.json to use mocha with `specs models/specs`
