import React from 'react';
import RenderRowsFilter from './RenderRowsFilter';
import './HeaderFilter.css';

function HeaderFilter() {
  return (
    <table>
      <thead>
        <tr className="cabecalho">
          <th>Column</th>
          <th>Comparison</th>
          <th>value</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        <RenderRowsFilter />
      </tbody>
    </table>
  );
}

export default HeaderFilter;
