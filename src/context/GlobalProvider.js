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
            // eslint-disable-next-line radix
            const number = parseInt(planet[column]);
            if (comparison === 'maior que') {
              if (number > getValue) {
                filteredPlanets.push(planet);
                console.log(`${number} é maior que ${getValue}`);
              } else {
                console.log(`${number} é menor que ${getValue}`);
              }
            } else if (comparison === 'menor que') {
              if (number < getValue) filteredPlanets.push(planet);
            } else if (comparison === 'igual a') {
              if (number === getValue) filteredPlanets.push(planet);
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
