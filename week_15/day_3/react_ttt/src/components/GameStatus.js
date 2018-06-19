import React from 'react';

const GameStatus = ({winner}) => {

  if (!winner) return null;

  return (
    <h1>
      {winner === "DRAW" ? "It's a draw!" : `${winner} wins!`}
    </h1>
  )

}

export default GameStatus;