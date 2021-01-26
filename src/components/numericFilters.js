import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumericFilter() {
  const { filters,
    handleFilterByNumericValues,
    handleInputFilterByNumericValues,
    handleButton,
    handleButtonTwo,
    options,
  } = useContext(StarWarsContext);
  const { column, comparison, value } = filters.filterByNumericValues[0];

  return (
    <div>
      <div>
        <label htmlFor="column_filter">
          Filtro de colunas
          <select
            id="column_filter"
            data-testid="column-filter"
            value={ column }
            onChange={ (e) => handleFilterByNumericValues('column', e.target.value) }
          >
            {/* <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option> */}
            {options.map((item) => (
              <option key={ item } value={ item }>{ item }</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="comparison_filter">
          Filtro de comparação
          <select
            id="comparison_filter"
            data-testid="comparison-filter"
            value={ comparison }
            onChange={ (e) => handleFilterByNumericValues('comparison', e.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="value_filter">
          Filtro de valores
          <input
            type="number"
            id="value_filter"
            data-testid="value-filter"
            placeholder="digite um número"
            onChange={ handleInputFilterByNumericValues }
            value={ value }
          />
        </label>
      </div>
      <div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleButton }
        >
          Filtrar
        </button>
      </div>
      <div data-testid="filter">
        <button
          type="button"
          data-testid="filter"
          onClick={ handleButtonTwo }
        >
          X
        </button>
      </div>
    </div>
  );
}
export default NumericFilter;
