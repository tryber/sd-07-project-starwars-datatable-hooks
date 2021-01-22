import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  if (data[0]) {
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
                <td key={ element.name }>
                  { element.name }
                </td>
                <td key={ element.rotation_period }>
                  { element.rotation_period }
                </td>
                <td key={ element.orbital_period }>
                  { element.orbital_period }
                </td>
                <td key={ element.diameter }>
                  { element.diameter }
                </td>
                <td key={ element.climate }>
                  { element.climate }
                </td>
                <td key={ element.gravity }>
                  { element.gravity }
                </td>
                <td key={ element.terrain }>
                  { element.terrain }
                </td>
                <td key={ element.surface_water }>
                  { element.surface_water }
                </td>
                <td key={ element.population }>
                  { element.population }
                </td>
                <td key={ element.films }>
                  { element.films }
                </td>
                <td key={ element.created }>
                  { element.created }
                </td>
                <td key={ element.edited }>
                  { element.edited }
                </td>
                <td key={ element.url }>
                  { element.url }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>LOADING....</div>
  );
}

export default Table;
