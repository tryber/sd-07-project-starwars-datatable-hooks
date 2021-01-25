import React from 'react';
import MyContext from '../context/MyContext';

class Table extends React.Component {
  constructor() {
    super();

    this.getCells = this.getCells.bind(this);
    this.getRows = this.getRows.bind(this);
    this.getHeaders = this.getHeaders.bind(this);
  }

  getCells(cells) {
    const listOfCells = [];
    cells.forEach((cell, index) => {
      listOfCells.push(
        <th key={ `cell-${index}` }>
          {cell}
        </th>,
      );
    });
    return listOfCells;
  }

  getRows(value) {
    const planets = Object
      .entries(value)
      .map((each) => each[1]);
    const headers = [];

    planets.forEach((planet, index) => {
      headers.push(
        <tr key={ `row-${index}` }>
          {this.getCells(Object.values(planet))}
        </tr>,
      );
    });
    return headers;
  }

  getHeaders(value) {
    const planets = Object
      .entries(value)
      .map((each) => each[1]);
    const headers = [];

    planets.forEach((planet, index) => {
      const listOfPlanets = Object.keys(planet);
      headers.push(
        <th key={ `header-${index}` }>
          { listOfPlanets[index] }
        </th>,
      );
    });
    return headers;
  }

  render() {
    return (
      <MyContext.Consumer>
        {(value) => (
          <table className="table">
            <thead>
              <tr>
                {this.getHeaders(value)}
              </tr>
            </thead>
            <tbody>
              {this.getRows(value)}
            </tbody>
          </table>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Table;
