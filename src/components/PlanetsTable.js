import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsTable() {
  const {
    isFetching,
    data,
    fetchApiData,
  } = useContext(StarWarsContext);

  useEffect(() => {
    if (!data.length) fetchApiData();
  });

  return (
    <div>
      { (isFetching) && 'Loading...' }
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          { data.map((planet) => (
            <tr key={ planet.name }>
              { Object.entries(planet).filter((entry) => entry[0] !== 'residents')
                .map((entry) => <td key={ entry[0] }>{entry[1]}</td>) }
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default PlanetsTable;
