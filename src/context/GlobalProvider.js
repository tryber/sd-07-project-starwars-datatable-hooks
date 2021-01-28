// Referência: https://github.com/tryber/sd-07-project-starwars-datatable-hooks/blob/bruno-wesley-project-starwars-datatable-hooks/src/context/Provider.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContext';
import getPlanets from '../services/Api';

function Provider({ children }) {
  const [state, setState] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
  });
  const { name } = filters.filterByName;

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
        changeName: (value) => {
          const newFilterByName = filters.filterByName;
          newFilterByName.name = value;
          updateFilters('filterByName', newFilterByName);
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
