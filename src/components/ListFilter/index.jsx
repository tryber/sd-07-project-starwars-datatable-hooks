import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const ListFilter = () => {
  const {
    state: {
      filters: { filterByNumericValues: numericFilter },
    },
  } = useContext(StarWarsContext);

  const { dispatch } = useContext(StarWarsContext);

  const removeFilter = (column) => {
    dispatch({ type: 'REMOVE_NUM_FILTER', column });
  };

  return (
    <div>
      {numericFilter.map((filterElem) => (
        <div key={ filterElem.column } data-testid="filter">
          <p>
            <strong>{filterElem.column}</strong>
          </p>
          <p>{filterElem.comparison}</p>
          <p>{filterElem.value}</p>
          <button type="button" onClick={ () => removeFilter(filterElem.column) }>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListFilter;
