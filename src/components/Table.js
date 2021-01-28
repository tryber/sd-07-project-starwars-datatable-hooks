import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  if (!data.length >= 1) {
    return null;
  }
  const dataOneElemnet = data[0];
  const dataHead = Object.keys(dataOneElemnet).filter((item) => item !== 'residents');
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {dataHead.map((element) => (
              <th key={ element }>
                { element }
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={ index }>
              <td>{ element.name }</td>
              <td>{ element.rotation_period }</td>
              <td>{ element.orbital_period }</td>
              <td>{ element.diameter }</td>
              <td>{ element.climate }</td>
              <td>{ element.gravity }</td>
              <td>{ element.terrain }</td>
              <td>{ element.surface_water }</td>
              <td>{ element.population }</td>
              <td>{ element.films }</td>
              <td>{ element.created }</td>
              <td>{ element.edited }</td>
              <td>{ element.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
