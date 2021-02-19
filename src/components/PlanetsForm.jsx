import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsForm() {
  const {
    inputFilter,
    setColumn,
    setComparison,
    setValue,
    buttonFilter,
  } = useContext(StarWarsContext);

  return (
    <form>
      <label htmlFor="name-filter">
        Filtrar por nome
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ (event) => inputFilter(event.target.value) }
        />
      </label>
      <label htmlFor="collumn">
        Selecione sua coluna
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
          onChange={ (event) => setColumn(event.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="value-range">
        Faixa de Valor
        <select
          name="value-range"
          id="value-range"
          data-testid="comparison-filter"
          onChange={ (event) => setComparison(event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Valor
        <input
          id="value-filter"
          data-testid="value-filter"
          type="number"
          onChange={ (event) => setValue(event.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => buttonFilter() }
      >
        Filtrar
      </button>
    </form>
  );
}

export default PlanetsForm;
