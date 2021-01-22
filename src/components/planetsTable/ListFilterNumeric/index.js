import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const ListFilterNumeric = () => {
  const {
    filters: {
      filterByNumericValues,
    },
    deleteFilterByNumericValues,
  } = useContext(StarWarsContext);
  return (
    <ul>
      {filterByNumericValues.map(({ column, comparison, value }) => (
        <li key={ column } data-testid="filter">
          {`${column} ${comparison} ${value}`}
          <button
            type="button"
            name={ column }
            onClick={ (e) => deleteFilterByNumericValues(e.target.name) }
          >
            X
          </button>
        </li>

      ))}
    </ul>
  );
};

export default ListFilterNumeric;
