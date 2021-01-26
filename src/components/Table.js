import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    data,
    isFetching,
    filteredData,
  } = useContext(StarWarsContext);

  if (isFetching) return <p>Loading Data...</p>;
  if (!filteredData.length) {
    return <p>Não foram encontrados resultados correspondentes à sua pesquisa</p>;
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            {
              data && Object.keys(data[0])
                .filter((key) => key !== 'residents')
                .map((keyName) => <th key={ keyName }>{ keyName }</th>)
            }
          </tr>
          {
            filteredData
              .map((planet) => (
                <tr key={ planet.name }>
                  {Object.values(planet).map((value) => (
                    <td key={ value }>
                      { value }
                    </td>
                  ))}
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
