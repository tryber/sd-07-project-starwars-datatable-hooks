import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

const FilterByNumber = ({ removeOption, columnFilter }) => {
  const [column, setColumn] = useState('default');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState();

  const {
    changeFilterByNumber,
  } = useContext(StarWarsContext);

  return (
    <div>
      <span>Pesquisa por números: </span>
      <select
        defaultValue="default"
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option value="default" defaultValue>Selecione</option>
        {columnFilter.map((nameColumn, i) => (
          <option key={ i } value={ nameColumn }>{ nameColumn }</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="">Selecione</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          removeOption(column);
          changeFilterByNumber(column, comparison, value);
        } }
      >
        Filtrar
      </button>
    </div>
  );
};

FilterByNumber.propTypes = {
  removeOption: PropTypes.func.isRequired,
  columnFilter: PropTypes.shape([]).isRequired,
};

export default FilterByNumber;
