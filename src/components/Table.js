import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, dataSave } = useContext(StarWarsContext);
  if (!dataSave.length >= 1 || !data.length >= 1) {
    return <div>Loading...</div>;
  }
  const dataHead = Object.keys(dataSave[0]).filter((item) => item !== 'residents');
  // console.log(data);
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
