import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

const Table = () => {
  const { data, filter, filterQ } = useContext(StarWarsContext);
  // console.log(Object.entries(filter)[0][1]);
  // console.log(data.filter((e) => (e.name === Object.entries(filter)[0][1])));
  return (
    <div>
      <div>{Object.entries(filter)[0][1]}</div>
      <table border="1px solid black">
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {data.map((planet, key) => {
            let bool = false;
            let boolT = false;
            if (filterQ >= 1) {
              for (let i = 1; i <= filterQ; i += 1) {
                const { column, comparison, value } = Object.entries(filter)[1][1][i];

                if (comparison === 'igual a') {
                  bool = parseInt(planet[column], 10) !== parseInt(value, 10);
                }

                if (comparison === 'maior que') {
                  bool = parseInt(planet[column], 10) <= parseInt(value, 10)
                  || planet[column] === 'unknown';
                }

                if (comparison === 'menor que') {
                  bool = (parseInt(planet[column], 10) >= parseInt(value, 10))
                  || planet[column] === 'unknown';
                }

                console.log(bool);
                console.log(column);
                console.log(comparison);
                console.log(value);
                console.log(Object.entries(filter));

                boolT = boolT || bool;
              }
            }

            if (boolT || !planet.name.includes(Object.entries(filter)[0][1])) return null;
            // !planet.name.includes(Object.entries(filter)[0][1])
            return (
              <tr key={ key }>
                <td>
                  { planet.name }
                </td>
                <td>
                  { planet.rotation_period }
                </td>
                <td>
                  { planet.orbital_period }
                </td>
                <td>
                  { planet.diameter }
                </td>
                <td>
                  { planet.climate }
                </td>
                <td>
                  { planet.gravity }
                </td>
                <td>
                  { planet.terrain }
                </td>
                <td>
                  { planet.surface_water }
                </td>
                <td>
                  { planet.population }
                </td>
                <td>
                  { planet.films }
                </td>
                <td>
                  { planet.created }
                </td>
                <td>
                  { planet.edited }
                </td>
                <td>
                  { planet.url }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
