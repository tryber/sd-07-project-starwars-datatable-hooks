import React, { useContext, useEffect, useState } from 'react';

import { StarWarsContext } from '../context/Provider';

export default function ValuesFilter() {
  const {
    usedFilters,
    updateValueFilters,
    removeFilter,
    filters,
  } = useContext(StarWarsContext);
  const [chosenFilters, setChosenFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const comparisons = ['maior que', 'menor que', 'igual a'];
  const columns = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const updateChosenColumn = () => {
    const newColumn = columns
      .filter((column) => {
        if (usedFilters.includes(column)) return false;
        return true;
      })[0];
    setChosenFilters({ ...chosenFilters, column: newColumn });
  };

  useEffect(() => {
    updateChosenColumn();
  }, [usedFilters]);

  return (
    <div>
      <section>
        filtros ativos:
        {filters.filterByNumericValues.map((filter, index) => (
          <div data-testid="filter" key={ index }>
            <span>
              { `${filter.column} ` }
            </span>
            <span>
              { `${filter.comparison} ` }
            </span>
            <span>
              { `${filter.value} ` }
            </span>
            <button
              type="button"
              onClick={ () => {
                removeFilter(filter.column);
              } }
            >
              x
            </button>
          </div>
        ))}
      </section>
      <select
        data-testid="column-filter"
        onChange={
          ({ target }) => setChosenFilters({ ...chosenFilters, column: target.value })
        }
      >
        {columns.map((column) => {
          if (usedFilters.includes(column)) return null;
          return (
            <option key={ column } value={ column }>{ column }</option>
          );
        })}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={
          ({ target }) => setChosenFilters({ ...chosenFilters, comparison: target.value })
        }
      >
        {comparisons.map((comparison) => (
          <option
            key={ comparison }
            value={ comparison }
          >
            { comparison }
          </option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={
          ({ target }) => setChosenFilters({ ...chosenFilters, value: target.value })
        }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          updateValueFilters(chosenFilters);
        } }
      >
        Filtrar
      </button>
    </div>
  );
}
