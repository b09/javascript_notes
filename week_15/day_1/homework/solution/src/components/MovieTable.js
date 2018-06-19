import React from 'react';
import MovieRow from './MovieRow';

const MovieTable = (props) => {
  const movieNodes = props.movies.map((movie, index) => {
    return (
      <li key={index}>
        <MovieRow movie={movie} key={index}/>
      </li>
    );
  });

  return(
    <div className='movie-table'>
      <ul>
        {movieNodes}
      </ul>
    </div>
  );
};

export default MovieTable;
