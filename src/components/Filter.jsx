import React, { useContext, useState, useEffect } from 'react';
import { StarWarsContext } from '../context';
import { useColumnsKeys } from '../hooks';

const initialRemoveColumnList = [
  'created',
  'edited', 'url', 'films', 'residents', 'name', 'climate', 'gravity', 'terrain',
];

const initialFilter = { column: '', comparison: '', value: '' };

export default function Filter() {
  const {
    dispatchFilter, FILTER_COLUMN, filters: { filterByNumericValues },
  } = useContext(StarWarsContext);
  const [newFilters, setNewFilters] = useState(initialFilter);
  const [removeItemColumn, removeItem] = useState(initialRemoveColumnList);

  const setFilter = ({ target: { id, value } }) => {
    setNewFilters({ ...newFilters, [id]: value });
  };

  const setListToRemove = () => {
    removeItem([
      ...initialRemoveColumnList,
      ...filterByNumericValues
        .map(({ column }) => column),
    ]);
  };

  useEffect(setListToRemove, [dispatchFilter]);

  const columns = useColumnsKeys(removeItemColumn);

  return (
    <div>
      <select id="column" data-testid="column-filter" onChange={ setFilter }>
        <option>Column</option>
        {columns && columns.map((column, i) => (<option key={ i }>{column}</option>))}
      </select>
      <select id="comparison" data-testid="comparison-filter" onChange={ setFilter }>
        <option>Comparison</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input id="value" data-testid="value-filter" type="number" onChange={ setFilter } />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => dispatchFilter(
          { type: FILTER_COLUMN, payload: newFilters },
        ) }
      >
        Filtre
      </button>
    </div>
  );
}
