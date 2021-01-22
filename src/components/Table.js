import React, { useState, useContext, useEffect } from 'react';
import Context from '../Context/Context';

const Table = () => {
  const { data, filters } = useContext(Context);
  const [planets, setPlanets] = useState([]);
  const [input, setInput] = useState('');
  const headers = ['climate', 'created', 'diameter',
    'edited', 'films', 'gravity',
    'name', 'orbitalPeriod', 'population',
    'rotationPeriod', 'surfaceWater', 'terrain', 'url'];

  useEffect(() => {
    setPlanets(data);
  }, [data, planets]);

  const filterText = () => {
    const { name } = filters.filterByName;
    console.log(filters);
    return planets.filter(
      (planet) => planet.name.toUpperCase().includes(name.toUpperCase()),
    );
  };

  const handleChangeInput = ({ target }) => {
    filters.filterByName.name = target.value;
    setInput(target.value);
  };

  const mapPlanets = (parameters) => parameters.map(({ climate,
    created,
    diameter,
    edited,
    films,
    gravity,
    name,
    orbital_period: orbitalPeriod,
    population,
    rotation_period: rotationPeriod,
    surface_water: surfaceWater,
    terrain,
    url,
  }) => (
    <tr key={ name }>
      <td>{ climate }</td>
      <td>{ created }</td>
      <td>{ diameter }</td>
      <td>{ edited }</td>
      <td>
        {films.map((filme) => (
          <p key={ filme }>{ filme }</p>
        ))}
      </td>
      <td>{ gravity }</td>
      <td>{ name }</td>
      <td>{ orbitalPeriod }</td>
      <td>{ population }</td>
      <td>{ rotationPeriod }</td>
      <td>{ surfaceWater }</td>
      <td>{ terrain }</td>
      <td>{ url }</td>
    </tr>
  ));

  return (
    <div>
      <input
        data-testid="name-filter"
        onChange={
          (target) => handleChangeInput(target)
        }
      />
      <table>
        <thead>
          <tr>
            {headers.map((header) => <th key={ header.id }>{header.toUpperCase()}</th>)}
          </tr>
        </thead>
        <tbody>
          {input !== '' ? mapPlanets(filterText()) : mapPlanets(planets)}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// Object.keys()
