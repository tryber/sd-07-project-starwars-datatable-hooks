import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Header() {
  const { planetsData: { results } } = useContext(StarWarsContext);
  let tableHeader = [];

  if (results !== undefined) {
    tableHeader = Object.keys(results[0]);
  }

  return (
    <thead>
      <tr>
        {tableHeader
          .map((header, index) => {
            if (header !== 'residents') return <th key={ `header${index}` }>{header}</th>;
            return null;
          })}
      </tr>
    </thead>
  );
}

export default Header;
