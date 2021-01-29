import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filters() {
  const { filters, setFilters, form, setForm, handleClick } = useContext(StarWarsContext);

  const handleInput = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const numberInput = ({ target: { value } }) => {
    setForm({ ...form, value });
  };

  const columSelect = ({ target: { value } }) => {
    setForm({ ...form, column: value });
  };

  const handleComparisonSelect = ({ target: { value } }) => {
    setForm({ ...form, comparison: value });
  };
  /*
  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, {
        column: form.column,
        comparison: form.comparison,
        value: form.value,
      }],
    });
    setNumberClicks(numberClicks + 1);
  };
  */
  return (
    <div>
      Filtros
      <input
        type="text"
        placeholder="Name"
        data-testid="name-filter"
        onChange={ handleInput }
      />
      <select
        onChange={ columSelect }
        data-testid="column-filter"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        onChange={ handleComparisonSelect }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        key="value"
        type="number"
        placeholder="0"
        data-testid="value-filter"
        onChange={ numberInput }
      />
      <button
        onClick={ () => handleClick() }
        type="button"
        data-testid="button-filter"
      >
        Aplicar Filtros
      </button>
    </div>
  );
}

export default Filters;
