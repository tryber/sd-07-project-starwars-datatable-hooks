import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filters, setFilters, setUseFilter } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const removeFilter = (column) => {
    const newFilterList = filterByNumericValues.filter((item) => column !== item.column);
    setFilters({
      ...filters, filterByNumericValues: newFilterList,
    });
    setUseFilter(false);
  };

  return (
    <StarWarsContext.Consumer>
      {() => (
        <div>
          <h1>Filtros</h1>
          {filterByNumericValues.map((item) => (
            <div
              data-testid="filter"
              key={ item.column }
            >
              { item.column }
              { item.comparison }
              { item.value }
              <button type="button" onClick={ () => removeFilter(item.column) }>X</button>
            </div>))}
        </div>
      )}
    </StarWarsContext.Consumer>
  );
}

export default Filters;
