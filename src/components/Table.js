import React, { useState, useContext, useEffect } from 'react';
import Context from '../Context/Context';

const Table = () => {
  const { data } = useContext(Context);
  const [planets, setPlanets] = useState([]);
  const headers = ['climate', 'created', 'diameter',
    'edited', 'films', 'gravity',
    'name', 'orbitalPeriod', 'population',
    'rotationPeriod', 'surfaceWater', 'terrain', 'url'];

  useEffect(() => {
    setPlanets(data);
  }, [data, planets]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => <th key={ header.id }>{header.toUpperCase()}</th>)}
          </tr>
        </thead>
        <tbody>
          {planets.map(({ climate,
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// Object.keys()
