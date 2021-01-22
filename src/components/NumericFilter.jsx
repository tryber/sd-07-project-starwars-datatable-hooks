import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from '../context/SWContext';

function NumericFilter(props) {
  const context = useContext(SWContext);
  const [column, setColumn] = useState();
  const [comparison, setComparison] = useState();
  const [value, setValue] = useState();
  const btnClick = () => {
    context.setNumericFilter({ column, comparison, value });
  };
  const { columnOptions } = props;
  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
        value={ column }
      >
        <SWContext.Consumer>
          {({ filters }) => {
            let options = columnOptions;
            const zero = 0;
            if (filters.filterByNumericValues.length > zero) {
              const picked = filters.filterByNumericValues.map((filter) => filter.column);
              picked.forEach((pick) => {
                options = options.filter((opt) => opt !== pick);
              });
            }
            return options.map((option) => <option key={ option }>{option}</option>);
          }}
        </SWContext.Consumer>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
        value={ comparison }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        onChange={ ({ target }) => setValue(target.value) }
        data-testid="value-filter"
        value={ value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => btnClick() }
      >
        Adicionar
      </button>
    </div>
  );
}
NumericFilter.propTypes = {
  columnOptions: PropTypes.arrayOf(String).isRequired,
};

export default NumericFilter;
