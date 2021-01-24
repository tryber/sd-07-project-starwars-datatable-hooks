import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import './Filters.css';

function Filters() {
  const { filters: { filterByNumericValues:
     objectFilter },
  deleteFilter } = useContext(StarWarsContext);
  return (
    <div className="filters-container">
      <div>
        {objectFilter.map((item) => (
          <p data-testid="filter" key={ item.column }>
            {`${item.column} ${item.comparison} ${item.value}`}
            <button
              className="delete-button"
              type="button"
              onClick={ () => deleteFilter(item.column, item.comparison) }
            >
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Filters;
