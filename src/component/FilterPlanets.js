import React, { useContext, useEffect } from 'react';

import StarWarsContext from '../context/StarWarsContext';

function FilterPlanets() {
  const {
    handleFilterName,
    handleFilter,
    sendFilter,
    columnOptions,
    deletColumnFilter,
    filters: { filterByNumericValues },
  } = useContext(StarWarsContext);

  useEffect(() => {
    deletColumnFilter();
    console.log(filterByNumericValues);
  }, [filterByNumericValues, deletColumnFilter]);

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ handleFilterName }
        name="name"
      />
      <select
        required
        name="column"
        onChange={ handleFilter }
        data-testid="column-filter"
      >
        {/* <option selected disabled value="">{' '}</option> */}
        {Object.keys(columnOptions).map((column) => (
          <option key={ column } value={ column }>{columnOptions[column]}</option>
        ))}
      </select>
      <select
        required
        name="comparison"
        onChange={ handleFilter }
        data-testid="comparison-filter"
      >
        <option selected disabled value="">{'>/=/<'}</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        required
        name="value"
        onChange={ handleFilter }
        data-testid="value-filter"
        type="number"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ sendFilter }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterPlanets;
