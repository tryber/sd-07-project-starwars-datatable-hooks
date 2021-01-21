import React from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Table() {
  return (
    <StarWarsContext.Consumer>
      {() => (
        <table>
        <thead>
          <tr>
            <td>HEAD</td>
            <td>HEAD</td>
            <td>HEAD</td>
            <td>HEAD</td>
            <td>HEAD</td>
            <td>HEAD</td>
            <td>HEAD</td>
            <td>HEAD</td>
            <td>HEAD</td>
            <td>HEAD</td>
            <td>HEAD</td>
            <td>HEAD</td>
            <td>HEAD</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CELL</td>
            <td>CELL</td>
            <td>CELL</td>
            <td>CELL</td>
            <td>CELL</td>
            <td>CELL</td>
            <td>CELL</td>
            <td>CELL</td>
            <td>CELL</td>
            <td>CELL</td>
            <td>CELL</td>
            <td>CELL</td>
            <td>CELL</td>
          </tr>
        </tbody>
      </table>)}
    </StarWarsContext.Consumer>
  );
}

export default Table;
