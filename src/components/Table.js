import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { apiResults } = useContext(StarWarsContext);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: { name: '' },
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  const handleNameInputChange = ({ target }) => {
    const word = target.value;
    setFilters({
      ...filters,
      filterByName: { name: word },
    });
  };

  const handleFilter = ({ target: { value, name } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: { [name]: [value] },
    });
  };

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparisons = ['maior que', 'menor que', 'igual a'];

  return (
    <div>
      <input
        data-testid="name-filter"
        onChange={ (target) => handleNameInputChange(target) }
      />
      <select
        data-testid="column-filter"
        name="column"
        onChange={ (target) => handleFilter(target) }
      >
        { columns.map((column) => (
          <option key={ column } value={ column }>
            {column}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ (target) => handleFilter(target) }
      >
        {
          comparisons.map((opt) => (
            <option key={ opt } value={ opt }>
              { opt }
            </option>
          ))
        }
      </select>
      <input
        data-testid="value-filter"
        name="value"
        type="number"
        value={ filters.filterByNumericValues.value }
        onChange={ (target) => handleFilter(target) }
      />
      <button
        type="button"
        data-testid='button-filter'
      >
        Filtrar
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate Period</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
          {apiResults
            .filter((item) => item.name.includes(filters.filters.filterByName.name))
            .map((item) => (
              <tr key={ item.name }>
                <td>{item.name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.surface_water}</td>
                <td>{item.population}</td>
                <td>{item.films}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
              </tr>
            ))}
        </thead>
      </table>
    </div>
  );
}

export default Table;
