import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  const arrayOfKeys = Object.keys(data[0]);
  return (
    <thead>
      <tr>
        {arrayOfKeys
          .filter((itemToFilter) => itemToFilter !== 'residents')
          .map((item) => (
            <th key={ item }>{item}</th>
          ))}
      </tr>
    </thead>
  );
}

export default Table;
