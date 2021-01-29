import React, { useContext, useState, useEffect } from 'react';
import StartWarsContext from '../context/StarWarsContext';

export default function SearchBar() {
  const { selectFilter,
    filterName,
    filters,
    filterPlanetsProvider } = useContext(StartWarsContext);
  const isNull = 0;

  const [name, setName] = useState('');
  const [comparison, setComparison] = useState('');
  const [column, setColumn] = useState('');
  const [value, setValue] = useState(isNull);

  const dropdownFilterColumn = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const dropdownRangeValue = ['maior que', 'menor que', 'igual a'];

  useEffect(() => {
    filterPlanetsProvider();
  }, [filterPlanetsProvider, filters]);

  const handleChanges = ({ target }) => {
    setName(target.value);
    filterName(target.value);
  };

  return (
    <div>
      <input
        type="search"
        name="searchBar"
        value={ name }
        data-testid="name-filter"
        placeholder="Search a planet by name"
        onChange={ handleChanges }
      />

      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option>Filter by column</option>
        {
          dropdownFilterColumn.map((key) => (
            <option
              value={ key }
              key={ key }
            >
              {key}
            </option>
          ))
        }
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option>Filter by range value</option>
        {
          dropdownRangeValue.map((key) => (
            <option
              key={ key }
              value={ key }
            >
              {key}
            </option>
          ))
        }
      </select>

      <input
        type="number"
        data-testid="value-filter"
        placeholder="Search by value"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => selectFilter(column, comparison, value) }
      >
        Submit
      </button>
    </div>
  );
}
