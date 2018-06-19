import React from 'react';
import Grid from '../components/Grid';
import GameStatus from '../components/GameStatus';
import WIN_LINES from '../helpers/winLines';
import Button from '../components/Button'

class TicTacToe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: Array(9).fill(null),
      currentPlayer: "X",
      winner: null
    };

    this.takeSquare = this.takeSquare.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  takeSquare(location) {
    if (this.isEmptySquare(location) && !this.isGameOver()) {
      const newGrid = this.state.grid.slice();
      newGrid[location] = this.state.currentPlayer;
      // setState is async, we need to check for a winner only when we are certain
      // the state has been updated. We can give setState a 2nd argument -
      // a callback that will be called only after the state has been updated
      this.setState({ grid: newGrid }, this.checkForWinner);
    }
  }

  isEmptySquare(squareIndex){
    return !this.state.grid[squareIndex];
  }

  isGameOver(){
    return this.state.winner !== null;
  }

  checkForWinner() {
    let winner = null;

    WIN_LINES.forEach((winLine) => {
      if (winLine.every(squareNo => this.state.grid[squareNo] === this.state.currentPlayer)) {
        winner = this.state.currentPlayer;
      }
    })

    if (!winner && this.gridComplete()) {
      winner = "DRAW";
    }

    winner ? this.setState({winner: winner}) : this.nextTurn()
  }

  newGame() {
    this.setState({
      grid: Array(9).fill(null),
      currentPlayer: "X",
      winner: null
    })
  }

  gridComplete() {
    return !this.state.grid.includes(null);
  }

  nextTurn() {
    if (this.state.currentPlayer === "X") {
      this.setState({ currentPlayer: "O" })
    } else {
      this.setState({ currentPlayer: "X" })
    }
  }

  render() {
    return (
      <div>
        <Grid
          grid={this.state.grid}
          takeSquare={this.takeSquare}
        />
        <GameStatus
          winner={this.state.winner}
        />
        <Button 
          isVisible={this.state.winner} 
          callback={this.newGame} 
          text='Play Again'
          className='play-again-button'
        />
      </div>
    )
  }
}

export default TicTacToe;