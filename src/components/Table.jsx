import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import tableCells from './tableCells';

function Table() {
  const { data } = useContext(GlobalContext);
  return (
    <table className="table">
      <thead>
        <tr>
          {tableCells.getHeaders(data[0])}
        </tr>
      </thead>
      <tbody>
        {tableCells.getRows(data)}
      </tbody>
    </table>
  );
}

export default Table;
