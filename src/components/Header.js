import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const { planetsData: { results } } = useContext(PlanetsContext);
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
