import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data, isFetching, nameFiltered, numberFiltered } = useContext(StarWarsContext);
  if (isFetching) return <div>Loading...</div>;

  return (
    <table>
      <thead>
        <tr>
          {data && Object.keys(data[0])
            .map((key) => <th key={ key }>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          nameFiltered.map((planet, index) => (
            <tr key={ index }>
              {Object.values(planet).map((value, i) => (<td key={ i }>{value}</td>))}
            </tr>
          ))

        }

        {
          numberFiltered.map((planet, index) => (
            <tr key={ index }>
              {Object.values(planet).map((value, i) => (<td key={ i }>{value}</td>))}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
