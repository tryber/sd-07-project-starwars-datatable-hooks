import React, { useContext, useState } from 'react';
import { Table } from 'reactstrap';
import StarWarsContext from '../context/StarWarsContext';

function TableData() {
  const { data } = useContext(StarWarsContext);
  const [input, setInput] = useState({
    filters: {
      filterByName: { name: '' },
    },
  });

  const handleChange = ({ target }) => {
    const { value } = target;
    setInput({
      filters: {
        filterByName: { name: value },
      },
    });
  };

  // prettier-ignore
  return (
    <div className="test-class">
      <input
        type="text"
        placeholder="Type text to filter"
        data-testid="name-filter"
        onChange={ handleChange }
        value={ input.filters.filterByName.name }
      />
      <Table striped>
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
        </thead>
        <tbody>
          {data
            .filter((element) => element.name.includes(input.filters.filterByName.name))
            .map((element) => (
              <tr key={ element.name }>
                <td>{element.name}</td>
                <td>{element.rotation_period}</td>
                <td>{element.orbital_period}</td>
                <td>{element.diameter}</td>
                <td>{element.climate}</td>
                <td>{element.gravity}</td>
                <td>{element.terrain}</td>
                <td>{element.surface_water}</td>
                <td>{element.population}</td>
                <td>{element.films}</td>
                <td>{element.created}</td>
                <td>{element.edited}</td>
                <td>{element.url}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableData;
