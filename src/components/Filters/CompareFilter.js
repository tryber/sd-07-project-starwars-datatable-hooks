import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function CompareFilter() {
  const { filters, setFilters } = useContext(StarWarsContext);
  const zero = 0;
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(zero);

  const handleColumn = ({ target }) => {
    setColumn(target.value);
  };

  const handleComparison = ({ target }) => {
    setComparison(target.value);
  };

  const handleValue = ({ target }) => {
    setValue(target.value);
  };

  useEffect(() => {
    if (filters.availableColumns.length > zero) {
      setColumn(filters.availableColumns[zero]);
    }
  }, [filters.availableColumns]);

  const handleFilter = () => {
    const newAvailableColumns = filters.availableColumns
      .filter((element) => element !== column);

    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
      availableColumns: newAvailableColumns,
    });
  };

  const handleFiltered = (index) => {
    const newAvailableColumns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const newFilterByNumericValues = [...filters.filterByNumericValues];
    newFilterByNumericValues.splice(index, 1);
    newAvailableColumns.splice(newAvailableColumns
      .indexOf(filters.filterByNumericValues.column), 1);

    setFilters({
      ...filters,
      filterByNumericValues: newFilterByNumericValues,
      availableColumns: newAvailableColumns,
    });
  };
  return (
    <>
      <select data-testid="column-filter" name="column" onChange={ handleColumn }>
        {filters.availableColumns.map((availableColumn) => (
          <option value={ availableColumn } key={ availableColumn }>
            {availableColumn}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleComparison }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        data-testid="value-filter"
        name="value"
        type="number"
        value={ value }
        onChange={ handleValue }
      />
      <button data-testid="button-filter" type="button" onClick={ handleFilter }>
        Filter
      </button>

      <div>
        {filters.filterByNumericValues.map((filter, index) => (
          <div key={ index } data-testid="filter">
            {`${filter.column} ${filter.comparison} ${filter.value}`}
            <button type="button" onClick={ () => handleFiltered(index) }>
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CompareFilter;
