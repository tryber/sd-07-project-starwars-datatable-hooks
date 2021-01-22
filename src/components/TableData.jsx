import React, { useContext, useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import StarWarsContext from '../context/StarWarsContext';

function TableData() {
  const { data } = useContext(StarWarsContext);
  const [dataApi, setDataApi] = useState([]);
  const [inputs, setInputs] = useState({
    name: '',
    column: '',
    comparison: '',
    valueFilter: 0,
  });

  useEffect(() => {
    setDataApi(data);
  }, [data]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleClick = () => {
    const indexColumn = inputs.column;

    setDataApi(
      dataApi.filter((element) => {
        switch (inputs.comparison) {
        case 'maior que':
          return parseFloat(element[indexColumn]) > parseFloat(inputs.valueFilter);
        case 'menor que':
          return parseFloat(element[indexColumn]) < parseFloat(inputs.valueFilter);
        case 'igual a':
          return parseFloat(element[indexColumn]) === parseFloat(inputs.valueFilter);
        default:
          return true;
        }
      }),
    );
  };

  // prettier-ignore
  return (
    <div className="test-class">
      <input
        type="text"
        placeholder="Type text to filter by name"
        data-testid="name-filter"
        name="name"
        onChange={ handleChange }
        value={ inputs.name }
      />
      <br />
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
        value={ inputs.column }
      >
        <option>Selecione</option>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
        value={ inputs.comparison }
      >
        <option>Selecione</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="valueFilter"
        onChange={ handleChange }
        value={ inputs.valueFilter }
      />
      <button type="button" data-testid="button-filter" onClick={ handleClick }>
        Filter
      </button>
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
          {dataApi
            .filter(
              (element) => element.name.includes(inputs.name),
            )
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
