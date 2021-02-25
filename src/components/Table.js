import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);

  return (
    <header>
      <h1>{data.results[0].name}</h1>
    </header>
  );
}

export default Table;
