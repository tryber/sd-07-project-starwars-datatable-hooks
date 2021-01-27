import React from 'react';
import MyContext from '../context/MyContext';
import tableCells from './tableCells';

class Table extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {(value) => {
          const { data } = value;
          return (
            <table className="table">
              <tbody>
                {tableCells.getRows(data)}
              </tbody>
              <thead>
                <tr>
                  {tableCells.getHeaders(data[0])}
                </tr>
              </thead>
            </table>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Table;
