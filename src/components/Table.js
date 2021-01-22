import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Table() {
  const { data, fetchPlanets } = useContext(StarWarsContext);
  const EMPTY = 0;

  useEffect(() => {
    fetchPlanets();
  }, []);

  if (data.length === EMPTY) {
    return (
      <p>Loading...</p>
    );
  }
  const header = Object.keys(data[EMPTY]);
  const filteredHeader = header.filter((key) => key !== 'residents');
  return (
    <div>
      <table>
        <thead>
          <tr>
            {filteredHeader.map((item) => <th key={ item }>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => (
            <tr key={ planet.name }>
              {filteredHeader.map((key, index) => (
                <td key={ `key-${index}` }>{planet[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
