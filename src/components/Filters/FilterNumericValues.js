import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function FilterNumericValues() {
  const {
    filter,
    handleChangeSelect,
    handleActiveFilter,
    handleDeleteFilter,
    currentId,
    columnsAvalible,
    comparisonsAvalible,
  } = useContext(StarWarsContext);
  const { filterNumericValues } = filter;
  const { column, comparison, value } = filterNumericValues[currentId];

  return (
    <div data-testid="filter">
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ (e) => handleChangeSelect(e, currentId) }
      >
        {columnsAvalible[currentId].map((option) => (
          <option key={ option } value={ option }>{option}</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ (e) => handleChangeSelect(e, currentId) }
      >
        {comparisonsAvalible[currentId].map((option) => (
          <option key={ option } value={ option }>{option}</option>
        ))}
      </select>

      <label htmlFor="value">
        Valor:
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          value={ value }
          onChange={ (e) => handleChangeSelect(e, currentId) }
        />
      </label>

      <button type="button" onClick={ () => handleDeleteFilter(currentId) }>
        X
      </button>

      <button
        type="button"
        onClick={ () => handleActiveFilter(currentId) }
        data-testid="button-filter"
      >
        Filter
      </button>
    </div>
  );
}

export default FilterNumericValues;
