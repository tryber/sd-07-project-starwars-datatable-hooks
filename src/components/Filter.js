import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const INITIAL_STATE = {
    column: '',
    comparison: '',
    value: '',
  };

  const [numericFilters, setNumericFilters] = useState(INITIAL_STATE);
  const { column, comparison, value } = numericFilters;
  const {
    filters,
    handleChangeValue,
    handleChangeFilterByNumericValue,
    removeFilterByNumericValues } = useContext(StarWarsContext);

  const activeFilters = filters.filterByNumericValues;
  const filterColumns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const handleChangeNumericFilters = (field, fieldValue) => {
    setNumericFilters({ ...numericFilters, [field]: fieldValue });
  };

  const renderActiveFilters = () => {
    activeFilters.map(({ column, comparison, value }) => (
      <div key={ column } data-testid="filter">
        {`${column} ${comparison} ${value}`}
        <button
          type="button"
          onClick={ () => removeFilterByNumericValues(column) }
        >
          x
        </button>
      </div>
    ));
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ filters.filterByName.name }
        onChange={ (e) => handleChangeValue(e.target.value) }
      />

      <select
        className="input-form"
        data-testid="column-filter"
        value={ column === '' ? 'noSelect' : column }
        onChange={ (e) => handleChangeNumericFilters('column', e.target.value) }
      >
        <option disabled selected value="noSelect">-- Selecione uma opção --</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        className="input-form"
        data-testid="comparison-filter"
        value={ comparison === '' ? 'noSelect' : comparison }
        onChange={ (e) => handleChangeNumericFilters('comparison', e.target.value) }
      >
        <option disabled selected value="noSelect">-- Selecione uma opção --</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>

      <input
        className="input-form"
        data-testid="value-filter"
        placeholder="Informe o valor"
        type="text"
        value={ value }
        onChange={ (e) => handleChangeNumericFilters('value', e.target.value) }
      />

      <button
        className="button-form"
        data-testid="button-filter"
        type="button"
        onClick={ () => handleChangeFilterByNumericValue(numericFilters) }
      >
        Filtrar
      </button>
      <div>
        <h3>Filtros selecionados:</h3>
        {activeFilters && renderActiveFilters()}
      </div>
    </div>
  );
}

export default Filter;
