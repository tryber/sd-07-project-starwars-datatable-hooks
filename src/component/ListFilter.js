import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const ListFilter = () => {
  const {
    filters: {
      filterByNumericValues,
    },
  } = useContext(StarWarsContext);
  return (
    <ul>
      {filterByNumericValues.map(({ column, comparison, value }) => (
        <li key={ column } data-testid="filter">
          {`${column} ${comparison} ${value}`}
          <button
            type="button"
            name={ column }
            // onClick={ }
          >
            X
          </button>
        </li>

      ))}
    </ul>
  );
};

export default ListFilter;
