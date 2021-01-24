import React from 'react';
import getPlanet from './PlanetAPI';

class Table extends React.Component {
  render() {
    getPlanet();
    return (
      <div>
        <div>Table</div>
      </div>
    );
  }
}

export default Table;
