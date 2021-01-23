import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import './index.css';

function Table() {
  const { isFetching, header, data, sortAll, filter } = useContext(
    StarWarsContext,
  );
  const { column, sort } = filter.order;

  if (!data) return null;

  const sortedData = sortAll(column, sort, data);
  const renderLine = (planet) => (
    <tr key={ planet.name }>
      {Object.values(planet).map((value, index) => {
        const indexName = 0;
        if (index === indexName) {
          return (
            <td data-testid="planet-name" key={ value }>
              {value}
            </td>
          );
        }
        return <td key={ value }>{value}</td>;
      })}
    </tr>
  );

  const renderTable = () => {
    if (!header) return null;
    return (
      <div className="div-table">
        <table className="table">
          <thead>
            <tr>
              {header.map((title) => (
                <th key={ title }>{title}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sortedData.map((planetValues) => renderLine(planetValues))}
          </tbody>
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
