import React, { useContext } from 'react';
import StartWarsContext from '../context/StarWarsContext';

export default function SearchBar() {
  const { handleChanges } = useContext(StartWarsContext);

  const dropdownFilterColumn = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const dropdownRangeValue = ['maior que', 'menor que', 'igual a'];

  return (
    <div>
      <input
        type="search"
        name="searchBar"
        data-testid="name-filter"
        placeholder="Search a planet by name"
        onChange={ handleChanges }
      />

      <select data-testid="column-filter">
        <option>Filter by column</option>
        {
          dropdownFilterColumn.map((key) => (
            <option key={ key }>{key}</option>
          ))
        }
      </select>

      <select data-testid="comparison-filter">
        <option>Filter by range value</option>
        {
          dropdownRangeValue.map((key) => (
            <option key={ key }>{key}</option>
          ))
        }
      </select>

      <input
        type="number"
        data-testid="value-filter"
        placeholder="Search by value"
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        Submit
      </button>
    </div>
  );
}
