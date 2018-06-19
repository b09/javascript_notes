import React from 'react';
import Square from './Square';

const Grid = ({grid, takeSquare}) => {

  const squares = grid.map(function(symbol, index){
    return (
      <Square 
        key={index} 
        player={symbol} 
        location={index} 
        takeSquare={takeSquare}
      />)
  })

  return(
    <div id="grid">
      {squares}
    </div>
  )

}

export default Grid;