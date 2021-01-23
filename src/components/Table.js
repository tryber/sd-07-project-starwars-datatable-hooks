import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, filterByName } = useContext(StarWarsContext);

  return (
    <div>
      { !data.length ? <p>Loading...</p>
        : (
          <table>
            <tbody>
              <tr>
                {
                  Object.keys(data[0])
                    .filter((key) => key !== 'residents')
                    .map((keyName) => <th key={ keyName }>{ keyName }</th>)
                }
              </tr>
              {
                data.filter((planet) => planet.name.includes(filterByName))
                  .map((filteredPlanets) => {
                    delete filteredPlanets.residents;
                    return (
                      <tr key={ filteredPlanets.name }>
                        {
                          Object.values(filteredPlanets)
                            .map((value) => <td key={ value }>{ value }</td>)
                        }
                      </tr>
                    );
                  })
              }
            </tbody>
          </table>
        )}
    </div>
  );
}

export default Table;
