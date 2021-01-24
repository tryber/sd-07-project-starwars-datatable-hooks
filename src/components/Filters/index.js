import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

export default function Filters() {
  const {
    handleChange,
    handleNumericFilter,
    handleFilterButton,
    numericFilter,
  } = useContext(StarWarsContext); // Defining wich resources from the Provider I`m using in this component

  const [optionsColumn, setOptionsColumn] = useState([
    'population',
    'diameter',
    'orbital_period',
    'rotation_period',
    'surface_water',
  ]);

  const handleClick = () => {
    if (!optionsColumn.length) return;
    const lastIndex = numericFilter.length - 1;
    const { column } = numericFilter[lastIndex];

    setOptionsColumn(
      (prevOptions) => prevOptions.filter((option) => option !== column),
    );
  };

  useEffect(() => {
    handleFilterButton();
  }, [optionsColumn]);

  return (
    <section>
      <label htmlFor="name">
        Filter by name
        <input
          data-testid="name-filter"
          type="text"
          id="name"
          onChange={ ({ target }) => handleChange(target.value) }
        />
      </label>
      <label htmlFor="column">
        Filter by:
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => handleNumericFilter(target.name, target.value) }
          name="column"
          id="column"
        >
          {
            optionsColumn.map((column, index) => (
              <option key={ index }>{column}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="comparation">
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => handleNumericFilter(target.name, target.value) }
          name="comparation"
          id="comparation"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="name">
        <input
          data-testid="value-filter"
          type="number"
          id="value"
          onChange={ ({ target }) => handleNumericFilter(target.name, target.value) }
          name="value"
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Add filter
      </button>
    </section>
  );
}
