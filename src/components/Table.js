import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Loading from './Loading';
// import '../styles/Table.css';

function TableHeader() {
  const { data } = useContext(StarWarsContext);
  const zero = 0;
  const tHeader = (fields) => {
    for (let index = zero; index <= fields.length; index += 1) {
      if (fields !== 'residents') {
        return (
          <th
            key={ fields }
            className="column table-header"
          >
            { fields }
          </th>
        );
      }
    }
  };

  const tBody = () => data;

  return (
    <table>
      <thead>
        <tr className="table-fields">
          {
            data.length > zero ? Object.keys(data[0])
              .map(tHeader) : (<Loading />)
          }
        </tr>
      </thead>
      <tbody>
        { data ? tBody().map((planet) => (
          <tr className="table-fields" key={ planet.name }>
            <td className="column">{ planet.name }</td>
            <td className="column">{ planet.rotation_period }</td>
            <td className="column">{ planet.orbital_period }</td>
            <td className="column">{ planet.diameter }</td>
            <td className="column">{ planet.climate }</td>
            <td className="column">{ planet.gravity }</td>
            <td className="column">{ planet.terrain }</td>
            <td className="column">{ planet.surface_water }</td>
            <td className="column">{ planet.population }</td>
            <td className="column column-large">{ planet.films }</td>
            <td className="column column-large">{ planet.created }</td>
            <td className="column column-large">{ planet.edited }</td>
            <td className="column column-large">{ planet.url }</td>
          </tr>
        )) : (<th>Loading...</th>)}
      </tbody>
    </table>
  );
}

export default TableHeader;
