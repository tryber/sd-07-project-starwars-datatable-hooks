import React, { useState, useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

export default function Filter() {
  const {
    removeFilter,
    filterNameOnchange,
    setFilterByNumericValues,
  } = useContext(StarWarsContext);

  const [newFilter, setNewFilter] = useState([]);
  const [filterValues, setFilterValues] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const [columnOptions, setColumnsOptions] = useState([
    'population',
    'diameter',
    'orbital_period',
    'rotation_period',
    'surface_water',
  ]);

  const createNewfilter = (column, comparison, value) => (
    <div
      key={ column }
      className="filter-column"
      data-testid="filter"
    >
      <p>
        Coluna
        {column}
      </p>
      <p>
        Comparção
        {comparison}
      </p>
      <p>
        Valor
        {value}
      </p>
      <button
        onClick={ () => removeFilter(column) }
        type="button"
      >
        X
      </button>
    </div>
  );

  const handleClick = () => {
    if (!columnOptions.length) return;

    const { column, comparison, value } = filterValues;
    const filtered = createNewfilter(column, comparison, value);

    setColumnsOptions(
      (prevOptions) => prevOptions.filter((option) => option !== column),
    );

    setNewFilter(
      (prevFilters) => [...prevFilters, filtered],
    );

    setFilterByNumericValues(
      (prevValues) => [...prevValues, { column, comparison, value }],
    );
  };

  const handleNumericValues = (name, value) => {
    setFilterValues((prevState) => (
      {
        ...prevState,
        [name]: value,
      }
    ));
  };

  return (
    <section>
      <label htmlFor="name">
        Filtrar por nome
        <input
          data-testid="name-filter"
          type="text"
          id="name"
          onChange={ ({ target }) => filterNameOnchange(target.value) }
        />
      </label>
      <label htmlFor="column">
        Filtrar por coluna

        <select
          data-testid="column-filter"
          onChange={ ({ target }) => handleNumericValues(target.name, target.value) }
          name="column"
          id="column"
        >
          <option>chose one column</option>
          {
            columnOptions.map((column, index) => (
              <option key={ index }>{column}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="comparison">
        comparacao
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => handleNumericValues(target.name, target.value) }
          name="comparison"
          id="comparison"
        >
          <option>chose a comparison</option>
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="name">
        valor
        <input
          data-testid="value-filter"
          type="number"
          id="value"
          onChange={ ({ target }) => handleNumericValues(target.name, target.value) }
          name="value"
        />
      </label>
      <div>
        <p>Filtros</p>
        {
          newFilter && newFilter.map((filter) => filter)
        }
      </div>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Aplicar filtro
      </button>
    </section>
  );
}
