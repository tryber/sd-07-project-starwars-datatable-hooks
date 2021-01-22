import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../css/Table.css';

function Table() {
  const { planets, isFetching, keysPlanets, setkeysPlanets } = useContext(StarWarsContext);
  
  const keysTable = () => {
    if (!isFetching) {
      console.log(planets);
      const keys = Object.keys(planets[0]).filter((key) => key !== 'residents');
      setkeysPlanets(keys);
      // console.log(keys);
    }
  }

  useEffect(keysTable, []);

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
            planets.map((rowTable) => 
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
