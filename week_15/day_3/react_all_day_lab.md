# React Lab

Practice what we've learned in the past few days by making a small React app. 

Containers will handle data requests, state changes and callbacks. Components will handle visualisation logic (and only have access to props). These could even be a kind of thing that has no state, is basically a function, and definitely a component...are you thinking what I'm thinking??

Might be worth drawing out your components first...

# Option 1 - TicTacToe

Build this classic game from your childhood, using React and ES6.

- TicTacToe (aka Noughts and Crosses)

For those whose first language is not English :)

https://en.wikipedia.org/wiki/Tic-tac-toe

- We're thinking pass-and-play here, no need to bring in networking.

- Or, choose another game if TicTacToe sounds too simple (it isn't, make TicTacToe! It is **not** trivial). Plus we have a solution for TicTacToe, so that could be handy :)

A word of caution - it can be tempting to write and test all your logic before thinking about React. And though this is a good instinct - it can really trip you up. This is because in React we have to be very careful about how we mutate (change) state. You could write and test some kind of winChecker...but more than this could cause you some pain. Game logic is always tricky, so we recommend starting with rendering a fixed "dummy" game state, focussing on designing your Component hierarchy and writing your React components, before thinking about game logic.

- Bonus tip - how a game looks and how we represent it's state in the simplest way may not be exactly the same. We can control the look of something with CSS...

- If you get really stuck there's an official React tutorial to build TicTacToe here - https://reactjs.org/tutorial/tutorial.html

# Option 2 - API option

Choose an API, get some data, make all the things. Maybe use an API you are already familiar with, the goal here is to practice React.





