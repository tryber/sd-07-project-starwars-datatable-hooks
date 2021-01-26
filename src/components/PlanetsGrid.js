import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function PlanetsGrid() {
  const {
    planetsData: { results = [] },
    filter: { filters: { filterByName: { name } } },
  } = useContext(PlanetsContext);

  return (
    <tbody>
      {results.map((planet, index) => {
        if (planet.name.toLowerCase().includes(name.toLowerCase())) {
          return (
            <tr key={ `row+${index}` }>
              {Object.entries(planet).map((object, index2) => {
                if (object[0] !== 'residents') {
                  return (
                    <td key={ `${index}${index2}` }>
                      {object[1]}
                    </td>
                  );
                }
                return null;
              })}
            </tr>);
        }
        return null;
      })}
    </tbody>
  );
}

export default PlanetsGrid;
