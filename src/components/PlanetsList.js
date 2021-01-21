import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const PlanetsList = () => {
  const { planets } = useContext(StarWarsContext);
  return (
    <table>
      { planets.map((item) => (
        <tr key={ item.name }>
          <td>{ item.name }</td>
          <td>{ item.population }</td>
        </tr>)) }
    </table>
  );
};

export default PlanetsList;
