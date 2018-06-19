import React from 'react';

const CountryDetail = (props) => {
  if (!props.country) return null
  return (
    <div>
      <h3>{props.country.name}</h3>
      <p>Capital: {props.country.capital}</p>
      <p>Population: {props.country.population}</p>
    </div>

  )
}

export default CountryDetail;
