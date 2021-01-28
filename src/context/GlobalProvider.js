// Referência: https://github.com/tryber/sd-07-project-starwars-datatable-hooks/blob/bruno-wesley-project-starwars-datatable-hooks/src/context/Provider.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import getPlanets from '../services/Api';

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
  });
  const { name } = filters.filterByName;
  const { column, comparison, value: getValue } = filters.filterByNumericValues[0];

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
          const filteredPlanets = [];
          state.forEach((planet) => {
            const number = parseInt(planet[column], 10);
            const value = parseInt(getValue, 10);
            if (comparison === 'maior que') {
              if (number > value) filteredPlanets.push(planet);
            } else if (comparison === 'menor que') {
              if (number < value) filteredPlanets.push(planet);
            } else if (comparison === 'igual a') {
              if (number === value) {
                console.log(`${number} é igual a ${value}`);
                filteredPlanets.push(planet);
              }
            }
          });
          setState(filteredPlanets);
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
