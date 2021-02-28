import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName, filterByNumericValues } = filters;
  const lastFilter = filterByNumericValues[filterByNumericValues.length - 1];
  const { column, comparison, value } = lastFilter;
  if (!data) {
    return <p>Loading...</p>;
  }

  const filter = data.results.reduce((acc, curr) => {
    const currentValue = Number(curr[column]);
    switch (comparison) {
    case '>':
      if (currentValue >= value || curr[column] === 'unknown') acc.push(curr);
      break;
    case '<':
      if (currentValue <= value || curr[column] === 'unknown') acc.push(curr);
      break;
    default:
      if (currentValue === value || curr[column] === 'unknown') acc.push(curr);
      break;
    }

    return acc;
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Rotation period
          </th>
          <th>
            Orbital period
          </th>
          <th>
            Diameter
          </th>
          <th>
            Climate
          </th>
          <th>
            Gravity
          </th>
          <th>
            Terrain
          </th>
          <th>
            Surface Water
          </th>
          <th>
            Population
          </th>
          <th>
            Films
          </th>
          <th>
            Created
          </th>
          <th>
            Edited
          </th>
          <th>
            URL
          </th>
        </tr>
      </thead>
      <tbody>
        {
          filter.map((planet) => {
            const regex = new RegExp(`${filterByName.name}`, 'i'); // https://qastack.com.br/programming/4029109/javascript-regex-how-to-put-a-variable-inside-a-regular-expression#:~:text=Para%20criar%20uma%20express%C3%A3o%20regular,construtor%20com%20um%20par%C3%A2metro%20string.&text=se%20voc%C3%AA%20estiver%20usando%20literais,%2C%20%C3%A9%20uma%20op%C3%A7%C3%A3o%20...&text=Voc%C3%AA%20sempre%20pode%20dar%20express%C3%A3o,%2B%20testVar%20%2B%20%22ReGeX%22%20
            if (planet.name.match(regex)) {
              return (
                <tr key={ planet.name }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films.toString()}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
              );
            }

            return null;
          })
        }
      </tbody>
    </table>
  );
}

export default Table;
