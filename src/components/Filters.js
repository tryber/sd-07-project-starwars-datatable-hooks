import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('>');
  const number = 0;
  const [value, setValue] = useState(number);
  return (
    <section>
      <select
        onChange={ ({ target }) => {
          setColumn(target.value);
        } }
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <div>
        <select
          onChange={ ({ target }) => {
            setComparison(target.value);
          } }
          data-testid="comparison-filter"
        >
          <option value=">">maior que</option>
          <option value="=">igual a</option>
          <option value="<">menor que</option>
        </select>
        <input
          onChange={ ({ target }) => {
            setValue(target.value);
          } }
          data-testid="value-filter"
          type="number"
        />
      </div>
      <button
        onClick={ () => {
          setFilters(
            { ...filters,
              filterByNumericValues: [
                ...filters.filterByNumericValues,
                { column, comparison, value: Number(value) },
              ],
            },
          );
        } }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </section>
  );
}

export default Filters;
