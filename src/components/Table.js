import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  const zero = 0;
  return (
    <div>
      { data.length === zero ? <p>Loading...</p>
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
                data.map((planet) => {
                  delete planet.residents;
                  return (
                    <tr key={ planet.name }>
                      { Object.values(planet)
                        .map((value) => <td key={ value }>{ value }</td>) }
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
