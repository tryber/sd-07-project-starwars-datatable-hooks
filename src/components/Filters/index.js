import React from 'react';

function Filters() {
  return (
    <div>
      <label htmlFor="search-name">
        Pesquise o nome de um planeta:
        <input type="text" name="search-name" />
      </label>
    </div>
  );
}

export default Filters;
