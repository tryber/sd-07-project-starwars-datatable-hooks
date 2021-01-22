import React, { useContext, useState, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function Table() {
  const { filters } = useContext(StarWarsContext);
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
  const {filterByNumericValues , filterByName} = filters;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {filteredHeader.map((item) => <th key={ item }>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.filter((item) => item.name.includes(filterByName.name)).map((planet) => {
            let controlVar = EMPTY;
            filterByNumericValues.forEach((filter) => {
              const {column, comparison, value} = filter;
              if (
                comparison === 'maior que' && Number(planet[column]) > Number(value)
              ) {
                controlVar += 1;
              } else if (
                comparison === 'menor que' && Number(planet[column]) < Number(value)
              ) {
                controlVar += 1;
              } else if (
                comparison === 'igual a' && Number(planet[column]) === Number(value)
              ) {
                controlVar += 1;
              }
            });
            if (
              (planet.population === '	unknown') || !(controlVar === filterByNumericValues.length)
            ) return null;
          return (
            <tr key={ planet.name }>
              {filteredHeader.map((key, index) => (
                <td key={ `key-${index}` }>{planet[key]}</td>
              ))}
            </tr>            
          );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
