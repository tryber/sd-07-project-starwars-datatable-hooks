import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ data: planets }) => {
  const columns = [
    'Name', 'Rotation_Period', 'Orbital_Period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface_Water', 'Population', 'Films', 'Created', 'Edited', 'URL'
    ];

  return (
    <table>
      <thead>
        <tr>
          { headers.map((col, index) => (<th key={ index }>{ col }</th>)) }
        </tr>
      </thead>
      <tbody>
        {
          planets.map((planet, index) => (
            <tr key={ index }>
              {
                headers.map((cat, i) => (
                  <td key={ i }>{ planet[cat.toLocaleLowerCase] }</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

Table.PropTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default Table;
