import React, { useContext } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { filterName } = filters;

  const theadTable = () => (
    <tr>
      { !data[0] ? null : Object.keys(data[0])
        .map((key) => <th key={ key }>{ key }</th>) }
    </tr>
  );

  const tbodyTable = () => (
    !filterName
      ? data.map((planet, index) => (
        <tr key={ index }>
          { Object.values(planet)
            .map((value, i) => (
              <td key={ i }>
                { value }
              </td>))}
        </tr>))
      : data.filter((item) => item.name.toLowerCase()
        .includes(filterName))
        .map((planet, index) => (
          <tr key={ index }>
            { Object
              .values(planet)
              .map((value, i) => (
                <td key={ i }>
                  { value }
                </td>
              ))}
          </tr>
        ))
  );

  return (
    <div>
      <table>
        <thead>
          {theadTable(data)}
        </thead>
        <tbody>
          { tbodyTable() }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
