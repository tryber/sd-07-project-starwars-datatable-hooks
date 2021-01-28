import React from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Table() {
  const { data } = React.useContext(StarWarsContext);
  // ser data igual null então não continuar.
  if (data === null) return null;
  // capturar as informações do primeiro objeto do Array
  const dataOneElement = data[0];
  // capturar  a informações do primeiro e tira o campo residents
  const dataHead = Object.keys(dataOneElement).filter((item) => (
    item !== 'residents'));

  return (

    <div>
      <table>
        <thead>
          <tr>
            {/* faz um map do constante dataHead para adcionar cada
            campo separado */}
            {dataHead.map((element) => (
              <th key={ element }>{element}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={ index }>
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
      </table>
    </div>
  );
}

export default Table;
