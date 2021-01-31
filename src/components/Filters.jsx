import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const [column, setInput] = useState({});
  const [comparison, setComparison] = useState({});
  const [value, setValue] = useState({});

  const {
    setFilter,
    filters: {
      filterByNumericValues,
      filterByName,
    },
    data,
  } = useContext(StarWarsContext);

  let columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  let portionScaleForNumbers = ['maior que', 'menor que', 'igual a'];

  const handleTypingNameInput = ({ target }) => {
    const objToSave = {
      filterByName: { name: target.value },
      filterByNumericValues: [...filterByNumericValues],
    };
    setFilter(objToSave);
  };

  const handleClick = () => {
    const objToSave = {
      filterByName,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    };
    columnOptions = [
      columnOptions
        .filter((option) => option !== column),
    ];
    portionScaleForNumbers = [
      portionScaleForNumbers
        .filter((option) => option !== comparison),
    ];
    setFilter(objToSave);
  };

  const removeFilter = (index) => {
    const objToSave = {
      filterByName,
      filterByNumericValues: [
        ...filterByNumericValues
          .filter((filter) => filter !== filterByNumericValues[index]),
      ],
    };
    setFilter(objToSave);
  };

  return (
    <div>
      <input
        name="name"
        data-testid="name-filter"
        onChange={ handleTypingNameInput }
        type="text"
      />
      <select
        name="column"
        data-testid="column-filter"
        onChange={ (e) => setInput(e.target.value) }
      >
        {columnOptions
          .map((option) => (
            <option
              key={ option }
              value={ option }
            >
              {option}
            </option>
          ))}
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        {portionScaleForNumbers
          .map((option) => <option key={ option } value={ option }>{option}</option>)}
      </select>
      <input
        type="number"
        name="value"
        id=""
        data-testid="value-filter"
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleClick() }
      >
        Adicionar filtro
      </button>
      {filterByNumericValues.map((filter, index) => (
        <div data-testid="filter" key={ filter.column }>
          <span>
            {filter.column}
            {' '}
            {filter.comparison}
            {' '}
            {filter.value}
          </span>
          <button
            type="button"
            onClick={ () => removeFilter(index) }
          >
            x
          </button>
        </div>
      ))}
      <select
        data-testid="column-sort"
        name="sort-column"
      >
        {data.results
          ? Object.keys(data.results[0])
            .filter((columnOption) => columnOption !== 'residents')
            .map((columnOption) => (
              <option
                key={ columnOption }
              >
                {columnOption}
              </option>
            ))
          : 'loading'}
      </select>
    </div>
  );
};

export default Filters;
