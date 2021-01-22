import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import './index.css';

function Table() {
  const { isFetching, header, data } = useContext(StarWarsContext);

  const renderLine = (planet) => {
    delete planet.residents;
    return (
      <tr key={ planet.name }>
        {Object.values(planet).map((value) => (
          <td key={ value }>{value}</td>
        ))}
      </tr>
    );
  };

  const renderTable = () => {
    if (!header) return null;
    const headerNames = header.filter((title) => title !== 'residents');
    return (
      <div className="div-table">
        <table className="table">
          <thead>
            <tr>
              {headerNames.map((title) => (
                <th key={ title }>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>{data.map((planetValues) => renderLine(planetValues))}</tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {isFetching && <h2>Loading</h2>}
      {!isFetching && renderTable()}
    </div>
  );
}

export default Table;
