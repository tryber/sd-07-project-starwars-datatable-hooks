import React from 'react';
import MyContext from '../context/MyContext';
import tableCells from './tableCells';

class Table extends React.Component {
  constructor() {
    super();
    this.getCells = this.getCells.bind(this);
    this.getRows = this.getRows.bind(this);
  }

  getCells(cells) {
    const listOfCells = [];
    cells.forEach((cell, index) => {
      listOfCells.push(
        <td key={ `cell-${index}` }>
          {cell}
        </td>,
      );
    });
    return listOfCells;
  }

  getRows(value) {
    const planets = Object
      .entries(value)
      .map((each) => each[1]);
    const listOfRows = [];

    planets.forEach((planet, index) => {
      listOfRows.push(
        <tr key={ `row-${index}` }>
          {this.getCells(Object.values(planet))}
        </tr>,
      );
    });
    return listOfRows;
  }

  render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          const { data } = value;
          return (
            <table className="table">
              <thead>
                <tr>
                  {tableCells.getHeaders(data[0])}
                </tr>
              </thead>
              <tbody>
                {this.getRows(data)}
              </tbody>
            </table>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Table;
