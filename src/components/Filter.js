import React, { useState, useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filter() {
  const {
    handleChange,
    handleNumericValues,
    filterValuesOnClick,
    filterByNumericValues,
  } = useContext(StarWarsContext);

  const [newFilter, setNewFilter] = useState([]);

  const [columnOptions, setColumnsOptions] = useState([
    'population',
    'diameter',
    'orbital_period',
    'rotation_period',
    'surface_water',
  ]);

  const createNewfilter = (column, comparison, value) => {
    return (
      <div
        className="filter-column"
        data-testid="filter"
      >
        <p>Coluna {column}</p>
        <p>Comparção {comparison}</p>
        <p>Valor {value}</p>
        <button>
          X
        </button>
      </div>
    )
  }

  const handleClick = () => {
    if (!columnOptions.length) return;
    const lastIndex = filterByNumericValues.length - 1;
    const { column, comparison, value } = filterByNumericValues[lastIndex];
    const newFilter = createNewfilter(column, comparison, value);

    setColumnsOptions(
      (prevOptions) => prevOptions.filter((option) => option !== column),
    );

    setNewFilter(
      (prevFilters) => ([...prevFilters, newFilter])
    )
  };

  useEffect(() => {
    filterValuesOnClick();
  }, [columnOptions]);

  return (
    <section>
      <label htmlFor="name">
        Filtrar por nome
        <input
          data-testid="name-filter"
          type="text"
          id="name"
          onChange={({ target }) => handleChange(target.value)}
        />
      </label>
      <label htmlFor="column">
        Filtrar por coluna

        <select
          data-testid="column-filter"
          onChange={({ target }) => handleNumericValues(target.name, target.value)}
          name="column"
          id="column"
        >
          {
            columnOptions.map((column, index) => (
              <option key={index}>{column}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="comparison">
        comparacao
        <select
          data-testid="comparison-filter"
          onChange={({ target }) => handleNumericValues(target.name, target.value)}
          name="comparison"
          id="comparison"
        >
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
          onChange={({ target }) => handleNumericValues(target.name, target.value)}
          name="value"
        />
      </label>
      <div>
        <p>Filtros</p>
        {
          newFilter && newFilter.map(filter => filter)
        }
      </div>
      <button
        data-testid="button-filter"
        type="button"
        onClick={handleClick}
      >
        Aplicar filtro
      </button>
    </section>
  );
}
