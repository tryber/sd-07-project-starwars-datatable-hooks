import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetList() {
  const {
    planetsData: { results = [] },
  } = useContext(StarWarsContext);

  return (
    <table>
      <tbody>
        {results.map((planet, index) => (
          <tr key={ `row+${index}` }>
            {Object.entries(planet).map((key, value) => {
              if (key[0] !== 'residents') {
                return (
                  <td
                    key={ `${index}${value}` }
                    data-testid={ `planet-${key[0]}` }
                  >
                    { key[1]}
                  </td>
                );
              }
              return null;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlanetList;
