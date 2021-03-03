import _ from 'lodash';
import React, { useContext } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName } = filters;
  const zero = 0;

  const theadTable = () => (
    <tr>
      { !data[0] ? null : Object.keys(data[0])
        .map((key) => <th key={ key }>{ key }</th>)}
    </tr>
  );

  const tbodyTable = () => (
    data.filter((item) => item.name
      .toLowerCase().includes(filterByName.name))
      .map((planet, index) => (
        <tr key={ index }>
          { Object.values(planet)
            .map((value, i) => (
              // <td key={ i }>{ value }</td>
              i === zero
                ? <td key={ i } data-testid="planet-name">{ value }</td>
                : <td key={ i }>{ value }</td>
            ))}
        </tr>))
  );

  return (
    <div>
      <table>
        <thead>
          {theadTable()}
        </thead>
        <tbody>
          {tbodyTable()}
        </tbody>
      </table>
      {/* {console.log(_.sortBy(data, 'orbital_period').reverse()) } */}
      {/* {console.log(data.sort((a, b) => ((Number(a.orbital_period) > Number(b.orbital_period)) ? 1 : -1)).reverse()) } */}
      {/* {console.log(data.sort((a, b) => ((a.name > b.name) ? 1 : -1))) } */}
    </div>
  );
}

export default Table;
