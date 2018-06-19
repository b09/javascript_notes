import React from 'react';

const Square = ({player, takeSquare, location}) => {

  const handleClick = () => {
    takeSquare(location);
  }

  return (
    <div className='square' onClick={handleClick}>{player}</div>
  )

}

export default Square;