import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Filters() {
  const { filters: { filterByNumericValues:
     objectFilter },
  deleteFilter } = useContext(StarWarsContext);
  return (
    <div>
      {objectFilter.map((item) => (
        <p data-testid="filter" key={ item.column }>
          { item.column }
          { item.comparison }
          { item.value }
          <button
            type="button"
            onClick={ () => deleteFilter(item.column, item.comparision) }
          >
            X
          </button>
        </p>
      ))}
    </div>
  );
}

export default Filters;
