import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsForm() {
  const {
    inputFilter,
    setColumn,
    setComparison,
    setValue,
    buttonFilter,
    filters,
    column,
  } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const columnValues = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
    'MAP FUNCIONA',
  ];

  let columnOptions = [...columnValues];

  const filterColumn = async () => {
    await buttonFilter();
    columnOptions = columnValues.filter((element) => element !== column);
  };

  const zero = 0;
  return (
    <div>
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
            {columnOptions.map((columnValue) => (
              <option key={ columnValue } value={ columnValue }>
                {columnValue}
              </option>
            ))}
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
          onClick={ () => filterColumn() }
        >
          Filtrar
        </button>
      </form>
      {filterByNumericValues.length > zero
        && filterByNumericValues.map((element) => (
          <div key={ element } data-testid="filter">
            <p>{`${element.column}| ${element.comparison} | ${element.value}`}</p>
            <button type="button" onClick={ () => console.log('teste') }>
              X
            </button>
          </div>
        ))}
    </div>
  );
}

export default PlanetsForm;
