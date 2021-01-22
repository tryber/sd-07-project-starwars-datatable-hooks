import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const FormFilterNumericValue = () => {
  const {
    numericColumns,
    columnFilter,
    comparisonFilter,
    valueFilter,
    filters: { filterByNumericValues },
    changeFormFilter,
    addFilterByNumericValues,
  } = useContext(StarWarsContext);

  const availableFilters = (columnsObject, filterList) => {
    const newColumnsObject = { ...columnsObject };
    [...filterList].forEach(({ column }) => {
      delete newColumnsObject[column];
    });
    return newColumnsObject;
  };

  return (
    <form>
      <select
        name="columnFilter"
        value={ columnFilter }
        data-testid="column-filter"
        onChange={ (e) => changeFormFilter(e) }
      >
        {/* <option disabled value="">{' '}</option> */}
        { Object.entries(availableFilters(numericColumns, filterByNumericValues))
          .map(([key/* , value */]) => (
            <option key={ key } value={ key }>{key}</option>
          ))}
      </select>
      <select
        name="comparisonFilter"
        value={ comparisonFilter }
        data-testid="comparison-filter"
        onChange={ (e) => changeFormFilter(e) }
      >
        <option disabled value="">{' '}</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>

      </select>
      <input
        type="number"
        name="valueFilter"
        value={ valueFilter }
        data-testid="value-filter"
        onChange={ (e) => changeFormFilter(e) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ addFilterByNumericValues }
      >
        Adicionar Filtro
      </button>
    </form>
  );
};

export default FormFilterNumericValue;
