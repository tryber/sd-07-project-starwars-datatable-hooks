import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import reducer from './reducer';

function Provider({ children }) {
  const dataInitialState = [];
  const filterInitialState = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  };
  const customFilterInitialState = false;

  const [data, setData] = useState(dataInitialState);
  const [filters, dispatch] = useReducer(reducer, filterInitialState);
  const [customFilter, setCustomFilter] = useState(customFilterInitialState);

  const contextValue = {
    data,
    setData,
    filters,
    dispatch,
    customFilter,
    setCustomFilter,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
