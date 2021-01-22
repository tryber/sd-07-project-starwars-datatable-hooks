import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { apiResults } = useContext(StarWarsContext);
  const [filterWord, setFilterWord] = useState({
    filters: {
      filterByName: { name: '' },
    },
  });

  const handleInputChange = ({ target }) => {
    const word = target.value;
    setFilterWord({
      filters: {
        filterByName: { name: word },
      },
    });
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        onChange={ (target) => handleInputChange(target) }
      />
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
            .filter((item) => item.name.includes(filterWord.filters.filterByName.name))
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
