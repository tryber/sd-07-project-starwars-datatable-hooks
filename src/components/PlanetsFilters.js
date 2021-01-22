import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsFilters() {
  const {
    handleFilterByName,
    handleInputColumn,
    handleInputComparison,
    handleInputValue,
    filterDataButton,
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);

  const optionsColumn = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const ONE = 1;
  // let newOptionsColumn = [];

  // if (filterByNumericValues.length > ONE) {
  //   newOptionsColumn = optionsColumn
  //     .filter((option) => (option !== filterByNumericValues[0].column));
  // }
  console.log(filterByNumericValues);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleFilterByName }
        placeholder="Filter by Name"
      />
      <select
        data-testid="column-filter"
        onChange={ handleInputColumn }
      >
        { filterByNumericValues.length >= ONE
          ? optionsColumn
            .filter((option) => (option !== filterByNumericValues[0].column))
            .map((option) => (
              <option key={ option } value={ option }>{ option }</option>))
          : optionsColumn.map((option) => (
            <option key={ option } value={ option }>{ option }</option>))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleInputComparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        placeholder="value"
        data-testid="value-filter"
        onChange={ handleInputValue }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterDataButton }
      >
        Filter
      </button>
    </div>
  );
}

export default PlanetsFilters;
