// Referência: https://github.com/tryber/sd-07-project-starwars-datatable-hooks/blob/bruno-wesley-project-starwars-datatable-hooks/src/context/Provider.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import getPlanets from '../services/Api';
import handleBtnFilter from '../functions/handleBtnFilter';
import removeOptions from '../functions/removeOptions';

function Provider({ children }) {
  const [state, setState] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
    firstDropdown: [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ],
  });
  const { name } = filters.filterByName;
  const {
    column,
    comparison,
    value: getValue,
  } = filters.filterByNumericValues[0];
  const { firstDropdown } = filters;

  function updateFilters(key, value) {
    setFilters({
      ...filters,
      [key]: value,
    });
  }

  useEffect(() => {
    getPlanets().then((response) => {
      setState(response);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={ {
        firstDropdown,
        data: state,
        name,
        value: getValue,
        comparison,
        column,
        changeName: (value) => {
          const newFilterByName = filters.filterByName;
          newFilterByName.name = value;
          updateFilters('filterByName', newFilterByName);
        },
        changeNumbers: (value, key) => {
          const newNumericFilter = filters.filterByNumericValues;
          newNumericFilter[0][key] = value;
          updateFilters('filterByNumericValues', newNumericFilter);
        },
        filterBtn: () => {
          setState(handleBtnFilter(
            state,
            column,
            getValue,
            comparison,
          ));
          updateFilters(
            'firstDropdown',
            removeOptions(column, firstDropdown),
          );
        },
      } }
    >
      {children}
    </GlobalContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Provider;
