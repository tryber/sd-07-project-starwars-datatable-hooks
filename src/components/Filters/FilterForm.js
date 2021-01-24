import React, { useContext, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import { planetInfos, planetWeight } from './SelectOptions';
import FilterSelected from './FilterSelected';

function FiltersForm() {
  const {
    filters,
    results,
    setFilters,
    filteredName,
    setFilteredName } = useContext(StarWarsContext);

  // solução desenvolvida a partir do plantão de dúvidas;
  const [filterSet, setFilterSet] = useState({ column: '', comparison: '', value: '' });
  const filterSetChange = (event) => {
    setFilterSet({
      ...filterSet,
      [event.target.id]: event.target.value,
    });
  };

  const clickButton = () => {
    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, filterSet],
    });
    setFilterSet({
      column: '',
      comparison: '',
      value: '',
    });
  };

  const [orderFilterSet, setOrderFilterSet] = useState({ column: 'name', sort: 'ASC' });
  const orderChange = (event) => {
    setOrderFilterSet({
      ...orderFilterSet,
      [event.target.id]: event.target.value,
    });
  };

  const clickToOrder = () => {
    setFilters({ ...filters,
      order: orderFilterSet,
    });
    setFilterSet({
      column: '',
      comparison: '',
      value: '',
    });
  };

  const selectColumn = planetInfos
    .filter((column) => !filters.filterByNumericValues
      .some((item) => item.column === column));

  return (
    <form>
      <div>
        <div>
          <input
            data-testid="name-filter"
            type="text"
            value={ filteredName }
            onChange={ ({ target }) => setFilteredName(target.value) }
            placeholder="Nome"
          />
        </div>

        <div>
          <select
            id="column"
            data-testid="column-filter"
            value={ filterSet.column }
            onChange={ filterSetChange }
          >
            <option>Filtrar coluna</option>
            {selectColumn.map((item) => (<option key={ item }>{item}</option>))}
          </select>
        </div>

        <div>
          <select
            id="comparison"
            data-testid="comparison-filter"
            value={ filterSet.comparison }
            onChange={ filterSetChange }
          >
            <option>Escolha opção</option>
            {planetWeight.map((item) => (<option key={ item }>{item}</option>))}
          </select>
        </div>

        <div>
          <input
            id="value"
            data-testid="value-filter"
            type="number"
            value={ filterSet.value }
            onChange={ filterSetChange }
            placeholder="número"
          />
        </div>

        <div>
          <button
            type="button"
            data-testid="button-filter"
            onClick={ clickButton }
          >
            Filtrar
          </button>
        </div>

        <div>
          <select
            data-testid="column-sort"
            id="column"
            onChange={ orderChange }
          >
            <option>Ordenar por:</option>
            {Object.keys(results[0]).map((header, index) => (
              <option key={ index }>{header}</option>))}
          </select>
        </div>

        <div>
          <label htmlFor="asc">
            <input
              id="sort"
              data-testid="column-sort-input-asc"
              type="radio"
              value="ASC"
              name="order"
              onChange={ orderChange }
            />
            Crescente
          </label>

          <label htmlFor="dec">
            <input
              id="sort"
              data-testid="column-sort-input-desc"
              type="radio"
              value="DESC"
              name="order"
              onChange={ orderChange }
            />
            Decrescente
          </label>
        </div>

        <div>
          <button
            type="button"
            data-testid="column-sort-button"
            onClick={ clickToOrder }
          >
            Ordenar
          </button>
        </div>
      </div>

      <FilterSelected />
    </form>
  );
}

export default FiltersForm;
