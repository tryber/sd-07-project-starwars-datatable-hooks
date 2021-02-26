import React from 'react';

function CompareFilter() {
  return (
    <>
      <select data-testid="column-filter" name="column">
        <option>ola</option>
      </select>
      <select data-testid="comparison-filter" name="comparison">
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input data-testid="value-filter" name="value" type="number" />
      <button data-testid="button-filter" type="button">
        Filter
      </button>
      <div>
        <div data-testid="filter">
          <button type="button">X</button>
        </div>
      </div>
    </>
  );
}

export default CompareFilter;
