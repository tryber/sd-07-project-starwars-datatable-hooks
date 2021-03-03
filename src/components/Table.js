import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ data: planets }) => {
  const columns = Object.keys(planets[0]).filter((key) => key !== 'residents');

  return (
    <table>
      <thead>
        <tr>
          { columns.map((col, index) => (<th key={ index }>{ col }</th>)) }
        </tr>
      </thead>
      <tbody>
        {
          planets.map((planet, index) => (
            <tr key={ index }>
              {
                columns.map((key, i) => (<td key={ i }>{ planet[key] }</td>))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Table;
