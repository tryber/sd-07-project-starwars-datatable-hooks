import React, { useContext } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);

  const theadTable = () => (
    <tr>
      { !data[0] ? null : Object.keys(data[0])
        .map((key) => <th key={ key }>{ key }</th>) }
    </tr>
  );

  const tbodyTable = () => (
    data.map((planet, index) => (
      <tr key={ index }>
        { Object.values(planet)
          .map((value, i) => (
            <td key={ i }>
              { value }
            </td>))}
      </tr>))
  );

  return (
    <div>
      <table>
        <thead>
          {theadTable()}
        </thead>
        <tbody>
          { tbodyTable() }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
