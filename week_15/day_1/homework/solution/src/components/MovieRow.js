import React from 'react';

const MovieRow = (props) => {
  return (
    <div className='movie-row'>
      <a href={props.movie.url}>{props.movie.name}</a>
    </div>
  );
};

export default MovieRow;
