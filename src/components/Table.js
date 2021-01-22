import React, { useState, useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../css/Table.css';

function Table() {
  const {
    isFetching,
    planets,
    filters,
    filters: { filterByName: { name }, filterByNumericValues },
  } = useContext(StarWarsContext);

  const [filterPlanets, setfilterPlanets] = useState(planets);
  const [keysPlanets, setkeysPlanets] = useState([]);
  
  const keysTable = () => {
    if (!isFetching) {
      // console.log(planets);
      const keys = Object.keys(planets[0]).filter((key) => key !== 'residents');
      setkeysPlanets(keys);
      // console.log(keys);
    }
  }

  useEffect(keysTable, []);

  useEffect(() => {
    let newPlanets = planets.filter((planet) => planet.name.includes(name));
    filterByNumericValues.map(({ comparison, column, value }) => {
      switch (comparison) {
        case 'maior que':
          console.log('entrou');
          return newPlanets = newPlanets.filter((planet) => planet[column] > value );
        case 'menor que':
          return newPlanets = newPlanets.filter((planet) => planet[column] < value );
        case 'igual a':
          return newPlanets = newPlanets.filter((planet) => planet[column] === value );
        default:
          return newPlanets;
      }
    })
    console.log(newPlanets);
    setfilterPlanets(newPlanets);
  }, [filters]);

  return (
    <table>
      <thead>
        <tr>
          {
            keysPlanets.map((titleTable) => <th key={titleTable} >{ titleTable }</th>)
          }
        </tr>
      </thead>
      <tbody>
          {
            filterPlanets.map((rowTable) =>
              <tr key={ rowTable.name } >
                { keysPlanets.map((infoRow) =>
                  <td key={ infoRow } >
                    { rowTable[infoRow].toString() }
                  </td>) }
              </tr>)
          }
      </tbody>
    </table>
  )
}

export default Table;
