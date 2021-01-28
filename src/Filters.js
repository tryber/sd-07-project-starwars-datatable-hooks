import React from 'react';
import StarWarsContext from './context/StarWarsContext';

const Filters = () => {
  const {
    filters,
    filters: { filterByName: { name } },
    setFilters,
    setColumn,
    setComparison,
    setValue,
    allFilters,
    options,
    reset,
  } = React.useContext(StarWarsContext);

  const handleChange = ({ value }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  return (
    <div>
      <input
        placeholder="Filtre por nome"
        type="text"
        value={ name }
        data-testid="name-filter"
        onChange={ (e) => handleChange(e.target) }
      />
      <select
        data-testid="column-filter"
        name="column"
        onChange={ (e) => setColumn(e.target.value) }
      >
        {
          options.map((column) => (
            <option
              key={ column }
              value={ `${column}` }
            >
              {column}
            </option>
          ))
        }
      </select>
      <button
        type="button"
        data-testid="filter"
        onClick={ reset }
      >
        X
      </button>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        placeholder="Valor"
        name="value"
        onChange={ (e) => setValue(e.target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ allFilters }
      >
        Filtrar
      </button>
    </div>
  );
};

export default Filters;
