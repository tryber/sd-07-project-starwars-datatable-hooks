import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    planets,
  } = useContext(StarWarsContext);
  
  const zero = 0;
  if (planets.length === zero) return (<h1>Carregando...</h1>)

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(planets[0]).map((item) => (
              <th key={ item }>{ item }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={ planet }>
              { Object.values(planet).map((data) => (
                <td key={ data }>
                  { data }
                </td>
              )) }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
