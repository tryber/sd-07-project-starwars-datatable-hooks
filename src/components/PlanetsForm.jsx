import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsForm() {
  const [columnValues] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [orderColumn, setOrderColumn] = useState('name');
  const [orderSort, setOrderSort] = useState('ASC');
  const {
    inputFilter,
    setColumn,
    setComparison,
    setValue,
    buttonFilter,
    filters,
    setFilters,
    keysFiltered,
  } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const filterColumn = () => {
    buttonFilter();
  };

  const deleteFilter = (deletedColumn) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.filter(
        ({ column }) => column !== deletedColumn,
      ),
    });
  };

  const orderFilter = () => {
    setFilters({
      ...filters,
      order: { column: orderColumn, sort: orderSort },
    });
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
            {columnValues
              .filter(
                (col) => !filterByNumericValues.some(
                  (filterObj) => col === filterObj.column,
                ),
              )
              .map((columnValue) => (
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
        <label htmlFor="collumn">
          Ordernar por coluna
          <select
            name="column-sort"
            id="column-sort"
            data-testid="column-sort"
            onChange={ (event) => setOrderColumn(event.target.value) }
          >
            {keysFiltered.map((columnValue) => (
              <option key={ columnValue } value={ columnValue }>
                {columnValue}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="radio-asc">
          ASC
          <input
            name="order"
            type="radio"
            id="radio-asc"
            checked={ orderSort === 'ASC' }
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ (event) => setOrderSort(event.target.value) }
          />
        </label>
        <label htmlFor="radio-dsc">
          DSC
          <input
            name="order"
            type="radio"
            id="radio-dsc"
            checked={ orderSort === 'DESC' }
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ (event) => setOrderSort(event.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => orderFilter() }
        >
          Ordernar
        </button>
      </form>
      {filterByNumericValues.length > zero
        && filterByNumericValues.map((element) => (
          <div key={ element } data-testid="filter">
            <p>{`${element.column}| ${element.comparison} | ${element.value}`}</p>
            <button type="button" onClick={ () => deleteFilter(element.column) }>
              X
            </button>
          </div>
        ))}
    </div>
  );
}

export default PlanetsForm;
