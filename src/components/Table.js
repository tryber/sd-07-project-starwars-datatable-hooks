import React, { useContext, useState, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Table() {
  const { nameFilter } = useContext(StarWarsContext);
  const [data, setData] = useState([]);
  const EMPTY = 0;

  useEffect(() => {
    async function fetchPlanets() {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const json = await response.json();
      setData(json.results);
    }
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
          {data.filter((item) => item.name.includes(nameFilter)).map((planet) => (
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
